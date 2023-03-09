"use client"

import { FC, useEffect, useRef, useState } from "react"

import { ProjectCard } from "./project-card"

const projects = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/200/303",
    initialPosition: { x: 21, y: 34 },
    initialSize: { width: 400, height: 430 },
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/200/304",
    initialPosition: { x: 60, y: 74 },
    initialSize: { width: 260, height: 300 },
  },
  {
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/200/305",
    initialPosition: { x: 80, y: 21 },
    initialSize: { width: 480, height: 200 },
  },
]
export const HomePageDisplay: FC = () => {
  const blobRef = useRef<HTMLDivElement>(null)

  const updateMousePosition = (e: MouseEvent) => {
    blobRef?.current?.animate(
      {
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    )
  }

  useEffect(() => {
    console.log("blobRef", blobRef)
    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [blobRef])

  return (
    <div className="relative h-full w-full">
      <div
        id="blob"
        ref={blobRef}
        className="blob absolute left-1/2 top-1/2 aspect-square h-96 rounded-full bg-gradient-to-tr from-green-500 to-teal-600 opacity-80"
      />
      <div
        id="blur"
        className="[var(--tw-backdrop-blur)=500px] absolute inset-0 z-10 backdrop-blur-[200px]"
      />

      <div className="relative z-10 flex h-full w-full items-center justify-center text-center">
        <h1 className=" font-cal text-7xl">Yves Lecointre ff</h1>
        {projects.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
    </div>
  )
}
