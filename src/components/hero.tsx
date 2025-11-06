'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { FileText } from 'lucide-react';

export default function Hero() {
  useEffect(() => {
    const canvas = document.getElementById('stars') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
    if (!ctx || !canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      delta: Math.random() * 0.02,
    }));

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className='font-main relative flex h-screen items-center justify-center overflow-hidden bg-linear-to-b from-black via-[#0a0a1a] to-[#111122] text-center tracking-tighter'>
      <canvas
        id='stars'
        className='absolute top-0 left-0 h-full w-full'
      ></canvas>

      <div className='relative z-10 flex flex-col items-center justify-center gap-8'>
        <svg
          className='h-64 w-64 sm:h-80 sm:w-80'
          viewBox='0 0 1000 600'
          fill='none'
          stroke='rgba(255,255,255,0.6)'
          strokeWidth='1'
          preserveAspectRatio='xMidYMid meet'
        >
          <g transform='scale(5)'>
            <circle
              cy='84.58924'
              fill='white'
              r='4.44'
              strokeWidth='0'
              stroke='black'
              id='circle3001'
              cx='86.863591'
            />
            <circle
              cy='75.806293'
              fill='white'
              r='2.088'
              strokeWidth='0'
              stroke='black'
              id='circle3003'
              cx='104.186862'
            />
            <line
              y2='75.80629329272327'
              x2='104.18686191686882'
              y1='84.58923982364247'
              x1='86.8635914544163'
              id='line3005'
            />
            <circle
              cy='88.280909'
              fill='white'
              r='3.488'
              strokeWidth='0'
              stroke='black'
              id='circle3007'
              cx='112.899109'
            />
            <line
              y2='88.28090927625365'
              x2='112.89910879775893'
              y1='75.80629329272327'
              x1='104.18686191686882'
              id='line3009'
            />
            <circle
              cy='109.422169'
              fill='white'
              r='3'
              strokeWidth='0'
              stroke='black'
              id='circle3011'
              cx='106.976988'
            />
            <line
              y2='109.42216888841732'
              x2='106.97698770250376'
              y1='88.28090927625365'
              x1='112.89910879775893'
              id='line3013'
            />
            <circle
              cy='139.03476'
              fill='white'
              r='4.656'
              strokeWidth='0'
              stroke='black'
              id='circle3015'
              cx='122.086732'
            />
            <line
              y2='139.03476013880828'
              x2='122.0867323251737'
              y1='109.42216888841732'
              x1='106.97698770250376'
              id='line3017'
            />
            <circle
              cy='144.13559'
              fill='white'
              r='3.144'
              strokeWidth='0'
              stroke='black'
              id='circle3019'
              cx='93.286674'
            />
            <line
              y2='144.13558971294373'
              x2='93.28667447588641'
              y1='139.03476013880828'
              x1='122.0867323251737'
              id='line3021'
            />
            <circle
              cy='117.247488'
              fill='white'
              r='3.408'
              strokeWidth='0'
              stroke='black'
              id='circle3023'
              cx='99.337703'
            />
            <line
              y2='117.24748779808553'
              x2='99.33770325931408'
              y1='144.13558971294373'
              x1='93.28667447588641'
              id='line3025'
            />
            <line
              y2='84.58923982364247'
              x2='86.8635914544163'
              y1='117.24748779808553'
              x1='99.33770325931408'
              id='line3027'
            />
            <circle
              cy='76.732687'
              fill='white'
              r='1.504'
              strokeWidth='0'
              stroke='black'
              id='circle3029'
              cx='80.718741'
            />
            <line
              y2='76.73268727674312'
              x2='80.71874084170514'
              y1='84.58923982364247'
              x1='86.8635914544163'
              id='line3031'
            />
            <circle
              cy='60.744286'
              fill='white'
              r='1.24'
              strokeWidth='0'
              stroke='black'
              id='circle3033'
              cx='72.87347'
            />
            <line
              y2='60.7442855620353'
              x2='72.87346968504833'
              y1='76.73268727674312'
              x1='80.71874084170514'
              id='line3035'
            />
            <circle
              cy='58.846082'
              fill='white'
              r='1.264'
              strokeWidth='0'
              stroke='black'
              id='circle3037'
              cx='76.62567'
            />
            <line
              y2='58.84608230582421'
              x2='76.62567007445028'
              y1='60.7442855620353'
              x1='72.87346968504833'
              id='line3039'
            />
            <circle
              cy='40.266181'
              fill='white'
              r='1.088'
              strokeWidth='0'
              stroke='black'
              id='circle3041'
              cx='80.191169'
            />
            <line
              y2='40.266180799123454'
              x2='80.19116885882337'
              y1='58.84608230582421'
              x1='76.62567007445028'
              id='line3043'
            />
            <circle
              cy='43.51625'
              fill='white'
              r='0.64'
              strokeWidth='0'
              stroke='black'
              id='circle3045'
              cx='71.015772'
            />
            <line
              y2='43.51625010627704'
              x2='71.01577227452015'
              y1='60.7442855620353'
              x1='72.87346968504833'
              id='line3047'
            />
            <circle
              cy='85.843279'
              fill='white'
              r='2.248'
              strokeWidth='0'
              stroke='black'
              id='circle3049'
              cx='143.391188'
            />
            <line
              y2='85.84327908711333'
              x2='143.39118783550515'
              y1='88.28090927625365'
              x1='112.89910879775893'
              id='line3051'
            />
            <circle
              cy='74.734113'
              fill='white'
              r='1.088'
              strokeWidth='0'
              stroke='black'
              id='circle3053'
              cx='138.755843'
            />
            <circle
              cy='79.053679'
              fill='white'
              r='1.32'
              strokeWidth='0'
              stroke='black'
              id='circle3055'
              cx='142.551584'
            />
            <line
              y2='79.05367897643012'
              x2='142.55158422976092'
              y1='74.73411250813498'
              x1='138.75584287452367'
              id='line3057'
            />
            <line
              y2='85.84327908711333'
              x2='143.39118783550515'
              y1='79.05367897643012'
              x1='142.55158422976092'
              id='line3059'
            />
            <circle
              cy='90.619165'
              fill='white'
              r='1.856'
              strokeWidth='0'
              stroke='black'
              id='circle3061'
              cx='142.306643'
            />
            <line
              y2='90.61916505555246'
              x2='142.30664301847347'
              y1='85.84327908711333'
              x1='143.39118783550515'
              id='line3063'
            />
            <circle
              cy='101.75348'
              fill='white'
              r='1.832'
              strokeWidth='0'
              stroke='black'
              id='circle3065'
              cx='139.820572'
            />
            <line
              y2='101.75348008549177'
              x2='139.82057190192734'
              y1='90.61916505555246'
              x1='142.30664301847347'
              id='line3067'
            />
            <circle
              cy='104.335809'
              fill='white'
              r='1.224'
              strokeWidth='0'
              stroke='black'
              id='circle3069'
              cx='136.109977'
            />
            <line
              y2='104.33580902722038'
              x2='136.10997721824742'
              y1='101.75348008549177'
              x1='139.82057190192734'
              id='line3071'
            />
          </g>
        </svg>

        <div className='flex max-w-2xl flex-col items-center justify-center gap-4 px-4'>
          <h1 className='text-4xl font-bold drop-shadow-lg sm:text-6xl'>
            Orion Remodeling & Handyman
          </h1>
          <p className='text-lg text-gray-300 sm:text-2xl'>
            Expert Remodeling & Handyman Services
          </p>
          <p className='text-base text-gray-300 sm:text-xl'>
            Proudly Serving{' '}
            <span className='font-extrabold'>Monmouth County</span> &
            Surrounding Areas
          </p>{' '}
          <Button asChild size={'lg'} className='max-w-lg'>
            <Link href='/'>
              {' '}
              <FileText />
              Get A Free Quote
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
