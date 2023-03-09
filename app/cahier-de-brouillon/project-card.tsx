/* eslint-disable @next/next/no-img-element */
"use client"

import { FC, useRef, useState } from "react"
import { GripVertical } from "lucide-react"

/*
  title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://picsum.photos/200/303",
    initialPosition: { x: 21, y: 34 },
    initialSize: { width: 400, height: 430 }, */
interface Project {
  title: string
  description: string
  image: string
  initialPosition: {
    x: number
    y: number
  }
  initialSize: {
    width: number
    height: number
  }
}

export const ProjectCard: FC<Project> = ({
  title,
  description,
  image,
  initialPosition,
  initialSize,
}) => {
  const [position, setPosition] = useState(initialPosition)
  const [size, setSize] = useState(initialSize)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const cardRef = useRef<HTMLDivElement>()
  const resizeRef = useRef<HTMLDivElement>()

  const handleMouseDown = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    const { left, top } = cardRef.current.getBoundingClientRect()
    // get window dimensions

    const { innerWidth, innerHeight } = window
    const offsetX = clientX - left
    const offsetY = clientY - top

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setPosition({
        x: ((clientX - offsetX) / innerWidth) * 100,
        y: ((clientY - offsetY) / innerHeight) * 100,
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }

    setIsDragging(true)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    const { left, top, height, right, width, bottom } =
      cardRef.current.getBoundingClientRect()

    console.table({ left, top, height, right, width, bottom })
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setSize({
        width: clientX - left,
        height: clientY - top,
      })
    }

    const handleMouseUp = () => {
      setIsResizing(false)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }

    setIsResizing(true)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <div
      ref={cardRef}
      className="absolute isolate z-20 border-4 border-slate-500 bg-slate-200 font-mono"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: `${size.width}px`,
        height: `${size.height}px`,
      }}
    >
      <div
        className="absolute -left-0.5 top-4 z-20 flex h-8 w-6 -translate-x-full items-center rounded-l-lg bg-slate-500 "
        style={{
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
      >
        <GripVertical />
      </div>
      <div
        ref={resizeRef}
        className="absolute bottom-0 right-0 z-20 h-6 w-6 cursor-se-resize border-b-8 border-r-8 border-slate-500"
        onMouseDown={handleResizeMouseDown}
      />
      <div className="absolute inset-0 overflow-hidden ">
        <img src={image} alt={title} className="h-full w-full object-cover " />
      </div>
      <div className="relative z-10 h-full w-full bg-slate-700/30 p-4">
        <h3 className="text-5xl font-bold text-slate-50 drop-shadow-2xl">
          {title}
        </h3>
      </div>
    </div>
  )
}
