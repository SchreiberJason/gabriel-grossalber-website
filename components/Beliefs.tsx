const BELIEFS = [
  {
    num: "01",
    title: "Beratung ist ein Prozess, kein Termin.",
    desc: "Lebenssituationen ändern sich. Eine gute Strategie ändert sich mit. Deshalb melde ich mich auch dann, wenn nichts zu verkaufen ist.",
  },
  {
    num: "02",
    title: "Verständlich vor vollständig.",
    desc: "Du musst kein:e Finanzexpertin werden. Aber du sollst verstehen, was passiert – und warum es für dich Sinn ergibt.",
  },
  {
    num: "03",
    title: "Markt vergleichen, nicht Produkt verkaufen.",
    desc: "Ich habe kein eigenes Produkt. Ich suche das passende vom gesamten österreichischen Markt – und zeige, warum es passt.",
  },
  {
    num: "04",
    title: "Eine Hand für alles Finanzielle.",
    desc: "Versicherung, Vorsorge, Finanzierung, Energie, Investment. Ein:e Ansprechpartner:in, der die Zusammenhänge kennt – und bei Bedarf schnell reagiert.",
  },
  {
    num: "05",
    title: "Erreichbar, wenn du Zeit hast.",
    desc: "Beruf und Familie machen Werktagstermine schwer. Abends oder am Samstag ist für mich Standard, nicht Ausnahme.",
  },
  {
    num: "06",
    title: "Ehrlich, auch wenn’s unbequem ist.",
    desc: "Wenn etwas nicht zu dir passt, sage ich es. Wenn ein Wechsel keinen Sinn ergibt, auch. Langfristige Beziehungen sind mir wichtiger als die nächste Provision.",
  },
];

export default function Beliefs() {
  return (
    <section className="beliefs" id="prinzipien">
      <div className="container">
        <div className="section-head-big reveal">
          <div>
            <span className="eyebrow label">Prinzipien</span>
            <h2>
              Woran ich <em className="italic accent-text">glaube.</em>
            </h2>
          </div>
          <p className="desc">
            Ein paar Sätze, die meine Arbeit zusammenfassen. Nicht als
            Marketing, sondern als Erinnerung – für mich und für dich.
          </p>
        </div>
        <div className="belief-grid reveal">
          {BELIEFS.map((b) => (
            <div className="belief" key={b.num}>
              <div className="num">{b.num}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
