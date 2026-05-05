export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="#top" className="brand">
              <span>Gabriel Großalber</span>
              <span className="dot" />
            </a>
            <p className="footer-tagline">
              Gewerblicher Vermögensberater & Versicherungsagent. Ungebundene
              Beratung an drei Standorten.
            </p>
          </div>
          <div>
            <h4>Bereiche</h4>
            <ul>
              <li><a href="#leistungen">Vermögensaufbau</a></li>
              <li><a href="#leistungen">Vorsorge & Pension</a></li>
              <li><a href="#leistungen">Versicherungen</a></li>
              <li><a href="#leistungen">Finanzierungen</a></li>
              <li><a href="#leistungen">Firmenkund:innen</a></li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li><a href="tel:+436802138014">+43 680 213 80 14</a></li>
              <li><a href="mailto:office@grossalber.at">office@grossalber.at</a></li>
              <li>Siebenbrunnengasse 17/5</li>
              <li>1050 Wien</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Gabriel Großalber · Alle Rechte vorbehalten</span>
          <span>Impressum · Datenschutz · Erstinformation</span>
        </div>
      </div>
    </footer>
  );
}
