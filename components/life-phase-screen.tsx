"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase, Building2, Plane } from "lucide-react"
import Link from "next/link"

const lifePhases = [
  {
    id: "college",
    label: "College / Off-Campus Housing",
    icon: GraduationCap,
  },
  {
    id: "intern",
    label: "Intern / Temporary Housing",
    icon: Briefcase,
  },
  {
    id: "post-grad",
    label: "Post-Grad / Early Career",
    icon: Building2,
  },
  {
    id: "relocating",
    label: "Relocating Professional",
    icon: Plane,
  },
]

export function LifePhaseScreen() {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <div className="px-6 pt-12 pb-8">
        <h1 className="text-3xl font-bold text-foreground text-balance">What stage of life are you in?</h1>
      </div>

      {/* Options */}
      <div className="flex-1 px-6 space-y-3 pb-32">
        {lifePhases.map((phase) => {
          const Icon = phase.icon
          return (
            <Card
              key={phase.id}
              className={`p-5 cursor-pointer transition-all border-2 ${
                selected === phase.id ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/30"
              }`}
              onClick={() => setSelected(phase.id)}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    selected === phase.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-base font-medium text-foreground leading-relaxed">{phase.label}</p>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-6">
        <Link href="/profile-setup">
          <Button size="lg" className="w-full h-14 text-base" disabled={!selected}>
            Continue
          </Button>
        </Link>
      </div>
    </div>
  )
}
