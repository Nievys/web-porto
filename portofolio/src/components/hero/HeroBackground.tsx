import React, { useEffect, useRef } from 'react';

/**
 * ============================================================================
 * 🎨 PANDUAN KUSTOMISASI ANIMATED BACKGROUND HERO
 * ============================================================================
 * Anda dapat dengan mudah menyesuaikan efek animasi latar belakang di bawah ini.
 * Ubah nilai pada objek `HERO_BG_CONFIG`:
 *
 * - `shapeCount`      : Jumlah elemen mengambang (default: 12)
 * - `baseSpeed`       : Kecepatan gerak (makin kecil makin santai & calm, misal 0.3 - 0.6)
 * - `enableParallax`  : Apakah background merespon gerakan mouse (true/false)
 * - `parallaxFactor`  : Sensitivitas respon gerakan kursor mouse (default: 0.025)
 * - `colors`          : Palet warna bentuk (Deep Teal, Bright Lime, Warm Cream)
 * - `minSize`/`maxSize`: Rentang ukuran bentuk geometris (px)
 * - `enableGridLines` : Menampilkan garis grid geometris tipis di background (true/false)
 * ============================================================================
 */
export const HERO_BG_CONFIG = {
  // Jumlah bentuk geometris yang melayang
  shapeCount: 14,

  // Kecepatan animasi (0.2 = sangat santai, 0.5 = sedang, 1.0 = cepat)
  baseSpeed: 0.35,

  // Efek parallax mouse
  enableParallax: true,
  parallaxFactor: 0.02,

  // Garis aksen grid latar belakang
  enableGridLines: true,
  gridLineOpacity: 0.05, // Opacity garis grid (0.0 - 1.0)

  // Ukuran bentuk geometris (px)
  minSize: 30,
  maxSize: 140,

  // Palet warna bentuk ambient yang selaras dengan tema (RGBA)
  colors: [
    'rgba(40, 90, 113, 0.12)',   // Deep Teal transparan
    'rgba(207, 218, 90, 0.22)',  // Bright Lime lembut
    'rgba(252, 228, 192, 0.5)',  // Warm Cream cerah
    'rgba(56, 118, 147, 0.14)',  // Medium Teal aksen
    'rgba(174, 187, 63, 0.18)'   // Darker Lime aksen
  ]
};

interface Shape {
  x: number;
  y: number;
  size: number;
  width: number;
  height: number;
  color: string;
  vx: number;
  vy: number;
  rotation: number;
  vRot: number;
  type: 'circle' | 'pill' | 'rect' | 'ring';
  opacity: number;
  pulseSpeed: number;
  pulseVal: number;
}

export const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Inisialisasi Bentuk Geometris Santai
    const shapes: Shape[] = [];
    const types: Shape['type'][] = ['circle', 'pill', 'rect', 'ring'];

    for (let i = 0; i < HERO_BG_CONFIG.shapeCount; i++) {
      const size = Math.random() * (HERO_BG_CONFIG.maxSize - HERO_BG_CONFIG.minSize) + HERO_BG_CONFIG.minSize;
      const type = types[Math.floor(Math.random() * types.length)];
      const color = HERO_BG_CONFIG.colors[Math.floor(Math.random() * HERO_BG_CONFIG.colors.length)];

      shapes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        width: type === 'pill' ? size * 2.2 : size,
        height: type === 'pill' ? size * 0.9 : size,
        color,
        vx: (Math.random() - 0.5) * HERO_BG_CONFIG.baseSpeed,
        vy: (Math.random() - 0.5) * HERO_BG_CONFIG.baseSpeed,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.005,
        type,
        opacity: Math.random() * 0.6 + 0.4,
        pulseSpeed: Math.random() * 0.015 + 0.005,
        pulseVal: Math.random() * Math.PI * 2
      });
    }

    // Listener Mouse untuk Parallax Santai
    const handleMouseMove = (e: MouseEvent) => {
      if (!HERO_BG_CONFIG.enableParallax) return;
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseRef.current.targetX = (e.clientX - centerX) * HERO_BG_CONFIG.parallaxFactor;
      mouseRef.current.targetY = (e.clientY - centerY) * HERO_BG_CONFIG.parallaxFactor;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Render Loop (60 FPS Smooth)
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // 1. Gambar Grid Halus (Opsional)
      if (HERO_BG_CONFIG.enableGridLines) {
        ctx.strokeStyle = `rgba(40, 90, 113, ${HERO_BG_CONFIG.gridLineOpacity})`;
        ctx.lineWidth = 1;
        const gridSize = 64;

        ctx.beginPath();
        for (let x = 0; x < width; x += gridSize) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
        }
        for (let y = 0; y < height; y += gridSize) {
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
        }
        ctx.stroke();
      }

      // 2. Gambar Setiap Bentuk Geometris
      shapes.forEach((s) => {
        // Gerakan mengambang halus
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.vRot;
        s.pulseVal += s.pulseSpeed;

        // Pantulan tepi layar yang mulus
        if (s.x < -s.width) s.x = width + s.width;
        if (s.x > width + s.width) s.x = -s.width;
        if (s.y < -s.height) s.y = height + s.height;
        if (s.y > height + s.height) s.y = -s.height;

        // Efek denyut halus (breathing effect)
        const currentOpacity = s.opacity * (0.85 + Math.sin(s.pulseVal) * 0.15);

        ctx.save();
        ctx.translate(s.x + mouseRef.current.x, s.y + mouseRef.current.y);
        ctx.rotate(s.rotation);
        ctx.fillStyle = s.color;
        ctx.strokeStyle = s.color;
        ctx.globalAlpha = currentOpacity;

        if (s.type === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, s.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (s.type === 'ring') {
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc(0, 0, s.size / 2, 0, Math.PI * 2);
          ctx.stroke();
        } else if (s.type === 'pill') {
          const r = s.height / 2;
          const w = s.width;
          const h = s.height;
          ctx.beginPath();
          ctx.roundRect(-w / 2, -h / 2, w, h, r);
          ctx.fill();
        } else if (s.type === 'rect') {
          const r = 16;
          ctx.beginPath();
          ctx.roundRect(-s.size / 2, -s.size / 2, s.size, s.size, r);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
      aria-hidden="true"
    />
  );
};
