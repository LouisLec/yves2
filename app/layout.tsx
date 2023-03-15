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
      suppressHydrationWarning
      lang="fr"
      className={cn(
        "relative h-screen bg-purple-400",
        fontCal.variable,
        fontSans.variable
      )}
    >
      <ThemeProvider>
        <body className="absolute inset-4 flex h-[calc(100vh-32px)] flex-col  overflow-hidden border-4 border-lime-500 bg-white text-black dark:bg-black dark:text-white">
          <div className="flex grow  overflow-hidden  border-4    border-pink-500 ">
            <div className="w-8 border-4 border-yellow-400">jojo</div>
            <div className="grow overflow-auto border-4 border-teal-500">
              {children}
            </div>
          </div>
          <div className="flex items-center justify-between border-4 border-purple-500">
            <SiteNav />
            <div>
              <ThemeToggle />
            </div>
          </div>
          <div className="absolute top-4 right-4 z-10"></div>
          <TailwindIndicator />
        </body>
      </ThemeProvider>
    </html>
  )
}
