"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const techCategories = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "Python", "Django", "DRF"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "PostGIS"],
  },
  {
    label: "AI & Automation",
    items: ["OpenAI", "Gemini", "Hugging Face", "Document AI", "Workflow Automation"],
  },
  {
    label: "Cloud & DevOps",
    items: ["Docker", "Linux", "Nginx", "Caddy", "PM2", "Google Cloud", "DigitalOcean"],
  },
  {
    label: "Specialized Tools",
    items: ["GIS", "Satellite Data", "WebRTC", "WebSocket", "Cloud Storage"],
  },
]

export function TechStack() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section className="px-6 py-28 md:px-12 lg:px-20 md:py-36 bg-background">
      <div
        ref={ref}
        className={`mb-20 pb-6 border-b border-border transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Technology
        </p>
        <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground mb-6">
          Modern tools for modern products
        </h2>
        <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-2xl">
          We use reliable and flexible technologies based on each project’s requirements. Our goal is to choose the right tools, not just trendy tools.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
        {techCategories.map((category, index) => (
          <div
            key={category.label}
            className={`transition-all duration-700`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <h3 className="text-[11px] tracking-[0.2em] uppercase text-foreground font-medium mb-6">
              {category.label}
            </h3>
            <ul className="flex flex-col gap-3">
              {category.items.map((item) => (
                <li key={item} className="text-sm font-light text-muted-foreground/70">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
