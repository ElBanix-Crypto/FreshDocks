import React from 'react';
import SectionTitle from './SectionTitle';
import VendorCard from './VendorCard';

export default function VendorSpotlight({ vendors }) {
  return (
    <section className="pb-8 pt-12 items-center w-full" id="vendor-portal">
      <SectionTitle
            eyebrow="Our Vendors"
        title="Trusted Local Fishermen"
        subtitle="Tap any vendor to open a direct WhatsApp conversation."
              />

      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible w-full">
        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} {...vendor} />
        ))}
      </div>
    </section>
  );
}