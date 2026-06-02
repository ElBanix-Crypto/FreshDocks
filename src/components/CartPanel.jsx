import React from 'react';
import { FiMinus, FiPlus, FiTrash2, FiMessageCircle } from 'react-icons/fi';
import SectionTitle from './SectionTitle';
import { createWhatsAppLink } from '../utils/walink';

const HQ_PHONE = '+2348024369034';

export default function CartPanel({
  cart,
  pricing,
  total,
  checkoutText,
  onUpdateQty,
  onRemoveItem,
  onPricingChange
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 md:p-8 backdrop-blur-sm">
      <SectionTitle
        eyebrow="Cart"
        title="WhatsApp checkout"
        subtitle="Your order is compiled and sent directly to FreshDocks HQ."
      />

      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 p-1 w-full max-w-xs mx-auto md:mx-0 md:max-w-full">
        <button
          type="button"
          onClick={() => onPricingChange('household')}
          className={`flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition ${
            pricing === 'household' ? 'bg-white text-slate-950' : 'text-white/70'
          }`}
        >
          Household
        </button>
        <button
          type="button"
          onClick={() => onPricingChange('wholesale')}
          className={`flex-1 rounded-xl px-4 py-2 text-sm font-semibold transition ${
            pricing === 'wholesale' ? 'bg-white text-slate-950' : 'text-white/70'
          }`}
        >
          Wholesale
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {cart.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/10 p-6 text-sm text-white/55">
            Your cart is empty.
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 p-4"
            >
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-white/55">
                  {item.qty} × {item.price.toLocaleString('en-NG')} NGN
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onUpdateQty(item.id, -1)}
                  className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/15"
                  aria-label="Decrease quantity"
                >
                  <FiMinus />
                </button>
                <button
                  type="button"
                  onClick={() => onUpdateQty(item.id, 1)}
                  className="rounded-full bg-white/10 p-2 text-white transition hover:bg-white/15"
                  aria-label="Increase quantity"
                >
                  <FiPlus />
                </button>
                <button
                  type="button"
                  onClick={() => onRemoveItem(item.id)}
                  className="rounded-full bg-red-500/15 p-2 text-red-300 transition hover:bg-red-500/25"
                  aria-label="Remove item"
                >
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <span className="text-sm text-white/70">Total</span>
        <span className="text-2xl font-black">
          {total.toLocaleString('en-NG')} NGN
        </span>
      </div>

      <a
        href={createWhatsAppLink(HQ_PHONE, checkoutText)}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-emerald-300"
      >
        <FiMessageCircle /> Send Order 
      </a>
    </section>
  );
}