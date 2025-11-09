import Link from "next/link";
import { Book } from "lucide-react";

export function Navigation() {
  return (
    <nav className="border-b bg-white dark:bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Book className="h-6 w-6" />
              <span className="text-xl font-bold">Mathipedia</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/algebra"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Algebra
            </Link>
            <Link
              href="/calculus"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Calculus
            </Link>
            <Link
              href="/geometry"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Geometry
            </Link>
            <Link
              href="/discrete-math"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Discrete Math
            </Link>
            <Link
              href="/statistics"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Statistics
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
