import { Inter as FontSans } from "@next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import "@/styles/globals.css"
import localFont from "@next/font/local"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const fontCal = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
  display: "swap",
  variable: "--font-cal",
  weight: "600",
  style: "normal",
  declarations: [
    {
      // ss02 ligatures
      prop: "featureSettings",
      value: '"ss02" on',
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
        </body>
      </ThemeProvider>
    </html>
  )
}
