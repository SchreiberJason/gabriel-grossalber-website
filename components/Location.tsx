const MAP_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=16.353%2C48.182%2C16.367%2C48.190&layer=mapnik&marker=48.18636%2C16.35990";

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
        <div className="location-grid reveal">
          <div className="location-info">
            <h2>Siebenbrunnengasse 17/5</h2>
            <p className="sub">1050 Wien · Margareten</p>
            <div className="location-detail">
              <div className="label">Telefon</div>
              <div className="value">
                <a href="tel:+436802138014">+43 680 213 80 14</a>
              </div>
            </div>
            <div className="location-detail">
              <div className="label">Termine</div>
              <div className="value">
                Nach Vereinbarung – auch abends und am Samstag.
              </div>
            </div>
            <div className="location-detail">
              <div className="label">Anfahrt</div>
              <div className="value">
                U4 Margaretengürtel, 5 Min Fußweg
                <br />
                Tram 6, 18 (Bruno-Kreisky-Park)
              </div>
            </div>
            <div className="location-detail">
              <div className="label">Auch in</div>
              <div className="value">Linz · Steyr (auf Anfrage)</div>
            </div>
            <a
              href="https://www.openstreetmap.org/?mlat=48.18636&mlon=16.35990#map=17/48.18636/16.35990"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ alignSelf: "flex-start", marginTop: 8 }}
            >
              In Karten öffnen <span className="arrow">→</span>
            </a>
          </div>
          <div className="map-frame">
            <iframe
              src={MAP_SRC}
              loading="lazy"
              title="Karte – Siebenbrunnengasse 17, 1050 Wien"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
