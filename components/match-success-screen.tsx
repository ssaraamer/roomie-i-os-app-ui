"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Link from "next/link"

export function MatchSuccessScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
      <div className="w-full max-w-sm space-y-8 text-center">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-primary opacity-25" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-primary">
              <Heart className="h-12 w-12 text-primary-foreground fill-current" />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-foreground">{"It's a match!"}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            You and Alex both showed interest. Start chatting to see if
            {"you're"} a good fit!
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Link href="/chat">
            <Button size="lg" className="w-full h-14 text-base">
              Start chatting
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
