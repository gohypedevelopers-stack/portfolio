import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { cn } from '@/lib/utils';

const Earth = ({
  className,
  theta = 0.25,
  dark = 1,
  scale = 1.1,
  diffuse = 1.2,
  mapSamples = 40000,
  mapBrightness = 6,
  baseColor = [0.4, 0.6509, 1],
  markerColor = [1, 0, 0],
  glowColor = [0.2745, 0.5765, 0.898],
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let globe;
    let phi = 0;

    const handleResize = () => {
      if (!canvasRef.current) return;
      const width = canvasRef.current.offsetWidth;
      if (globe) {
        globe.resize(width * 2, width * 2);
      }
    };

    const initGlobe = () => {
      if (!canvasRef.current) return;
      const width = canvasRef.current.offsetWidth;
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: theta,
        dark: dark,
        scale: scale,
        diffuse: diffuse,
        mapSamples: mapSamples,
        mapBrightness: mapBrightness,
        baseColor: baseColor,
        markerColor: markerColor,
        glowColor: glowColor,
        opacity: 1,
        offset: [0, 0],
        markers: [
          // longitude latitude
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.003;
        },
      });
    };

    initGlobe();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (globe) globe.destroy();
      cancelAnimationFrame(animationFrameId);
    };
    // eslint-disable-next-line
  }, [dark, theta, scale, diffuse, mapSamples, mapBrightness, baseColor, markerColor, glowColor]);

  return (
    <div
      className={cn(
        'z-[10] mx-auto flex w-full max-w-[350px] items-center justify-center',
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          aspectRatio: '1',
        }}
      />
    </div>
  );
};

export default Earth;
