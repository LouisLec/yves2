import Image from "next/image"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

import { ScrollArea } from "@/components/ui/scroll-area"
import { getProjectBySlug } from "../projects"
import { ProjectGallery } from "./project-gallery"

export default async function ProjectPage({
  params: { projectSlug },
}: {
  params: { projectSlug: string }
}) {
  const project = await getProjectBySlug(projectSlug)

  if (!project) return notFound()

  return (
    <main className="flex flex-col items-center gap-4 overflow-hidden bg-slate-500/20 lg:flex-row">
      <div className=" w-full border border-sky-500 bg-slate-500/20 lg:h-full">
        <ProjectGallery project={project} />

        <div className="grid grow grid-cols-3 gap-4 border border-pink-500 bg-slate-500/20">
          <div className="col-span-2 bg-slate-500">
            <h1>{project.title}</h1>
            <p className="flex flex-wrap gap-4">
              {project.tags.map((tag) => (
                <span className="rounded border px-2 py-1 text-slate-500 dark:text-slate-400">
                  {tag}
                </span>
              ))}
            </p>
          </div>
          <div className="bg-slate-500">
            {new Date(project.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </div>
      <div className="flex h-full w-full grow flex-col justify-center border border-red-500 bg-slate-500/20 ">
        <ScrollArea className="max-h-full ">
          <ReactMarkdown className="prose dark:prose-invert">
            {project?.description}
          </ReactMarkdown>
        </ScrollArea>
      </div>
    </main>
  )
}
