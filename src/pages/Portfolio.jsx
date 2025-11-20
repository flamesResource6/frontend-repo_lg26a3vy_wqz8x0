import React from 'react'

export default function Portfolio() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-6 pb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-10">Portfolio</h1>
        <p className="text-neutral-700 leading-relaxed mb-12">From waterfront estates on the Gold Coast to penthouses in London's most prestigious postcodes, our portfolio represents a commitment to exceptional design that transcends geographical boundaries.</p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-xl font-serif mb-2">Australian Projects</h2>
            <p className="text-neutral-700">Our Australian portfolio showcases luxury residences across South East Queensland's most coveted locations, from Sovereign Islands' waterfront estates to Brisbane's boutique penthouses.</p>
          </div>
          <div>
            <h2 className="text-xl font-serif mb-2">International Projects</h2>
            <p className="text-neutral-700">With projects spanning London, the Middle East, and beyond, our international work demonstrates our ability to adapt our design philosophy to diverse cultural contexts while maintaining our commitment to luxury and refinement.</p>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-12">
          <h3 className="text-lg font-medium mb-6">Brittanic Crescent Residence</h3>
          <div className="text-neutral-700 text-sm space-y-1 mb-4">
            <div>Location: "Sovereign Islands, Queensland"</div>
            <div>Size: "2,000 sqm"</div>
            <div>Services: "Interior Design, FF&E, Procurement"</div>
          </div>
          <p className="text-neutral-700 leading-relaxed">This waterfront estate exemplifies our approach to luxury living in Australia's premier residential enclave. Working closely with the client, we created a sophisticated yet liveable home that maximises the spectacular water views while providing intimate spaces for family life. Custom furniture pieces and carefully sourced materials from our international suppliers create a unique aesthetic that bridges European elegance with Queensland's relaxed luxury.</p>
        </div>
      </section>
    </div>
  )
}
