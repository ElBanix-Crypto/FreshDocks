import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-6 md:py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-2 sm:px-4 text-sm text-white/55 md:flex-row lg:px-8 w-full">
        <p>© {new Date().getFullYear()} FreshDocks, A Product of SoftLife Innovation. All rights reserved.</p>
        <p>Bonny Island premium seafood marketplace.</p>
      </div>
    </footer>
  );
}