import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Youtube,
  Inbox,
  FileText,
  LayoutList,
  UserCheck,
  Rocket,
  ChevronRight,
  Linkedin,
  Instagram,
  Facebook,
} from "lucide-react";
import './App.css'

// Single-file React page. TailwindCSS assumed available.
// All copy based on user's provided content, lightly refined for clarity and polish.

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-bold text-xl tracking-tight">Tito • Virtual Assistant</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-gray-700">Services</a>
            <a href="#about" className="hover:text-gray-700">About</a>
            <a href="#cta" className="hover:text-gray-700">Free Trial</a>
            <a href="#contact" className="hover:text-gray-700">Contact</a>
            <a
              href="https://calendly.com/louierubillos19/30min"
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-gray-900 text-white hover:bg-black transition shadow-sm"
            >
              <Calendar className="w-4 h-4" /> Book a Call
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 relative">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-600 bg-gray-100 rounded-full px-3 py-1">
              <Clock className="w-3.5 h-3.5" /> Free 7‑Day Trial · Up to 3 hrs/day
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Your Dedicated Virtual Assistant – <span className="whitespace-nowrap">Free 7‑Day Trial</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl">
              Hi, I'm <span className="font-semibold">Tito</span> — your future go‑to Virtual Assistant.
              I know how valuable your time is. That's why I'm offering you something most VAs won't:
              <span className="font-semibold"> 7 days of support, up to 3 hours per day — completely free.</span>
              No hidden agenda, no strings attached.
            </p>
            <p className="mt-3 text-gray-700 max-w-3xl">
              During this trial, I'll handle the tasks that slow you down — admin, research, content support, or anything else you need — so you can focus on what really matters. Experience how much easier and more productive your day can be with the right VA by your side.
            </p>
            <p className="mt-3 text-gray-700 max-w-3xl">
              I've worked with coaches, content creators, and influencers across competitive industries. Every time, I bring value, efficiency, and peace of mind. I'd love to do the same for you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://calendly.com/louierubillos19/30min"
                className="group inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-gray-900 text-white hover:bg-black transition shadow-md"
              >
                <Calendar className="w-5 h-5" /> Book your free 15‑minute call
                <ChevronRight className="w-5 h-5 transition -mr-1 group-hover:translate-x-0.5" />
              </a>
              <span className="text-sm text-gray-600">Spots are limited — don't wait.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">Flexible support tailored to your goals. Delegate the busy work and focus on growth.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {/* Administrative Support */}
          <ServiceCard
            icon={<LayoutList className="w-6 h-6 text-blue-600" />}
            iconBg="bg-blue-100"
            title="Administrative Support"
            bullets={[
              "If daily tasks and admin work keep you from growth, it's time for an extra helping hand.",
              "I'm adaptable, quick to learn, and detail‑oriented — so you can focus on what truly drives your business forward.",
            ]}
          />

          {/* Social Media Management */}
          <ServiceCard
            icon={<UserCheck className="w-6 h-6 text-purple-600" />}
            iconBg="bg-purple-100"
            title="Social Media Management"
            bullets={[
              "Staying connected with your customers, fans, and colleagues doesn't have to be hard.",
              "I'll manage Facebook, Instagram, and LinkedIn — keeping your audience engaged with regular updates.",
            ]}
          />

          {/* Customer Support */}
          <ServiceCard
            icon={<Inbox className="w-6 h-6 text-green-600" />}
            iconBg="bg-green-100"
            title="Customer Support"
            bullets={[
              "Refund requests, failed transactions, checkout struggles — get reliable support.",
              "I bring extraordinary patience and professionalism to handle concerns, even in high‑emotion moments.",
            ]}
          />

          {/* Database Building & Research */}
          <ServiceCard
            icon={<FileText className="w-6 h-6 text-orange-600" />}
            iconBg="bg-orange-100"
            title="Database Building & Research"
            bullets={[
              "Stay on top of everything without spending time on repetitive tasks.",
              "Delegate the busy work so you can focus on strategy and growth opportunities.",
            ]}
          />

          {/* Project Management */}
          <ServiceCard
            icon={<Rocket className="w-6 h-6 text-red-600" />}
            iconBg="bg-red-100"
            title="Project Management"
            bullets={[
              "It's easy to lose track of progress — a dedicated project manager makes all the difference.",
              "With the right support, your projects run like a well‑oiled machine: organized, efficient, on schedule.",
            ]}
          />

          {/* Personal Assistant */}
          <ServiceCard
            icon={<UserCheck className="w-6 h-6 text-pink-600" />}
            iconBg="bg-pink-100"
            title="Personal Assistant"
            bullets={[
              "From preparing documents and marketing materials to booking travel — I can help.",
              "Get proactive, dependable support for your day‑to‑day.",
            ]}
          />

          {/* Email Marketing */}
          <ServiceCard
            icon={<Mail className="w-6 h-6 text-indigo-600" />}
            iconBg="bg-indigo-100"
            title="Email Marketing"
            bullets={[
              "Email is the lifeblood of every successful marketing campaign.",
              "I set up broadcasts, landing pages, and signup forms to engage your audience and grow your list.",
            ]}
          />

          {/* Content Management */}
          <ServiceCard
            icon={<LayoutList className="w-6 h-6 text-teal-600" />}
            iconBg="bg-teal-100"
            title="Content Management"
            bullets={[
              "WordPress, Wix, or another platform — I'll manage and update your site content.",
              "Keep your audience informed with your latest news, offers, and updates.",
            ]}
          />

          {/* YouTube Management */}
          <ServiceCard
            icon={<Youtube className="w-6 h-6 text-red-600" />}
            iconBg="bg-red-100"
            title="YouTube Management"
            bullets={[
              "Launching or already running a channel? I've got the editing, descriptions, and graphics handled.",
              "Focus on creating great content while I manage the back end.",
            ]}
          />
        </div>
      </section>

      {/* ABOUT / MICRO PROOF */}
      <section id="about" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why Work With Me</h2>
          <ul className="mt-6 grid md:grid-cols-3 gap-4 text-gray-700">
            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 mt-1" /> 7‑day risk‑free trial (up to 3 hrs/day)</li>
            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 mt-1" /> Experience with coaches, creators, and influencers</li>
            <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 mt-1" /> Detail‑oriented, fast learner, proactive communication</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="rounded-3xl bg-gray-900 text-white p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to reclaim your time?</h3>
          <p className="mt-2 text-gray-200 max-w-3xl">
            Book your free 15‑minute discovery call today and let's get started. Spots are limited, so don't wait!
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://calendly.com/louierubillos19/30min"
              className="group inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white text-gray-900 hover:bg-gray-100 transition shadow-md"
            >
              <Calendar className="w-5 h-5" /> Book Now
              <ChevronRight className="w-5 h-5 transition -mr-1 group-hover:translate-x-0.5" />
            </a>
            <span className="text-sm text-gray-300">No strings attached · No payment required</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
        <p className="mt-2 text-gray-600">Prefer email or a quick call? Reach out and I'll respond promptly.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
          <a href="mailto:loierubillos19@gmail.com" className="flex items-center gap-2 rounded-2xl border p-4 hover:bg-gray-50">
            <Mail className="w-4 h-4" /> loierubillos19@gmail.com
          </a>
          <a href="tel:+639606404635" className="flex items-center gap-2 rounded-2xl border p-4 hover:bg-gray-50">
            <Phone className="w-4 h-4" /> +639606404635
          </a>
          <div className="flex items-center gap-3 rounded-2xl border p-4">
            <a aria-label="LinkedIn" href="#" className="p-2 rounded-xl hover:bg-gray-100"><Linkedin className="w-4 h-4" /></a>
            <a aria-label="Instagram" href="#" className="p-2 rounded-xl hover:bg-gray-100"><Instagram className="w-4 h-4" /></a>
            <a aria-label="Facebook" href="#" className="p-2 rounded-xl hover:bg-gray-100"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Tito — Virtual Assistant. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-gray-800">Back to top</a>
            <a href="https://calendly.com/louierubillos19/30min" className="hover:text-gray-800">Free 15‑min Call</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, bullets, iconBg = "bg-gray-100" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border p-6 hover:shadow-sm bg-white"
    >
      <div className="flex items-center gap-3">
        <div className={`p-2.5 rounded-2xl ${iconBg}`}>{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-gray-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}