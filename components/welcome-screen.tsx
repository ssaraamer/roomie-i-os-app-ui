"use client"

import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import Link from "next/link"

export function WelcomeScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-card p-6">
      <div className="w-full max-w-sm space-y-8 text-center">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-primary">
            <Home className="h-10 w-10 text-primary-foreground" />
          </div>
        </div>

        {/* App Name */}
        <div className="space-y-3">
          <h1 className="text-5xl font-bold tracking-tight text-foreground">Roomie</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">Find your next roommate — minus the stress</p>
        </div>

        {/* CTA Buttons */}
        <div className="space-y-4 pt-8">
          <Link href="/life-phase" className="block">
            <Button size="lg" className="w-full h-14 text-base font-medium">
              Get started
            </Button>
          </Link>
          <Button variant="ghost" size="lg" className="w-full text-base text-muted-foreground hover:text-foreground">
            I already have an account
          </Button>
        </div>
      </div>
    </div>
  )
}
