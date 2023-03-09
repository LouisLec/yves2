import { Inter as FontSans } from "@next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import Link from "next/link"
import localFont from "@next/font/local"
import { Book, Lamp } from "lucide-react"

import { cn } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeToggle } from "@/components/theme-toggle"
import { SiteNav } from "./site-nav"

const fontCal = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  display: "swap",
  variable: "--font-cal",
  weight: "600",
  style: "normal",
  declarations: [
    /* font-feature-settings: "ssXY" 1;
  font-variant-alternates: styleset(ss02); */
    {
      // ss02 ligatures
      prop: "featureSettings",
      value: "styleset(ss02)",
    },
  ],
})

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="fr"
      className={cn("h-screen w-screen ", fontCal.variable, fontSans.variable)}
    >
      <ThemeProvider>
        <body className="relative h-full w-full bg-white text-black dark:bg-black dark:text-white">
          {children}
          <div className="absolute top-4 right-4 z-10">
            <ThemeToggle />
          </div>
          <TailwindIndicator />
          <SiteNav />
        </body>
      </ThemeProvider>
    </html>
  )
}
