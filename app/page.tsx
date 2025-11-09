import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Shapes, TrendingUp, Binary, BarChart } from "lucide-react";

export default function Home() {
  const sections = [
    {
      title: "Algebra",
      description: "Study of mathematical symbols and rules for manipulating these symbols",
      icon: Calculator,
      href: "/algebra",
      topics: ["Linear Equations", "Quadratic Equations", "Polynomials", "Functions"],
    },
    {
      title: "Calculus",
      description: "Mathematics of continuous change, including derivatives and integrals",
      icon: TrendingUp,
      href: "/calculus",
      topics: ["Limits", "Derivatives", "Integrals", "Series"],
    },
    {
      title: "Geometry",
      description: "Study of shapes, sizes, positions of figures, and properties of space",
      icon: Shapes,
      href: "/geometry",
      topics: ["Euclidean Geometry", "Triangles", "Circles", "Solid Geometry"],
    },
    {
      title: "Discrete Mathematics",
      description: "Study of mathematical structures that are fundamentally discrete",
      icon: Binary,
      href: "/discrete-math",
      topics: ["Set Theory", "Graph Theory", "Combinatorics", "Logic"],
    },
    {
      title: "Statistics",
      description: "Collection, analysis, interpretation, and presentation of data",
      icon: BarChart,
      href: "/statistics",
      topics: ["Probability", "Distributions", "Hypothesis Testing", "Regression"],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Mathipedia</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The free mathematics encyclopedia that anyone can explore. Learn fundamental concepts
            across all major branches of mathematics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link key={section.href} href={section.href}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-6 w-6 text-primary" />
                      <CardTitle>{section.title}</CardTitle>
                    </div>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {section.topics.map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>About Mathipedia</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              Mathipedia is a comprehensive, free encyclopedia dedicated to mathematics. Our mission
              is to provide clear, accessible explanations of mathematical concepts for students,
              educators, and enthusiasts at all levels.
            </p>
            <p>
              Each section covers fundamental topics with clear definitions, examples, and
              explanations. Start exploring by selecting a topic above!
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
