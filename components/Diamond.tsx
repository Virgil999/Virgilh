import React, { useEffect, useRef } from 'react';

interface Vertex {
  x: number;
  y: number;
  z: number;
}

export const Diamond: React.FC<{ className?: string }> = ({ className }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // 1. CONFIGURATION
    const segments = 8; // Octagonal shape (Standard Brilliant style)
    const topRadius = 25; 
    const midRadius = 50; 
    const topY = -30;
    const midY = 0;
    const bottomY = 60; 

    // 2. GENERATE VERTICES
    const vertices: Vertex[] = [];

    // -- Top Ring (Table)
    for (let i = 0; i < segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      vertices.push({ x: Math.cos(theta) * topRadius, y: topY, z: Math.sin(theta) * topRadius });
    }

    // -- Middle Ring (Girdle)
    for (let i = 0; i < segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      vertices.push({ x: Math.cos(theta) * midRadius, y: midY, z: Math.sin(theta) * midRadius });
    }

    // -- Bottom Point (Culet)
    vertices.push({ x: 0, y: bottomY, z: 0 });

    // -- Center Top Point (For the flat table cap)
    vertices.push({ x: 0, y: topY, z: 0 });

    // 3. GENERATE FACES
    const faces: number[][] = [];

    for (let i = 0; i < segments; i++) {
      const next = (i + 1) % segments;
      
      const t1 = i;               // Top current
      const t2 = next;            // Top next
      const m1 = i + segments;    // Mid current
      const m2 = next + segments; // Mid next
      const bottom = 16;
      const topCenter = 17;

      // A. The Crown (Trapezoids connecting Top to Mid)
      faces.push([t1, t2, m2, m1]);

      // B. The Pavilion (Triangles connecting Mid to Bottom)
      faces.push([m1, m2, bottom]);

      // C. The Table (Triangles connecting Top ring to Center)
      faces.push([t1, topCenter, t2]);
    }

    // 4. ANIMATION LOOP
    let angle = 0;
    const speed = 0.008; 
    let animationId: number;

    const animate = () => {
      angle += speed;

      // A. Rotate all vertices
      const rotatedVertices = vertices.map(v => {
        // Rotation around Y-axis
        const x = v.x * Math.cos(angle) - v.z * Math.sin(angle);
        const z = v.z * Math.cos(angle) + v.x * Math.sin(angle);
        // Slight tilt (X-axis) so we can see the top table nicely
        const tilt = 0.2; 
        const y = v.y * Math.cos(tilt) - z * Math.sin(tilt);
        const zFinal = z * Math.cos(tilt) + v.y * Math.sin(tilt);
        
        return { x, y, z: zFinal };
      });

      // B. Prepare faces for rendering
      const renderList = faces.map(faceIndices => {
        const points = faceIndices.map(i => rotatedVertices[i]);
        // Calculate Average Z (Depth) of the face for sorting
        const avgZ = points.reduce((sum, p) => sum + p.z, 0) / points.length;
        return { points, avgZ };
      });

      // C. Sort faces (Painter's Algorithm)
      renderList.sort((a, b) => a.avgZ - b.avgZ);

      // D. Draw to SVG
      while (svg.lastChild) {
        svg.removeChild(svg.lastChild);
      }

      renderList.forEach(face => {
        const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        
        const pointString = face.points.map(p => `${p.x},${p.y}`).join(" ");
        
        polygon.setAttribute("points", pointString);
        polygon.setAttribute("stroke", "rgba(255, 255, 255, 0.9)");
        polygon.setAttribute("stroke-width", "1");
        // Fill matches the card background color #171327 to hide lines behind it
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
      viewBox="-60 -45 120 120" 
      className={className}
    />
  );
};