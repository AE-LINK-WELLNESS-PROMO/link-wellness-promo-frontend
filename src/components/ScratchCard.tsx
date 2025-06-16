import React, { useRef, useEffect, useState } from 'react';

interface ScratchCardProps {
  image: string;
  width?: number;
  height?: number;
  onScratchComplete?: () => void;
  revealContent?: React.ReactNode;
}

const SCRATCH_RADIUS = 15;
const SCRATCH_THRESHOLD = 0.5; // 50% scratched

const ScratchCard: React.FC<ScratchCardProps> = ({ image, width = 350, height = 225, onScratchComplete, revealContent }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scratched, setScratched] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const img = new window.Image();
        img.src = image;
        img.onload = () => {
          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);
          ctx.globalCompositeOperation = 'source-over';
        };
      }
    }
    setScratched(false);
  }, [image, width, height]);

  // Cleanup effect to ensure scroll is re-enabled if component unmounts
  useEffect(() => {
    return () => {
      // Re-enable scroll if component unmounts while scratching
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, []);

  const getPointer = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    let x = 0, y = 0;
    if ('touches' in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else if ('clientX' in e) {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }
    return { x, y };
  };

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, SCRATCH_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  };

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDrawing(true);
    const { x, y } = getPointer(e);
    scratch(x, y);
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  };

  const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();
    const { x, y } = getPointer(e);
    scratch(x, y);
  };

  const handlePointerUp = () => {
    setIsDrawing(false);
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
    // Check if enough area is scratched
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const imageData = ctx.getImageData(0, 0, width, height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    if (transparent / (width * height) > SCRATCH_THRESHOLD) {
      setScratched(true);
      if (onScratchComplete) onScratchComplete();
    }
  };

  return (
    <div style={{ 
      position: 'relative', 
      width, 
      height, 
      border: '2px solid #ccc', 
      borderRadius: 16, 
      overflow: 'hidden',
      touchAction: 'none',
      userSelect: 'none',
      WebkitUserSelect: 'none'
    }}>
      <div style={{ width, height, borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
        {/* The canvas is now the scratchable PNG overlay */}
        {!scratched && (
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              borderRadius: 16, 
              cursor: 'pointer', 
              zIndex: 2,
              touchAction: 'none',
              userSelect: 'none',
              WebkitUserSelect: 'none'
            }}
            onMouseDown={handlePointerDown}
            onMouseMove={handlePointerMove}
            onMouseUp={handlePointerUp}
            onMouseLeave={handlePointerUp}
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}
            onTouchCancel={handlePointerUp}
            onContextMenu={(e) => e.preventDefault()}
          />
        )}
        {/* Show revealContent or fallback image when scratched */}
        {scratched && revealContent ? (
          <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 3 }}>{revealContent}</div>
        ) : null}
      </div>
    </div>
  );
};

export default ScratchCard;
