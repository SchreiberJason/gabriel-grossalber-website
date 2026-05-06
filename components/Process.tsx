const STEPS = [
  {
    num: "01",
    title: "Wir lernen uns kennen",
    desc: "Unverbindliches Gespräch. Du erzählst, was gerade ansteht – ich höre zu und stelle die richtigen Fragen. Kein Verkaufsgespräch.",
  },
  {
    num: "02",
    title: "Ich analysiere und vergleiche",
    desc: "Du gibst mir Einblick in deine Verträge. Ich vergleiche ungebunden und finde Lücken, Doppelungen und Spielraum.",
  },
  {
    num: "03",
    title: "Du bekommst ein klares Konzept",
    desc: "Schriftlich, verständlich, mit Alternativen. Du verstehst, was warum sinnvoll ist – und was nicht.",
  },
  {
    num: "04",
    title: "Wir setzen es gemeinsam um",
    desc: "Wenn du überzeugt bist, kümmere ich mich um Anträge, Kündigungen und den Papierkram. Du musst nichts mehr selbst koordinieren.",
  },
  {
    num: "05",
    title: "Wir bleiben in Kontakt",
    desc: "Servicetermine auch ohne neuen Abschluss. Wenn sich dein Leben ändert, ändert sich deine Strategie. Erreichbar – auch am Wochenende.",
  },
];

export default function Process() {
  return (
    <section className="process" id="ablauf">
      <div className="container">
        <div className="section-head-big reveal">
          <div>
            <span className="eyebrow label">So arbeite ich</span>
            <h2>
              Fünf Schritte. <em className="italic accent-text">Kein Druck.</em>
            </h2>
          </div>
          <p className="desc">
            Beratung ist ein Prozess, keine einmalige Transaktion. So sieht eine
            typische Zusammenarbeit aus – und warum nach dem Abschluss
            eigentlich erst der wichtigste Teil beginnt.
          </p>
        </div>
        <div className="process-grid reveal">
          {STEPS.map((s) => (
            <div className="process-step" key={s.num}>
              <div className="num">{s.num}</div>
              <div>
                <h3>{s.title}</h3>
              </div>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
