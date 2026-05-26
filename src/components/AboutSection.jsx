import React from 'react';
import SectionTitle from './SectionTitle';

export default function AboutSection() {
  return (
    <section id="about" className="mx-auto text-center w-full max-w-7xl px-2 sm:px-4 md:px-8 py-10 md:py-14">
      <div className="rounded-3xl border text-amber-500 border-white/10 bg-white/5 p-4 sm:p-6 md:p-8 backdrop-blur-sm">
        <SectionTitle
          eyebrow="About FreshDocks"
          title="Built for premium seafood trade"
          subtitle="FreshDocks is a modern Seafood marketplace connecting local fishermen and Vendors with serious buyers."
        />

        <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
            <h3 className="font-semibold">Direct sourcing</h3>
            <p className="mt-2 text-sm  text-white/65">
              Buyers connect straight to trusted vendors and reduce friction.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
            <h3 className="font-semibold">Live pricing</h3>
            <p className="mt-2 text-sm text-white/65">
              Toggle between household and wholesale pricing instantly.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
            <h3 className="font-semibold">Fast checkout</h3>
            <p className="mt-2 text-sm text-white/65">
              Orders are compiled and sent through WhatsApp for quick follow-up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}