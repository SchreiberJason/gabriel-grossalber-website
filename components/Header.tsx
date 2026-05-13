import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand">
          <span>Gabriel Großalber</span>
          <span className="dot" />
        </Link>
        <ul className="nav-links">
          <li><Link href="/#ueber">Über mich</Link></li>
          <li><Link href="/#leistungen">Leistungen</Link></li>
          <li><Link href="/#prinzipien">Prinzipien</Link></li>
          <li><Link href="/#ablauf">Ablauf</Link></li>
          <li><Link href="/#faq">FAQ</Link></li>
        </ul>
        <div className="nav-cta">
          <a className="btn btn-ghost" href="tel:+436802138014">
            +43 680 213 80 14
          </a>
          <Link className="btn btn-primary" href="/#kontakt">
            Termin anfragen
          </Link>
        </div>
      </div>
    </header>
  );
}
