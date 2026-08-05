import type { Metadata } from "next";
import { Fraunces, Fira_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const firaSans = Fira_Sans({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thewayforward.in"),
  title: "The Way Forward — Life beyond the exam",
  description:
    "A platform for UPSC and government exam aspirants rebuilding their careers — stories, opportunities, skills, and support. An exam is not life.",
  alternates: { canonical: "/" },
  keywords: [
    "life after UPSC",
    "POST-UPSC Syndrome",
    "UPSC failure what next",
    "career after UPSC preparation",
    "government exam career transition",
    "ex-UPSC aspirant jobs",
  ],
  openGraph: {
    title: "The Way Forward — Life beyond the exam",
    description:
      "The world only counts your hard work when you succeed. We count it anyway. For UPSC and government exam aspirants rebuilding their careers.",
    url: "https://thewayforward.in",
    siteName: "The Way Forward",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Way Forward — Life beyond the exam",
    description:
      "The world only counts your hard work when you succeed. We count it anyway.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${firaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">{children}</body>
    </html>
  );
}
