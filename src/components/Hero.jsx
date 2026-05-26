import React from 'react';

export default function Hero({ pricing, setPricing, children }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="min-h-[92vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/freshdocks-hero-seafood-PVDLJzMesW4MHfZBD7vo2C.webp')" }}
      >
        <div className="w-full min-h-[92vh] flex items-center justify-center bg-black/40">
          <div className="mx-auto flex flex-col items-center justify-center max-w-7xl px-2 sm:px-4 md:px-8 py-8 md:py-14 w-full">
            <div className="max-w-3xl w-full text-center">
              <p className="text-xs font-semibold uppercase rounded-3xl bg-amber-500 tracking-[0.35em] text-slate-700 px-2 py-1 inline-block">
                Bonny Island Premium Seafood
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                Seafood marketplace for premium buyers and trusted Fishermen and Vendors.
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-white/80 text-center">
                FreshDocks connects Bonny Island fishermen and vendors to hotels, families, caterers, and wholesale buyers with live pricing and direct WhatsApp checkout.
              </p>

              <div className="mt-6 flex flex-col sm:inline-flex rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-md w-full max-w-xs mx-auto">
                <div className="flex">
                  <button
                    type="button"
                    onClick={() => setPricing('household')}
                    className={`flex-1 rounded-full px-5 py-2 text-sm font-semibold transition ${
                      pricing === 'household'
                        ? 'bg-white text-slate-950'
                        : 'text-white/80'
                    }`}
                  >
                    Household
                  </button>
                  <button
                    type="button"
                    onClick={() => setPricing('wholesale')}
                    className={`flex-1 rounded-full px-5 py-2 text-sm font-semibold transition ${
                      pricing === 'wholesale'
                        ? 'bg-white text-slate-950'
                        : 'text-white/80'
                    }`}
                  >
                    Wholesale
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}