import Link from "next/link";

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
              <li><Link href="/#leistungen">Vermögensaufbau</Link></li>
              <li><Link href="/#leistungen">Vorsorge & Pension</Link></li>
              <li><Link href="/#leistungen">Versicherungen</Link></li>
              <li><Link href="/#leistungen">Finanzierungen</Link></li>
              <li><Link href="/#leistungen">Firmenkund:innen</Link></li>
            </ul>
          </div>
          <div>
            <h4>Standorte</h4>
            <ul>
              <li><Link href="/wien/">Finanzberatung Wien</Link></li>
              <li><Link href="/linz/">Finanzberatung Linz</Link></li>
              <li><Link href="/steyr/">Finanzberatung Steyr</Link></li>
            </ul>
          </div>
          <div>
            <h4>Kontakt</h4>
            <ul>
              <li><a href="tel:+436802138014">+43 680 213 80 14</a></li>
              <li><a href="mailto:office@gabriel-grossalber.at">office@gabriel-grossalber.at</a></li>
              <li>Siebenbrunnengasse 17/5</li>
              <li>1050 Wien</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Gabriel Großalber · Alle Rechte vorbehalten</span>
          <span className="footer-legal">
            <Link href="/impressum">Impressum &amp; Offenlegung</Link>
            <Link href="/impressum#datenschutz">Datenschutz</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
