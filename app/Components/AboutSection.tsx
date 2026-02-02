'use client';
import Image from 'next/image';
import { Check, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE GRID */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1631556759511-6ce895fbf0ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2NpZW50aXN0fGVufDB8fDB8fHww"
                width={500}
                height={400}
                alt="Lab Research"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1624957485560-47747511b32f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
                width={500}
                height={400}
                alt="Scientist Working"
                className="w-full h-full object-cover"
              />
            </div>  

            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1578496481449-cf2e845cc00c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
                width={500}
                height={400}
                alt="Microscope Work"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1618053448748-b7251851d014?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNjaWVudGlzdHxlbnwwfHwwfHx8MA%3D%3D"
                width={500}
                height={400}
                alt="Lab Analysis"
                className="w-full h-full object-cover"
              />
            </div>          
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            <span className="text-black font-semibold tracking-wider text-sm">
              ABOUT US
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Leading The Future Of <br /> Scientific Exploration
            </h2>

            <p className="text-slate-600 max-w-xl">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Congue,
              Diam Ut Hendrerit Elementum, Dolor Metus Eleifend Erat, Vitae
              Scelerisque Massa Justo Non Dolor. Cras In Pulvinar Augue. Donec At
              Consequat Dui.
            </p>

            <ul className="space-y-3">
              {[
                "The Science Behind Our Success",
                "Innovating for a Better Tomorrow",
                "Beyond Boundaries: Our Scientific Mission",
                "Driven by Curiosity, Defined by Excellence",
                "Passion for Science, Commitment to Progress",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-700">
                  <Check className="w-5 h-5 text-blue-600" />
                  {item}
                </li>
              ))}   
            </ul>

            <button className="mt-4 flex items-center gap-2 px-6 py-3 bg-[#13405C] text-white rounded-full font-semibold hover:bg-[#13405C] transition cursor-pointer">
              VIEW RESEARCH
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom Right Microscope (decorative) */}
        <div className="absolute bottom-0 right-0 hidden lg:block opacity-100">
          <Image
            src="/aboutproduct.webp"
            width={200}
            height={200}
            alt="Microscope"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;