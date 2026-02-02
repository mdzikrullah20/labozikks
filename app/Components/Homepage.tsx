'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Microscope, FlaskConical, Dna, Award, Users, TrendingUp } from 'lucide-react';

const Homepage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [particles, setParticles] = useState<number[]>([]);

    const heroSlides = [
        {
            tag: 'RESEARCH & TECHNOLOGY',
            title: 'Precision Research For Reliable Results',
            description:
                'We are dedicated to groundbreaking discoveries, scientific excellence, and technological advancements that shape the future of healthcare, environment, and industry.',
            cta: 'VIEW RESEARCH',
            img: '/banner_h1_003_img-scaled.webp',
        },
        {
            tag: 'INNOVATION & DISCOVERY',
            title: 'Advancing Scientific Frontiers',
            description:
                'Leading the way in molecular biology, genetic research, and pharmaceutical development with state-of-the-art laboratory facilities and expert researchers.',
            cta: 'EXPLORE SOLUTIONS',
            img: '/beannr_1_1.webp',
        },
        {
            tag: 'EXCELLENCE & PRECISION',
            title: 'Transforming Ideas Into Reality',
            description:
                'Our commitment to quality and accuracy drives every experiment, every analysis, and every breakthrough in our laboratories.',
            cta: 'LEARN MORE',
            img: '/hero_banner.webp',
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [heroSlides.length]);

    // Generate particles once (prevents hydration mismatch)
    useEffect(() => {
        setParticles(Array.from({ length: 30 }, (_, i) => i));
    }, []);

    const stats = [
        { icon: Microscope, value: '500+', label: 'Research Projects' },
        { icon: Award, value: '150+', label: 'Industry Awards' },
        { icon: Users, value: '200+', label: 'Expert Scientists' },
        { icon: TrendingUp, value: '98%', label: 'Success Rate' },
    ];

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Hero Section */}
            <section className="relative h-[calc(100vh-120px)] min-h-[600px] overflow-hidden bg-slate-900">

                {/* FULL BACKGROUND IMAGE (MAPPED) */}
                <div
                    className="
    absolute inset-0 
    bg-cover bg-center 
    sm:bg-center 
    md:bg-center 
    lg:bg-center
    transition-opacity duration-1000    
  "
                    style={{
                        backgroundImage: `url(${heroSlides[currentSlide].img})`,
                        backgroundPosition: 'center center',
                    }}
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent" />

                {/* Animated Particles */}
                <div className="absolute inset-0 opacity-30">
                    {particles.map((i) => (
                        <div
                            key={i}
                            className="absolute rounded-full bg-cyan-400 animate-pulse"
                            style={{
                                width: `${Math.random() * 4 + 2}px`,
                                height: `${Math.random() * 4 + 2}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                        />
                    ))}
                </div>

                {/* Hero Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                    <div className="max-w-2xl space-y-8 animate-fadeInUp">

                        {/* Tag */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
                            <FlaskConical className="w-4 h-4 text-cyan-400" />
                            <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                                {heroSlides[currentSlide].tag}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                            {heroSlides[currentSlide].title}
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
                            {heroSlides[currentSlide].description}
                        </p>

                        {/* CTA Button */}
                       <button className="mt-4 flex items-center gap-2 px-6 py-3 bg-[#13405C] text-white rounded-full font-semibold hover:bg-[#13405C] transition cursor-pointer border-2 border-cyan-400 group">
                            <span className="flex items-center gap-2">
                                {heroSlides[currentSlide].cta}
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all ${index === currentSlide
                                ? 'w-12 bg-cyan-500'
                                : 'w-2 bg-slate-500 hover:bg-slate-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Decorative DNA Helix */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden xl:block">
                    <Dna className="w-96 h-96 text-cyan-400 animate-spin" />
                </div>
            </section>
        </div>
    );
};

export default Homepage;
