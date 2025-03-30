"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Check, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CalendlyWidget } from "@/components/calendly-widget"
import { TreatmentSection } from "@/components/treatment-section"
import { ReviewCard } from "@/components/review-card"

// Treatment data with prices
const treatmentData = {
  injectables: [
    { name: "Botox and Dysport", price: "$12 per unit" },
    { name: "Dermal Fillers", price: "$650+" },
    { name: "Sculptra", price: "$850 per vial" },
    { name: "PRF EZ Gel", price: "$750" },
    { name: "Kybella", price: "$600 per session" },
    { name: "Lip Fillers", price: "$550+" },
    { name: "Jawline Contouring", price: "$1200+" },
    { name: "Under Eye Fillers", price: "$750" },
  ],
  lasers: [
    { name: "Co2 Laser Resurfacing", price: "$1500" },
    { name: "Moxi Laser", price: "$450 per session" },
    { name: "BBL Photofacial", price: "$350 per session" },
    { name: "Laser Hair Removal", price: "$150+" },
    { name: "Skin Tightening", price: "$650 per session" },
    { name: "Vascular Treatments", price: "$300+" },
  ],
  skincare: [
    { name: "SkinPen Microneedling", price: "$350" },
    { name: "Chemical Peels", price: "$150+" },
    { name: "HydraFacial", price: "$199" },
    { name: "Signature Facials", price: "$125+" },
    { name: "Dermaplaning", price: "$75" },
    { name: "LED Light Therapy", price: "$50" },
  ],
  other: [
    { name: "Pro-Nox Pain Management", price: "$50" },
    { name: "Men's Treatments", price: "Varies" },
    { name: "Body Contouring", price: "$350+" },
    { name: "Cellulite Reduction", price: "$250 per area" },
  ],
}

export default function Home() {
  const [showAllTreatments, setShowAllTreatments] = useState(false)

  const toggleAllTreatments = () => {
    setShowAllTreatments(!showAllTreatments)
  }

  return (
    <main className="min-h-screen bg-[#f5f4f2]">
      {/* Header - No navbar, just logo and book button */}
      <header className="sticky top-0 z-50 bg-[#f5f4f2] border-b border-[#e5e3e0]">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#4a2a1d] rounded-full"></div>
            <span className="text-[#4a2a1d] text-xl font-medium">U Med Spa</span>
          </div>
          <Button
            className="bg-[#4a2a1d] hover:bg-[#6b3d2b] text-white rounded-full px-6"
            onClick={() => window.Calendly?.showPopupWidget("https://calendly.com/raufahmedmeo/30min")}
          >
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left sm:text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#4a2a1d] mb-4">Invest in you</h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#4a2a1d] mb-8">Own your confidence</h2>

            <div className="flex items-center mb-2 justify-start sm:justify-center md:justify-start">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-[#e6d2c9] text-[#e6d2c9]" />
              ))}
              <span className="ml-2 text-[#4a2a1d] font-medium">OVER 1,000 5 STAR REVIEWS</span>
            </div>

            <h3 className="text-xl font-medium text-[#4a2a1d] mt-10 mb-4 border-b border-[#e5e3e0] pb-2">
              WHY CHOOSE U MED SPA
            </h3>

            <ul className="space-y-4">
              {[
                "#1 Med spa in Plano & Frisco since 2007",
                "Licensed and experienced medical team",
                "Expert in natural results & facial balancing",
                "Personalized care and experience",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 border-b border-[#e5e3e0] pb-4">
                  <Check className="w-5 h-5 text-[#4a2a1d]" />
                  <span className="text-[#4a2a1d]">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-start sm:justify-center md:justify-start mt-8">
              <Button
                className="bg-[#4a2a1d] hover:bg-[#6b3d2b] text-white rounded-full px-8 py-6"
                onClick={() => window.Calendly?.showPopupWidget("https://calendly.com/raufahmedmeo/30min")}
              >
                Book an appointment now
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="https://umedspa.com/wp-content/uploads/2025/03/photo-e1741368835528.jpg"
              alt="U Med Spa Storefront"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-12 md:py-16 bg-[#f5f4f2]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-[#4a2a1d] mb-12 text-left sm:text-center md:text-left">
            Treatments
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TreatmentSection
              title="INJECTABLE SERVICES"
              treatments={showAllTreatments ? treatmentData.injectables : treatmentData.injectables.slice(0, 5)}
            />

            <TreatmentSection
              title="LASERS + LIGHTS"
              treatments={showAllTreatments ? treatmentData.lasers : treatmentData.lasers.slice(0, 3)}
            />

            <TreatmentSection
              title="SKINCARE TREATMENTS"
              treatments={showAllTreatments ? treatmentData.skincare : treatmentData.skincare.slice(0, 4)}
            />

            <TreatmentSection
              title="OTHER"
              treatments={showAllTreatments ? treatmentData.other : treatmentData.other.slice(0, 2)}
            />
          </div>

          <div className="flex justify-center mt-10">
            <Button
              variant="outline"
              className="border-[#4a2a1d] text-[#4a2a1d] rounded-full px-8"
              onClick={toggleAllTreatments}
            >
              {showAllTreatments ? "Show Less" : "View All Services"}
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 md:py-16 bg-[#f5f4f2]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-[#4a2a1d] mb-8 text-left sm:text-center md:text-left">
            Our reviews
          </h2>

          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide">
              <ReviewCard
                name="JULIA"
                review="I have been seeing Kenzie Rae for over a year now, she is amazing! I am so happy with my results. Kenzie is always so sweet and friendly, very thorough, explains everything and answers my questions. I always leave U Med Spa feeling better and more confident!"
                source="Google"
              />

              <ReviewCard
                name="SARAH"
                review="The staff is incredibly professional and knowledgeable. My treatments have given me amazing results and I couldn't be happier with my experience at U Med Spa."
                source="Google"
              />

              <ReviewCard
                name="MICHAEL"
                review="As a first-timer to med spa services, I was nervous but the team made me feel comfortable. The results exceeded my expectations and I've already booked my next appointment."
                source="Google"
              />
            </div>

            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronLeft className="w-5 h-5 text-[#4a2a1d]" />
            </button>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hidden md:block">
              <ChevronRight className="w-5 h-5 text-[#4a2a1d]" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4a2a1d] text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="text-left sm:text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 justify-start sm:justify-center md:justify-start">
              <div className="w-10 h-10 bg-white rounded-full"></div>
              <span className="text-white text-xl font-medium">U Med Spa</span>
            </div>
            <p>Invest in you. Own your confidence.</p>
          </div>

          <div className="text-left sm:text-center md:text-left">
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <p>123 Main Street</p>
            <p>Plano, TX 75023</p>
            <p className="mt-4">info@umedspa.com</p>
            <p>(555) 123-4567</p>
          </div>

          <div className="text-left sm:text-center md:text-left">
            <h3 className="text-lg font-medium mb-4">Hours</h3>
            <p>Monday - Friday: 9am - 7pm</p>
            <p>Saturday: 10am - 5pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </footer>

      {/* Calendly Widget */}
      <CalendlyWidget />
    </main>
  )
}

