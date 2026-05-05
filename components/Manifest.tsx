import type { CSSProperties } from "react";

const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` } as CSSProperties);

export default function Manifest() {
  return (
    <section className="manifest">
      <div className="container">
        <p
          className="eyebrow reveal"
          style={{ marginBottom: 28, display: "block" }}
        >
          Worum es mir geht
        </p>
        <h2 className="manifest-quote reveal">
          Geld ist <em>persönlich</em>. Beratung sollte das auch sein.
        </h2>
        <div className="manifest-meta reveal" style={delay(120)}>
          <p>
            Die meisten Menschen wachsen ohne finanzielle Grundbildung auf.
            Online kursieren halbwahre Tipps von TikTok-Coaches. Banken
            verkaufen, was im Regal steht. Versicherungsvertreter:innen drücken
            aufs Tempo.
          </p>
          <p>
            Mein Job ist das Gegenteil: zuhören, ordnen, vergleichen, erklären.
            Nicht jeder braucht das gleiche Produkt – aber jede:r verdient eine
            Beratung, die ehrlich ist, und Antworten, die man nachvollziehen
            kann.
          </p>
        </div>
      </div>
    </section>
  );
}
