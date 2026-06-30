'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = '918084872966'; 

    const text = `Hello Laboziks Team 👋%0A
Name: ${form.name}%0A
Email: ${form.email}%0A
Message: ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, '_blank');
  };

  return (
    <main className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative py-28 text-center bg-slate-900">
        <h1 className="text-5xl font-bold">
          Contact <span className="text-cyan-400">Laboziks</span>
        </h1>

        <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
          Get in touch with our scientific experts for research, testing, and collaboration opportunities.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12">

        {/* CONTACT INFO */}
        <div className="space-y-8">

          <div className="flex items-center gap-4">
            <Phone className="text-cyan-400" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-slate-400">+91 8084872966 </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-cyan-400" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-slate-400">info@laboziks.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-cyan-400" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-slate-400">Hyderabad, Telangana, India</p>
            </div>
          </div>

          {/* MAP (optional) */}
          <div className="rounded-3xl overflow-hidden border border-slate-800 mt-10">
  <iframe
    className="w-full h-64"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31109.2!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c1a9c0f6c7%3A0x7d8c3c0f3a2c1a!2sChennai!5e0!3m2!1sen!2sin!4v0000000000000"
  />
</div>
        </div>

        {/* FORM */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

          <h2 className="text-3xl font-bold mb-6">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-slate-950 border border-slate-700 focus:border-cyan-500 outline-none"
              required
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition p-4 rounded-xl font-semibold"
            >
              Send via WhatsApp
              <Send className="w-5 h-5" />
            </button>

          </form>
        </div>

      </section>
    </main>
  );
}