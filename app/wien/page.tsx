import type { Metadata } from "next";
import StandortPage, {
  StandortJsonLd,
  type StandortData,
} from "@/components/StandortPage";

const data: StandortData = {
  city: "Wien",
  slug: "wien",
  region: "Wien",
  street: "Siebenbrunnengasse 17/5",
  postalCode: "1050",
  latitude: 48.18643,
  longitude: 16.3478,
  title: "Finanzberater Wien – Gabriel Großalber",
  description:
    "Ungebundene Finanzberatung in Wien, im 5. Bezirk (Margareten). Vermögensaufbau, Vorsorge, Versicherungen und Finanzierungen – ohne Provisionsdruck, mit Marktvergleich.",
  intro:
    "Das Wiener Büro liegt in der Siebenbrunnengasse im 5. Bezirk, fußläufig zum Margaretengürtel. Ungebundene Beratung zu Vermögen, Vorsorge, Versicherung und Finanzierung – für dich kostenfrei.",
  detail:
    "Termin gleich um die Ecke oder am Wochenende. Beratungsgespräche finden ungestört im Büro statt – ohne Verkaufsdruck und mit schriftlicher Zusammenfassung.",
  serviceArea: "Wien (alle 23 Bezirke), Wien-Umgebung",
  meeting:
    "Nach Vereinbarung – Termine auch abends und am Samstag möglich",
  mapQuery:
    "Siebenbrunnengasse 17/Top 5, 1050 Wien, Austria",
  nearbyAreas: [
    "Margareten",
    "Mariahilf",
    "Wieden",
    "Meidling",
    "Hietzing",
    "Innere Stadt",
  ],
};

export const metadata: Metadata = {
  title: "Finanzberater Wien – ungebunden & ohne Provisionsdruck",
  description: data.description,
  alternates: { canonical: "/wien/" },
  openGraph: {
    title: "Finanzberater in Wien – Gabriel Großalber",
    description: data.description,
    url: "/wien/",
    type: "website",
    locale: "de_AT",
    images: ["/og-image.jpg"],
  },
};

export default function WienPage() {
  return (
    <>
      <StandortJsonLd data={data} />
      <StandortPage data={data} />
    </>
  );
}
