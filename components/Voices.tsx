const VOICES = [
  {
    quote:
      "Endlich jemand, der nicht verkauft, sondern erklärt. Wir wissen jetzt, was wir haben und warum.",
    name: "Familie K.",
    role: "Hausbau, Linz",
    initials: "FK",
  },
  {
    quote:
      "Über die BAV für unsere Mitarbeiter laufen wir komplett über Gabriel. Klare Kommunikation, schnell, fair.",
    name: "M. Hauer",
    role: "GF, KMU Steyr",
    initials: "MH",
  },
  {
    quote:
      "Hat unsere Energie- und Versicherungsverträge durchgesehen. Spürbarer Unterschied – ohne dass ich ständig wechseln muss.",
    name: "S. Bauer",
    role: "Privatkundin, Wien",
    initials: "SB",
  },
];

export default function Voices() {
  return (
    <section className="voices">
      <div className="container">
        <div className="section-head-big reveal">
          <div>
            <span className="eyebrow label">Stimmen</span>
            <h2>
              Was Kund:innen <em className="italic accent-text">sagen.</em>
            </h2>
          </div>
          <p className="desc">
            Auszüge aus Rückmeldungen aus Wien, Linz und Steyr. Auf Wunsch
            stelle ich gerne den direkten Kontakt zu Referenzkund:innen her.
          </p>
        </div>
        <div className="voice-grid reveal">
          {VOICES.map((v) => (
            <div className="voice" key={v.name}>
              <p className="quote">„{v.quote}"</p>
              <div className="attrib">
                <div className="avatar">{v.initials}</div>
                <div>
                  <div className="name">{v.name}</div>
                  <div className="role">{v.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
