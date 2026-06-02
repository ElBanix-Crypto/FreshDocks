import React from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo-1.png';

const links = [
  { label: 'Categories', href: '#categories' },
  { label: 'Fishes', href: '#fish' },
  { label: 'Shellfish', href: '#shellfish' },
  { label: 'Bundles', href: '#bundles' },
  { label: 'Fresh Catch', href: '#fresh' },
  { label: 'Contacts', href: '#contact' },
  { label: 'About FreshDocks', href: '#about' },
];

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-lg text-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link to="/" className="text-lg font-black tracking-tight ba">
          <img src={logo} alt="FreshDocks Logo" className="h-20 w-20 " />
            FreshDocks
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-amber-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/vendor-registration"
            className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-300"
          >
            Vendor Registration
          </Link>
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
            <Link
              to="/vendor-registration"
              className="mt-2 rounded-full bg-amber-500 px-5 py-2 text-center text-sm font-semibold text-white transition hover:bg-emerald-300"
              onClick={() => setMenuOpen(false)}
            >
              Vendor Registration
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
} 