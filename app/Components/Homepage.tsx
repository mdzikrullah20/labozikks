'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowRight,
  FlaskConical,
  Dna,
  Microscope,
  Award,
  Users,
  TrendingUp,
} from 'lucide-react';

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      tag: 'RESEARCH & TECHNOLOGY',
      title: 'Precision Research For Reliable Results',
      description:
        'We are dedicated to scientific excellence, innovation, and breakthroughs that shape healthcare and industry.',
      cta: 'VIEW RESEARCH',
      img: '/banner_h1_003_img-scaled.webp',
    },
    {
      tag: 'INNOVATION & DISCOVERY',
      title: 'Advancing Scientific Frontiers',
      description:
        'Leading molecular biology, genetics, and pharmaceutical research with advanced labs.',
      cta: 'EXPLORE SOLUTIONS',
      img: '/beannr_1_1.webp',
    },
    {
      tag: 'EXCELLENCE & PRECISION',
      title: 'Transforming Ideas Into Reality',
      description:
        'Every experiment is driven by accuracy, quality, and innovation.',
      cta: 'LEARN MORE',
      img: '/hero_banner.webp',
    },
  ];

  const particles = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 2,
      })),
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${heroSlides[currentSlide].img})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Particles */}
        <div className="absolute inset-0">
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute rounded-full bg-cyan-300/40"
              style={{
                top: `${p.top}%`,
                left: `${p.left}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-6 max-w-7xl mx-auto">

          <div className="max-w-2xl space-y-6">

            {/* TAG */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white">
              <FlaskConical className="w-4 h-4 text-cyan-300" />
              <span className="text-xs tracking-widest uppercase">
                {heroSlides[currentSlide].tag}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              {heroSlides[currentSlide].title}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-white/80 text-lg leading-relaxed">
              {heroSlides[currentSlide].description}
            </p>

            {/* BUTTON */}
            <button className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 transition text-white font-medium group">
              {heroSlides[currentSlide].cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </button>

          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`cursor-pointer transition-all rounded-full ${
                i === currentSlide
                  ? 'w-10 h-2 bg-cyan-400'
                  : 'w-2 h-2 bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Decorative DNA */}
        <Dna className="absolute right-10 top-1/2 w-72 h-72 text-cyan-300/10 hidden xl:block animate-pulse" />

      </section>
    </div>
  );
};

export default Homepage;