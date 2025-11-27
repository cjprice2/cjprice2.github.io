import { useEffect, useRef, useState } from 'react';

export const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const [isDark, setIsDark] = useState(false);
  const nodesRef = useRef([]);
  const animationRef = useRef();
  const lastTimeRef = useRef(0);

  useEffect(() => {
    // Check theme
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };
    
    checkTheme();
    
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
         // Visually balanced breakpoints for consistent appearance
      const getResponsiveValues = (width, height) => {
        const screenDiagonal = Math.sqrt(width * width + height * height);
        
        // Tuned for visual consistency rather than mathematical scaling
        if (width >= 3840) {
          // 4K+ displays: Need more nodes but not too dense
          const connectionDistance = screenDiagonal * 0.08;
          return { nodeCount: 170, connectionDistance, velocity: 0.25 };
        } else if (width >= 2560) {
          // 1440p+ displays
          const connectionDistance = screenDiagonal * 0.08;
          return { nodeCount: 150, connectionDistance, velocity: 0.25 };
        } else if (width >= 1920) {
          // 1080p displays: Our baseline for visual density
          const connectionDistance = screenDiagonal * 0.08;
          return { nodeCount: 140, connectionDistance, velocity: 0.25 };
        } else if (width >= 1680) {
          // Large laptop displays
          const connectionDistance = screenDiagonal * 0.08;
          return { nodeCount: 120, connectionDistance, velocity: 0.25 };
        } else if (width >= 1366) {
          // Common laptop resolution
          const connectionDistance = screenDiagonal * 0.09;
          return { nodeCount: 100, connectionDistance, velocity: 0.25 };
        } else if (width >= 1024) {
          // Tablet landscape
          const connectionDistance = screenDiagonal * 0.11;
          return { nodeCount: 80, connectionDistance, velocity: 0.25 };
        } else if (width >= 768) {
          // Tablet portrait
          const connectionDistance = screenDiagonal * 0.125;
          return { nodeCount: 60, connectionDistance, velocity: 0.25 };
        } else if (width >= 640) {
          // Large mobile
          const connectionDistance = screenDiagonal * 0.15;
          return { nodeCount: 50, connectionDistance, velocity: 0.25 };
        } else {
          // Small mobile screens
          const connectionDistance = screenDiagonal * 0.2;
          return { nodeCount: 30, connectionDistance, velocity: 0.25 };
        }
     };

    // Set canvas size and handle resizing
    const resizeCanvas = () => {
      const oldWidth = canvas.width;
      const oldHeight = canvas.height;
      
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const { nodeCount } = getResponsiveValues(canvas.width, canvas.height);
      
      // Regenerate nodes if they don't exist or if we crossed a major breakpoint
      if (nodesRef.current.length === 0 || shouldRegenerateNodes(oldWidth, canvas.width)) {
        generateNodes(nodeCount);
      } else if (oldWidth > 0 && oldHeight > 0) {
        // Scale existing nodes proportionally for minor resizes
        const scaleX = canvas.width / oldWidth;
        const scaleY = canvas.height / oldHeight;
        
        nodesRef.current.forEach(node => {
          node.x = Math.max(0, Math.min(canvas.width, node.x * scaleX));
          node.y = Math.max(0, Math.min(canvas.height, node.y * scaleY));
        });
      }
    };

    // Check if we've crossed a major breakpoint that requires regeneration
    const shouldRegenerateNodes = (oldWidth, newWidth) => {
      const breakpoints = [640, 768, 1024, 1280, 1536];
      
      for (const breakpoint of breakpoints) {
        if ((oldWidth < breakpoint && newWidth >= breakpoint) ||
            (oldWidth >= breakpoint && newWidth < breakpoint)) {
          return true;
        }
      }
      return false;
    };

    // Helper function to calculate distance between two points
    const getDistance = (x1, y1, x2, y2) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      return Math.sqrt(dx * dx + dy * dy);
    };

    // Generate network nodes using container-like responsive logic
    const generateNodes = (nodeCount) => {
      const { velocity } = getResponsiveValues(canvas.width, canvas.height);
      const nodes = [];
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * velocity,
          vy: (Math.random() - 0.5) * velocity
        });
      }
      
      nodesRef.current = nodes;
    };

    // Update node positions
    const updateNodes = (deltaTime) => {
      const nodes = nodesRef.current;
      // Frame-rate independent scaling - same for all devices
      const frameScale = deltaTime * 144;
      
      // Check for nodes that are too close and make them go opposite directions
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeA = nodes[i];
          const nodeB = nodes[j];
          
          const distance = getDistance(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
          
          // If nodes are within 10 pixels, separate them
          if (distance < 10) {
            const { velocity } = getResponsiveValues(canvas.width, canvas.height);
            const minVelocity = velocity * 0.5; // Minimum velocity to ensure separation
            
            // Calculate direction vector from A to B
            const dx = nodeB.x - nodeA.x;
            const dy = nodeB.y - nodeA.y;
            
            // Handle edge case where nodes are at exact same position
            if (distance === 0) {
              // Push them apart in random directions
              const angle = Math.random() * Math.PI * 2;
              nodeA.vx = -Math.cos(angle) * minVelocity;
              nodeA.vy = -Math.sin(angle) * minVelocity;
              nodeB.vx = Math.cos(angle) * minVelocity;
              nodeB.vy = Math.sin(angle) * minVelocity;
            } else {
              // Normalize direction vector
              const normalizedDx = dx / distance;
              const normalizedDy = dy / distance;
              
              // Reverse velocities and ensure minimum separation speed
              nodeA.vx = Math.abs(nodeA.vx) < minVelocity ? -normalizedDx * minVelocity : nodeA.vx * -1;
              nodeA.vy = Math.abs(nodeA.vy) < minVelocity ? -normalizedDy * minVelocity : nodeA.vy * -1;
              nodeB.vx = Math.abs(nodeB.vx) < minVelocity ? normalizedDx * minVelocity : nodeB.vx * -1;
              nodeB.vy = Math.abs(nodeB.vy) < minVelocity ? normalizedDy * minVelocity : nodeB.vy * -1;
            }
          }
        }
      }
      
      nodes.forEach(node => {
        // Update position – scale by elapsed time
        node.x += node.vx * frameScale;
        node.y += node.vy * frameScale;
        
        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) {
          node.vx *= -1;
          node.x = Math.max(0, Math.min(canvas.width, node.x));
        }
        if (node.y <= 0 || node.y >= canvas.height) {
          node.vy *= -1;
          node.y = Math.max(0, Math.min(canvas.height, node.y));
        }
      });
    };

    // Draw the network
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      const nodeColor = isDark ? 'rgba(170, 170, 170, 0.5)' : 'rgba(120, 120, 120, 0.5)';
      const lineColor = isDark ? 'rgba(150, 150, 150, 0.35)' : 'rgba(100, 100, 100, 0.3)';
      
      const nodes = nodesRef.current;
      const { connectionDistance } = getResponsiveValues(canvas.width, canvas.height);
      
      // Draw connections between nodes
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeA = nodes[i];
          const nodeB = nodes[j];
          
          const distance = getDistance(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
          
          // Only draw lines if nodes are close enough
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }
      
      // Draw nodes
      ctx.fillStyle = nodeColor;
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    // Animation loop (frame-rate independent)
    const animate = (currentTime) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = currentTime;          // initialise on first frame
      }
      // Seconds elapsed; clamp to avoid huge jumps when tab is inactive (RAF throttles)
      let deltaTime = (currentTime - lastTimeRef.current) / 1000;
      const MAX_DELTA = 0.033; // cap at ~33ms (≈30fps) to prevent huge jumps when tab becomes active
      if (deltaTime > MAX_DELTA) deltaTime = MAX_DELTA;
      lastTimeRef.current = currentTime;

      updateNodes(deltaTime);
      draw();
      animationRef.current = requestAnimationFrame(animate);
    };


    resizeCanvas();
    lastTimeRef.current = performance.now();        // seed timer
    animationRef.current = requestAnimationFrame(animate);

    // Throttled resize handler for better performance
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    };

    // Add event listeners
    window.addEventListener('resize', handleResize);
    
    // Pause animation when tab is hidden to save battery
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      } else {
        // Always restart animation when tab becomes visible
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        lastTimeRef.current = performance.now();
        animationRef.current = requestAnimationFrame(animate);
      }
    });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', () => {});
      
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ 
        background: 'transparent',
        // Mobile scroll optimization - force GPU layer without heavy transforms
        transform: 'translate3d(0, 0, 0)',
        backfaceVisibility: 'hidden'
      }}
    />
  );
}; 