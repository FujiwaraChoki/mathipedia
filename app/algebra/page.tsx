import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AlgebraPage() {
  const topics = [
    {
      title: "Linear Equations",
      href: "/algebra/linear-equations",
      description: "First-degree equations, systems of equations, and their applications throughout mathematics and science.",
      subtopics: ["Solving methods", "Systems", "Slope-intercept form", "Applications"]
    },
    {
      title: "Quadratic Equations",
      href: "/algebra/quadratic-equations",
      description: "Second-degree polynomial equations, the quadratic formula, and parabolic functions.",
      subtopics: ["Quadratic formula", "Factoring", "Discriminant", "Vieta's formulas"]
    },
    {
      title: "Polynomials",
      href: "/algebra/polynomials",
      description: "Expressions with multiple terms, polynomial operations, and the fundamental theorem of algebra.",
      subtopics: ["Operations", "Division", "Factoring", "Roots"]
    },
    {
      title: "Exponential & Logarithmic Functions",
      href: "/algebra/exponential-logarithmic",
      description: "Growth and decay functions, logarithms, and their properties and applications.",
      subtopics: ["Exponential growth", "Logarithm laws", "Natural logarithms", "Applications"]
    },
    {
      title: "Complex Numbers",
      href: "/algebra/complex-numbers",
      description: "Numbers with real and imaginary parts, operations, and their geometric interpretation.",
      subtopics: ["Operations", "Polar form", "De Moivre's theorem", "Applications"]
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Algebra</h1>

        <Card className="mb-8">
          <CardContent className="prose dark:prose-invert max-w-none pt-6">
            <p className="text-lg">
              <strong>Algebra</strong> is the branch of mathematics that studies mathematical symbols and the rules
              for manipulating these symbols. It is a unifying thread of almost all of mathematics, providing a
              framework for solving equations, understanding functions, and modeling real-world phenomena.
            </p>

            <h3>Historical Overview</h3>
            <p>
              The word "algebra" comes from the Arabic "al-jabr" meaning "reunion of broken parts," from the title
              of a 9th-century book by Persian mathematician <strong>Muhammad ibn Musa al-Khwarizmi</strong>. His
              systematic approach to solving linear and quadratic equations laid the foundation for modern algebra.
            </p>

            <p>
              Algebra evolved from ancient practices of solving equations in Babylon and Egypt, through the
              geometric algebra of ancient Greece, the symbolic innovations of Islamic mathematicians, to the
              abstract algebraic structures studied today. Key contributors include:
            </p>

            <ul>
              <li>
                <strong>Diophantus of Alexandria</strong> (c. 200–284 CE) - "Father of Algebra," introduced
                symbolic notation
              </li>
              <li>
                <strong>Al-Khwarizmi</strong> (c. 780–850) - Systematic methods for solving equations
              </li>
              <li>
                <strong>Omar Khayyam</strong> (1048–1131) - Geometric solutions to cubic equations
              </li>
              <li>
                <strong>François Viète</strong> (1540–1603) - Modern symbolic notation
              </li>
              <li>
                <strong>René Descartes</strong> (1596–1650) - Connected algebra with geometry
              </li>
              <li>
                <strong>Évariste Galois</strong> (1811–1832) - Group theory and abstract algebra
              </li>
            </ul>

            <h3>Branches of Algebra</h3>
            <p>
              Modern algebra encompasses several distinct but related areas:
            </p>
            <ul>
              <li>
                <strong>Elementary Algebra</strong> - The fundamental concepts covered in this section, including
                equations, polynomials, and functions
              </li>
              <li>
                <strong>Abstract Algebra</strong> - Study of algebraic structures like groups, rings, and fields
              </li>
              <li>
                <strong>Linear Algebra</strong> - Vectors, matrices, and linear transformations (covered separately)
              </li>
              <li>
                <strong>Universal Algebra</strong> - General theory of algebraic structures
              </li>
              <li>
                <strong>Homological Algebra</strong> - Algebraic topology and category theory
              </li>
            </ul>
          </CardContent>
        </Card>

        <h2 className="text-3xl font-bold mb-6">Core Topics</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topics.map((topic) => (
            <Link key={topic.href} href={topic.href}>
              <Card className="h-full hover:shadow-lg transition-all hover:border-primary cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{topic.title}</CardTitle>
                    <ArrowRight className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-1" />
                  </div>
                  <CardDescription className="text-base">{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {topic.subtopics.map((subtopic) => (
                      <span
                        key={subtopic}
                        className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-md"
                      >
                        {subtopic}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Applications of Algebra</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              Algebra is fundamental to virtually every area of mathematics and science:
            </p>

            <h3>Sciences</h3>
            <ul>
              <li><strong>Physics:</strong> Equations of motion, electromagnetism, quantum mechanics</li>
              <li><strong>Chemistry:</strong> Chemical equations, reaction kinetics, equilibrium</li>
              <li><strong>Biology:</strong> Population dynamics, genetics, epidemiology models</li>
              <li><strong>Economics:</strong> Supply and demand, optimization, game theory</li>
            </ul>

            <h3>Technology</h3>
            <ul>
              <li><strong>Computer Science:</strong> Algorithms, cryptography, error-correcting codes</li>
              <li><strong>Engineering:</strong> Control systems, signal processing, structural analysis</li>
              <li><strong>Data Science:</strong> Machine learning, regression analysis, optimization</li>
              <li><strong>Computer Graphics:</strong> 3D transformations, rendering, animation</li>
            </ul>

            <h3>Everyday Life</h3>
            <ul>
              <li>Financial planning and compound interest</li>
              <li>Recipe scaling and unit conversions</li>
              <li>Travel time and distance calculations</li>
              <li>Home improvement and construction measurements</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
