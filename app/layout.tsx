import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Fraunces, Fira_Sans } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const firaSans = Fira_Sans({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Life After UPSC: Rebuild Your Career | The Way Forward",
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "For UPSC and government exam aspirants whose attempts are over. Understand POST-UPSC Syndrome, read people who rebuilt, and find the way forward — free.",
  applicationName: SITE_NAME,
  authors: [{ name: "Rahul Govindu", url: SITE_URL }],
  creator: "Rahul Govindu",
  publisher: SITE_NAME,
  category: "education",
  referrer: "strict-origin-when-cross-origin",
  /* Snippet directives. max-snippet:-1 is the AEO lever: it lets Google and
     the answer engines that respect it quote the full passage rather than a
     clipped 160 characters. */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0C",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${fraunces.variable} ${firaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        {children}
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LHF64N0WKP"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-LHF64N0WKP');`}
        </Script>
      </body>
    </html>
  );
}
