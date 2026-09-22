"use client";

import { useState } from "react";
import Animations from "./animations";

const projects = [
  { image: "/projects/mgm-hospital.jpg", title: "MGM Hospital", category: "Healthcare Building" },
  { image: "/projects/mgm-polytechnic.jpg", title: "MGM Polytechnic", category: "Educational Building" },
  { image: "/projects/mgm-university.jpeg", title: "MGM University", category: "Institutional Building" },
  { image: "/projects/sant-tukaram-natyagruha.webp", title: "Sant Tukaram Natyagruha", category: "Cultural Building" },
  { image: "/projects/santukaram-hall.jpg", title: "Santukaram Hall", category: "Building Construction" },
  { image: "/projects/shreyash-college-hostel.jpg", title: "Shreyash College Hostel", category: "Hostel Building" },
];

const expertise = [
  { number: "01", title: "Industrial Construction", description: "Industrial buildings, factories, warehouses, manufacturing facilities, industrial sheds and production units." },
  { number: "02", title: "Commercial Construction", description: "Commercial buildings, office buildings, showrooms, retail spaces and corporate facilities." },
  { number: "03", title: "Infrastructure Development", description: "Civil infrastructure, roads, site development, drainage systems and utility infrastructure." },
  { number: "04", title: "Residential Construction", description: "Residential buildings, villas, apartments, residential complexes and civil and structural works." },
  { number: "05", title: "Turnkey Projects", description: "Integrated project execution from planning and engineering coordination through construction, finishing and final handover." },
];

const machinery = ["JCB", "Poclain", "Grader", "Roller", "Ajax", "Tractor", "Site Vehicles", "Project Equipment"];

