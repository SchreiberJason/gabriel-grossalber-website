"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const WEB3FORMS_ACCESS_KEY = "b263c060-6234-43ee-9cfa-8b7994442a89";

const TOPICS = [
  "Vermögensaufbau / Sparplan",
  "Vorsorge / Pension",
  "Versicherungen prüfen",
  "Finanzierung / Wohnbau",
  "Betriebliche Altersvorsorge",
  "Energie / Haushalt",
  "Firmenkund:innen",
  "Sonstiges",
];

const TIMES = ["Vormittag", "Nachmittag", "Abend", "Wochenende", "Egal"];

const PHONE_PREFIXES = [
  { code: "+43", label: "+43 Österreich" },
  { code: "+49", label: "+49 Deutschland" },
  { code: "+41", label: "+41 Schweiz" },
  { code: "+39", label: "+39 Italien" },
  { code: "+420", label: "+420 Tschechien" },
  { code: "+421", label: "+421 Slowakei" },
  { code: "+386", label: "+386 Slowenien" },
  { code: "+36", label: "+36 Ungarn" },
  { code: "+423", label: "+423 Liechtenstein" },
  { code: "+33", label: "+33 Frankreich" },
  { code: "+32", label: "+32 Belgien" },
  { code: "+31", label: "+31 Niederlande" },
  { code: "+44", label: "+44 UK" },
  { code: "+1", label: "+1 USA / Kanada" },
];

const BENEFITS = [
  "Marktvergleich – ohne Bindung an einen Anbieter",
  "Schriftliche Zusammenfassung nach dem Gespräch",
  "Keine Verkaufsverpflichtung, auch wenn nichts passt",
  "Antwort innerhalb von 24 Stunden",
];

export default function Contact() {
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [topics, setTopics] = useState<string[]>([]);
  const [time, setTime] = useState("");

  function toggleTopic(t: string) {
    setTopics((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitting(true);
    setStatus("Wird gesendet …");

    const formData = new FormData(form);
    formData.append("themen", topics.join(", "));
    formData.append("wunschzeit", time);

    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    formData.set("name", `${firstName} ${lastName}`.trim());

    const phonePrefix = String(formData.get("phonePrefix") ?? "");
    const phoneNumber = String(formData.get("phoneNumber") ?? "").trim();
    formData.set("phone", phoneNumber ? `${phonePrefix} ${phoneNumber}` : "");
    formData.delete("phoneNumber");
    formData.delete("phonePrefix");

    const isConfigured =
      WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY.length > 20;

    try {
      if (isConfigured) {
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);
        formData.append("subject", "Neue Anfrage über gabriel-grossalber.at");
        formData.append("from_name", "gabriel-grossalber.at Kontaktformular");
        const senderEmail = formData.get("email");
        if (typeof senderEmail === "string" && senderEmail) {
          formData.append("replyto", senderEmail);
        }
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const data = await res.json().catch(() => ({}));
        if (!data.success) {
          console.error("Web3Forms error:", res.status, data);
          throw new Error(data.message || `HTTP ${res.status}`);
        }
      } else {
        await new Promise((r) => setTimeout(r, 700));
      }

      setStatus(
        "Vielen Dank – deine Anfrage ist da. Antwort innerhalb von 24 Stunden."
      );
      form.reset();
      setTopics([]);
      setTime("");
    } catch (err) {
      const detail = err instanceof Error ? err.message : "";
      setStatus(
        `Hat leider nicht geklappt${detail ? ` (${detail})` : ""}. Bitte direkt per E-Mail an office@gabriel-grossalber.at.`
      );
    } finally {
      setSubmitting(false);
    }
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

            <div className="benefits">
              <span className="eyebrow">Was du bekommst</span>
              <ul>
                {BENEFITS.map((b) => (
                  <li key={b}>
                    <span className="check" aria-hidden="true">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

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
              <a href="mailto:office@gabriel-grossalber.at">
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
                office@gabriel-grossalber.at
              </a>
            </div>
          </div>

          <form className="form reveal" onSubmit={handleSubmit}>
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              style={{ display: "none" }}
              aria-hidden="true"
            />
            <div className="field">
              <label htmlFor="v2-firstname">
                Vorname<span className="req" aria-hidden="true">*</span>
              </label>
              <input
                id="v2-firstname"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
              />
            </div>
            <div className="field">
              <label htmlFor="v2-lastname">
                Nachname<span className="req" aria-hidden="true">*</span>
              </label>
              <input
                id="v2-lastname"
                name="lastName"
                type="text"
                required
                autoComplete="family-name"
              />
            </div>
            <div className="field field-full">
              <label htmlFor="v2-mail">
                E-Mail<span className="req" aria-hidden="true">*</span>
              </label>
              <input
                id="v2-mail"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>
            <div className="field field-full">
              <label htmlFor="v2-phone">Telefon (optional)</label>
              <div className="phone-input">
                <select
                  name="phonePrefix"
                  defaultValue="+43"
                  aria-label="Vorwahl"
                >
                  {PHONE_PREFIXES.map((p) => (
                    <option key={p.code} value={p.code}>
                      {p.label}
                    </option>
                  ))}
                </select>
                <input
                  id="v2-phone"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="tel-national"
                  placeholder="Nummer"
                />
              </div>
            </div>

            <div className="field field-full chip-field">
              <span className="chip-label">Worum geht’s? Mehrfachauswahl möglich.</span>
              <div className="chip-row" role="group" aria-label="Themen">
                {TOPICS.map((t) => {
                  const active = topics.includes(t);
                  return (
                    <button
                      key={t}
                      type="button"
                      className={"chip" + (active ? " is-active" : "")}
                      aria-pressed={active}
                      onClick={() => toggleTopic(t)}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="field field-full chip-field">
              <span className="chip-label">Wann erreiche ich dich am besten?</span>
              <div className="chip-row" role="radiogroup" aria-label="Wunschzeit">
                {TIMES.map((t) => {
                  const active = time === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      className={"chip" + (active ? " is-active" : "")}
                      aria-pressed={active}
                      role="radio"
                      aria-checked={active}
                      onClick={() => setTime(active ? "" : t)}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
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
                Ich habe die{" "}
                <Link href="/impressum#datenschutz" target="_blank">
                  Datenschutzhinweise
                </Link>{" "}
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

            <ul className="form-trust">
              <li>
                <span className="dot" /> Antwort innerhalb von 24 h
              </li>
              <li>
                <span className="dot" /> Direkt von Gabriel, kein Bot
              </li>
              <li>
                <span className="dot" /> Du verpflichtest dich zu nichts
              </li>
            </ul>
          </form>
        </div>
      </div>
    </section>
  );
}
