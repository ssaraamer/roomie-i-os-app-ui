"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { MapPin, DollarSign, Calendar, Sparkles, Moon, Dog } from "lucide-react"
import Link from "next/link"

const steps = [
  { id: 1, label: "Location" },
  { id: 2, label: "Budget" },
  { id: 3, label: "Timeline" },
  { id: 4, label: "Lifestyle" },
  { id: 5, label: "Preferences" },
]

export function ProfileSetupScreen() {
  const [currentStep, setCurrentStep] = useState(1)
  const [cleanliness, setCleanliness] = useState([50])
  const [social, setSocial] = useState([50])
  const [sleep, setSleep] = useState([50])

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Progress Indicator */}
      <div className="px-6 pt-8 pb-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-muted-foreground">
            Step {currentStep} of {steps.length}
          </p>
        </div>
        <div className="flex gap-2">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`h-1 flex-1 rounded-full ${step.id <= currentStep ? "bg-primary" : "bg-muted"}`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-32">
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Where are you looking?</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="e.g., San Francisco" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="neighborhood">Preferred Neighborhood (Optional)</Label>
                <Input id="neighborhood" placeholder="e.g., Mission District" />
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{"What's your monthly budget?"}</h2>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="min">Minimum</Label>
                <Input id="min" type="number" placeholder="$800" className="text-lg" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max">Maximum</Label>
                <Input id="max" type="number" placeholder="$1,500" className="text-lg" />
              </div>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">When can you move in?</h2>
            </div>
            <div className="space-y-3">
              {["Immediately", "Within 1 month", "1-3 months", "3+ months"].map((option) => (
                <button
                  key={option}
                  className="w-full p-4 text-left rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <p className="font-medium text-foreground">{option}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Tell us about your lifestyle</h2>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label>Cleanliness</Label>
                  <span className="text-sm text-muted-foreground">
                    {cleanliness[0] < 30 ? "Relaxed" : cleanliness[0] < 70 ? "Moderate" : "Very tidy"}
                  </span>
                </div>
                <Slider value={cleanliness} onValueChange={setCleanliness} max={100} step={1} className="w-full" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label>Social Level</Label>
                  <span className="text-sm text-muted-foreground">
                    {social[0] < 30 ? "Keep to myself" : social[0] < 70 ? "Balanced" : "Very social"}
                  </span>
                </div>
                <Slider value={social} onValueChange={setSocial} max={100} step={1} className="w-full" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Moon className="h-4 w-4 text-muted-foreground" />
                    <Label>Sleep Schedule</Label>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {sleep[0] < 30 ? "Early bird" : sleep[0] < 70 ? "Flexible" : "Night owl"}
                  </span>
                </div>
                <Slider value={sleep} onValueChange={setSleep} max={100} step={1} className="w-full" />
              </div>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Dog className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Any pets?</h2>
            </div>
            <div className="space-y-3">
              {["Yes, I have pets", "No pets", "Open to pets"].map((option) => (
                <button
                  key={option}
                  className="w-full p-4 text-left rounded-xl border-2 border-border hover:border-primary hover:bg-primary/5 transition-all"
                >
                  <p className="font-medium text-foreground">{option}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-6">
        <div className="flex gap-3">
          {currentStep > 1 && (
            <Button variant="outline" size="lg" className="h-14 text-base bg-transparent" onClick={prevStep}>
              Back
            </Button>
          )}
          {currentStep < steps.length ? (
            <Button size="lg" className="flex-1 h-14 text-base" onClick={nextStep}>
              Continue
            </Button>
          ) : (
            <Link href="/swipe" className="flex-1">
              <Button size="lg" className="w-full h-14 text-base">
                Start Swiping
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
