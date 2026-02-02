'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, Search, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', href: '/', hasDropdown: true },
    { label: 'SERVICES', href: '/services', hasDropdown: true },
    { label: 'PORTFOLIO', href: '/portfolio', hasDropdown: true },
    { label: 'BLOG', href: '/blog', hasDropdown: true },
    { label: 'CONTACT US', href: '/contact', hasDropdown: false },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative">
              <span className="text-3xl font-bold text-slate-900 tracking-tight">
                Lab<span className="relative inline-block">
                  <span className="text-slate-900">o</span>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-6">
                    <svg viewBox="0 0 24 24" className="w-full h-full text-cyan-500">
                      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="12" cy="8" r="2" fill="currentColor"/>
                      <path d="M12 10 L12 16 M8 14 L16 14" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                </span>Ziks
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-cyan-600 transition-colors duration-200"
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 duration-200" />
                )}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Phone */}
            <Link
              href="tel:+18000016583"
              className="hidden md:flex items-center gap-2 text-slate-700 hover:text-cyan-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold text-sm">+1800-001-658</span>
            </Link>

            {/* Search */}
            <button
              className="p-2 text-slate-600 hover:text-cyan-600 transition-colors duration-200 curser-pointer"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button
              className="relative p-2 text-slate-600 hover:text-cyan-600 transition-colors duration-200 curser-pointer"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 text-white text-xs font-bold rounded-full flex items-center justify-center curser-pointer">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-black transition-colors duration-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 animate-fadeIn">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-2 text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              ))}
              <Link
                href="tel:+18000016583"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 hover:text-cyan-600 hover:bg-slate-50 rounded transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                +1800-001-658
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
