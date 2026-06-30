'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone,
  Search,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: 'HOME', href: '/', hasDropdown: true },
    { label: 'SERVICES', href: '/services', hasDropdown: true },
    { label: 'PORTFOLIO', href: '/portfolio', hasDropdown: true },
    { label: 'BLOG', href: '/blog', hasDropdown: true },
    { label: 'CONTACT US', href: '/contact', hasDropdown: false },
  ];

  // close search on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setSearchOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link href="/" className="text-3xl font-bold text-slate-900">
            Labo<span className="text-cyan-500">Ziks</span>
          </Link>

          {/* NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-cyan-600 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">

            {/* SEARCH BUTTON */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:text-cyan-600 cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* CART */}
            <button className="relative p-2 hover:text-cyan-600 cursor-pointer">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            {/* MOBILE */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 cursor-pointer"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔍 SEARCH DROPDOWN */}
      {searchOpen && (
        <div
          ref={searchRef}
          className="border-t bg-white shadow-md animate-fadeIn"
        >
          <div className="max-w-7xl mx-auto p-4 flex items-center gap-3">

            <input
              type="text"
              placeholder="Search services, blogs, portfolio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-slate-300 rounded-full px-5 py-3 outline-none focus:border-cyan-500"
            />

            <button
              onClick={() => setSearchOpen(false)}
              className="p-3 bg-slate-100 rounded-full hover:bg-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t p-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-700 hover:text-cyan-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

    </header>
  );
};

export default Header;