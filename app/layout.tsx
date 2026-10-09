
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikki Ganzon | SAP Consultant & Computer Engineer",
  description:
    "Portfolio of Nikki Ganzon, Computer Engineering graduate from Ateneo de Davao University and SAP Consultant at AXXIS Consulting. Exploring SAP solutions, business process design, and enterprise technology.",
  applicationName: "Nikki Ganzon Portfolio",
  keywords: [
    "Nikki Ganzon",
    "SAP Consultant",
    "SAP Business One",
    "AXXIS Consulting",
    "Computer Engineering",
    "Ateneo de Davao University",
    "Business Process Analysis",
    "ERP Solutions",
  ],
  authors: [{ name: "Nikki Ganzon" }],
  openGraph: {
    title: "Nikki Ganzon | SAP Consultant",
    description:
      "Bridging business processes and technology through thoughtful SAP solutions.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071522",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}