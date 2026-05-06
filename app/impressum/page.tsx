import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum & Offenlegung — Gabriel Großalber",
  description:
    "Impressum, Offenlegung, Haftungsausschluss und Datenschutzerklärung gemäß § 5 ECG, § 14 UGB, § 63 GewO und § 25 MedienG.",
};

export default function ImpressumPage() {
  return (
    <div className="legal-page">
      <header className="legal-header">
        <div className="container legal-nav">
          <Link href="/" className="brand">
            <span>Gabriel Großalber</span>
            <span className="dot" />
          </Link>
          <Link href="/" className="legal-back">
            ← Zurück zur Startseite
          </Link>
        </div>
      </header>

      <main className="legal-main">
        <div className="container legal-container">
          <span className="eyebrow">Rechtliches</span>
          <h1 className="legal-title">Impressum &amp; Offenlegung</h1>
          <p className="legal-lead">
            Angaben gemäß § 5 ECG, § 14 UGB, § 63 GewO und § 25 MedienG.
          </p>

          <section className="legal-section">
            <h2>Medieninhaber &amp; Herausgeber</h2>
            <p>
              Gabriel Großalber
              <br />
              Siebenbrunnengasse 17/5
              <br />
              1050 Wien, Österreich
            </p>
            <dl className="legal-defs">
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+436802138014">+43 680 213 80 14</a>
                </dd>
              </div>
              <div>
                <dt>E-Mail</dt>
                <dd>
                  <a href="mailto:office@grossalber.at">
                    office@grossalber.at
                  </a>
                </dd>
              </div>
              <div>
                <dt>Web</dt>
                <dd>
                  <a
                    href="https://www.grossalber.at"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.grossalber.at
                  </a>
                </dd>
              </div>
              <div>
                <dt>Rechtsform</dt>
                <dd>Einzelunternehmer</dd>
              </div>
            </dl>
          </section>

          <section className="legal-section">
            <h2>Gewerberechtliche Angaben</h2>
            <ol className="legal-ol">
              <li>
                <strong>Gewerbliche Vermögensberatung</strong>
                <p>
                  Gewerbewortlaut: Gewerbliche Vermögensberatung mit
                  Berechtigung nach § 1 Z 44 WAG 2018 als vertraglich gebundener
                  Vermittler ohne Berechtigung zur Vermittlung von Lebens- und
                  Unfallversicherungen.
                </p>
                <p>
                  GISA-Zahl: <strong>37364366</strong>
                </p>
              </li>
              <li>
                <strong>Versicherungsvermittlung</strong>
                <p>
                  Gewerbewortlaut: Versicherungsvermittlung in der Form
                  Versicherungsagent.
                </p>
                <p>
                  GISA-Zahl: <strong>35611844</strong>
                </p>
              </li>
            </ol>
            <p>
              Die Gewerbeberechtigungen sind überprüfbar unter:{" "}
              <a
                href="https://www.gisa.gv.at/vkr"
                target="_blank"
                rel="noreferrer"
              >
                www.gisa.gv.at/vkr
              </a>
            </p>
            <dl className="legal-defs">
              <div>
                <dt>Aufsichts- / Gewerbebehörde</dt>
                <dd>
                  Magistrat der Stadt Wien, Magistratisches Bezirksamt für den
                  1. und 8. Bezirk, Wipplingerstraße 8, 1010 Wien
                </dd>
              </div>
              <div>
                <dt>Kammerzugehörigkeit</dt>
                <dd>
                  Mitglied der Wirtschaftskammer Wien (WKW), Fachgruppe
                  Finanzdienstleister
                </dd>
              </div>
              <div>
                <dt>Berufsrechtliche Vorschriften</dt>
                <dd>
                  Gewerbeordnung 1994 (GewO), Wertpapieraufsichtsgesetz 2018
                  (WAG), Maklergesetz. Zugänglich unter:{" "}
                  <a
                    href="https://www.ris.bka.gv.at"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.ris.bka.gv.at
                  </a>
                </dd>
              </div>
            </dl>
          </section>

          <section className="legal-section">
            <h2>Rechtliche Hinweise (OVB)</h2>
            <h3>Rechtlicher Status &amp; Haftungshinweis</h3>
            <p>
              Der Gewerbetreibende ist als vertraglich gebundener Vermittler
              (bzw. Erfüllungsgehilfe gemäß § 1313a ABGB) ausschließlich im
              Namen und auf Rechnung der OVB Allfinanzvermittlungs GmbH tätig.
            </p>
            <h3>Zentrale der OVB</h3>
            <p>
              OVB Allfinanzvermittlungs GmbH
              <br />
              Sirona Straße 4/1/C
              <br />
              A-5071 Wals bei Salzburg
            </p>
            <h3>Beteiligungs- &amp; Agenturverhältnisse</h3>
            <p>
              Eine Übersicht der aktuellen Agenturverhältnisse und
              Produktpartner der OVB finden Sie unter:{" "}
              <a
                href="https://www.ovb.at/agenturverhaeltnisse"
                target="_blank"
                rel="noreferrer"
              >
                www.ovb.at/agenturverhaeltnisse
              </a>
            </p>
            <h3>Beschwerdestelle</h3>
            <p>
              Beschwerdestelle über Versicherungsvermittler im Bundesministerium
              für Arbeit und Wirtschaft (BMAW), Stubenring 1, 1010 Wien.
            </p>
            <h3>EU-Streitschlichtung</h3>
            <p>
              Verbraucher haben die Möglichkeit, Beschwerden an die
              Online-Streitbeilegungsplattform der EU zu richten:{" "}
              <a
                href="http://ec.europa.eu/odr"
                target="_blank"
                rel="noreferrer"
              >
                ec.europa.eu/odr
              </a>
              . Sie können allfällige Beschwerde auch an die oben angegebene
              E-Mail-Adresse richten.
            </p>
          </section>

          <section className="legal-section">
            <h2>Haftungsausschluss &amp; Urheberrecht</h2>
            <h3>Hinweis zur Unabhängigkeit der Webseite</h3>
            <p>
              Diese Webseite ist ein eigenständiger Internetauftritt von Gabriel
              Großalber und keine offizielle Webseite der OVB
              Allfinanzvermittlungs GmbH. Für den Inhalt, die Gestaltung und die
              datenschutzrechtliche Verantwortlichkeit dieser Webseite ist
              ausschließlich der Medieninhaber verantwortlich. Die Nutzung von
              Markenbezeichnungen dient lediglich der Beschreibung der Tätigkeit
              als vertraglich gebundener Vermittler.
            </p>
            <h3>Haftung für Inhalte</h3>
            <p>
              Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              kann jedoch keine Gewähr übernommen werden.
            </p>
            <h3>Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich.
            </p>
            <h3>Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem österreichischen Urheberrecht.
              Beiträge Dritter sind als solche gekennzeichnet.
            </p>
          </section>

          <section className="legal-section" id="datenschutz">
            <h2>Datenschutzerklärung</h2>
            <h3>Verantwortlicher</h3>
            <p>
              Gabriel Großalber (Kontaktdaten siehe oben). In gemeinsamer
              Verantwortlichkeit mit der OVB Allfinanzvermittlungs GmbH für die
              Verarbeitung von Kundendaten.
            </p>

            <h3>1. Allgemeiner Hinweis</h3>
            <p>
              Wir legen größten Wert auf den Schutz Ihrer Daten. Da ich als
              Partner der OVB Allfinanzvermittlungs GmbH tätig bin, gelten für
              die Verarbeitung von Kundendaten, die Vertragsanbahnung und die
              Beratung die zentralen Datenschutzrichtlinien der OVB.
            </p>

            <h3>2. Details zur Datenverarbeitung (OVB)</h3>
            <p>
              Umfassende Informationen dazu, wie wir Ihre Daten verarbeiten,
              welche Rechte Sie haben und wer unser Datenschutzbeauftragter ist,
              finden Sie in der zentralen Datenschutzerklärung der OVB
              Österreich:{" "}
              <a
                href="https://www.ovb.at/service/datenschutz.html"
                target="_blank"
                rel="noreferrer"
              >
                www.ovb.at/service/datenschutz.html
              </a>
            </p>

            <h3>3. Datenverarbeitung auf dieser Website</h3>
            <p>
              Beim Besuch dieser Webseite werden technisch notwendige Daten
              (IP-Adresse, Browserdaten) erfasst, um die Sicherheit und
              Funktionalität zu gewährleisten.
            </p>
            <p>
              <strong>Kontaktformular:</strong> Wenn Sie mich per E-Mail oder
              Formular kontaktieren, werden Ihre Angaben zwecks Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei mir gespeichert.
              Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter, es sei
              denn, dies ist zur Vertragserfüllung mit der OVB notwendig.
            </p>
            <p>
              <strong>Cookies:</strong> Diese Webseite verwendet Cookies. Sie
              haben beim Betreten der Seite die Möglichkeit, über den
              Cookie-Banner zu entscheiden, welche Cookies Sie zulassen möchten.
            </p>

            <h3>4. Ihre Rechte</h3>
            <p>
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
              Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und
              Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer
              Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der
              Datenschutzbehörde beschweren.
            </p>
          </section>

          <p className="legal-footer-link">
            <Link href="/">← Zurück zur Startseite</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
