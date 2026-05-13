import Image from "next/image";
import type { CSSProperties } from "react";
import { asset } from "@/lib/asset";

const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` } as CSSProperties);

const CV = [
  {
    year: "2022",
    title: "Prüfung Vermögensberater",
    detail: "Spezialisierung Finanzierung & Veranlagung",
  },
  {
    year: "2023",
    title: "Matura · Gewerbe Vermögensberatung",
    detail: "Start der eigenständigen Beratung in Steyr & Linz",
  },
  {
    year: "2024",
    title: "Gewerbe Versicherungsvermittlung",
    detail: "Erweiterung um ungebundenen Versicherungs-Marktvergleich",
  },
  {
    year: "2025",
    title: "Standort Wien",
    detail: "Drittes Büro im 5. Bezirk – Energie- und Immobilienberatung",
  },
];

export default function About() {
  return (
    <section id="ueber">
      <div className="container">
        <div className="section-head-big reveal">
          <div>
            <span className="eyebrow label">Über mich</span>
            <h2>
              Wer bin ich,{" "}
              <em className="italic accent-text">warum mache ich das?</em>
            </h2>
          </div>
          <p className="desc">
            Ich glaube, finanzielle Klarheit ist keine Frage des Einkommens,
            sondern der Information. Die meisten Menschen wissen nicht, was sie
            haben – und zahlen dafür.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-photo reveal">
            <Image
              src={asset("/gabriel-portrait-2.webp")}
              alt="Gabriel Großalber"
              width={1400}
              height={2100}
              sizes="(max-width: 880px) 100vw, 40vw"
            />
          </div>
          <div className="about-text reveal" style={delay(120)}>
            <p>
              Mein Weg in die Branche startete schon während der HTL. Noch vor
              der Matura habe ich 2022 die Prüfung zum Vermögensberater abgelegt
              und 2023 das eigene Gewerbe angemeldet. 2024 kam die
              Versicherungsvermittlung dazu. Heute bin ich an drei Standorten
              tätig: Steyr, Linz – und seit 2025 auch in Wien.
            </p>
            <p className="highlight">
              „Ich habe kein eigenes Produkt. Ich suche das beste vom Markt –
              und erkläre dir, warum es das beste für dich ist."
            </p>
            <p>
              Was meine Kund:innen schätzen: Transparenz, klare Erklärungen,
              schnelle Erreichbarkeit – auch am Wochenende. Servicetermine ohne
              Abschluss-Zwang. Und einen Berater, dem die langfristige Beziehung
              wichtiger ist als die nächste Provision.
            </p>
            <p>
              Neben der Kundenarbeit bilde ich neue Mitarbeiter:innen aus, halte
              regelmäßig interne Seminare und gehe deutlich über die gesetzliche
              Weiterbildungspflicht hinaus.
            </p>
            <div className="cv-list">
              {CV.map((row) => (
                <div className="cv-row" key={row.year}>
                  <div className="year">{row.year}</div>
                  <div className="what">
                    <strong>{row.title}</strong> · {row.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
