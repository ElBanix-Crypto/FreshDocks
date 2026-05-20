import React from 'react';

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-4 sm:mb-6">
      <p className="text-xs sm:text-sm font-semibold text-center uppercase tracking-[0.3em] text-emerald-400">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-black text-white text-center">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-xs sm:text-sm md:text-base text-white/65 text-center mx-auto">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}