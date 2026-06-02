import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t-4 border-amber-500 bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 py-10 md:py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* Contacts & Email */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-amber-500">Contact Us</h3>
            <ul className="space-y-1">
              <li>Phone: <a href="tel:+2348024369034" className="hover:underline text-amber-500">+234 802 436 9034</a></li>
              <li>Email: <a href="mailto:freshdocks1@gmail.com" className="hover:underline text-amber-500">freshdocks1@gmail.com</a></li>
              <li>Address: Bonny Island, Rivers State, Nigeria</li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-amber-500">Policies</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline text-amber-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline text-amber-500">Terms of Service</a></li>
              <li><a href="#" className="hover:underline text-amber-500">Return Policy</a></li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-amber-500">FAQ</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline text-amber-500">How do I order?</a></li>
              <li><a href="#" className="hover:underline text-amber-500">Delivery Information</a></li>
              <li><a href="#" className="hover:underline text-amber-500">Vendor Registration</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <p>© {new Date().getFullYear()} <span className="font-semibold text-amber-500">FreshDocks</span>, A Product of SoftLife Innovation. All rights reserved.</p>
          <p className="flex items-center gap-2"><span className="inline-block px-2 py-1 rounded bg-amber-500 text-gray-900 font-bold text-xs">PREMIUM</span> Bonny Island seafood marketplace.</p>
        </div>
      </div>
    </footer>
  );
}