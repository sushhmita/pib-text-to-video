"use client"

import Link from "next/link"
import { Bot, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#methodology", label: "Methodology" },
    { href: "#features", label: "Features" },
    { href: "#team", label: "Team" },
    { href: "#publications", label: "Publications" },
    { href: "#future-scope", label: "Future Scope" },
    { href: "#contact", label: "Contact" },
]

export function Header() {
    const [isSheetOpen, setIsSheetOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="#home" className="mr-6 flex items-center space-x-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">
              AI News Studio
            </span>
          </Link>
          <nav className="hidden items-center gap-4 text-sm lg:flex">
            {navLinks.map((link) => (
                <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors hover:text-foreground/80 text-foreground/60"
                >
                    {link.label}
                </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col p-6">
                <Link href="#home" className="mb-8 flex items-center space-x-2" onClick={() => setIsSheetOpen(false)}>
                  <Bot className="h-6 w-6 text-primary" />
                  <span className="font-bold">AI News Studio</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className="text-lg font-medium transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
