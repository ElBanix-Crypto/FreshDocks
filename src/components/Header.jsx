import React from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { label: 'Categories', href: '#categories' },
  { label: 'Fishes', href: '#fish' },
  { label: 'Shellfish', href: '#shellfish' },
  { label: 'Bundles', href: '#bundles' },
  { label: 'Fresh Catch', href: '#fresh' },
  { label: 'Contacts', href: '#contact' },
  { label: 'About FreshDocks', href: '#about' }
];

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-lg text-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <a href="#top" className="text-lg font-black tracking-tight">
          FreshDocks
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#vendor-portal"
            className="rounded-full bg- px-5 py-2 text-sm font-semibold bg-amber-500 text-white transition hover:bg-emerald-300"
          >
            Vendor Portal
          </a>
        </div>

        <button
          type="button"
          className="rounded-full bg-amber-500 p-2 text-white lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-700"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#vendor-portal"
              className="mt-2 rounded-full bg-amber-500 px-5 py-2 text-center text-sm font-semibold text-white transition hover:bg-emerald-300"
              onClick={() => setMenuOpen(false)}
            >
              Vendor Portal
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}