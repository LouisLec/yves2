import Link from "next/link"

import { ProjectNavigation } from "./project-navigation"
import { projects } from "./projects"

export default async function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-full w-full gap-4 px-8 ">
      <aside className="hidden xl:block">
        <ProjectNavigation projects={projects} />
      </aside>
      <div className="flex h-full w-full flex-col justify-center">
        {children}
      </div>
    </div>
  )
}
