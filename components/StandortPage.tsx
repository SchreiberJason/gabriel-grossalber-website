import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = "https://gabriel-grossalber.at";

export type StandortData = {
  city: string;
  slug: "wien" | "linz" | "steyr";
  region: string;
  title: string;
  description: string;
  intro: string;
  detail: string;
  serviceArea: string;
  meeting: string;
  postalCode?: string;
  street?: string;
  latitude?: number;
  longitude?: number;
  mapQuery: string;
  nearbyAreas: string[];
};

export function StandortJsonLd({ data }: { data: StandortData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${SITE_URL}/${data.slug}/#service`,
    name: `Gabriel Großalber – Finanzberatung ${data.city}`,
    description: data.description,
    url: `${SITE_URL}/${data.slug}/`,
    telephone: "+43-680-2138014",
    email: "office@gabriel-grossalber.at",
    image: `${SITE_URL}/og-image.jpg`,
    priceRange: "Beratung für Endkund:innen kostenfrei",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    address: {
      "@type": "PostalAddress",
      ...(data.street ? { streetAddress: data.street } : {}),
      addressLocality: data.city,
      ...(data.postalCode ? { postalCode: data.postalCode } : {}),
      addressRegion: data.region,
      addressCountry: "AT",
    },
    ...(data.latitude && data.longitude
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: data.latitude,
            longitude: data.longitude,
          },
        }
      : {}),
    areaServed: [
      { "@type": "City", name: data.city },
      ...data.nearbyAreas.map((a) => ({ "@type": "Place", name: a })),
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Startseite",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Standort ${data.city}`,
        item: `${SITE_URL}/${data.slug}/`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([schema, breadcrumb]),
      }}
    />
  );
}

export default function StandortPage({ data }: { data: StandortData }) {
  const mapEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(
    data.mapQuery
  )}&t=&z=13&ie=UTF8&iwloc=B&output=embed`;

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="top" style={{ paddingTop: "120px" }}>
          <div className="container">
            <nav
              aria-label="Breadcrumb"
              style={{ marginBottom: "24px", fontSize: "14px" }}
            >
              <ol
                style={{
                  display: "flex",
                  gap: "8px",
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  color: "var(--ink-3)",
                }}
              >
                <li>
                  <Link href="/">Startseite</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>Standort {data.city}</li>
              </ol>
            </nav>
            <div className="hero-content reveal" style={{ maxWidth: "780px" }}>
              <div className="hero-eyebrow">
                <span className="eyebrow">Standort {data.city} · {data.region}</span>
              </div>
              <h1 className="hero-headline">
                <span className="row">Finanzberatung</span>
                <span className="row">
                  in <em>{data.city}.</em>
                </span>
                <span className="row sub">Ungebunden. Kostenfrei. Vor Ort.</span>
              </h1>
              <p className="lead hero-lead">{data.intro}</p>
              <div className="hero-actions">
                <a href="#kontakt" className="btn btn-primary">
                  Termin in {data.city} <span className="arrow">→</span>
                </a>
                <a href="tel:+436802138014" className="btn btn-ghost">
                  +43 680 213 80 14
                </a>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "60px 0" }}>
          <div className="container">
            <div className="section-head-big reveal">
              <div>
                <span className="eyebrow label">Beratung vor Ort</span>
                <h2>
                  Persönlich in{" "}
                  <em className="italic accent-text">{data.city}.</em>
                </h2>
              </div>
              <p className="desc">{data.detail}</p>
            </div>

            <div className="location-card reveal">
              <div className="location-info">
                <div className="location-address">
                  <span className="eyebrow">Servicegebiet</span>
                  <h3>{data.city} & Umgebung</h3>
                  <p className="sub">{data.serviceArea}</p>
                </div>

                <ul className="location-list">
                  <li>
                    <span className="k">Termin</span>
                    <span className="v">{data.meeting}</span>
                  </li>
                  <li>
                    <span className="k">Telefon</span>
                    <span className="v">
                      <a href="tel:+436802138014">+43 680 213 80 14</a>
                    </span>
                  </li>
                  <li>
                    <span className="k">E-Mail</span>
                    <span className="v">
                      <a href="mailto:office@gabriel-grossalber.at">
                        office@gabriel-grossalber.at
                      </a>
                    </span>
                  </li>
                  <li>
                    <span className="k">Auch in</span>
                    <span className="v">
                      {data.nearbyAreas.join(" · ")}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="location-map">
                <iframe
                  src={mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Karte – Beratungsgebiet ${data.city}`}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="services" style={{ paddingTop: "60px" }}>
          <div className="container">
            <div className="section-head-big reveal">
              <div>
                <span className="eyebrow label">Leistungen in {data.city}</span>
                <h2>
                  Eine Hand. <em className="italic accent-text">Sechs Bereiche.</em>
                </h2>
              </div>
              <p className="desc">
                Vom Sparplan bis zur Wohnbaufinanzierung – alles aus einer Hand,
                mit ehrlichem Marktvergleich.
              </p>
            </div>
            <div className="service-list reveal">
              <div className="service-row">
                <span className="num">01</span>
                <h3>Vermögensaufbau in {data.city}</h3>
                <p>
                  Sparpläne, ETFs und Investments für Kund:innen aus {data.city}{" "}
                  und Umgebung – flexibel, langfristig, transparent.
                </p>
              </div>
              <div className="service-row">
                <span className="num">02</span>
                <h3>Vorsorge & Pension</h3>
                <p>
                  Private und betriebliche Vorsorge. Mit ehrlicher
                  Pensionslückenanalyse statt Standardprodukt von der Stange.
                </p>
              </div>
              <div className="service-row">
                <span className="num">03</span>
                <h3>Versicherungen prüfen & vergleichen</h3>
                <p>
                  Ungebundener Marktvergleich: was du wirklich brauchst,
                  abgesetzt gegen das, was du heute zahlst.
                </p>
              </div>
              <div className="service-row">
                <span className="num">04</span>
                <h3>Haushaltsoptimierung</h3>
                <p>
                  Strom, Gas, laufende Verträge, Sparquote. Oft mehrere hundert
                  Euro pro Jahr Ersparnis ohne Verzicht.
                </p>
              </div>
              <div className="service-row">
                <span className="num">05</span>
                <h3>Finanzierungen für {data.region}</h3>
                <p>
                  Wohnbau, Immobilie, Sanierung – Bankvergleich für{" "}
                  Objekte in {data.region} und realistische Raten.
                </p>
              </div>
              <div className="service-row">
                <span className="num">06</span>
                <h3>Betriebliche Vorsorge</h3>
                <p>
                  Zukunftsvorsorge für KMU, öffentlichen Dienst und
                  Lehrer:innen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="kontakt">
          <div className="container">
            <div className="section-head-big reveal">
              <div>
                <span className="eyebrow label">Kontakt {data.city}</span>
                <h2>
                  Termin in {data.city}{" "}
                  <em className="italic accent-text">anfragen.</em>
                </h2>
              </div>
              <p className="desc">
                Schreib mir kurz, worum es geht. Ich melde mich innerhalb eines
                Werktages für einen Termin in {data.city} oder per Video.
              </p>
            </div>
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <Link href="/#kontakt" className="btn btn-primary">
                Zum Anfrageformular <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
