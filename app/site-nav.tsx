"use client"

import { FC } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Book, Lamp } from "lucide-react"

import { cn } from "@/lib/utils"

export const SiteNav: FC = () => {
  const pathname = usePathname()
  return (
    <nav className="absolute inset-x-0 bottom-8 z-10 flex">
      <ul className="mx-auto flex justify-center space-x-4 ">
        <li>
          <Link
            href="/cahier-de-brouillon"
            className={cn("inline-block rounded border-2 border-slate-500 p-4")}
          >
            <Lamp size={24} className="stroke-slate-500 stroke-2" />
          </Link>
        </li>
        <li>
          <Link
            href="/projets"
            className={cn("inline-block rounded border-2 border-slate-500 p-4")}
          >
            <Book size={24} className="stroke-slate-500 stroke-2" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
