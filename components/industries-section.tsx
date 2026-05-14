"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const industries = [
  {
    title: "Healthcare",
    description: "Appointment booking, telemedicine, digital prescriptions, lab systems, patient portals, and healthcare admin dashboards.",
  },
  {
    title: "Recruitment & HR",
    description: "Job platforms, candidate screening, video interviews, AI-based evaluation, and recruitment workflow automation.",
  },
  {
    title: "Agriculture & GIS",
    description: "Satellite data platforms, field monitoring, vegetation analysis, soil and water insights, and geospatial dashboards.",
  },
  {
    title: "Professional Services",
    description: "Client portals, booking systems, service marketplaces, CRM tools, and internal business management software.",
  },
  {
    title: "Startups & SaaS",
    description: "MVP development, product design, scalable web apps, subscription platforms, and API-based systems.",
  },
  {
    title: "Enterprise & Internal Tools",
    description: "Custom dashboards, reporting tools, workflow systems, automation platforms, and operational software.",
  },
]

export function IndustriesSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
      <div
        ref={ref}
        className={`mb-20 pb-6 border-b border-background/10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-3">
          Industries We Serve
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-background">
          Software for real business use cases
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {industries.map((industry, index) => (
          <div
            key={industry.title}
            className={`transition-all duration-700`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <h3 className="text-xl font-light tracking-tight text-background mb-4">
              {industry.title}
            </h3>
            <p className="text-sm leading-relaxed text-background/50 font-light">
              {industry.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
