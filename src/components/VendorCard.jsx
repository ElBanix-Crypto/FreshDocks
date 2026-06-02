import React, { memo, useCallback } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import { createWhatsAppLink } from '../utils/walink';
import Marquee from "react-fast-marquee"

const VendorCard = memo(function VendorCard({ name, role, image, phone }) {
  const message = `Hello ${name}, I want to order seafood from FreshDocks.`;

  const handleClick = useCallback(() => {
    window.open(createWhatsAppLink(phone, message), '_blank', 'noopener,noreferrer');
  }, [phone, message]);

  return (
    <div className="min-w-[16rem] max-w-xs w-full snap-start rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md shrink-0 md:shrink md:w-auto">
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="h-16 w-16 rounded-full object-cover ring-2 ring-white/30"
          loading="lazy"
          width="64"
          height="64"
        />
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-white/70">{role}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleClick}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
      >
        <FiMessageCircle /> WhatsApp Direct
      </button>
    </div>
  );
});

export default VendorCard;