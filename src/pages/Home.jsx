import React from 'react'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh]">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent pointer-events-none" />
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-4">A House of Design</h1>
          <p className="text-neutral-700 leading-relaxed mb-6">Creating harmonious, luxurious spaces that transcend the ordinary through bihemispherical aesthetics and uncompromising craftsmanship.</p>
          <Link to="/portfolio" className="inline-block uppercase tracking-wide text-sm px-6 py-3 border border-neutral-900 hover:bg-neutral-900 hover:text-white transition">Discover Our Work</Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-serif mb-6">Design for a Luxurious Life</h2>
        <p className="text-neutral-700 leading-relaxed whitespace-pre-line">{"Raven & Lack is a house of design that creates homes of distinction across Australia, Europe, and the Middle East. With offices in both the Gold Coast and London, we bring over 40 years of combined experience to every project, crafting spaces that are wholly unique and individually tailored to meet the needs of our clients.\n\nWe create harmonious, cohesive spaces that evoke our philosophy of luxury as approachable, engaging, and above all, liveable."}</p>
      </section>

      {/* Three Pillars */}
      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-medium tracking-wide mb-3">Discovery</h3>
          <p className="text-neutral-700 leading-relaxed">Bihemispherical aesthetics inspired by our travels across continents. We source from the corners of the world, discovering exceptional craftsmen and rare materials that bring unmatched character to every space.</p>
        </div>
        <div>
          <h3 className="font-medium tracking-wide mb-3">Creation</h3>
          <p className="text-neutral-700 leading-relaxed">Bespoke furniture and piece unique designs crafted specifically for each project. Our in-house design team sculpts rooms piece by piece, ensuring every element is considered and purposeful.</p>
        </div>
        <div>
          <h3 className="font-medium tracking-wide mb-3">Curation</h3>
          <p className="text-neutral-700 leading-relaxed">Full-scope interior architecture that tells your story. We conceptualise complete homes through a collaborative approach that merges contemporary innovation with timeless elegance.</p>
        </div>
      </section>

      {/* Featured Work Teaser */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-serif">Selected Works</h3>
          <p className="text-neutral-700">From waterfront estates in Sovereign Islands to penthouses overlooking the Thames, each project represents our commitment to exceptional design.</p>
        </div>
        <Link to="/portfolio" className="inline-flex items-center gap-2 uppercase tracking-wide text-sm px-6 py-3 border border-neutral-900 hover:bg-neutral-900 hover:text-white transition">View Portfolio</Link>
      </section>
    </div>
  )
}
