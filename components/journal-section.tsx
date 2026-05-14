"use client"

import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const services = [
  {
    title: "Custom Software Development",
    description: "We build web applications, admin dashboards, SaaS platforms, business portals, and internal management systems based on your exact business needs.",
    id: "01",
  },
  {
    title: "AI Integration & Automation",
    description: "We integrate AI into existing or new platforms, including AI chat, document analysis, content generation, and workflow automation.",
    id: "02",
  },
  {
    title: "Web Application Development",
    description: "We develop modern frontend and backend systems using technologies like React, Next.js, Node.js, TypeScript, Python, and Django.",
    id: "03",
  },
  {
    title: "Healthcare Software Solutions",
    description: "We build healthcare platforms such as appointment booking systems, telemedicine apps, and patient management systems.",
    id: "04",
  },
  {
    title: "Recruitment & HR Tech Solutions",
    description: "We create recruitment platforms with job posting, candidate screening, video interview, and hiring workflow management.",
    id: "05",
  },
  {
    title: "GIS & Remote Sensing Platforms",
    description: "We develop map-based platforms, satellite data visualization systems, and geospatial dashboards for field monitoring.",
    id: "06",
  },
  {
    title: "API Development & Third-party Integration",
    description: "We connect systems using APIs, payment gateways, AI services, communication tools, and cloud services.",
    id: "07",
  },
  {
    title: "Cloud Deployment & DevOps Support",
    description: "We help deploy, manage, and maintain applications on cloud servers with secure hosting, Docker, and production-ready infrastructure.",
    id: "08",
  },
]

function ServiceEntry({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`group flex flex-col md:flex-row items-start md:items-center justify-between py-10 md:py-12 gap-6 transition-all duration-700 border-b border-border ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-10 flex-1">
        <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40 shrink-0 w-24 tabular-nums mt-1.5">
          {service.id}
        </span>
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-light tracking-tight text-foreground mb-4">
            {service.title}
          </h3>
          <p className="text-sm md:text-base font-light text-muted-foreground/70 leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-5 shrink-0 self-end md:self-center">
        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
          <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-background transition-all duration-500" />
        </div>
      </div>
    </div>
  )
}

export function JournalSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="services" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <div
        ref={ref}
        className={`mb-10 pb-6 border-b border-border transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
          What We Offer
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground">
          Services
        </h2>
      </div>

      <div className="flex flex-col">
        {services.map((service, index) => (
          <ServiceEntry key={service.title} service={service} index={index} />
        ))}
      </div>
    </section>
  )
}
