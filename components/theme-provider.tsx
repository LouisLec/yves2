"use client"

import { ThemeProvider as OriginalThemeProvider } from "next-themes"

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <OriginalThemeProvider>{children}</OriginalThemeProvider>
}
