"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const processes = [
  {
    number: "01",
    title: "Understand the Business",
    description:
      "We start by understanding your business goals, users, current problems, and the result you want to achieve. This helps us avoid unnecessary complexity and focus on what matters.",
  },
  {
    number: "02",
    title: "Plan the Right Solution",
    description:
      "We define the product structure, required features, technology stack, development roadmap, and delivery plan before starting development.",
  },
  {
    number: "03",
    title: "Design & Develop",
    description:
      "We build clean, modern, and scalable applications with a focus on performance, usability, security, and long-term maintainability.",
  },
  {
    number: "04",
    title: "Integrate Smart Technology",
    description:
      "Where useful, we add AI, automation, analytics, APIs, video communication, maps, cloud storage, or other advanced features to make the product more powerful.",
  },
  {
    number: "05",
    title: "Test, Launch & Improve",
    description:
      "We test the system, deploy it, monitor performance, fix issues, and continue improving based on user feedback and business needs.",
  },
]

function ProcessCard({ process, index }: { process: typeof processes[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.15)

  return (
    <div
      ref={ref}
      className={`bg-background p-8 md:p-12 group transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${(index % 3) * 120}ms` }}
    >
      <div className="flex items-start justify-between mb-10">
        <span className="text-[11px] tracking-[0.15em] text-muted-foreground/40">
          ({process.number})
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-extralight tracking-tight text-foreground mb-5 group-hover:translate-x-1 transition-transform duration-500">
        {process.title}
      </h3>
      <div className="w-8 h-px bg-border mb-5 group-hover:w-12 transition-all duration-500" />
      <p className="text-sm leading-[1.75] text-muted-foreground max-w-sm">
        {process.description}
      </p>
    </div>
  )
}

export function ApproachSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="process" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <div
        ref={ref}
        className={`mb-20 pb-6 border-b border-border transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Our Process
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground">
          How We Build
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {processes.map((process, index) => (
          <ProcessCard key={process.number} process={process} index={index} />
        ))}
      </div>
    </section>
  )
}
