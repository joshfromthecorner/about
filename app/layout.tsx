import "./globals.css";
import { Inter, Figtree } from "next/font/google";
import { ServerThemeProvider } from "next-themes";
import Providers from "./providers";
import { generalData } from "@/data/general";
import type { Metadata } from "next";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${generalData.name} - ${generalData.jobTitle}`,
  description: generalData.about,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    siteName: `${generalData.name} - ${generalData.jobTitle}`,
    title: `${generalData.name} - ${generalData.jobTitle}`,
    description: generalData.about,
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: `${generalData.name} - ${generalData.jobTitle}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en" className={figtree.variable}>
        <body className="font-sans">
          <Providers>
            <div className="min-h-screen w-full relative bg-background">
              {/* Dashed Bottom Fade Grid - Light Mode */}
              <div
                className="absolute inset-0 z-0 dark:hidden"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #e7e5e4 1px, transparent 1px),
                    linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 0",
                  maskImage: `
                     repeating-linear-gradient(
                          to right,
                          black 0px,
                          black 3px,
                          transparent 3px,
                          transparent 8px
                        ),
                        repeating-linear-gradient(
                          to bottom,
                          black 0px,
                          black 3px,
                          transparent 3px,
                          transparent 8px
                        ),
                        radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
                  `,
                  WebkitMaskImage: `
        repeating-linear-gradient(
                          to right,
                          black 0px,
                          black 3px,
                          transparent 3px,
                          transparent 8px
                        ),
                        repeating-linear-gradient(
                          to bottom,
                          black 0px,
                          black 3px,
                          transparent 3px,
                          transparent 8px
                        ),
                        radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
                  `,
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              />
              {/* Dashed Bottom Fade Grid - Dark Mode */}
              <div
                className="absolute inset-0 z-0 hidden dark:block"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(229, 229, 229, 0.15) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(229, 229, 229, 0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 0",
                  maskImage: `
                     repeating-linear-gradient(
                          to right,
                          black 0px,
                          black 3px,
                          transparent 3px,
                          transparent 8px
                        ),
                        repeating-linear-gradient(
                          to bottom,
                          black 0px,
                          black 3px,
                          transparent 3px,
                          transparent 8px
                        ),
                        radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
                  `,
                  WebkitMaskImage: `
        repeating-linear-gradient(
                          to right,
                          black 0px,
                          black 3px,
                          transparent 3px,
                          transparent 8px
                        ),
                        repeating-linear-gradient(
                          to bottom,
                          black 0px,
                          black 3px,
                          transparent 3px,
                          transparent 8px
                        ),
                        radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
                  `,
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }}
              />
              <div className="relative z-10">
                {children}
              </div>
            </div>
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
