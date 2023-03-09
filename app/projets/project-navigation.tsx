"use client"

import { FC } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Project } from "./projects"

export const ProjectNavigation: FC<{ projects: Project[] }> = ({
  projects,
}) => {
  const pathname = usePathname()

  return (
    <nav className="flex h-full max-w-max flex-col  justify-center">
      <ul className="space-y-4 rounded bg-slate-100 px-6 py-3 dark:bg-slate-900">
        {projects.map((project) => (
          <li
            className={cn(
              "text-slate-500 dark:text-slate-400",
              pathname === `/projets/${project.slug}` &&
                "text-slate-900 dark:text-slate-100"
            )}
          >
            <Link href={`/projets/${project.slug}`}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
