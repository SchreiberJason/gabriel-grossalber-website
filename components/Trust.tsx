import Image from "next/image";
import type { CSSProperties } from "react";

const delay = (ms: number) =>
  ({ "--reveal-delay": `${ms}ms` } as CSSProperties);

export default function Trust() {
  return (
    <section className="trust" id="qualifikation">
      <div className="container">
        <div className="section-head-big reveal">
          <div>
            <span className="eyebrow label">Qualifikation</span>
            <h2>
              Staatlich geprüft.{" "}
              <em className="italic accent-text">Mehrfach zertifiziert.</em>
            </h2>
          </div>
          <p className="desc">
            Vertrauen entsteht nicht aus Versprechen, sondern aus geprüfter
            Qualifikation. Beide Gewerbeberechtigungen wurden in einer
            staatlichen Prüfung an der Wirtschaftskammer Österreich abgelegt –
            doppelte Befähigung, doppelte Sicherheit für dich.
          </p>
        </div>

        <div className="trust-grid">
          <div className="trust-card reveal">
            <div className="seal">
              <Image
                src="/siegel-vermoegensberatung.png"
                alt="Siegel Gewerbliche Vermögensberatung – staatlich geprüft"
                width={220}
                height={220}
                sizes="220px"
              />
            </div>
            <div className="trust-text">
              <span className="eyebrow">Befähigung 01</span>
              <h3>Gewerbliche Vermögensberatung</h3>
              <p>
                Veranlagung, Vorsorge, Finanzierung. Reglementiertes Gewerbe
                nach §136a GewO – staatlich geprüfte Befähigung.
              </p>
            </div>
          </div>

          <div className="trust-card reveal" style={delay(100)}>
            <div className="seal">
              <Image
                src="/siegel-versicherungsagent.png"
                alt="Siegel Versicherungsagent – staatlich geprüft"
                width={220}
                height={220}
                sizes="220px"
              />
            </div>
            <div className="trust-text">
              <span className="eyebrow">Befähigung 02</span>
              <h3>Versicherungsagent</h3>
              <p>
                Ungebundene Vermittlung von Sach-, Personen- und
                Lebensversicherungen. Staatliche Befähigungsprüfung,
                eingetragen im GISA der WKO.
              </p>
            </div>
          </div>
        </div>

        <div className="trust-meta reveal" style={delay(200)}>
          <div className="meta-item">
            <span className="k">Aufsicht</span>
            <span className="v">WKO &amp; Gewerbebehörde Österreich</span>
          </div>
          <div className="meta-item">
            <span className="k">Berufshaftpflicht</span>
            <span className="v">Gesetzlich verpflichtend, durchgehend gedeckt</span>
          </div>
          <div className="meta-item">
            <span className="k">Weiterbildung</span>
            <span className="v">Über gesetzlicher IDD-Pflicht</span>
          </div>
        </div>
      </div>
    </section>
  );
}
