"use client"

import { FC, useReducer } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTrigger,
} from "@radix-ui/react-dialog"
import { Book, File, FolderClosed, FolderOpen, Lamp } from "lucide-react"

import { cn } from "@/lib/utils"
import { projects } from "./projets/projects"

export const SiteNav: FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [state, dispatch] = useReducer(
    (previousState, event) => {
      switch (event.type) {
        case "open":
          return { isProjectPanelOpen: true }
        case "close":
          return { isProjectPanelOpen: false }
        case "select-project":
          router.push(event.payload.href)
          return { isProjectPanelOpen: false }
      }
    },
    { isProjectPanelOpen: false }
  )
  return (
    <div className="z-10 flex">
      <div className={cn("block border-2 border-slate-500 p-4")}>
        <Lamp size={24} className="stroke-slate-500 stroke-2" />
      </div>

      <Dialog
        open={state.isProjectPanelOpen}
        onOpenChange={(open) => {
          dispatch({ type: open ? "open" : "close" })
        }}
      >
        <DialogTrigger className={cn(" border-2 border-slate-500 p-4")}>
          <Book size={24} className="stroke-slate-500 stroke-2" />
        </DialogTrigger>
        <DialogOverlay className="fixed inset-0 bg-black/50" />
        <DialogContent className="fixed inset-0 grid place-content-center">
          <div className="m-12 grid grid-cols-4 gap-12 border-4 border-pink-500">
            {projects?.map(
              (project) =>
                project.slug !== "cahier-de-brouillon" && (
                  <button
                    key={project.slug}
                    className={cn(
                      "flex flex-col items-center gap-2  border-2 border-slate-500 bg-white p-4",
                      {
                        "bg-slate-100":
                          pathname === `/projets/${project?.slug}`,
                      }
                    )}
                    onClick={() =>
                      dispatch({
                        type: "select-project",
                        payload: { href: `/projets/${project?.slug}` },
                      })
                    }
                  >
                    {pathname === `/projets/${project?.slug}` ? (
                      <FolderOpen
                        size={24}
                        className="stroke-slate-500 stroke-2"
                      />
                    ) : (
                      <FolderClosed
                        size={24}
                        className="stroke-slate-500 stroke-2"
                      />
                    )}
                  </button>
                )
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
