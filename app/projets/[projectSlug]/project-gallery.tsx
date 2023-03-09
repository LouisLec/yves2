"use client"

import { FC, useRef } from "react"
import Image from "next/image"

import { Project } from "../projects"

export const ProjectGallery: FC<{ project: Project }> = ({ project }) => {
  const marqueeRef = useRef<HTMLDivElement>(null)

  const handleMarqueeEnter = () => {
    // increase --marquee-duration to 300s for each child with class "marquee"

    marqueeRef.current?.querySelectorAll(".marquee").forEach((marquee) => {
      marquee.setAttribute("style", "--marquee-duration: 300s")
    })
  }

  const handleMarqueeLeave = () => {
    // reset --marquee-duration to 25s for each child with class "marquee"
    marqueeRef.current?.querySelectorAll(".marquee").forEach((marquee) => {
      marquee.setAttribute("style", "--marquee-duration: 25s")
    })
  }

  return (
    <>
      <div className="relative h-[500px] w-full lg:w-[500px]">
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div
        className="flex w-full overflow-hidden border border-teal-500 bg-teal-200/50 lg:w-[500px]"
        id="marquee"
        onMouseEnter={handleMarqueeEnter}
        onMouseLeave={handleMarqueeLeave}
        onTouchStart={handleMarqueeEnter}
        onTouchEnd={handleMarqueeLeave}
        ref={marqueeRef}
      >
        <div id="marquee-images" className="marquee flex">
          {project.images.map((image, i) => (
            <div className="relative aspect-square w-40">
              <Image
                src={image}
                alt={"image " + i + " pour le projet " + project.title}
                fill
                className="object-cover "
              />
            </div>
          ))}
        </div>
        <div id="marquee-images-clone" aria-hidden className="marquee flex">
          {project.images.map((image, i) => (
            <div className="relative aspect-square w-40 ">
              <Image
                src={image}
                alt={"image " + i + " pour le projet " + project.title}
                fill
                className="object-cover "
              />
            </div>
          ))}
        </div>
        <div
          id="marquee-images-second-clone"
          aria-hidden
          className="marquee flex"
        >
          {project.images.map((image, i) => (
            <div className="relative aspect-square w-40 ">
              <Image
                src={image}
                alt={"image " + i + " pour le projet " + project.title}
                fill
                className="object-cover "
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
