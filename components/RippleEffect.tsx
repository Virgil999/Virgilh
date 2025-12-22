import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

interface LightPulse {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  life: number; // 0 to 1
}

export interface RippleEffectHandle {
  pulse: () => void;
}

export const RippleEffect = forwardRef<RippleEffectHandle>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const noiseCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const pulses = useRef<LightPulse[]>([]);

  // Expose the trigger method to parent components
  useImperativeHandle(ref, () => ({
    pulse: () => {
      createPulse();
    }
  }));

  const createPulse = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const centerX = canvas.width / 2;
    const centerY = canvas.height * 0.35; 
    
    pulses.current.push({
      x: centerX,
      y: centerY,
      radius: 0,
      maxRadius: Math.max(canvas.width, canvas.height) * 1.5,
      opacity: 0.5,
      life: 0
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Create Offscreen Noise Texture
    const createNoise = () => {
      const noiseSize = 256;
      const nCanvas = document.createElement('canvas');
      nCanvas.width = noiseSize;
      nCanvas.height = noiseSize;
      const nCtx = nCanvas.getContext('2d')!;
      const nData = nCtx.createImageData(noiseSize, noiseSize);
      
      for (let i = 0; i < nData.data.length; i += 4) {
        const val = Math.random() * 255;
        nData.data[i] = val;
        nData.data[i + 1] = val;
        nData.data[i + 2] = val;
        nData.data[i + 3] = 25; 
      }
      nCtx.putImageData(nData, 0, 0);
      noiseCanvasRef.current = nCanvas;
    };

    if (!noiseCanvasRef.current) createNoise();

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pulses.current = pulses.current.filter((pulse) => {
        // We slightly speed up life to ensure the pulse clears 
        // before the next one starts at 1.5s
        pulse.life += 0.0075; 
        
        const easeOut = 1 - Math.pow(1 - pulse.life, 3);
        pulse.radius = pulse.maxRadius * easeOut;
        
        let currentOpacity = 0;
        if (pulse.life < 0.1) {
          currentOpacity = (pulse.life / 0.1) * pulse.opacity;
        } else {
          currentOpacity = (1 - (pulse.life - 0.1) / 0.9) * pulse.opacity;
        }

        if (pulse.life >= 1) return false;

        ctx.save();
        const gradient = ctx.createRadialGradient(
          pulse.x, pulse.y, 0,
          pulse.x, pulse.y, pulse.radius
        );

        gradient.addColorStop(0, `rgba(244, 224, 77, ${currentOpacity * 0.5})`); 
        gradient.addColorStop(0.2, `rgba(237, 237, 218, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(9, 5, 23, 0)');

        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
        ctx.fill();

        if (noiseCanvasRef.current) {
          ctx.globalCompositeOperation = 'overlay';
          const pattern = ctx.createPattern(noiseCanvasRef.current, 'repeat');
          if (pattern) {
            const matrix = new DOMMatrix();
            const noiseShift = (time * 0.05) % 256;
            pattern.setTransform(matrix.translate(noiseShift, noiseShift).rotate(time * 0.01));
            
            ctx.fillStyle = pattern;
            ctx.globalAlpha = currentOpacity * 0.7;
            ctx.beginPath();
            ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1.0;
          }
        }
        ctx.restore();

        return true;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-75"
      style={{ filter: 'blur(35px)' }}
    />
  );
});

RippleEffect.displayName = 'RippleEffect';