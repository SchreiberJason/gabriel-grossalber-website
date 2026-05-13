import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://gabriel-grossalber.at";

const instrument = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Finanzberater Wien & Oberösterreich – Gabriel Großalber | Ungebundene Beratung",
    template: "%s | Gabriel Großalber",
  },
  description:
    "Ungebundene Finanzberatung in Wien und Oberösterreich. Vermögensaufbau, Vorsorge, Versicherungen und Finanzierungen – ohne Provisionsdruck, mit Marktvergleich, für dich kostenfrei.",
  keywords: [
    "Finanzberater Wien",
    "Vermögensberater Wien",
    "Versicherungsmakler Wien",
    "Finanzberatung Linz",
    "Finanzberatung Steyr",
    "Vermögensaufbau Österreich",
    "Vorsorge Pension",
    "ungebundene Beratung",
    "Marktvergleich Versicherung",
    "Gabriel Großalber",
  ],
  authors: [{ name: "Gabriel Großalber", url: SITE_URL }],
  creator: "Gabriel Großalber",
  publisher: "Gabriel Großalber",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: SITE_URL,
    siteName: "Gabriel Großalber",
    title:
      "Finanzberater Wien & Oberösterreich – Gabriel Großalber",
    description:
      "Klarheit über dein Geld. Ohne Provisionsdruck. Ungebundene Beratung zu Vermögen, Vorsorge, Versicherung und Finanzierung.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gabriel Großalber – Finanzberatung in Wien und Oberösterreich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Finanzberater Wien & Oberösterreich – Gabriel Großalber",
    description:
      "Klarheit über dein Geld. Ohne Provisionsdruck. Ungebundene Beratung.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  category: "Finance",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${SITE_URL}/#organization`,
  name: "Gabriel Großalber – Finanzberatung",
  alternateName: "Gabriel Großalber",
  description:
    "Ungebundene Vermögensberatung und Versicherungsvermittlung in Wien und Oberösterreich.",
  url: SITE_URL,
  telephone: "+43-680-2138014",
  email: "office@gabriel-grossalber.at",
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/icon-512.png`,
  priceRange: "Beratung für Endkund:innen kostenfrei",
  currenciesAccepted: "EUR",
  paymentAccepted: "Bank transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Siebenbrunnengasse 17/5",
    addressLocality: "Wien",
    postalCode: "1050",
    addressRegion: "Wien",
    addressCountry: "AT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.18643,
    longitude: 16.3478,
  },
  areaServed: [
    { "@type": "City", name: "Wien" },
    { "@type": "City", name: "Linz" },
    { "@type": "City", name: "Steyr" },
    { "@type": "State", name: "Oberösterreich" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  founder: { "@id": `${SITE_URL}/#person` },
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Beratungsleistungen",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vermögensaufbau" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vorsorge & Pension" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Versicherungen" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Haushaltsoptimierung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Finanzierungen" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Betriebliche Vorsorge" } },
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Gabriel Großalber",
  jobTitle: "Gewerblicher Vermögensberater & Versicherungsvermittler",
  worksFor: { "@id": `${SITE_URL}/#organization` },
  url: SITE_URL,
  image: `${SITE_URL}/gabriel-portrait.webp`,
  telephone: "+43-680-2138014",
  email: "office@gabriel-grossalber.at",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Siebenbrunnengasse 17/5",
    addressLocality: "Wien",
    postalCode: "1050",
    addressCountry: "AT",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Gewerbliche Vermögensberatung (GISA 37364366)",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Magistrat der Stadt Wien",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Versicherungsvermittlung – Versicherungsagent (GISA 35611844)",
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Magistrat der Stadt Wien",
      },
    },
  ],
  knowsAbout: [
    "Vermögensaufbau",
    "Altersvorsorge",
    "Versicherungen",
    "Wohnbaufinanzierung",
    "Betriebliche Vorsorge",
    "Haushaltsoptimierung",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Gabriel Großalber",
  description:
    "Ungebundene Finanzberatung in Wien und Oberösterreich.",
  inLanguage: "de-AT",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de-AT"
      data-theme="light"
      className={`${instrument.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              localBusinessSchema,
              personSchema,
              websiteSchema,
            ]),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
