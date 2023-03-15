"use client"

import { FC, useEffect, useRef, useState } from "react"
import Image from "next/image"

import { Project } from "../projects"

export const ProjectGallery: FC<{ project: Project }> = ({ project }) => {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  useEffect(() => {
    // set animattion on marque by directly controlling the position of the component, and reducing the speed on hover
    const marqueeImages = marqueeRef.current?.querySelector("#marquee-images")
    if (!marqueeImages) return
    const clone = marqueeImages.cloneNode(true) as HTMLElement
    clone.id = "marquee-images-clone"
    marqueeImages.parentElement?.appendChild(clone)
  }, [marqueeRef])

  const handleMarqueeEnter = () => {
    // increase --marquee-duration to 300s for each child with class "marquee"

    marqueeRef.current?.querySelectorAll(".marquee").forEach((marquee) => {
      marquee.setAttribute("style", "--marquee-status: paused")
    })
  }

  const handleMarqueeLeave = () => {
    // reset --marquee-duration to 25s for each child with class "marquee"
    marqueeRef.current?.querySelectorAll(".marquee").forEach((marquee) => {
      marquee.setAttribute("style", "--marquee-status: running")
    })
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="relative h-[500px] w-full ">
        <Image
          src={project.images[selectedImageIndex]}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div
        onLoad={(e) => {
          console.log("loaded", e)
        }}
        className="flex w-full overflow-hidden border border-teal-500 bg-teal-200/50 "
        id="marquee"
        onMouseEnter={handleMarqueeEnter}
        onMouseLeave={handleMarqueeLeave}
        onTouchStart={handleMarqueeEnter}
        onTouchEnd={handleMarqueeLeave}
        ref={marqueeRef}
      >
        <div id="marquee-images" className="marquee flex">
          {project.images.map((image, i) => (
            <button
              onClick={() => setSelectedImageIndex(i)}
              className="relative aspect-square w-40"
            >
              <Image
                src={image}
                alt={"image " + i + " pour le projet " + project.title}
                fill
                className="object-cover "
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
