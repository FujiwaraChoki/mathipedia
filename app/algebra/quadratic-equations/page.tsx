"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Latex, BlockLatex } from "@/components/latex";
import Link from "next/link";

export default function QuadraticEquationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link href="/algebra" className="text-primary hover:underline">← Back to Algebra</Link>
        </div>

        <h1 className="text-4xl font-bold mb-6">Quadratic Equations</h1>

        <p className="text-lg text-muted-foreground mb-8">
          A quadratic equation is a second-order polynomial equation in a single variable. The general form contains
          a squared term, making these equations fundamental to algebra and appearing throughout mathematics,
          physics, and engineering.
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Historical Development</CardTitle>
              <CardDescription>From ancient Babylon to modern mathematics</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Ancient Origins (c. 2000 BCE – 300 CE)</h3>
              <p>
                Babylonian mathematicians were solving problems equivalent to quadratic equations as early as
                2000 BCE using geometric methods. Clay tablets show they could solve equations of the form
                <Latex>x^2 + bx = c</Latex> using completing the square, though they had no algebraic notation.
              </p>

              <p>
                The ancient Greek mathematician <strong>Euclid</strong> (c. 300 BCE) solved quadratic equations
                geometrically in his Elements, Book II. Indian mathematician <strong>Brahmagupta</strong> (598–668 CE)
                gave the first explicit formula for solving quadratic equations, including negative and irrational
                solutions.
              </p>

              <h3>Islamic Golden Age (8th–13th centuries)</h3>
              <p>
                <strong>Muhammad ibn Musa al-Khwarizmi</strong> (c. 780–850) provided systematic methods for solving
                quadratic equations in his treatise "Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala." He
                classified quadratic equations into six types and gave geometric proofs for the solution methods.
              </p>

              <p>
                Persian mathematician <strong>Omar Khayyam</strong> (1048–1131), also famous as a poet, extended
                methods to cubic equations and provided geometric solutions using conic sections.
              </p>

              <h3>European Renaissance and Modern Era</h3>
              <p>
                <strong>François Viète</strong> (1540–1603) introduced letter notation for variables and parameters,
                making algebra more general and powerful. <strong>René Descartes</strong> (1596–1650) developed the
                connection between algebra and geometry, showing that quadratic equations could be represented as
                parabolas.
              </p>

              <p>
                The discriminant and its relationship to the nature of roots was fully developed by European
                mathematicians in the 17th and 18th centuries, with <strong>Leonhard Euler</strong> (1707–1783)
                making significant contributions to the theory.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>General Form and Standard Form</CardTitle>
              <CardDescription>Mathematical structure of quadratic equations</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>General Form</h3>
              <p>A quadratic equation in one variable has the general form:</p>
              <div className="my-4">
                <BlockLatex>ax^2 + bx + c = 0</BlockLatex>
              </div>
              <p>where:</p>
              <ul>
                <li>
                  <Latex>a</Latex>, <Latex>b</Latex>, and <Latex>c</Latex> are constants (coefficients)
                </li>
                <li>
                  <Latex>a \neq 0</Latex> (if <Latex>a = 0</Latex>, the equation becomes linear)
                </li>
                <li>
                  <Latex>a</Latex> is the <strong>quadratic coefficient</strong>
                </li>
                <li>
                  <Latex>b</Latex> is the <strong>linear coefficient</strong>
                </li>
                <li>
                  <Latex>c</Latex> is the <strong>constant term</strong>
                </li>
              </ul>

              <h3>Parabolic Form (Vertex Form)</h3>
              <p>Quadratic equations can also be written in vertex form:</p>
              <div className="my-4">
                <BlockLatex>y = a(x - h)^2 + k</BlockLatex>
              </div>
              <p>
                where <Latex>(h, k)</Latex> is the <strong>vertex</strong> (the highest or lowest point) of the parabola.
                This form makes it easy to graph the quadratic function.
              </p>

              <h3>Factored Form</h3>
              <p>When a quadratic can be factored, it can be written as:</p>
              <div className="my-4">
                <BlockLatex>a(x - r_1)(x - r_2) = 0</BlockLatex>
              </div>
              <p>
                where <Latex>r_1</Latex> and <Latex>r_2</Latex> are the <strong>roots</strong> (solutions) of the equation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>The Quadratic Formula</CardTitle>
              <CardDescription>The universal solution method</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>The Formula</h3>
              <p>
                The quadratic formula, refined over centuries by mathematicians from Brahmagupta to modern times,
                gives the solutions to any quadratic equation:
              </p>
              <div className="my-4">
                <BlockLatex math="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
              </div>

              <h3>Derivation by Completing the Square</h3>
              <p>The formula can be derived by completing the square on the general form:</p>
              <div className="bg-muted p-4 rounded space-y-3">
                <p>
                  <strong>Step 1:</strong> Start with <Latex>ax^2 + bx + c = 0</Latex>
                </p>
                <p>
                  <strong>Step 2:</strong> Divide by <Latex>a</Latex>
                </p>
                <BlockLatex math="x^2 + \frac{b}{a}x + \frac{c}{a} = 0" />
                <p>
                  <strong>Step 3:</strong> Move constant to right side
                </p>
                <BlockLatex math="x^2 + \frac{b}{a}x = -\frac{c}{a}" />
                <p>
                  <strong>Step 4:</strong> Complete the square (add <Latex math="(\frac{b}{2a})^2" /> to both sides)
                </p>
                <BlockLatex math="x^2 + \frac{b}{a}x + \left(\frac{b}{2a}\right)^2 = -\frac{c}{a} + \left(\frac{b}{2a}\right)^2" />
                <p>
                  <strong>Step 5:</strong> Factor left side and simplify right side
                </p>
                <BlockLatex math="\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}" />
                <p>
                  <strong>Step 6:</strong> Take square root of both sides
                </p>
                <BlockLatex math="x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}" />
                <p>
                  <strong>Step 7:</strong> Solve for x
                </p>
                <BlockLatex math="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" />
              </div>

              <h3>Example: Using the Quadratic Formula</h3>
              <p>
                Solve <Latex>2x^2 - 5x - 3 = 0</Latex>
              </p>
              <div className="bg-muted p-4 rounded space-y-3">
                <p>
                  Identify: <Latex>a = 2</Latex>, <Latex>b = -5</Latex>, <Latex>c = -3</Latex>
                </p>
                <BlockLatex math="x = \frac{-(-5) \pm \sqrt{(-5)^2 - 4(2)(-3)}}{2(2)}" />
                <BlockLatex math="x = \frac{5 \pm \sqrt{25 + 24}}{4}" />
                <BlockLatex math="x = \frac{5 \pm \sqrt{49}}{4}" />
                <BlockLatex math="x = \frac{5 \pm 7}{4}" />
                <p>
                  Two solutions: <Latex math="x = \frac{12}{4} = 3" /> or <Latex math="x = \frac{-2}{4} = -\frac{1}{2}" />
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>The Discriminant</CardTitle>
              <CardDescription>Determining the nature of solutions</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Definition</h3>
              <p>
                The discriminant, denoted <Latex>\Delta</Latex> (delta) or <Latex>D</Latex>, is the expression under
                the square root in the quadratic formula:
              </p>
              <div className="my-4">
                <BlockLatex>\Delta = b^2 - 4ac</BlockLatex>
              </div>

              <h3>Nature of Roots</h3>
              <p>
                The discriminant determines the number and type of solutions. This relationship was fully
                understood by mathematicians in the 17th century:
              </p>

              <h4>
                Case 1: <Latex math="\Delta > 0" /> (Positive Discriminant)
              </h4>
              <ul>
                <li>
                  Two <strong>distinct real solutions</strong>
                </li>
                <li>The parabola crosses the x-axis at two points</li>
                <li>
                  Example: <Latex>x^2 - 5x + 6 = 0</Latex> has <Latex math="\Delta = 25 - 24 = 1 > 0" />, solutions{" "}
                  <Latex>x = 2, 3</Latex>
                </li>
              </ul>

              <h4>
                Case 2: <Latex>\Delta = 0</Latex> (Zero Discriminant)
              </h4>
              <ul>
                <li>
                  One <strong>repeated real solution</strong> (double root)
                </li>
                <li>The parabola touches the x-axis at exactly one point (the vertex)</li>
                <li>
                  Example: <Latex>x^2 - 6x + 9 = 0</Latex> has <Latex>\Delta = 36 - 36 = 0</Latex>, solution{" "}
                  <Latex>x = 3</Latex> (repeated)
                </li>
              </ul>

              <h4>
                Case 3: <Latex math="\Delta < 0" /> (Negative Discriminant)
              </h4>
              <ul>
                <li>
                  Two <strong>complex conjugate solutions</strong>
                </li>
                <li>No real solutions (parabola doesn't cross the x-axis)</li>
                <li>
                  Solutions involve <Latex math="i = \sqrt{-1}" />
                </li>
                <li>
                  Example: <Latex>x^2 + 2x + 5 = 0</Latex> has <Latex math="\Delta = 4 - 20 = -16 < 0" />, solutions{" "}
                  <Latex>x = -1 \pm 2i</Latex>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Factoring Quadratics</CardTitle>
              <CardDescription>Solving by factorization</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>When Factoring Works</h3>
              <p>
                Factoring is most effective when the discriminant is a perfect square. This method was used by
                ancient mathematicians before the quadratic formula was developed.
              </p>

              <h3>Zero Product Property</h3>
              <p>The foundation of factoring:</p>
              <div className="my-4">
                <BlockLatex math="\text{If } AB = 0 \text{, then } A = 0 \text{ or } B = 0" />
              </div>

              <h3>Factoring Methods</h3>

              <h4>Method 1: Simple Trinomial (<Latex>a = 1</Latex>)</h4>
              <p>
                For <Latex>x^2 + bx + c = 0</Latex>, find two numbers that multiply to <Latex>c</Latex> and add to{" "}
                <Latex>b</Latex>.
              </p>
              <div className="bg-muted p-4 rounded space-y-3">
                <p>
                  Solve <Latex>x^2 + 7x + 12 = 0</Latex>
                </p>
                <p>
                  Find factors of 12 that add to 7: <Latex>3 \times 4 = 12</Latex> and <Latex>3 + 4 = 7</Latex>
                </p>
                <BlockLatex>(x + 3)(x + 4) = 0</BlockLatex>
                <p>
                  Solutions: <Latex>x = -3</Latex> or <Latex>x = -4</Latex>
                </p>
              </div>

              <h4>
                Method 2: Factoring when <Latex>a \neq 1</Latex>
              </h4>
              <div className="bg-muted p-4 rounded space-y-3">
                <p>
                  Solve <Latex>6x^2 + 11x + 3 = 0</Latex>
                </p>
                <p>
                  Find factors of <Latex>6 \times 3 = 18</Latex> that add to 11: <Latex>9 \times 2 = 18</Latex> and{" "}
                  <Latex>9 + 2 = 11</Latex>
                </p>
                <p>Rewrite middle term:</p>
                <BlockLatex>6x^2 + 9x + 2x + 3 = 0</BlockLatex>
                <p>Factor by grouping:</p>
                <BlockLatex>3x(2x + 3) + 1(2x + 3) = 0</BlockLatex>
                <BlockLatex>(3x + 1)(2x + 3) = 0</BlockLatex>
                <p>
                  Solutions: <Latex math="x = -\frac{1}{3}" /> or <Latex math="x = -\frac{3}{2}" />
                </p>
              </div>

              <h4>Special Cases</h4>
              <p>
                <strong>Difference of squares:</strong> <Latex>a^2 - b^2 = (a+b)(a-b)</Latex>
              </p>
              <div className="bg-muted p-4 rounded space-y-2">
                <BlockLatex>x^2 - 16 = 0</BlockLatex>
                <BlockLatex>(x+4)(x-4) = 0</BlockLatex>
                <p>
                  Solutions: <Latex>x = \pm 4</Latex>
                </p>
              </div>

              <p>
                <strong>Perfect square trinomial:</strong> <Latex>a^2 \pm 2ab + b^2 = (a \pm b)^2</Latex>
              </p>
              <div className="bg-muted p-4 rounded space-y-2">
                <BlockLatex>x^2 + 10x + 25 = 0</BlockLatex>
                <BlockLatex>(x + 5)^2 = 0</BlockLatex>
                <p>
                  Solution: <Latex>x = -5</Latex> (double root)
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vieta's Formulas</CardTitle>
              <CardDescription>Relationships between roots and coefficients</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Historical Context</h3>
              <p>
                <strong>François Viète</strong> (1540–1603) discovered elegant relationships between the roots of a
                polynomial and its coefficients. For quadratic equations, these formulas connect algebra and the
                solutions directly.
              </p>

              <h3>The Formulas</h3>
              <p>
                For the quadratic equation <Latex>ax^2 + bx + c = 0</Latex> with roots <Latex>r_1</Latex> and{" "}
                <Latex>r_2</Latex>:
              </p>

              <div className="my-4">
                <p>
                  <strong>Sum of roots:</strong>
                </p>
                <BlockLatex math="r_1 + r_2 = -\frac{b}{a}" />
              </div>

              <div className="my-4">
                <p>
                  <strong>Product of roots:</strong>
                </p>
                <BlockLatex math="r_1 \cdot r_2 = \frac{c}{a}" />
              </div>

              <h3>Example Application</h3>
              <p>
                Find a quadratic equation with roots <Latex>r_1 = 3</Latex> and <Latex>r_2 = -5</Latex>:
              </p>
              <div className="bg-muted p-4 rounded space-y-3">
                <p>
                  Sum: <Latex>3 + (-5) = -2</Latex>, so <Latex math="-\frac{b}{a} = -2" />
                </p>
                <p>
                  Product: <Latex>3 \times (-5) = -15</Latex>, so <Latex math="\frac{c}{a} = -15" />
                </p>
                <p>
                  Choosing <Latex>a = 1</Latex>: <Latex>b = 2</Latex>, <Latex>c = -15</Latex>
                </p>
                <p>
                  Equation: <Latex>x^2 + 2x - 15 = 0</Latex>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Applications</CardTitle>
              <CardDescription>Quadratic equations in the real world</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Physics</h3>
              <h4>Projectile Motion</h4>
              <p>
                The height of a projectile at time <Latex>t</Latex> is given by:
              </p>
              <BlockLatex math="h(t) = -\frac{1}{2}gt^2 + v_0t + h_0" />
              <p>
                where <Latex>g</Latex> is gravity, <Latex>v_0</Latex> is initial velocity, and <Latex>h_0</Latex> is
                initial height. Finding when the projectile hits the ground requires solving a quadratic equation.
              </p>

              <h4>Example: Ball Trajectory</h4>
              <div className="bg-muted p-4 rounded space-y-3">
                <p>
                  A ball is thrown upward from 2 meters high with velocity 20 m/s. When does it hit the ground?
                </p>
                <BlockLatex>h(t) = -4.9t^2 + 20t + 2 = 0</BlockLatex>
                <p>
                  Using the quadratic formula with <Latex>a = -4.9</Latex>, <Latex>b = 20</Latex>, <Latex>c = 2</Latex>:
                </p>
                <BlockLatex math="t = \frac{-20 \pm \sqrt{400 + 39.2}}{-9.8} \approx 4.18 \text{ seconds}" />
                <p>(taking the positive root)</p>
              </div>

              <h3>Optimization</h3>
              <p>
                Many optimization problems reduce to finding the vertex of a parabola. For example, maximizing profit
                or minimizing cost often involves quadratic functions.
              </p>

              <h3>Engineering and Architecture</h3>
              <p>
                Parabolic shapes appear in:
              </p>
              <ul>
                <li>Suspension bridge cables</li>
                <li>Satellite dish reflectors</li>
                <li>Headlight reflectors</li>
                <li>Architectural arches</li>
              </ul>

              <h3>Computer Graphics</h3>
              <p>
                Bézier curves, fundamental to computer graphics and design software, use quadratic equations.
                Programs like Adobe Illustrator and CAD software rely on quadratic and cubic curves.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
