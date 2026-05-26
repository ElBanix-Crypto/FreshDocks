 import React, { useCallback, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import Header from './components/Header';
import Hero from './components/Hero';
import VendorSpotlight from './components/VendorSportlight';
import Marketplace from './components/Marketplace';
import CartPanel from './components/CartPanel';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';

import { vendors } from './data/vendors';
import { products } from './data/products';
import { formatCurrency } from './utils/format';

export default function App() {
  const [pricing, setPricing] = useState('household');
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const priceFor = useCallback(
    (product) => (pricing === 'wholesale' ? product.wholesale : product.household),
    [pricing]
  );

  const addToCart = useCallback(
    (product) => {
      setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id);

        if (existing) {
          return prev.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          );
        }

        return [
          ...prev,
          {
            ...product,
            price: pricing === 'wholesale' ? product.wholesale : product.household,
            qty: 1
          }
        ];
      });
    },
    [pricing]
  );

  const updateQty = useCallback((id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  }, []);

  const removeItem = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  const checkoutText = useMemo(() => {
    const lines =
      cart.length > 0
        ? cart
            .map(
              (item) =>
                `- ${item.name} x${item.qty} (${formatCurrency(item.price)} each)`
            )
            .join('\n')
        : '- No items yet';

    return `FreshDocks HQ Order\nPricing: ${pricing.toUpperCase()}\n${lines}\nTotal: ${formatCurrency(total)}\nPlease confirm delivery.`;
  }, [cart, pricing, total]);

  return (
    <div className="min-h-screen text-white bg-gradient-to-b from-orange-900/80 via-white/10 to-slate-950">
      <Helmet>
        <title>FreshDocks | Premium Seafood Marketplace</title>
        <meta
          name="description"
          content="FreshDocks connects Bonny Island fishermen and Vendors to premium seafood buyers with wholesale and household pricing."
        />
        <meta property="og:title" content="FreshDocks" />
        <meta
          property="og:description"
          content="Premium seafood marketplace for Bonny Island."
        />
      </Helmet>

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Hero pricing={pricing} setPricing={setPricing}>
          <VendorSpotlight vendors={vendors} />
        </Hero>

        <section className="mx-auto w-full max-w-7xl px-2 sm:px-4 md:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid gap-8 md:gap-10 lg:grid-cols-2">
            <Marketplace
              products={products}
              priceFor={priceFor}
              onAdd={addToCart}
            />

            <CartPanel
              cart={cart}
              pricing={pricing}
              total={total}
              checkoutText={checkoutText}
              onUpdateQty={updateQty}
              onRemoveItem={removeItem}
              onPricingChange={setPricing}
            />
          </div>
        </section>

        <AboutSection />
      </main>

      <Footer />
      <MobileNav />
    </div>
  );
}