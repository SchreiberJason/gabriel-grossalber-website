import type { Metadata } from "next";
import StandortPage, {
  StandortJsonLd,
  type StandortData,
} from "@/components/StandortPage";

const data: StandortData = {
  city: "Linz",
  slug: "linz",
  region: "Oberösterreich",
  latitude: 48.3069,
  longitude: 14.2858,
  title: "Finanzberater Linz – Gabriel Großalber",
  description:
    "Ungebundene Finanzberatung in Linz und im Linzer Zentralraum. Vermögensaufbau, Vorsorge, Versicherungen und Wohnbaufinanzierung – ohne Provisionsdruck, mit Marktvergleich.",
  intro:
    "Beratung in Linz nach Vereinbarung – bei dir zuhause, im Büro deines Vertrauens oder per Videogespräch. Ungebunden, mit ehrlichem Marktvergleich und ohne versteckte Kosten.",
  detail:
    "Linz hat besonderen Bedarf an Wohnbaufinanzierungen, betrieblicher Vorsorge und Veranlagung. Beide Themen rechne ich ehrlich, mit Vergleich über mehrere Banken bzw. Anbieter.",
  serviceArea:
    "Stadt Linz, Linz-Land, Urfahr-Umgebung, Eferding, Perg",
  meeting:
    "Nach Vereinbarung – auch außerhalb der Bürozeiten und am Wochenende",
  mapQuery: "Linz, Oberösterreich, Austria",
  nearbyAreas: [
    "Leonding",
    "Traun",
    "Pasching",
    "Ansfelden",
    "Urfahr",
    "Linz-Land",
  ],
};

export const metadata: Metadata = {
  title: "Finanzberater Linz – ungebunden & ohne Provisionsdruck",
  description: data.description,
  alternates: { canonical: "/linz/" },
  openGraph: {
    title: "Finanzberater in Linz – Gabriel Großalber",
    description: data.description,
    url: "/linz/",
    type: "website",
    locale: "de_AT",
    images: ["/og-image.jpg"],
  },
};

export default function LinzPage() {
  return (
    <>
      <StandortJsonLd data={data} />
      <StandortPage data={data} />
    </>
  );
}
