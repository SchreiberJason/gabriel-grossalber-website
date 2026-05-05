export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <a href="#top" className="brand">
          <span>Gabriel Großalber</span>
          <span className="dot" />
        </a>
        <ul className="nav-links">
          <li><a href="#ueber">Über mich</a></li>
          <li><a href="#leistungen">Leistungen</a></li>
          <li><a href="#prinzipien">Prinzipien</a></li>
          <li><a href="#ablauf">Ablauf</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className="nav-cta">
          <a className="btn btn-ghost" href="tel:+436802138014">
            +43 680 213 80 14
          </a>
          <a className="btn btn-primary" href="#kontakt">
            Termin anfragen
          </a>
        </div>
      </div>
    </header>
  );
}
