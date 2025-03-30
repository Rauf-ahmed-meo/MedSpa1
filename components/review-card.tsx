"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ReviewCardProps {
  name: string
  review: string
  source: string
}

export function ReviewCard({ name, review, source }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 min-w-[300px] max-w-[400px] flex-shrink-0 shadow-sm">
      <div className="flex items-center mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star key={star} className="w-4 h-4 fill-[#e6d2c9] text-[#e6d2c9]" />
        ))}
      </div>

      <h4 className="font-medium text-[#4a2a1d] mb-2">{name}</h4>

      <p className="text-sm text-[#4a2a1d] mb-4">{review}</p>

      <div className="flex items-center justify-between">
        <span className="text-sm text-[#4a2a1d]">{source}</span>
        <Button
          className="bg-[#4a2a1d] hover:bg-[#6b3d2b] text-white rounded-full px-6"
          onClick={() => window.Calendly?.showPopupWidget("https://calendly.com/raufahmedmeo/30min")}
        >
          Book now
        </Button>
      </div>
    </div>
  )
}

