"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const projects = [
  {
    title: "Jobflix",
    category: "AI Recruitment Platform",
    year: "2024",
    location: "Global",
    image: "/nexustech-projects/Jobflix.png",
    description: "A modern hiring platform designed to help companies manage job posts, candidate screening, video interviews, and AI-assisted evaluation.",
  },
  {
    title: "MyVisits",
    category: "Healthcare Appointment Platform",
    year: "2023",
    location: "Global",
    image: "/nexustech-projects/MyVisits.webp",
    description: "A healthcare booking system where patients can search providers, view available time slots, and connect with services more easily.",
  },
  {
    title: "Telemedicine Platform",
    category: "Video Consultation & Digital Prescription",
    year: "2023",
    location: "Global",
    image: "/nexustech-projects/Telemedicine Platform.webp",
    description: "A telemedicine solution that allows doctors and patients to connect through video consultation and manage digital prescriptions.",
  },
  {
    title: "LIS System",
    category: "Laboratory Information System",
    year: "2022",
    location: "Global",
    image: "/nexustech-projects/LIS System.webp",
    description: "A digital system for medical laboratories to manage patient records, test requests, reports, billing, and internal operations.",
  },
  {
    title: "Custom Business Automation",
    category: "Workflow Automation & Internal Tools",
    year: "2024",
    location: "Global",
    image: "/nexustech-projects/Custom Business Automation.png",
    description: "Tailor-made software tools that help businesses reduce manual work, organize operations, and improve productivity.",
  },
  {
    title: "AquaSafe Satellite Intelligence",
    category: "GIS & Remote Sensing for Public Safety",
    year: "2024",
    location: "Rural Areas",
    image: "/nexustech-projects/AquaSafe Satellite Intelligence.png",
    description: "A satellite-based solution designed to detect and monitor water bodies in remote areas to help prevent child drowning incidents through predictive analysis and environmental monitoring.",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const { ref, isVisible } = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`bg-background group cursor-pointer transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{ transitionDelay: `${(index % 2) * 150}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={`${project.title} - ${project.category}`}
          className={`w-full aspect-[4/3] object-cover transition-all duration-[800ms] ease-out ${hovered ? "scale-[1.04]" : "scale-100"
            }`}
        />
      </div>
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-4">
            <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 mt-1.5 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-lg md:text-xl font-light tracking-tight text-foreground mb-1">
                {project.title}
              </h3>
              <p className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground">
                {project.category}
              </p>
            </div>
          </div>
          <ArrowUpRight
            className={`h-4 w-4 text-muted-foreground/40 transition-all duration-300 mt-1.5 ${hovered ? "translate-x-0.5 -translate-y-0.5 text-foreground" : ""
              }`}
          />
        </div>
        <p className="text-sm font-light text-muted-foreground/70 leading-relaxed pl-9 max-w-md">
          {project.description}
        </p>
        <p className="text-[10px] tracking-[0.1em] uppercase text-muted-foreground/40 mt-6 pl-9">
          {project.location} / {project.year}
        </p>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal(0.05)

  return (
    <section id="projects" className="px-6 py-28 md:px-12 lg:px-20 md:py-36">
      <div
        ref={ref}
        className={`flex flex-col md:flex-row md:items-end justify-between mb-20 pb-6 border-b border-border transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
      >
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-extralight tracking-tight text-foreground mb-6">
            Projects & Solutions
          </h2>
          <p className="text-sm md:text-base font-light text-muted-foreground leading-relaxed">
            We work across healthcare, recruitment, agriculture intelligence, telemedicine, business automation, and AI-powered platforms. Our focus is to build practical software that solves real business problems.
          </p>
        </div>
        <span className="text-[11px] tracking-[0.15em] text-muted-foreground/50 mt-8 md:mt-0">
          ({String(projects.length).padStart(2, "0")}) Projects
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
