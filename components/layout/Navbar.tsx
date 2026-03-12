'use client';

import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const navLinks = [
  { label: 'Nos offres', href: '#offres' },
  { label: 'Nos jeux', href: '#jeux' },
  { label: 'Album 2025', href: '#album' },
  { label: 'À propos', href: '#apropos' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-green flex items-center justify-center text-white font-bold text-lg">
              Y
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">YouCanwin</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-green-600 transition">
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-green text-white px-5 py-2.5 rounded-full hover:shadow-lg hover:opacity-90 transition transform hover:-translate-y-0.5 flex items-center gap-1"
            >
              Demander une démo
              <ChevronRight size={14} />
            </a>
          </div>

          <button
            className="md:hidden text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-sm font-medium text-gray-600 hover:text-green-600"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block w-full text-center px-4 py-2.5 bg-gradient-green text-white text-sm font-semibold rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              Demander une démo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
