import Image from "next/image";
import type { CSSProperties } from "react";

const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` } as CSSProperties);

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="reveal">
          <div className="hero-eyebrow">
            <span className="eyebrow">
              Unabhängige Beratung · Wien · Linz · Steyr
            </span>
          </div>
          <h1 className="hero-headline">
            <span className="row">Finanzen, die</span>
            <span className="row">
              <em>zu dir</em>
              <span className="photo-inline">
                <Image
                  src="/gabriel.png"
                  alt=""
                  fill
                  sizes="(max-width: 760px) 90px, (max-width: 1200px) 18vw, 260px"
                  priority
                />
              </span>
              passen.
            </span>
            <span className="row">Nicht zur Provision.</span>
          </h1>
        </div>

        <div className="hero-bottom reveal" style={delay(120)}>
          <p className="lead hero-lead">
            Hi, ich bin Gabriel. Ich helfe dir, Klarheit über deine Finanzen,
            Versicherungen und Verträge zu bekommen – mit ehrlichen
            Marktvergleichen, verständlichen Erklärungen und einer Betreuung,
            die nicht nach dem Abschluss aufhört.
          </p>
          <div className="hero-actions">
            <a href="#kontakt" className="btn btn-primary">
              Erstgespräch <span className="arrow">→</span>
            </a>
            <a href="#leistungen" className="btn btn-ghost">
              Was ich mache
            </a>
          </div>
        </div>

        <div className="hero-strip reveal" style={delay(180)}>
          <div className="strip-item">
            <div className="k">Tätig seit</div>
            <div className="v">2021</div>
          </div>
          <div className="strip-item">
            <div className="k">Standorte</div>
            <div className="v">Wien · Linz · Steyr</div>
          </div>
          <div className="strip-item">
            <div className="k">Markt</div>
            <div className="v">Ungebunden</div>
          </div>
          <div className="strip-item">
            <div className="k">Erstgespräch</div>
            <div className="v">Kostenlos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
