"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Heart, MapPin, DollarSign, Sparkles, Moon, Home } from "lucide-react"
import Link from "next/link"

const profiles = [
  {
    id: 1,
    name: "Alex",
    age: 24,
    neighborhood: "Mission District",
    budget: "$1,200/mo",
    tags: [
      { icon: Sparkles, label: "Very tidy" },
      { icon: Moon, label: "Night owl" },
      { icon: Home, label: "Social" },
    ],
    image: "/young-professional-smiling.jpg",
  },
  {
    id: 2,
    name: "Jordan",
    age: 22,
    neighborhood: "SOMA",
    budget: "$1,000/mo",
    tags: [
      { icon: Sparkles, label: "Moderate" },
      { icon: Moon, label: "Early bird" },
      { icon: Home, label: "Relaxed" },
    ],
    image: "/college-student-casual.jpg",
  },
]

export function SwipeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePass = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleLike = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  if (currentIndex >= profiles.length) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground">{"That's all for now!"}</h2>
          <p className="text-muted-foreground">Check back later for more matches</p>
        </div>
      </div>
    )
  }

  const profile = profiles[currentIndex]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Card Stack */}
      <div className="flex-1 p-4 pt-8">
        <div className="relative mx-auto max-w-sm h-[calc(100vh-200px)]">
          {/* Profile Card */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden bg-card shadow-xl">
            <img src={profile.image || "/placeholder.svg"} alt={profile.name} className="w-full h-2/3 object-cover" />
            <div className="p-6 space-y-4">
              {/* Name and Age */}
              <div>
                <h2 className="text-3xl font-bold text-foreground">
                  {profile.name}, {profile.age}
                </h2>
              </div>

              {/* Location and Budget */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{profile.neighborhood}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <DollarSign className="h-4 w-4" />
                  <span>{profile.budget}</span>
                </div>
              </div>

              {/* Lifestyle Tags */}
              <div className="flex flex-wrap gap-2">
                {profile.tags.map((tag, index) => {
                  const Icon = tag.icon
                  return (
                    <Badge key={index} variant="secondary" className="px-3 py-1.5 text-sm">
                      <Icon className="h-3.5 w-3.5 mr-1.5" />
                      {tag.label}
                    </Badge>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pb-8">
        <div className="flex justify-center gap-6 max-w-sm mx-auto">
          <Button
            size="lg"
            variant="outline"
            onClick={handlePass}
            className="h-16 w-16 rounded-full p-0 border-2 bg-transparent"
          >
            <X className="h-7 w-7 text-muted-foreground" />
          </Button>
          <Link href="/match">
            <Button size="lg" onClick={handleLike} className="h-16 w-16 rounded-full p-0">
              <Heart className="h-7 w-7 fill-current" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
