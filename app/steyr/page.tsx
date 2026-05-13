import type { Metadata } from "next";
import StandortPage, {
  StandortJsonLd,
  type StandortData,
} from "@/components/StandortPage";

const data: StandortData = {
  city: "Steyr",
  slug: "steyr",
  region: "Oberösterreich",
  latitude: 48.0381,
  longitude: 14.4204,
  title: "Finanzberater Steyr – Gabriel Großalber",
  description:
    "Ungebundene Finanzberatung in Steyr und im Bezirk Steyr-Land. Vermögensaufbau, Vorsorge, Versicherungen und Finanzierungen – ohne Provisionsdruck, mit Marktvergleich.",
  intro:
    "Steyr ist mein Heimatraum – hier hat alles angefangen. Beratung nach Vereinbarung, bei dir vor Ort oder per Videogespräch. Ungebunden und ohne Verkaufsdruck.",
  detail:
    "Ob Lehrling, Facharbeiterin oder selbständig – in Steyr und Steyr-Land kenne ich die Themen, die wirklich zählen: Wohnen, Pension, Familienabsicherung und kluges Sparen.",
  serviceArea: "Stadt Steyr, Steyr-Land, Kirchdorf, Amstetten-Umgebung",
  meeting:
    "Nach Vereinbarung – auch außerhalb der Bürozeiten und am Wochenende",
  mapQuery: "Steyr, Oberösterreich, Austria",
  nearbyAreas: [
    "Steyr-Land",
    "Sierning",
    "Garsten",
    "Bad Hall",
    "Kirchdorf an der Krems",
    "Enns",
  ],
};

export const metadata: Metadata = {
  title: "Finanzberater Steyr – ungebunden & ohne Provisionsdruck",
  description: data.description,
  alternates: { canonical: "/steyr/" },
  openGraph: {
    title: "Finanzberater in Steyr – Gabriel Großalber",
    description: data.description,
    url: "/steyr/",
    type: "website",
    locale: "de_AT",
    images: ["/og-image.jpg"],
  },
};

export default function SteyrPage() {
  return (
    <>
      <StandortJsonLd data={data} />
      <StandortPage data={data} />
    </>
  );
}
