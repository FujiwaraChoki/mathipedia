"use client";

import Link from "next/link";
import { Book, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { name: "Algebra", href: "/algebra" },
    { name: "Calculus", href: "/calculus" },
    { name: "Geometry", href: "/geometry" },
    { name: "Trigonometry", href: "/trigonometry" },
    { name: "Linear Algebra", href: "/linear-algebra" },
    { name: "Discrete Math", href: "/discrete-math" },
    { name: "Number Theory", href: "/number-theory" },
    { name: "Statistics", href: "/statistics" },
  ];

  return (
    <nav className="border-b bg-white dark:bg-card sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Book className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Mathipedia</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {section.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {section.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
