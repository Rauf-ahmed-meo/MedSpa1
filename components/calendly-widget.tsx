"use client"

import { useEffect } from "react"
import Script from "next/script"

export function CalendlyWidget() {
  useEffect(() => {
    // Define Calendly on the window object to avoid TypeScript errors
    if (typeof window !== "undefined" && !window.Calendly) {
      window.Calendly = {
        showPopupWidget: (url: string) => {
          console.log("Calendly not loaded yet, will open URL:", url)
        },
        initBadgeWidget: (options: any) => {
          console.log("Calendly not loaded yet, will init badge with:", options)
        },
      }
    }

    return () => {
      // Cleanup if needed
    }
  }, [])

  return (
    <>
      {/* Calendly CSS */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />

      {/* Calendly JS */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Calendly script loaded")
          if (window.Calendly) {
            window.Calendly.initBadgeWidget({
              url: "https://calendly.com/raufahmedmeo/30min",
              text: "Schedule time with me",
              color: "#4a2a1d",
              textColor: "#ffffff",
            })
          }
        }}
      />
    </>
  )
}

