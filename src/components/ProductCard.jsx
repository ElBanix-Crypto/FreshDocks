import React, { memo, useCallback, useMemo, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const FALLBACK_IMAGE = '/freshdocks-hero-seafood-PVDLJzMesW4MHfZBD7vo2C.webp';

const ProductCard = memo(function ProductCard({
  id,
  label,
  name,
  price,
  unit,
  images = [],
  product,
  onAdd
}) {
  const [index, setIndex] = useState(0);

  const slides = useMemo(
    () => (images.length > 0 ? images : [FALLBACK_IMAGE]),
    [images]
  );

  const prev = useCallback(() => {
    setIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  }, [slides.length]);

  const next = useCallback(() => {
    setIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  }, [slides.length]);

  const handleAdd = useCallback(() => {
    onAdd(product);
  }, [onAdd, product]);

  return (
    <div
      id={id}
      className="rounded-2xl border border-white/10 bg-slate-900/60 p-3 sm:p-4 flex flex-col h-full"
    >
      <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
        {label}
      </p>
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>

      <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((src, i) => (
            <img
              key={`${name}-${i}`}
              src={src}
              alt={`${name} image ${i + 1}`}
              className="h-40 sm:h-48 w-full shrink-0 object-cover"
              loading={i === 0 ? 'eager' : 'lazy'}
              width="800"
              height="600"
            />
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="rounded-full bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/15"
            aria-label="Previous image"
          >
            <FiArrowLeft />
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-full bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/15"
            aria-label="Next image"
          >
            <FiArrowRight />
          </button>
        </div>

        <span className="text-xs text-white/55">
          {index + 1} / {slides.length}
        </span>
      </div>

      <p className="mt-3 text-2xl font-black">{price}</p>
      <p className="text-sm text-white/55">{unit}</p>

      <button
        onClick={handleAdd}
        className="mt-4 w-full rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-emerald-100"
      >
        Add to Cart
      </button>
    </div>
  );
});

export default ProductCard;