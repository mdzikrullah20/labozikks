'use client';

import {
  ArrowRight,
  Microscope,
  FlaskConical,
  Dna,
  ShieldCheck,
  Beaker,
  Cpu,
  CheckCircle2,
} from 'lucide-react';

const services = [
  {
    icon: Microscope,
    title: 'Laboratory Testing',
    description:
      'Accurate laboratory testing with advanced instruments and internationally accepted quality standards.',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: FlaskConical,
    title: 'Chemical Analysis',
    description:
      'Comprehensive chemical analysis for pharmaceutical, environmental and industrial applications.',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: Dna,
    title: 'Molecular Biology',
    description:
      'Modern DNA, RNA and genetic research solutions for scientific innovation.',
    image:
      'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: Beaker,
    title: 'Research & Development',
    description:
      'Innovative R&D services supporting healthcare, biotechnology and scientific discoveries.',
    image:
      'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description:
      'Reliable quality control processes ensuring precision, compliance and consistency.',
    image:
      'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    icon: Cpu,
    title: 'Advanced Technology',
    description:
      'State-of-the-art laboratory equipment powered by modern scientific technology.',
    image:
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-sl-950 text-whit">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=1600&q=80')",
          }}
        />

        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <h1 className="text-5xl md:text-7xl font-bold max-w-4xl">
            Scientific Excellence Through{' '}
            <span className="text-cyan-400">Innovation</span>
          </h1>

          <p className="mt-6 text-slate-300 text-lg max-w-2xl">
            We provide world-class laboratory services, research solutions,
            molecular analysis, and scientific innovations.
          </p>

          <button className="mt-10 flex items-center gap-2 rounded-full border-2 border-cyan-400 bg-[#13405C] px-8 py-4 font-semibold hover:bg-cyan-600 transition">
            Explore Services
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Our Laboratory Services</h2>
          <p className="mt-5 text-slate-400 max-w-3xl mx-auto">
            Combining cutting-edge technology with experienced scientists.
          </p>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="group rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/70 hover:border-cyan-500 transition duration-500 hover:-translate-y-2"
                >

                  {/* IMAGE */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/50" />

                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-cyan-500/20 px-3 py-1 rounded-full">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs text-cyan-300">
                        Service
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <h3 className="text-2xl font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-slate-400">
                      {service.description}
                    </p>

                    <button className="mt-6 flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1698421947098-d68176a8f5b2?q=80&w=452&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-full object-cover"
              alt="Lab"
            />
          </div>

          {/* TEXT */}
          <div>

            <h2 className="text-4xl font-bold">
              Trusted Laboratory Solutions
            </h2>

            <p className="text-slate-400 mt-6">
              Our labs combine innovation, precision, and expert scientists.
            </p>

            <div className="mt-10 space-y-5">

              {[
                'Certified Laboratory Standards',
                'Experienced Scientific Team',
                'Advanced Testing Equipment',
                'Fast & Accurate Reporting',
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="text-cyan-400 w-6 h-6" />
                  <span>{item}</span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-[40px] bg-gradient-to-r from-cyan-600 to-blue-700 p-14 text-center">

            <h2 className="text-4xl font-bold">
              Ready to Start Your Research?
            </h2>

            <p className="mt-5 text-cyan-100">
              Let’s build scientific excellence together.
            </p>

            <button className="mt-10 rounded-full bg-white text-slate-900 px-8 py-4 font-semibold hover:bg-slate-100 transition">
              Contact Our Experts
            </button>

          </div>

        </div>
      </section>

    </main>
  );
}