const leadership = [
  { image: "/images/grandfather.jpg", name: "Grandfather", role: "Founding Inspiration & Family Legacy" },
  { image: "/images/father.jpg", name: "Father", role: "Senior Advisor & Construction Mentor" },
  { image: "/images/amaan.jpg", name: "Amaan Habib Shaikh", role: "Proprietor & Business Lead" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="overflow-x-hidden bg-[#080808] text-white">
      <Animations />

      {/* NAVBAR */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#c9a96e]/20 bg-[#080808]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <a href="#" onClick={closeMenu} className="relative z-50">
            <img src="/images/dason-logo.jpg" alt="Dason Buildcom Logo" className="h-12 w-auto max-w-[180px] object-contain" />
          </a>

          <div className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.18em] md:flex">
            <a href="#expertise" className="nav-link">Expertise</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <a href="#contact" className="hidden border border-[#c9a96e] px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-[#e6c991] transition hover:bg-[#c9a96e] hover:text-black md:block">Get In Touch</a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-white/20 md:hidden" aria-label="Toggle menu">
            <span className={`h-px w-5 bg-white transition ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-px w-5 bg-white transition ${menuOpen ? "-rotate-45" : ""}`} />
          </button>
        </div>

        <div className={`overflow-hidden bg-[#080808] transition-all duration-500 md:hidden ${menuOpen ? "max-h-96 border-t border-white/10" : "max-h-0"}`}>
          <div className="flex flex-col px-6 py-5">
            {["expertise", "projects", "about", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={closeMenu} className="border-b border-white/10 py-5 text-xs uppercase tracking-[0.2em]">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-screen items-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2400&q=90')" }}>
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        <div className="hero-vignette absolute inset-0" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-40 md:px-10">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#c9a96e] md:text-sm">Construction • Infrastructure • Industrial • Turnkey Projects</p>

          <h1 className="max-w-6xl text-6xl font-semibold uppercase leading-[0.82] tracking-[-0.07em] md:text-8xl lg:text-[9rem]">
            DASON
            <br />
            <span className="gold-gradient">BUILDCOM</span>
          </h1>

          <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-lg leading-8 text-white/65 md:text-xl">Building Trust. Creating Value. Delivering Excellence.</p>
            <a href="#projects" className="btn-gold w-fit">Explore Our Work ↗</a>
          </div>
        </div>

        <div className="absolute bottom-8 left-6 text-[10px] uppercase tracking-[0.3em] text-white/40 md:left-10">Maharashtra • India</div>
      </section>

      {/* INTRO */}
      <section className="section-padding">
        <div className="site-container">
          <div className="grid gap-12 md:grid-cols-[0.5fr_1.5fr]">
            <p className="section-label">Who We Are</p>
            <div>
              <h2 className="text-4xl leading-tight tracking-[-0.04em] md:text-6xl">We don&apos;t just construct buildings — we build trust, infrastructure and long-term value.</h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <p className="text-white/50">Dason Buildcom is a professionally managed construction and infrastructure company committed to delivering high-quality, reliable and cost-effective construction solutions across industrial, commercial, infrastructure and civil construction sectors.</p>
                <p className="text-white/50">Our approach combines technical expertise, experienced manpower, modern construction practices and systematic project management — from initial planning and execution to completion and handover.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* EXPERTISE */}
      <section id="expertise" className="border-y border-white/10">
        <div className="site-container section-padding">
          <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-label">What We Do</p>
              <h2 className="mt-7 text-5xl leading-none md:text-7xl">Our<br />Expertise</h2>
            </div>
            <div className="border-t border-white/10">
              {expertise.map((item) => (
                <div key={item.number} className="border-b border-white/10 py-8 transition hover:border-[#c9a96e]">
                  <span className="text-xs text-[#c9a96e]">{item.number}</span>
                  <h3 className="mt-3 text-2xl md:text-4xl">{item.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-7 text-white/45">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-[#0d0d0d]">
        <div className="site-container section-padding">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="section-label">Selected Work</p>
              <h2 className="mt-6 text-5xl md:text-7xl">Projects</h2>
            </div>
            <p className="max-w-xl text-white/45">A selection of building and infrastructure works delivered through planning, site execution and quality control.</p>
          </div>

          <div className="mt-16 grid gap-7 md:grid-cols-2">
            {projects.map((project, index) => (
              <div key={project.title} className="project-card group">
                <img src={project.image} alt={project.title} className="project-image premium-photo h-[420px] md:h-[540px]" />
                <div className="project-overlay" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#e6c991]">{String(index + 1).padStart(2, "0")} / Project</p>
                  <h3 className="mt-3 text-2xl md:text-3xl">{project.title}</h3>
                  <p className="mt-2 text-sm text-white/50">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10">
        <div className="site-container section-padding">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
            {[["5+", "Years Experience"], ["6+", "Projects & Works"], ["8+", "Equipment & Machinery"], ["100%", "Execution Focus"]].map(([number, label]) => (
              <div key={label}>
                <div className="stat-number">{number}</div>
                <p className="stat-label mt-4">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#0d0d0d]">
        <div className="site-container section-padding">
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <p className="section-label">About Dason</p>
              <h2 className="mt-7 text-5xl leading-none md:text-7xl">Built on<br />Experience.</h2>
            </div>
            <div className="space-y-7 text-white/50">
              <p className="text-xl leading-9 text-white/80">Every project is more than just a structure — it is a long-term investment, and our responsibility is to build it with quality, precision and integrity.</p>
              <p>Our vision is to establish Dason Buildcom as a trusted and professionally recognized construction company by delivering innovative, sustainable and high-quality infrastructure and building solutions.</p>
              <p>Our mission is to deliver every project with superior quality, professional engineering, safe construction practices, timely execution, cost efficiency and customer-focused service.</p>
              <p>We continuously strive to improve our processes, technology and capabilities to create greater value for our clients.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* LEADERSHIP */}
      <section className="border-y border-white/10">
        <div className="site-container section-padding">
          <p className="section-label">Our Legacy</p>
          <h2 className="mt-6 text-5xl leading-none md:text-7xl">Leadership &<br />Family Legacy</h2>

          <p className="mt-10 max-w-2xl text-white/45">
            Dason Buildcom is supported by a family-rooted construction background. The family&apos;s construction journey began with our grandfather, whose contribution represents the foundation of construction knowledge, values and practical experience carried forward by the next generation.
          </p>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 md:grid-cols-3">
            {leadership.map((person) => (
              <div key={person.name} className="premium-card overflow-hidden">
                <img src={person.image} alt={person.name} className="premium-photo h-[320px] w-full object-cover object-top" />
                <div className="p-7">
                  <h3 className="text-xl md:text-2xl">{person.name}</h3>
                  <p className="mt-2 text-sm text-[#c9a96e]">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MACHINERY */}
      <section className="border-y border-white/10">
        <div className="site-container section-padding">
          <p className="section-label">Our Resources</p>
          <h2 className="mt-6 text-5xl md:text-7xl">Machinery<br />& Equipment</h2>

          <div className="mt-14 grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 md:grid-cols-4">
            {machinery.map((item, index) => (
              <div key={item} className="bg-[#080808] p-7 transition hover:bg-[#18150f]">
                <span className="text-xs text-[#c9a96e]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-10 text-xl">{item}</h3>
                <p className="mt-3 text-sm text-white/40">Project support and operations</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DASON */}
      <section className="bg-[#0d0d0d]">
        <div className="site-container section-padding">
          <div className="grid gap-14 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-label">Why Dason</p>
              <h2 className="mt-6 text-5xl leading-none md:text-7xl">Built to<br />Deliver.</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                ["01", "Experience", "Experienced professionals and project teams working together to achieve project objectives."],
                ["02", "Quality", "Strong focus on quality materials, workmanship and construction practices."],
                ["03", "Timely Execution", "Detailed planning and continuous monitoring to achieve project schedules."],
                ["04", "Technical Capability", "Engineering-oriented approach to construction and project execution."],
              ].map(([number, title, desc]) => (
                <div key={number} className="premium-card p-7 md:p-8">
                  <span className="text-xs text-[#c9a96e]">{number}</span>
                  <h3 className="mt-12 text-xl md:text-2xl">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/40">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-y border-white/10">
        <div className="site-container section-padding">
          <p className="section-label">Our Capability</p>
          <h2 className="mt-8 text-5xl leading-none md:text-8xl">Engineering.<br />Execution.<br />Reliability.</h2>

          <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center">
            <p className="max-w-xl text-white/45">Our capabilities support projects from initial site preparation through execution, completion and handover — with a single-point of responsibility from commencement to completion.</p>
            <a href="#contact" className="btn-outline w-fit">Discuss a Project</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#f5f3ed] text-black">
        <div className="site-container section-padding">
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-black/40">Contact</p>
              <h2 className="mt-7 text-5xl leading-none tracking-[-0.05em] md:text-8xl">Let&apos;s Build<br />Together.</h2>
              <p className="mt-10 max-w-lg text-lg leading-8 text-black/50">Have a construction, infrastructure or civil project in mind? Get in touch with our team.</p>
              <p className="mt-8 max-w-lg text-sm leading-7 text-black/50">Plot No 2, Sayhdrinagar N-5, CIDCO,<br />Near Chisteya Chowk, Aurangabad, Maharashtra</p>
            </div>

            <div className="flex flex-col justify-end">
              <a href="mailto:dasonbuildcom01@gmail.com" className="flex justify-between border-t border-black/20 py-6 text-sm"><span>dasonbuildcom01@gmail.com</span><span>↗</span></a>
              <a href="tel:+919271333313" className="flex justify-between border-y border-black/20 py-6 text-sm"><span>+91 92713 33313</span><span>↗</span></a>
              <a href="mailto:dasonbuildcom01@gmail.com" className="mt-8 flex justify-center bg-black px-8 py-5 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-neutral-800">Send Enquiry</a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="site-container py-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <img src="/images/dason-logo.jpg" alt="Dason Buildcom Logo" className="h-16 w-auto max-w-[200px] object-contain" />
              <p className="mt-5 text-sm text-white/40">Construction | Infrastructure | Industrial | Turnkey Projects</p>
            </div>

            <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[0.2em] text-white/40">
              <a href="#expertise" className="hover:text-[#c9a96e]">Expertise</a>
              <a href="#projects" className="hover:text-[#c9a96e]">Projects</a>
              <a href="#about" className="hover:text-[#c9a96e]">About</a>
              <a href="#contact" className="hover:text-[#c9a96e]">Contact</a>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.15em] text-white/25">© 2026 Dason Buildcom. All Rights Reserved.</div>
        </div>
      </footer>

      {/* WHATSAPP BUTTON */}
      <a href="https://wa.me/919271333313" target="_blank" rel="noopener noreferrer" aria-label="Contact Dason Buildcom on WhatsApp" className="whatsapp-float">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 0 1-4-.9L3 21l1.9-4.8A8.5 8.5 0 1 1 21 11.5Z" />
          <path d="M8 9.5c.3 2 2.5 4.2 4.5 4.5" />
        </svg>
      </a>
    </main>
  );
}