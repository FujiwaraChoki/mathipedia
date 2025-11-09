"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Latex, BlockLatex } from "@/components/latex";
import Link from "next/link";

export default function LinearEquationsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link href="/algebra" className="text-primary hover:underline">← Back to Algebra</Link>
        </div>

        <h1 className="text-4xl font-bold mb-6">Linear Equations</h1>

        <p className="text-lg text-muted-foreground mb-8">
          A linear equation is an algebraic equation in which each term is either a constant or the product
          of a constant and a single variable. Linear equations appear in many areas of mathematics and have
          been studied for thousands of years.
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Historical Background</CardTitle>
              <CardDescription>The development of linear equations through history</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Ancient Origins</h3>
              <p>
                The study of linear equations dates back to ancient civilizations. The Rhind Mathematical Papyrus
                from ancient Egypt (circa 1550 BCE) contains problems that can be interpreted as linear equations.
                The Babylonians also solved linear equations as early as 2000 BCE.
              </p>

              <h3>Development in the Islamic Golden Age</h3>
              <p>
                The Persian mathematician <strong>Muhammad ibn Musa al-Khwarizmi</strong> (c. 780–850 CE) made
                significant contributions to algebra, including systematic methods for solving linear and quadratic
                equations. His book "Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala" (The Compendious Book
                on Calculation by Completion and Balancing) introduced algebraic methods that influenced mathematics
                for centuries. The word "algebra" itself comes from "al-jabr" in the title.
              </p>

              <h3>European Renaissance and Beyond</h3>
              <p>
                <strong>René Descartes</strong> (1596–1650) revolutionized algebra by introducing coordinate geometry,
                which provided a geometric interpretation of linear equations as straight lines. This connection between
                algebra and geometry became fundamental to modern mathematics.
              </p>

              <p>
                <strong>Carl Friedrich Gauss</strong> (1777–1855) developed Gaussian elimination, a systematic method
                for solving systems of linear equations, which remains one of the most important algorithms in
                numerical linear algebra today.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mathematical Definition</CardTitle>
              <CardDescription>The formal structure of linear equations</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>General Form</h3>
              <p>A linear equation in one variable has the form:</p>
              <div className="my-4">
                <BlockLatex>ax + b = c</BlockLatex>
              </div>
              <p>
                where <Latex>a</Latex>, <Latex>b</Latex>, and <Latex>c</Latex> are constants (numbers) and{" "}
                <Latex>a \neq 0</Latex>. The variable <Latex>x</Latex> appears only to the first power (no exponents).
              </p>

              <h3>Standard Form</h3>
              <p>Linear equations can be written in standard form:</p>
              <div className="my-4">
                <BlockLatex>ax + b = 0</BlockLatex>
              </div>
              <p>
                This form is obtained by moving all terms to one side of the equation. The solution is then:
              </p>
              <div className="my-4">
                <BlockLatex math="x = -\frac{b}{a}" />
              </div>

              <h3>Linear Equations in Two Variables</h3>
              <p>The general form of a linear equation in two variables is:</p>
              <div className="my-4">
                <BlockLatex>ax + by = c</BlockLatex>
              </div>
              <p>
                where <Latex>a</Latex>, <Latex>b</Latex>, and <Latex>c</Latex> are constants, and at least one of{" "}
                <Latex>a</Latex> or <Latex>b</Latex> is non-zero. This equation represents a straight line in the
                coordinate plane.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Slope-Intercept Form</CardTitle>
              <CardDescription>The most intuitive form for graphing</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                The slope-intercept form of a linear equation, developed by Descartes and refined by later
                mathematicians, is:
              </p>
              <div className="my-4">
                <BlockLatex>y = mx + b</BlockLatex>
              </div>
              <p>where:</p>
              <ul>
                <li>
                  <Latex>m</Latex> is the <strong>slope</strong> of the line (rate of change)
                </li>
                <li>
                  <Latex>b</Latex> is the <strong>y-intercept</strong> (where the line crosses the y-axis)
                </li>
              </ul>

              <h3>Understanding Slope</h3>
              <p>The slope <Latex>m</Latex> represents the steepness and direction of the line:</p>
              <div className="my-4">
                <BlockLatex>m = \frac{"{\\text{rise}}"}{"{\\text{run}"} = \frac{"{y_2 - y_1}"}{"{x_2 - x_1}"}</BlockLatex>
              </div>
              <ul>
                <li>
                  If <Latex>m {">"} 0</Latex>: line slopes upward (positive slope)
                </li>
                <li>
                  If <Latex>m {"<"} 0</Latex>: line slopes downward (negative slope)
                </li>
                <li>
                  If <Latex>m = 0</Latex>: horizontal line
                </li>
                <li>
                  If <Latex>m</Latex> is undefined: vertical line
                </li>
              </ul>

              <h3>Example</h3>
              <p>Consider the equation <Latex>y = 2x + 3</Latex>:</p>
              <ul>
                <li>Slope: <Latex>m = 2</Latex> (for every 1 unit right, go up 2 units)</li>
                <li>Y-intercept: <Latex>b = 3</Latex> (line crosses y-axis at point (0, 3))</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Solving Linear Equations</CardTitle>
              <CardDescription>Step-by-step methods with examples</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>The Principle of Maintaining Balance</h3>
              <p>
                Al-Khwarizmi's fundamental insight was that an equation is like a balance scale. Whatever operation
                you perform on one side, you must perform on the other to maintain equality.
              </p>

              <h3>Step-by-Step Method</h3>
              <ol>
                <li>Simplify both sides (combine like terms, distribute)</li>
                <li>Add or subtract to isolate terms with the variable on one side</li>
                <li>Add or subtract to isolate constants on the other side</li>
                <li>Multiply or divide to solve for the variable</li>
              </ol>

              <h3>Detailed Example 1: Basic Linear Equation</h3>
              <p>Solve: <Latex>3x + 7 = 22</Latex></p>
              <div className="bg-muted p-4 rounded space-y-3">
                <p>
                  <strong>Step 1:</strong> Subtract 7 from both sides
                </p>
                <BlockLatex>3x + 7 - 7 = 22 - 7</BlockLatex>
                <BlockLatex>3x = 15</BlockLatex>
                <p>
                  <strong>Step 2:</strong> Divide both sides by 3
                </p>
                <BlockLatex>\frac{"{3x}"}{"{3}"} = \frac{"{15}"}{"{3}"}</BlockLatex>
                <BlockLatex>x = 5</BlockLatex>
                <p>
                  <strong>Verification:</strong> Substitute <Latex>x = 5</Latex> back into the original equation:
                </p>
                <BlockLatex>3(5) + 7 = 15 + 7 = 22 \checkmark</BlockLatex>
              </div>

              <h3>Detailed Example 2: Equation with Variables on Both Sides</h3>
              <p>Solve: <Latex>5x - 3 = 2x + 9</Latex></p>
              <div className="bg-muted p-4 rounded space-y-3">
                <p>
                  <strong>Step 1:</strong> Subtract <Latex>2x</Latex> from both sides
                </p>
                <BlockLatex>5x - 2x - 3 = 2x - 2x + 9</BlockLatex>
                <BlockLatex>3x - 3 = 9</BlockLatex>
                <p>
                  <strong>Step 2:</strong> Add 3 to both sides
                </p>
                <BlockLatex>3x - 3 + 3 = 9 + 3</BlockLatex>
                <BlockLatex>3x = 12</BlockLatex>
                <p>
                  <strong>Step 3:</strong> Divide both sides by 3
                </p>
                <BlockLatex>x = 4</BlockLatex>
              </div>

              <h3>Example 3: Equations with Fractions</h3>
              <p>
                Solve: <Latex>\frac{"{x}"}{"{3}"} + \frac{"{2}"}{"{5}"} = 1</Latex>
              </p>
              <div className="bg-muted p-4 rounded space-y-3">
                <p>
                  <strong>Step 1:</strong> Find common denominator (15) and multiply entire equation by it
                </p>
                <BlockLatex>15 \cdot \left(\frac{"{x}"}{"{3}"} + \frac{"{2}"}{"{5}"}\right) = 15 \cdot 1</BlockLatex>
                <BlockLatex>5x + 6 = 15</BlockLatex>
                <p>
                  <strong>Step 2:</strong> Subtract 6 from both sides
                </p>
                <BlockLatex>5x = 9</BlockLatex>
                <p>
                  <strong>Step 3:</strong> Divide by 5
                </p>
                <BlockLatex>x = \frac{"{9}"}{"{5}"}</BlockLatex>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Systems of Linear Equations</CardTitle>
              <CardDescription>Solving multiple equations simultaneously</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Historical Development</h3>
              <p>
                Chinese mathematicians in the <em>Nine Chapters on the Mathematical Art</em> (c. 150 BCE) described
                methods for solving systems of linear equations. The method resembles modern Gaussian elimination.
              </p>

              <h3>Substitution Method</h3>
              <p>Developed by various mathematicians, this method involves solving one equation for one variable
                and substituting into the other.</p>

              <h4>Example:</h4>
              <p>Solve the system:</p>
              <div className="bg-muted p-4 rounded space-y-3">
                <BlockLatex>{`\\begin{cases} x + y = 10 \\\\ 2x - y = 5 \\end{cases}`}</BlockLatex>
                <p>
                  <strong>Step 1:</strong> Solve first equation for y
                </p>
                <BlockLatex>y = 10 - x</BlockLatex>
                <p>
                  <strong>Step 2:</strong> Substitute into second equation
                </p>
                <BlockLatex>2x - (10 - x) = 5</BlockLatex>
                <BlockLatex>2x - 10 + x = 5</BlockLatex>
                <BlockLatex>3x = 15</BlockLatex>
                <BlockLatex>x = 5</BlockLatex>
                <p>
                  <strong>Step 3:</strong> Find y
                </p>
                <BlockLatex>y = 10 - 5 = 5</BlockLatex>
                <p>
                  <strong>Solution:</strong> <Latex>(x, y) = (5, 5)</Latex>
                </p>
              </div>

              <h3>Elimination Method (Gauss's Method)</h3>
              <p>
                <strong>Carl Friedrich Gauss</strong> formalized this method while calculating asteroid orbits.
                It involves adding or subtracting equations to eliminate a variable.
              </p>

              <h4>Example:</h4>
              <div className="bg-muted p-4 rounded space-y-3">
                <BlockLatex>{`\\begin{cases} 3x + 2y = 16 \\\\ 5x - 2y = 8 \\end{cases}`}</BlockLatex>
                <p>
                  <strong>Step 1:</strong> Add equations (this eliminates y)
                </p>
                <BlockLatex>(3x + 2y) + (5x - 2y) = 16 + 8</BlockLatex>
                <BlockLatex>8x = 24</BlockLatex>
                <BlockLatex>x = 3</BlockLatex>
                <p>
                  <strong>Step 2:</strong> Substitute back
                </p>
                <BlockLatex>3(3) + 2y = 16</BlockLatex>
                <BlockLatex>9 + 2y = 16</BlockLatex>
                <BlockLatex>2y = 7</BlockLatex>
                <BlockLatex>y = \frac{"{7}"}{"{2}"}</BlockLatex>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Applications</CardTitle>
              <CardDescription>Real-world uses of linear equations</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Physics and Engineering</h3>
              <p>
                Linear equations describe constant velocity motion, Ohm's law in electrical circuits (<Latex>V = IR</Latex>),
                and Hooke's law for springs (<Latex>F = kx</Latex>).
              </p>

              <h3>Economics and Business</h3>
              <p>
                Cost functions, revenue models, and break-even analysis all use linear equations. For example,
                if producing x items costs <Latex>C(x) = 5x + 1000</Latex>, the 1000 represents fixed costs and
                5 represents variable cost per item.
              </p>

              <h3>Computer Science</h3>
              <p>
                Linear equations are fundamental in computer graphics (transformations), machine learning (linear
                regression), and optimization algorithms.
              </p>

              <h3>Example Application: Mixture Problem</h3>
              <p>
                A chemist needs to create 100 mL of a 30% acid solution by mixing a 20% solution with a 50% solution.
                How much of each should be used?
              </p>
              <div className="bg-muted p-4 rounded space-y-3">
                <p>Let <Latex>x</Latex> = amount of 20% solution, <Latex>y</Latex> = amount of 50% solution</p>
                <BlockLatex>{`\\begin{cases} x + y = 100 \\text{ (total volume)} \\\\ 0.20x + 0.50y = 0.30(100) \\text{ (acid amount)} \\end{cases}`}</BlockLatex>
                <p>Solving: <Latex>x = 66.67</Latex> mL of 20% solution, <Latex>y = 33.33</Latex> mL of 50% solution</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modern Developments</CardTitle>
              <CardDescription>Linear equations in contemporary mathematics</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Linear Algebra</h3>
              <p>
                Systems of linear equations evolved into the field of linear algebra, developed by mathematicians
                like <strong>Arthur Cayley</strong> (1821–1895) and <strong>James Joseph Sylvester</strong> (1814–1897).
                Matrix methods allow solving systems with thousands of variables efficiently.
              </p>

              <h3>Numerical Methods</h3>
              <p>
                Modern computers solve systems of millions of linear equations using iterative methods developed
                by mathematicians like <strong>Richard Varga</strong> and <strong>David Young</strong> in the 20th century.
              </p>

              <h3>Applications in AI and Data Science</h3>
              <p>
                Linear regression, neural networks, and many machine learning algorithms rely fundamentally on
                solving systems of linear equations. The least squares method, developed by Gauss and
                <strong> Adrien-Marie Legendre</strong>, is now central to statistical learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
