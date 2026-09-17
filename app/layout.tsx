import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Space_Grotesk, Space_Mono, Archivo_Black } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400"],
});

export const viewport: Viewport = {
  themeColor: "#ffc900", // Neo-Brutalism yellow
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sainiamit.dev"), // Update to your actual domain
  title: {
    default: "Amit Saini | Software Developer",
    template: "%s | Amit Saini",
  },
  description: "Amit Saini is a Software Developer specializing in Next.js, React, and scalable backend architectures. Explore my portfolio, projects, and professional experience.",
  keywords: ["Amit Saini", "Software Developer", "Full Stack Developer", "Frontend Developer", "Next.js", "React", "TypeScript", "Tailwind CSS", "Web Development", "Neo-Brutalism"],
  authors: [{ name: "Amit Saini" }],
  creator: "Amit Saini",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sainiamit.dev",
    title: "Amit Saini | Software Developer",
    description: "Software Developer specializing in Next.js, React, and scalable backend architectures.",
    siteName: "Amit Saini Portfolio",
    images: [
      {
        url: "/og-image.png", // Ensure you add an og-image.png to your public folder!
        width: 1200,
        height: 630,
        alt: "Amit Saini Portfolio - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Saini | Software Developer",
    description: "Software Developer specializing in Next.js, React, and scalable backend architectures.",
    creator: "@isainiamit",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${archivoBlack.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "yjpog5fq07");
          `}
        </Script>
      </body>
    </html>
  );
}

