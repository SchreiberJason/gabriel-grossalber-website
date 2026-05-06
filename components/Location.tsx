const ADDRESS_QUERY =
  "OVB+B%C3%BCro+Siebenbrunnengasse+17%2FTop+5%2C+1050+Wien%2C+Austria";
const MAP_EMBED = `https://maps.google.com/maps?q=${ADDRESS_QUERY}&t=&z=17&ie=UTF8&iwloc=B&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${ADDRESS_QUERY}`;

export default function Location() {
  return (
    <section className="location" id="standort">
      <div className="container">
        <div className="section-head-big reveal">
          <div>
            <span className="eyebrow label">Standort Wien</span>
            <h2>
              Persönlich vor Ort,{" "}
              <em className="italic accent-text">im 5. Bezirk.</em>
            </h2>
          </div>
          <p className="desc">
            Das Wiener Büro liegt in der Siebenbrunnengasse, fußläufig zum
            Margaretengürtel. Termine bitte vorher vereinbaren – Beratungen
            finden ungestört statt.
          </p>
        </div>

        <div className="location-card reveal">
          <div className="location-info">
            <div className="location-address">
              <span className="eyebrow">Adresse</span>
              <h3>Siebenbrunnengasse 17/5</h3>
              <p className="sub">1050 Wien · Margareten</p>
            </div>

            <ul className="location-list">
              <li>
                <span className="k">Telefon</span>
                <span className="v">
                  <a href="tel:+436802138014">+43 680 213 80 14</a>
                </span>
              </li>
              <li>
                <span className="k">Termine</span>
                <span className="v">
                  Nach Vereinbarung – auch abends und am Samstag
                </span>
              </li>
              <li>
                <span className="k">Anfahrt</span>
                <span className="v">
                  U4 Margaretengürtel · 5 Min Fußweg
                  <br />
                  Tram 6, 18 (Bruno-Kreisky-Park)
                </span>
              </li>
              <li>
                <span className="k">Weitere</span>
                <span className="v">Linz · Steyr (auf Anfrage)</span>
              </li>
            </ul>

            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary location-cta"
            >
              <span className="ico" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              In Google Maps öffnen
              <span className="arrow">→</span>
            </a>
          </div>

          <div className="location-map">
            <iframe
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OVB Büro – Siebenbrunnengasse 17/Top 5, 1050 Wien"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
