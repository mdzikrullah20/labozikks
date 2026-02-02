'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoScrolling) return;

    let scrollPosition = scrollContainer.scrollLeft;
    let direction = 1;
    const scrollSpeed = 1;

    const autoScroll = () => {
      if (!scrollContainer || isDragging) return;

      scrollPosition += scrollSpeed * direction;
      
      if (scrollPosition >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        direction = -1;
      } else if (scrollPosition <= 0) {
        direction = 1;
      }

      scrollContainer.scrollLeft = scrollPosition;
    };

    const intervalId = setInterval(autoScroll, 20);

    return () => clearInterval(intervalId);
  }, [isAutoScrolling, isDragging]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 3000);
  };

  const services = [
    {
      number: '01',
      title: 'Scientific Research',
      description: 'Lorem Ipsum is simply dummy text of the printing and Ut convallis augue ut sapien lobortis, typesetting industry.',
      image: 'https://plus.unsplash.com/premium_photo-1683141030755-c99c67e84b54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      number: '02',
      title: 'Process Optimization',
      description: 'Lorem Ipsum is simply dummy text of the printing and Ut convallis augue ut sapien lobortis, typesetting industry.',
      image: 'https://plus.unsplash.com/premium_photo-1676325102319-0437efbb865f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      number: '03',
      title: 'Laboratory Analysis',
      description: 'Lorem Ipsum is simply dummy text of the printing and Ut convallis augue ut sapien lobortis, typesetting industry.',
      image: 'https://images.unsplash.com/photo-1579154392128-bf8c7ebee541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      number: '04',
      title: 'Quality Control',
      description: 'Lorem Ipsum is simply dummy text of the printing and Ut convallis augue ut sapien lobortis, typesetting industry.',
      image: 'https://plus.unsplash.com/premium_photo-1661374876637-d2900c13cd56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      number: '05',
      title: 'Data Analysis',
      description: 'Lorem Ipsum is simply dummy text of the printing and Ut convallis augue ut sapien lobortis, typesetting industry.',
      image: 'https://plus.unsplash.com/premium_photo-1663011406193-7beb9d225d31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-blue-600 font-semibold tracking-wider text-xs md:text-sm mb-3 md:mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-slate-900 leading-tight px-4">
            Our Comprehensive Laboratory & Research Services
          </h2>
        </div>

        {/* Scrolling Container */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="flex gap-4 md:gap-6 overflow-x-scroll scroll-smooth pb-4 cursor-grab select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-[500px] md:w-[600px] bg-white rounded-2xl md:rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 pointer-events-none"
            >
              {/* Mobile: Stacked Layout */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                
                {/* Image - Top on mobile */}
                <div className="w-full sm:hidden h-48 rounded-xl overflow-hidden order-first relative bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#13405C] text-white rounded-full font-bold text-lg md:text-xl mb-3 md:mb-4">
                    {service.number}
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <button className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition pointer-events-auto">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>

                {/* Image - Right on tablet/desktop */}
                <div className="hidden sm:block flex-shrink-0 w-48 md:w-64 h-48 md:h-64 rounded-xl md:rounded-2xl overflow-hidden relative bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;