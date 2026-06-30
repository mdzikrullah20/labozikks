'use client';

import { ArrowRight } from 'lucide-react';

const portfolio = [
  {
    title: 'Molecular Research',
    category: 'Genetics',
    image:
      'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Chemical Laboratory',
    category: 'Chemistry',
    image:
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'DNA Analysis',
    category: 'Biotechnology',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Medical Research',
    category: 'Healthcare',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Advanced Testing',
    category: 'Laboratory',
    image:
      'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Scientific Innovation',
    category: 'Research',
    image:
      'https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Portfolio
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Our Latest Research & Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
            Explore some of our innovative laboratory projects, scientific
            research, and breakthrough discoveries.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent opacity-90" />

                <span className="absolute left-5 top-5 rounded-full bg-cyan-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                  {item.category}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-400">
                  Innovative scientific research powered by advanced laboratory
                  technology and precision-driven methodologies.
                </p>

                <button className="mt-6 flex items-center gap-2 font-semibold text-cyan-400 transition-all group-hover:gap-4">
                  View Project
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-900/30 to-slate-900 p-12 text-center">
          <h3 className="text-3xl font-bold text-white">
            Looking for a Research Partner?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            We collaborate with universities, healthcare organizations, and
            industry leaders to deliver innovative scientific solutions.
          </p>

          <button className="mt-8 rounded-full bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600">
            Start Collaboration
          </button>
        </div>
      </div>
    </section>
  );
}