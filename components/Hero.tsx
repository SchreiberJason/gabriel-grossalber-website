import Image from "next/image";
import type { CSSProperties } from "react";
import { asset } from "@/lib/asset";

const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` } as CSSProperties);

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content reveal">
            <div className="hero-eyebrow">
              <span className="eyebrow">
                Ungebundene Beratung · Wien · Linz · Steyr
              </span>
            </div>
            <h1 className="hero-headline">
              <span className="row">Klarheit</span>
              <span className="row">
                über <em>dein Geld.</em>
              </span>
              <span className="row sub">Ohne Provisionsdruck.</span>
            </h1>

            <p className="lead hero-lead">
              Hi, ich bin Gabriel. Ich helfe dir, Klarheit über deine Finanzen,
              Versicherungen und Verträge zu bekommen – mit ehrlichen
              Marktvergleichen und einer Betreuung, die nicht nach dem Abschluss
              aufhört.
            </p>

            <div className="hero-actions">
              <a href="#kontakt" className="btn btn-primary">
                Erstgespräch <span className="arrow">→</span>
              </a>
              <a href="#leistungen" className="btn btn-ghost">
                Was ich mache
              </a>
            </div>

            <ul className="hero-trust">
              <li>
                <span className="dot" /> Staatlich geprüft
              </li>
              <li>
                <span className="dot" /> Ungebundener Marktvergleich
              </li>
              <li>
                <span className="dot" /> Für dich kostenfrei
              </li>
            </ul>
          </div>

          <div className="hero-photo reveal" style={delay(120)}>
            <div className="photo-frame">
              <Image
                src={asset("/gabriel-portrait.webp")}
                alt="Gabriel Großalber"
                fill
                sizes="(max-width: 960px) 70vw, 480px"
                priority
              />
            </div>
            <div className="photo-tag">
              <span className="k">Berater</span>
              <span className="v">Gabriel Großalber</span>
            </div>
          </div>
        </div>

        <div className="hero-strip reveal" style={delay(180)}>
          <div className="strip-item">
            <div className="v">4+</div>
            <div className="k">Jahre Erfahrung</div>
          </div>
          <div className="strip-item">
            <div className="v">3</div>
            <div className="k">Standorte in Österreich</div>
          </div>
          <div className="strip-item">
            <div className="v">100%</div>
            <div className="k">Marktvergleich, ungebunden</div>
          </div>
          <div className="strip-item">
            <div className="v">0 €</div>
            <div className="k">Beratung, Vermittlung, Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}
