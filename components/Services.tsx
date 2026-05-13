const SERVICES = [
  {
    num: "01",
    title: "Vermögensaufbau",
    desc: "Sparpläne und Investments, die zu deinem Leben passen – egal ob für die eigene Wohnung, die Reise in zwei Jahren oder einfach finanzielle Ruhe.",
  },
  {
    num: "02",
    title: "Vorsorge & Pension",
    desc: "Private und betriebliche Vorsorge. Ehrlich gerechnet, statt schöngeredet. Damit später nicht plötzlich eine Lücke da ist.",
  },
  {
    num: "03",
    title: "Versicherungen",
    desc: "Ungebundener Marktvergleich – nicht das, was eine Versicherung verkaufen will, sondern das, was du wirklich brauchst.",
  },
  {
    num: "04",
    title: "Haushaltsoptimierung",
    desc: "Strom, Gas, Versicherungen, Sparquote. Oft sind ein paar hundert Euro pro Jahr drin, ohne dass sich am Lebensstil etwas ändert.",
  },
  {
    num: "05",
    title: "Finanzierungen",
    desc: "Wohnbau, Immobilie, Sanierung. Konkreter Bankvergleich, realistische Raten – und ehrliche Antworten, ob jetzt der richtige Zeitpunkt ist.",
  },
  {
    num: "06",
    title: "Betriebliche Vorsorge",
    desc: "Speziell für KMU, Lehrer:innen, Beamte und Angestellte im öffentlichen Dienst. Eine vom Staat steuerlich gestützte Form der Vorsorge, die viele liegen lassen.",
  },
];

export default function Services() {
  return (
    <section className="services" id="leistungen">
      <div className="container">
        <div className="section-head-big reveal">
          <div>
            <span className="eyebrow label">Leistungen</span>
            <h2>
              Eine Hand. <em className="italic accent-text">Sechs Bereiche.</em>
            </h2>
          </div>
          <p className="desc">
            Statt drei verschiedener Ansprechpartner:innen für Versicherung,
            Bank und Vorsorge – einer, der die Zusammenhänge kennt und dafür
            sorgt, dass alles zusammenpasst.
          </p>
        </div>
        <div className="service-list reveal">
          {SERVICES.map((s) => (
            <div className="service-row" key={s.num}>
              <span className="num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
