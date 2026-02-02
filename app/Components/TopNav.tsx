import React from 'react';
import { Github, Facebook, Instagram, MapPin, Mail } from 'lucide-react';
import Link from 'next/link';

const TopNav: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-200 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-sm">
          {/* Social Media Links */}
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com" 
              target="_blank"
              className="hover:text-cyan-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </Link>
            <Link 
              href="https://facebook.com" 
              target="_blank"
              className="hover:text-cyan-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link 
              href="https://instagram.com" 
              target="_blank"
              className="hover:text-cyan-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link 
              href="https://pinterest.com" 
              target="_blank"
              className="hover:text-cyan-400 transition-colors duration-200"
              aria-label="Pinterest"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0a12 12 0 0 0-4.37 23.18c-.1-.8-.2-2.13 0-3.05.18-.83 1.16-4.93 1.16-4.93s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.86 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.34-.24.99.5 1.8 1.48 1.8 1.77 0 3.14-1.87 3.14-4.56 0-2.38-1.71-4.05-4.15-4.05-2.83 0-4.49 2.12-4.49 4.31 0 .85.33 1.77.74 2.27.08.1.09.19.07.29-.08.31-.24 1-.28 1.14-.04.18-.15.22-.35.13-1.24-.58-2.02-2.4-2.02-3.87 0-3.14 2.28-6.03 6.58-6.03 3.45 0 6.14 2.46 6.14 5.75 0 3.43-2.16 6.19-5.16 6.19-1.01 0-1.96-.52-2.28-1.14 0 0-.5 1.9-.62 2.37-.22.87-.83 1.96-1.24 2.62A12 12 0 1 0 12 0z"/>
              </svg>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-6">
            <Link 
              href="mailto:info@peacefulgode.com"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@peacefulgode.com</span>
            </Link>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="hidden md:inline">128 Near Golden Mall London Eye</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
