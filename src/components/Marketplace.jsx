import React, { useCallback } from 'react';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';

export default function Marketplace({ products, priceFor, onAdd }) {
  const handleAdd = useCallback(
    (product) => {
      onAdd(product);
    },
    [onAdd]
  );

  return (
    <section
      id="wholesale"
      className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 md:p-8 backdrop-blur-sm"
    >
      <SectionTitle
        eyebrow="Marketplace"
        title="Shop seafood by category"
        subtitle="Prices update instantly based on your active pricing mode."
      />

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.category}
            label={product.label}
            name={product.name}
            price={priceFor(product)}
            unit={product.unit}
            images={product.images}
            product={product}
            onAdd={handleAdd}
          />
        ))}
      </div>
    </section>
  );
}