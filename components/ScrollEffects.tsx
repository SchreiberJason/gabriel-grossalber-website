"use client";

import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");

    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
      );
      els.forEach((e) => io.observe(e));

      return () => io.disconnect();
    }
  }, []);

  useEffect(() => {
    const h = document.querySelector(".site-header");
    if (!h) return;
    const onScroll = () => {
      if (window.scrollY > 8) h.classList.add("scrolled");
      else h.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
