import React from 'react';
import SectionTitle from './SectionTitle';
import VendorCard from './VendorCard';
import Marquee from "react-fast-marquee"

export default function VendorSpotlight({ vendors }) {
  return (
    <section className="pb-8 pt-12 w-full" id="vendor-portal">
      <SectionTitle
        eyebrow="Our Vendors"
        title="Trusted Local Fishermen"
        subtitle="Tap any vendor to open a direct WhatsApp conversation."
      />

      <div className="w-[75%] mx-auto">
          <marquee style={{width: "100%"}} speed={100} pauseOnHover={true} gradient={true}>
            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible w-full">
                {vendors.map((vendor) => (
                <VendorCard key={vendor.id} {...vendor} />
              ))}
            </div>
          </marquee>
        </div>
    </section>
  );
}