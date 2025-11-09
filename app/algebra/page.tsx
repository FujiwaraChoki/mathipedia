import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AlgebraPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Algebra</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Algebra is the branch of mathematics that studies mathematical symbols and the rules for
          manipulating these symbols. It is a unifying thread of almost all of mathematics.
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Concepts</CardTitle>
              <CardDescription>Fundamental building blocks of algebra</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Variables</h3>
              <p>
                A variable is a symbol (usually a letter) that represents a number. Common variables
                include x, y, and z. Variables allow us to write general mathematical statements.
              </p>
              <p className="font-mono bg-muted p-2 rounded">Example: x + 5 = 10</p>

              <h3>Constants</h3>
              <p>
                A constant is a fixed value that does not change. Numbers like 1, 2, 3, π, and e are
                constants.
              </p>

              <h3>Expressions</h3>
              <p>
                An algebraic expression is a combination of variables, constants, and operations
                (addition, subtraction, multiplication, division).
              </p>
              <p className="font-mono bg-muted p-2 rounded">Example: 3x² + 2x - 5</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Linear Equations</CardTitle>
              <CardDescription>Equations with variables to the first power</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A linear equation is an equation where the highest power of the variable is 1. The
                general form is:
              </p>
              <p className="font-mono bg-muted p-2 rounded">ax + b = c</p>
              <p>where a, b, and c are constants and a ≠ 0.</p>

              <h3>Solving Linear Equations</h3>
              <p>To solve a linear equation, isolate the variable on one side:</p>
              <ol>
                <li>Simplify both sides of the equation</li>
                <li>Add or subtract terms to get variables on one side</li>
                <li>Multiply or divide to solve for the variable</li>
              </ol>

              <h4>Example:</h4>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">2x + 6 = 14</p>
                <p className="font-mono">2x = 14 - 6</p>
                <p className="font-mono">2x = 8</p>
                <p className="font-mono">x = 4</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quadratic Equations</CardTitle>
              <CardDescription>Equations with variables to the second power</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>A quadratic equation has the general form:</p>
              <p className="font-mono bg-muted p-2 rounded">ax² + bx + c = 0</p>
              <p>where a ≠ 0.</p>

              <h3>Quadratic Formula</h3>
              <p>The solutions to a quadratic equation can be found using the quadratic formula:</p>
              <p className="font-mono bg-muted p-2 rounded">x = (-b ± √(b² - 4ac)) / 2a</p>

              <h3>Factoring</h3>
              <p>Some quadratic equations can be solved by factoring:</p>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">x² + 5x + 6 = 0</p>
                <p className="font-mono">(x + 2)(x + 3) = 0</p>
                <p className="font-mono">x = -2 or x = -3</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Polynomials</CardTitle>
              <CardDescription>Expressions with multiple terms</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A polynomial is an expression consisting of variables and coefficients, involving only
                addition, subtraction, multiplication, and non-negative integer exponents.
              </p>

              <h3>Degree of a Polynomial</h3>
              <p>
                The degree is the highest power of the variable. For example, in 3x⁴ + 2x² - 5x + 1,
                the degree is 4.
              </p>

              <h3>Operations with Polynomials</h3>
              <h4>Addition:</h4>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">(3x² + 2x + 1) + (x² - x + 4)</p>
                <p className="font-mono">= 4x² + x + 5</p>
              </div>

              <h4>Multiplication:</h4>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">(x + 2)(x + 3)</p>
                <p className="font-mono">= x² + 3x + 2x + 6</p>
                <p className="font-mono">= x² + 5x + 6</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Functions</CardTitle>
              <CardDescription>Mathematical relationships between variables</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A function is a relation that assigns exactly one output for each input. We write
                f(x) to denote a function of x.
              </p>

              <h3>Function Notation</h3>
              <p className="font-mono bg-muted p-2 rounded">f(x) = 2x + 3</p>
              <p>This means: for any input x, the output is 2x + 3.</p>

              <h3>Example:</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">If f(x) = 2x + 3</p>
                <p className="font-mono">Then f(5) = 2(5) + 3 = 13</p>
              </div>

              <h3>Domain and Range</h3>
              <ul>
                <li>
                  <strong>Domain:</strong> The set of all possible input values (x-values)
                </li>
                <li>
                  <strong>Range:</strong> The set of all possible output values (y-values)
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
