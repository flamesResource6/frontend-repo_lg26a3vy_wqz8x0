import React from 'react'

export default function Contact() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 pt-6 pb-16">
        <h1 className="text-4xl md:text-5xl font-serif mb-10">Contact</h1>
        <p className="text-neutral-700 leading-relaxed mb-12">Begin your design journey with Raven & Lack. Whether you're planning a complete home transformation or seeking creative direction for a specific project, we'd love to hear from you.</p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="font-medium tracking-wide mb-2">Gold Coast Office</h2>
            <p className="text-neutral-700">Raven & Lack<br/>Gold Coast, Queensland<br/>Australia</p>
          </div>
          <div>
            <h2 className="font-medium tracking-wide mb-2">London Office</h2>
            <p className="text-neutral-700">Raven & Lack<br/>London<br/>United Kingdom</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-medium mb-2">Rae Underhill - Creative Director</h3>
            <p className="text-neutral-700">rae@ravenandlack.com<br/>AU +61 (0) 416 644 380<br/>UK +44 (0) 7500 887 155</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Adriel Lack - Creative Director</h3>
            <p className="text-neutral-700">adriel@ravenandlack.com<br/>AU +61 (0) 410 399 702<br/>UK +44 (0) 7747 190 001</p>
          </div>
        </div>

        <div className="mb-10">
          <p className="text-neutral-700">To discuss your project, please provide some initial details and a member of our team will be in touch shortly.</p>
        </div>

        <form className="grid grid-cols-1 gap-6 max-w-3xl">
          <input className="border border-neutral-300 px-4 py-3" placeholder="Name" />
          <input className="border border-neutral-300 px-4 py-3" placeholder="Email" />
          <input className="border border-neutral-300 px-4 py-3" placeholder="Phone" />
          <input className="border border-neutral-300 px-4 py-3" placeholder="Project Location" />
          <input className="border border-neutral-300 px-4 py-3" placeholder="Project Type (Residential/Commercial)" />
          <input className="border border-neutral-300 px-4 py-3" placeholder="Approximate Project Timeline" />
          <input className="border border-neutral-300 px-4 py-3" placeholder="How did you hear about us?" />
          <textarea className="border border-neutral-300 px-4 py-3 min-h-[140px]" placeholder="Project Description" />
          <button type="button" className="self-start uppercase tracking-wide text-sm px-6 py-3 border border-neutral-900 hover:bg-neutral-900 hover:text-white transition">Submit</button>
        </form>

        <div className="mt-10">
          <p className="text-neutral-700">We look forward to creating something exceptional together.</p>
        </div>
      </section>
    </div>
  )
}
