"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"

const messages = [
  {
    id: 1,
    sender: "them",
    text: "Hey! Thanks for matching. I saw you're looking in the Mission District too!",
    time: "10:32 AM",
  },
  {
    id: 2,
    sender: "me",
    text: "Yes! I love that area. Have you found any good places yet?",
    time: "10:35 AM",
  },
  {
    id: 3,
    sender: "them",
    text: "I've been looking at a few 2-bedrooms near Dolores Park. Want to coordinate viewings?",
    time: "10:38 AM",
  },
]

export function ChatScreen() {
  const [newMessage, setNewMessage] = useState("")

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-border bg-card px-4 py-4">
        <Link href="/swipe">
          <Button variant="ghost" size="icon" className="h-10 w-10">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
        <Avatar className="h-10 w-10">
          <AvatarImage src="/diverse-group.png" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="font-semibold text-foreground">Alex</h2>
          <p className="text-sm text-muted-foreground">Active now</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[75%] space-y-1 ${message.sender === "me" ? "items-end" : "items-start"}`}>
              <div
                className={`rounded-2xl px-4 py-3 ${
                  message.sender === "me" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
              </div>
              <p className="text-xs text-muted-foreground px-2">{message.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="border-t border-border bg-card p-4">
        <div className="flex gap-3">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 h-12 text-base"
          />
          <Button size="lg" className="h-12 px-6">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
