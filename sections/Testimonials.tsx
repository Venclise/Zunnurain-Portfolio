"use client";

import { testimonials } from "@/lib/constants";
import Marquee from "react-fast-marquee";

export default function Testimonials() {
  return (
    <section className="w-full py-24 overflow-hidden " id="testimonials">

        <h2 className="font-semibold text-xl lg:text-2xl m-5">See what my client's say about me</h2>
      
      {/* LEFT → RIGHT */}
      <Marquee
        speed={25}
        gradient={false}
        pauseOnHover
        className="mb-10"
      >
        <MarqueeRow />
      </Marquee>

      {/* RIGHT → LEFT */}
      <Marquee
        speed={22}
        direction="right"
        gradient={false}
        pauseOnHover
      >
        <MarqueeRow />
      </Marquee>

    </section>
  );
}

/* ---------- Row ---------- */
function MarqueeRow() {
  return (
    <div className="flex gap-6 px-6">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className="
            w-[320px]
            shrink-0
            rounded-2xl
            bg-muted/40
            p-6
            shadow-sm
          "
        >
          <p className="mb-4 text-sm leading-relaxed text-foreground/90">
            “{t.message}”
          </p>

          <div className="text-xs text-muted-foreground">
            <span className="font-medium text-foreground">{t.name}</span> —{" "}
            {t.role}, {t.company}
          </div>
        </div>
      ))}
    </div>
  );
}
