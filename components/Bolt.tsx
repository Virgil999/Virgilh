import React, { useEffect, useRef } from 'react';

interface Vertex {
  x: number;
  y: number;
  z: number;
}

export const Bolt: React.FC<{ className?: string }> = ({ className }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // 1. DEFINE PROFILE
    const profile = [
      { x: -15, y: -50 }, // Top Left
      { x:  30, y: -50 }, // Top Right
      { x:   5, y:   0 }, // Inner Cut Right
      { x:  35, y:   0 }, // Outer Shoulder Right
      { x:  -5, y:  60 }, // Bottom Tip
      { x:  -5, y:  15 }, // Inner Cut Left
      { x: -35, y:  15 }  // Outer Shoulder Left
    ];

    const depth = 15; 

    // 2. GENERATE VERTICES
    const vertices: Vertex[] = [];
    // Front Face
    profile.forEach(p => vertices.push({ x: p.x, y: p.y, z: depth }));
    // Back Face
    profile.forEach(p => vertices.push({ x: p.x, y: p.y, z: -depth }));

    // 3. GENERATE FACES
    const faces: number[][] = [];
    const len = profile.length;

    // Front & Back
    faces.push(Array.from({length: len}, (_, i) => i));
    faces.push(Array.from({length: len}, (_, i) => i + len));

    // Side Walls
    for (let i = 0; i < len; i++) {
      const next = (i + 1) % len;
      faces.push([i, next, next + len, i + len]);
    }

    // 4. ANIMATION LOOP
    let angle = 0;
    const speed = 0.01; 
    let animationId: number;

    const animate = () => {
      angle += speed;

      const rotatedVertices = vertices.map(v => {
        // Y-Axis Rotation
        let x = v.x * Math.cos(angle) - v.z * Math.sin(angle);
        let z = v.z * Math.cos(angle) + v.x * Math.sin(angle);
        let y = v.y;

        // Static Tilts for Perspective
        const tiltX = 0.3;  // Tilt forward slightly
        const oldY = y;
        y = oldY * Math.cos(tiltX) - z * Math.sin(tiltX);
        z = z * Math.cos(tiltX) + oldY * Math.sin(tiltX);
        
        const tiltZ = -0.2; // Tilt sideways slightly
        const oldX = x;
        x = oldX * Math.cos(tiltZ) - y * Math.sin(tiltZ);
        y = y * Math.cos(tiltZ) + oldX * Math.sin(tiltZ);

        return { x, y, z };
      });

      const renderList = faces.map(faceIndices => {
        const points = faceIndices.map(i => rotatedVertices[i]);
        const avgZ = points.reduce((sum, p) => sum + p.z, 0) / points.length;
        return { points, avgZ };
      });

      // Sort faces (Painter's Algorithm)
      renderList.sort((a, b) => a.avgZ - b.avgZ);

      // Draw to SVG
      while (svg.lastChild) {
        svg.removeChild(svg.lastChild);
      }

      renderList.forEach(face => {
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        
        const pointString = face.points.map(p => `${p.x},${p.y}`).join(" ");
        
        polygon.setAttribute("points", pointString);
        polygon.setAttribute("stroke", "rgba(255, 255, 255, 0.9)");
        polygon.setAttribute("stroke-width", "1");
        polygon.setAttribute("fill", "#171327"); 
        polygon.setAttribute("stroke-linejoin", "round");

        svg.appendChild(polygon);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <svg 
      ref={svgRef} 
      viewBox="-60 -55 120 120" 
      className={className}
    />
  );
};