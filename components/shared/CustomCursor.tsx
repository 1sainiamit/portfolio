"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    // Only run on desktop
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter);
      document.addEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mouseenter", mEnter);
      document.removeEventListener("mouseleave", mLeave);
      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseup", mUp);
    };

    const mMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
      
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setLinkHovered(true);
      } else {
        setLinkHovered(false);
      }
    };

    const mEnter = () => setHidden(false);
    const mLeave = () => setHidden(true);
    const mDown = () => setClicked(true);
    const mUp = () => setClicked(false);

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) {
    return null; // Don't render custom cursor on mobile
  }

  return (
    <>
      {/* Outer crosshair / expanding circle */}
      <div
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[100] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black transition-all duration-150 ease-out",
          hidden ? "opacity-0" : "opacity-100",
          clicked ? "scale-75" : "scale-100",
          linkHovered ? "scale-150 bg-secondary/30" : "bg-transparent"
        )}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {/* Inner solid dot */}
      <div
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-[100] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black transition-opacity duration-150",
          hidden ? "opacity-0" : "opacity-100"
        )}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
