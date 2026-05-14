"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const stats = [
  { value: "01", label: "AI-first Approach" },
  { value: "02", label: "Healthcare, GIS, Recruitment & SaaS Experience" },
  { value: "03", label: "Custom Web & Business Software" },
  { value: "04", label: "Global-ready Remote Development Team" },
]

export function StudioSection() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal(0.15)
  const { ref: bodyRef, isVisible: bodyVisible } = useScrollReveal(0.1)

  return (
    <section id="about" className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-foreground text-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
        <div
          ref={headRef}
          className={`transition-all duration-1000 ${headVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-background/40 mb-8">
            About Nexus Tech
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extralight leading-[1.15] tracking-tight text-balance">
            We are an AI-first software company building practical digital solutions.
          </h2>
        </div>

        <div
          ref={bodyRef}
          className={`flex flex-col justify-end gap-10 transition-all duration-1000 delay-200 ${bodyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="flex flex-col gap-6 max-w-lg">
            <p className="text-sm leading-[1.75] text-background/55">
              Nexus Tech Solution is a software development company focused on building modern, scalable, and business-ready applications. We work with companies that need reliable technology partners to design, develop, and improve their digital products.
            </p>
            <p className="text-sm leading-[1.75] text-background/55">
              Our team works across web applications, AI-powered tools, healthcare platforms, recruitment systems, GIS and remote sensing solutions, telemedicine, business automation, and custom software development.
            </p>
            <p className="text-sm leading-[1.75] text-background/55">
              Whether you need a new product, a custom internal platform, AI integration, API development, cloud deployment, or ongoing technical support, Nexus Tech can help you move from concept to execution.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 pt-10 border-t border-background/10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-extralight text-background tracking-tight">
                  {stat.value}
                </p>
                <p className="text-[10px] tracking-[0.1em] uppercase text-background/35 mt-2 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
