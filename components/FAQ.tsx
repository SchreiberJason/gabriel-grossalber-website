const FAQ_ITEMS = [
  {
    q: "Was kostet das alles?",
    a: "Das Erstgespräch ist immer kostenlos und unverbindlich. Bei einer Vermittlung werde ich von Versicherung oder Bank vergütet – du zahlst nichts zusätzlich. Bei reinen Beratungsleistungen ohne Vermittlung sprechen wir vorher transparent über das Honorar.",
  },
  {
    q: "Bist du an bestimmte Anbieter gebunden?",
    a: "Nein. Als gewerblicher Vermögensberater arbeite ich ungebunden und vergleiche den gesamten österreichischen Markt. Du bekommst das Produkt, das zu deiner Situation passt – nicht das, was eine Firma am liebsten verkaufen will.",
  },
  {
    q: "Was ist der Unterschied zu meiner Bank?",
    a: "Eine Bank verkauft die eigenen Produkte. Ich vergleiche ungebunden zwischen Banken, Versicherungen und Fondsgesellschaften – und wähle daraus die passende Lösung. Häufig deutlich günstiger oder besser strukturiert.",
  },
  {
    q: "Bist du auch am Wochenende erreichbar?",
    a: "Ja. Beruf und Familie lassen oft keine Zeit unter der Woche. Termine am Abend oder Samstag sind für mich Standard, nicht Ausnahme.",
  },
  {
    q: "Was passiert nach dem Abschluss?",
    a: "Ich melde mich regelmäßig für Servicetermine – auch ohne neuen Abschluss. Bei Lebensereignissen (Heirat, Kind, Hauskauf, Jobwechsel) passen wir die Strategie an. Im Schadenfall bin ich deine erste Anlaufstelle.",
  },
  {
    q: "Arbeitest du auch mit Firmen?",
    a: "Ja, ein Schwerpunkt sind KMU – von der Betriebshaftpflicht über Sachversicherungen bis zur betrieblichen Altersvorsorge für Mitarbeiter:innen. Auch für Selbstständige und Freie Berufe.",
  },
];

export default function FAQ() {
  return (
    <section id="faq">
      <div className="container">
        <div className="section-head-big reveal">
          <div>
            <span className="eyebrow label">Häufige Fragen</span>
            <h2>
              Antworten{" "}
              <em className="italic accent-text">ohne Kleingedrucktes.</em>
            </h2>
          </div>
          <p className="desc">
            Die Fragen, die in Erstgesprächen am häufigsten kommen. Wenn deine
            nicht dabei ist – einfach anrufen oder schreiben.
          </p>
        </div>
        <div className="faq-list reveal">
          {FAQ_ITEMS.map((f) => (
            <details className="faq-item" key={f.q}>
              <summary className="faq-q">
                <h3>{f.q}</h3>
                <span className="faq-icon" aria-hidden="true" />
              </summary>
              <p className="faq-a">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
