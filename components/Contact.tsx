"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("Wird gesendet …");
    const form = e.currentTarget;
    setTimeout(() => {
      setSubmitting(false);
      setStatus(
        "Vielen Dank – deine Anfrage ist da. Antwort innerhalb von 24 Stunden."
      );
      form.reset();
    }, 900);
  }

  return (
    <section className="contact" id="kontakt">
      <div className="container">
        <div className="section-head-big reveal">
          <div>
            <span className="eyebrow label">Kontakt</span>
            <h2>
              Lass uns <em className="italic accent-text">reden.</em>
            </h2>
          </div>
          <p className="desc">
            Schreib mir kurz, was dich beschäftigt – Vorsorge, Finanzierung,
            Versicherung, Optimierung. Ich melde mich in der Regel innerhalb
            eines Werktages zurück.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-intro reveal">
            <p>
              Du musst nicht wissen, was du genau brauchst. Manchmal reicht „Ich
              hab das Gefühl, ich zahle zu viel für …". Den Rest finden wir
              gemeinsam heraus.
            </p>
            <div className="contact-direct">
              <a href="tel:+436802138014">
                <span className="ico">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </span>
                +43 680 213 80 14
              </a>
              <a href="mailto:office@grossalber.at">
                <span className="ico">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                office@grossalber.at
              </a>
              <a
                href="https://www.openstreetmap.org/?mlat=48.18636&mlon=16.35990"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="ico">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                Siebenbrunnengasse 17/5, 1050 Wien
              </a>
            </div>
          </div>

          <form className="form reveal" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="v2-name">Name</label>
              <input id="v2-name" name="name" type="text" required autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="v2-mail">E-Mail</label>
              <input id="v2-mail" name="email" type="email" required autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="v2-phone">Telefon</label>
              <input id="v2-phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="v2-topic">Thema</label>
              <select id="v2-topic" name="topic" defaultValue="">
                <option value="" disabled>
                  Bitte auswählen
                </option>
                <option>Vermögensaufbau / Sparplan</option>
                <option>Vorsorge / Pension</option>
                <option>Versicherungen prüfen</option>
                <option>Finanzierung / Wohnbau</option>
                <option>Betriebliche Altersvorsorge (BAV)</option>
                <option>Energie- / Haushaltsoptimierung</option>
                <option>Firmenkund:innen</option>
                <option>Sonstiges</option>
              </select>
            </div>
            <div className="field field-full">
              <label htmlFor="v2-date">Wunschtermin (optional)</label>
              <input id="v2-date" name="date" type="date" />
            </div>
            <div className="field field-full">
              <label htmlFor="v2-msg">Nachricht</label>
              <textarea
                id="v2-msg"
                name="message"
                rows={4}
                placeholder="Worum geht’s konkret?"
              />
            </div>
            <label className="checkbox">
              <input type="checkbox" name="consent" required />
              <span>
                Ich habe die <a href="#datenschutz">Datenschutzhinweise</a>{" "}
                gelesen und stimme der Verarbeitung meiner Daten zur
                Kontaktaufnahme zu.
              </span>
            </label>
            <div className="form-actions">
              <span
                className={
                  "form-status" + (status.startsWith("Vielen") ? " ok" : "")
                }
              >
                {status}
              </span>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
              >
                Anfrage senden <span className="arrow">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
