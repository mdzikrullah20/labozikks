'use client';

import { Calendar, User, ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: 'Breakthrough in Molecular Diagnostics',
    author: 'Dr. Sarah Johnson',
    date: 'June 2026',
    image:
      'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Advancements in Genetic Research',
    author: 'Dr. Michael Lee',
    date: 'May 2026',
    image:
      'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'AI in Modern Laboratory Testing',
    author: 'Dr. Emily Carter',
    date: 'April 2026',
    image:
      'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function BlogSection() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.25em] text-cyan-400">
            OUR BLOG
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Latest Research & Insights
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Explore scientific discoveries, laboratory innovations, and
            industry insights from our expert researchers.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/70 hover:border-cyan-500 transition duration-500 hover:-translate-y-2"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">

                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4 text-cyan-400" />
                    {blog.author}
                  </div>

                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    {blog.date}
                  </div>

                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold leading-snug group-hover:text-cyan-400 transition">
                  {blog.title}
                </h3>

                {/* Button */}
                <button className="mt-6 flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button className="rounded-full border-2 border-cyan-400 bg-[#13405C] px-8 py-4 font-semibold hover:bg-cyan-600 transition">
            View All Blogs
          </button>
        </div>

      </div>
    </section>
  );
}