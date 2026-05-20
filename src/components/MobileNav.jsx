import React from 'react';
import { FiHome, FiGrid, FiShoppingCart, FiInfo } from 'react-icons/fi';

const items = [
  { href: '#top', icon: FiHome, label: 'Home' },
  { href: '#wholesale', icon: FiGrid, label: 'Shop' },
  { href: '#vendor-portal', icon: FiShoppingCart, label: 'Vendors' },
  { href: '#about', icon: FiInfo, label: 'About' }
];

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-950/90 px-3 py-2 backdrop-blur-lg lg:hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex flex-col items-center justify-center rounded-2xl px-2 py-2 text-xs text-white/70 transition hover:bg-white/5 hover:text-white"
            >
              <Icon className="mb-1 text-lg" />
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}