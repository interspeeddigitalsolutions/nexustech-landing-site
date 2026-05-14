"use client"

import { useEffect, useRef, useState } from "react"

export function Hero() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={ref} className="relative h-screen flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Premium abstract technology background"
          className={`w-full h-full object-cover transition-transform duration-[2s] ease-out ${visible ? "scale-100" : "scale-110"
            }`}
        />
        {/* Layered Overlays for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-foreground/10 opacity-90" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-16 md:px-12 lg:px-20 md:pb-20">
        <div className="max-w-5xl">
          <div
            className={`overflow-hidden mb-6 transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <div className="inline-flex items-center gap-3">
              <div className="w-8 h-px bg-background/50" />
              <p className="text-[11px] tracking-[0.3em] uppercase text-background/70 font-medium">
                AI-first Software Company — USA & Global Clients
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h1 className="text-[clamp(2.25rem,6vw,5.5rem)] font-extralight leading-[1.05] tracking-[-0.03em] text-background text-balance drop-shadow-2xl">
              We build smart software solutions
              <br className="hidden md:block" />
              for businesses ready to grow.
            </h1>
          </div>

          <div
            className={`mt-8 max-w-2xl transition-all duration-1000 delay-900 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            {/* <p className="text-lg md:text-xl font-light text-background/80 leading-relaxed mb-10 drop-shadow-md">
              Nexus Tech Solution helps companies design, develop, and launch modern web applications, AI-powered platforms, automation systems, and custom business software.
            </p> */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-background text-foreground text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-background/90"
              >
                Let’s Build Together
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border border-background/20 text-background text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-background/10"
              >
                Explore Our Work
              </a>
            </div>
          </div>
        </div>

        <div
          className={`mt-16 md:mt-20 flex items-center gap-6 transition-all duration-1000 delay-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <div className="w-12 h-px bg-background/30" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-background/40">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  )
}
