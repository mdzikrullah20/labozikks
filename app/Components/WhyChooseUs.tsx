'use client';
import { useState } from 'react';
import { ArrowRight, FlaskConical, Microscope, Building2, TestTube, Dna, Atom } from 'lucide-react';

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <Microscope className="w-10 h-10" />,
      title: 'Scientific Vision Hub',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: 'https://images.unsplash.com/photo-1581091007718-0c50d599bfd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D',
      bgColor: 'bg-white',
      textColor: 'text-slate-900',
      iconColor: 'text-[#13405C]',
      arrowBg: 'bg-slate-900',
      arrowColor: 'text-white',
    },
    {
      icon: <FlaskConical className="w-10 h-10" />,
      title: 'Pathologycam Testing',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: 'https://images.unsplash.com/photo-1580982325236-11d214b9f279?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D',
        bgColor: 'bg-white',
      textColor: 'text-slate-900',
      iconColor: 'text-[#13405C]',
      arrowBg: 'bg-slate-900',
      arrowColor: 'text-white',
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: 'Chemical Research',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: 'https://images.unsplash.com/photo-1618053448748-b7251851d014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D',
       bgColor: 'bg-white',
      textColor: 'text-slate-900',
      iconColor: 'text-[#13405C]',
      arrowBg: 'bg-slate-900',
      arrowColor: 'text-white',
    },
    {
      icon: <TestTube className="w-10 h-10" />,
      title: 'Quantum Analysis',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: 'https://images.unsplash.com/photo-1575468130718-697b2fa904dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D',
        bgColor: 'bg-white',
      textColor: 'text-slate-900',
      iconColor: 'text-[#13405C]',
      arrowBg: 'bg-slate-900',
      arrowColor: 'text-white',
    },
    {
      icon: <Dna className="w-10 h-10" />,
      title: 'Genomic Research',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: 'https://images.unsplash.com/photo-1581092162572-fe1cb11cd26e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D',
        bgColor: 'bg-white',
      textColor: 'text-slate-900',
      iconColor: 'text-[#13405C]',
      arrowBg: 'bg-slate-900',
      arrowColor: 'text-white',
    },
    {
      icon: <Atom className="w-10 h-10" />,
      title: 'Molecular Studies',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: 'https://images.unsplash.com/photo-1486825586573-7131f7991bdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D',
       bgColor: 'bg-white',
      textColor: 'text-slate-900',
      iconColor: 'text-[#13405C]',
      arrowBg: 'bg-slate-900',
      arrowColor: 'text-white',
    },
  ];

  return (
    <section className="w-full bg-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-blue-600 font-semibold tracking-wider text-xs md:text-sm mb-3 md:mb-4">
            WHY CHOOSE US?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Expert Laboratory Services For<br />Advanced Research
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-4 md:space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`${service.bgColor} ${service.textColor} rounded-2xl md:rounded-3xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer hover:shadow-2xl relative group`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6 relative z-10">
                {/* Left: Icon & Title */}
                <div className="flex items-center gap-4 md:gap-6 flex-1">
                  <div className={`${service.iconColor} flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                    {service.title}
                  </h3>
                </div>

                {/* Center: Description */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-sm md:text-base opacity-80">
                    {service.description}
                  </p>
                </div>

                {/* Right: Arrow Button */}
                <div className="flex-shrink-0">
                  <button className={`${service.arrowBg} ${service.arrowColor} w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform`}>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                </div>
              </div>

              {/* Hover Image Overlay */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
                
                {/* Content on hover */}
                <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6">
                  {/* Left: Icon & Title */}
                  <div className="flex items-center gap-4 md:gap-6 flex-1 z-10">
                    <div className="text-blue-400 flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Center: Description */}
                  <div className="flex-1 text-center md:text-left z-10">
                    <p className="text-sm md:text-base text-white/90">
                      {service.description}
                    </p>
                  </div>

                  {/* Right: Arrow Button */}
                  <div className="flex-shrink-0 z-10">
                    <button className="bg-[#13405C] text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-transform cursor-pointer">
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;