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

              <h3>Order of Operations (PEMDAS)</h3>
              <ol>
                <li>Parentheses</li>
                <li>Exponents</li>
                <li>Multiplication and Division (left to right)</li>
                <li>Addition and Subtraction (left to right)</li>
              </ol>
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

              <h3>Systems of Linear Equations</h3>
              <p>A system of linear equations is a set of two or more equations with the same variables.</p>

              <h4>Substitution Method:</h4>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">x + y = 10</p>
                <p className="font-mono">2x - y = 5</p>
                <p className="font-mono">From first equation: y = 10 - x</p>
                <p className="font-mono">Substitute: 2x - (10 - x) = 5</p>
                <p className="font-mono">3x = 15, so x = 5, y = 5</p>
              </div>

              <h4>Elimination Method:</h4>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">x + y = 10</p>
                <p className="font-mono">2x - y = 5</p>
                <p className="font-mono">Add equations: 3x = 15</p>
                <p className="font-mono">x = 5, then y = 5</p>
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

              <h3>Discriminant</h3>
              <p>The discriminant Δ = b² - 4ac determines the nature of solutions:</p>
              <ul>
                <li>If Δ &gt; 0: Two distinct real solutions</li>
                <li>If Δ = 0: One repeated real solution</li>
                <li>If Δ &lt; 0: Two complex conjugate solutions</li>
              </ul>

              <h3>Factoring</h3>
              <p>Some quadratic equations can be solved by factoring:</p>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">x² + 5x + 6 = 0</p>
                <p className="font-mono">(x + 2)(x + 3) = 0</p>
                <p className="font-mono">x = -2 or x = -3</p>
              </div>

              <h3>Completing the Square</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">x² + 6x + 5 = 0</p>
                <p className="font-mono">x² + 6x = -5</p>
                <p className="font-mono">x² + 6x + 9 = -5 + 9</p>
                <p className="font-mono">(x + 3)² = 4</p>
                <p className="font-mono">x + 3 = ±2</p>
                <p className="font-mono">x = -1 or x = -5</p>
              </div>

              <h3>Vertex Form</h3>
              <p className="font-mono bg-muted p-2 rounded">y = a(x - h)² + k</p>
              <p>where (h, k) is the vertex of the parabola.</p>
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

              <h3>Types of Polynomials by Degree</h3>
              <ul>
                <li><strong>Constant (degree 0):</strong> 5</li>
                <li><strong>Linear (degree 1):</strong> 2x + 3</li>
                <li><strong>Quadratic (degree 2):</strong> x² + 2x + 1</li>
                <li><strong>Cubic (degree 3):</strong> x³ - 4x + 2</li>
                <li><strong>Quartic (degree 4):</strong> x⁴ + 3x² - 1</li>
              </ul>

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

              <h3>Polynomial Division</h3>
              <p>
                Polynomials can be divided using long division or synthetic division (for linear divisors).
              </p>

              <h3>Remainder Theorem</h3>
              <p>
                When polynomial P(x) is divided by (x - a), the remainder is P(a).
              </p>

              <h3>Factor Theorem</h3>
              <p>
                (x - a) is a factor of P(x) if and only if P(a) = 0.
              </p>

              <h3>Fundamental Theorem of Algebra</h3>
              <p>
                A polynomial of degree n has exactly n complex roots (counting multiplicities).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rational Expressions</CardTitle>
              <CardDescription>Fractions with polynomials</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A rational expression is a fraction where both numerator and denominator are polynomials.
              </p>
              <p className="font-mono bg-muted p-2 rounded">(x² + 3x + 2) / (x + 1)</p>

              <h3>Simplifying Rational Expressions</h3>
              <p>Factor and cancel common factors:</p>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">(x² + 3x + 2) / (x + 1)</p>
                <p className="font-mono">= [(x + 1)(x + 2)] / (x + 1)</p>
                <p className="font-mono">= x + 2 (for x ≠ -1)</p>
              </div>

              <h3>Operations with Rational Expressions</h3>
              <h4>Addition/Subtraction:</h4>
              <p>Find common denominator, then add/subtract numerators.</p>

              <h4>Multiplication:</h4>
              <p>Multiply numerators and multiply denominators, then simplify.</p>

              <h4>Division:</h4>
              <p>Multiply by the reciprocal of the divisor.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Exponential and Logarithmic Functions</CardTitle>
              <CardDescription>Growth, decay, and inverse relationships</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Exponential Functions</h3>
              <p className="font-mono bg-muted p-2 rounded">f(x) = aˣ where a &gt; 0, a ≠ 1</p>

              <h3>Laws of Exponents</h3>
              <ul>
                <li>aˣ · aʸ = aˣ⁺ʸ</li>
                <li>aˣ / aʸ = aˣ⁻ʸ</li>
                <li>(aˣ)ʸ = aˣʸ</li>
                <li>a⁰ = 1</li>
                <li>a⁻ˣ = 1/aˣ</li>
                <li>(ab)ˣ = aˣbˣ</li>
              </ul>

              <h3>Logarithmic Functions</h3>
              <p>The logarithm is the inverse of the exponential function:</p>
              <p className="font-mono bg-muted p-2 rounded">y = logₐ(x) if and only if aʸ = x</p>

              <h3>Common Logarithms</h3>
              <ul>
                <li><strong>Common log:</strong> log₁₀(x) or log(x)</li>
                <li><strong>Natural log:</strong> logₑ(x) or ln(x), where e ≈ 2.71828</li>
              </ul>

              <h3>Laws of Logarithms</h3>
              <ul>
                <li>log(xy) = log(x) + log(y)</li>
                <li>log(x/y) = log(x) - log(y)</li>
                <li>log(xⁿ) = n·log(x)</li>
                <li>logₐ(a) = 1</li>
                <li>logₐ(1) = 0</li>
                <li>aˡᵒᵍₐ⁽ˣ⁾ = x</li>
              </ul>

              <h3>Change of Base Formula</h3>
              <p className="font-mono bg-muted p-2 rounded">logₐ(x) = logᵦ(x) / logᵦ(a)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Functions and Relations</CardTitle>
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

              <h3>Types of Functions</h3>
              <ul>
                <li><strong>Linear:</strong> f(x) = mx + b</li>
                <li><strong>Quadratic:</strong> f(x) = ax² + bx + c</li>
                <li><strong>Polynomial:</strong> f(x) = aₙxⁿ + ... + a₁x + a₀</li>
                <li><strong>Rational:</strong> f(x) = P(x)/Q(x)</li>
                <li><strong>Exponential:</strong> f(x) = aˣ</li>
                <li><strong>Logarithmic:</strong> f(x) = logₐ(x)</li>
              </ul>

              <h3>Function Composition</h3>
              <p>The composition of functions f and g is denoted (f ∘ g)(x) = f(g(x)).</p>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">If f(x) = 2x and g(x) = x + 3</p>
                <p className="font-mono">Then (f ∘ g)(x) = f(g(x)) = f(x + 3) = 2(x + 3) = 2x + 6</p>
              </div>

              <h3>Inverse Functions</h3>
              <p>
                A function f has an inverse f⁻¹ if f⁻¹(f(x)) = x and f(f⁻¹(x)) = x for all x in the
                appropriate domains.
              </p>
              <p>To find inverse: swap x and y, then solve for y.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inequalities</CardTitle>
              <CardDescription>Comparing expressions</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Linear Inequalities</h3>
              <p>Solved similarly to equations, but multiplication/division by negative numbers reverses the inequality:</p>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">2x + 5 &lt; 13</p>
                <p className="font-mono">2x &lt; 8</p>
                <p className="font-mono">x &lt; 4</p>
              </div>

              <h3>Compound Inequalities</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">-3 &lt; 2x + 1 &lt; 7</p>
                <p className="font-mono">-4 &lt; 2x &lt; 6</p>
                <p className="font-mono">-2 &lt; x &lt; 3</p>
              </div>

              <h3>Absolute Value Inequalities</h3>
              <ul>
                <li>|x| &lt; a means -a &lt; x &lt; a</li>
                <li>|x| &gt; a means x &lt; -a or x &gt; a</li>
              </ul>

              <h3>Quadratic Inequalities</h3>
              <p>Solve by finding zeros and testing intervals.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sequences and Series</CardTitle>
              <CardDescription>Ordered lists and their sums</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Arithmetic Sequences</h3>
              <p>A sequence where each term differs from the previous by a constant (common difference d):</p>
              <p className="font-mono bg-muted p-2 rounded">aₙ = a₁ + (n-1)d</p>

              <h4>Example: 2, 5, 8, 11, 14, ... (d = 3)</h4>

              <h3>Arithmetic Series</h3>
              <p>Sum of n terms:</p>
              <p className="font-mono bg-muted p-2 rounded">Sₙ = n(a₁ + aₙ)/2 = n[2a₁ + (n-1)d]/2</p>

              <h3>Geometric Sequences</h3>
              <p>A sequence where each term is multiplied by a constant (common ratio r):</p>
              <p className="font-mono bg-muted p-2 rounded">aₙ = a₁ · rⁿ⁻¹</p>

              <h4>Example: 3, 6, 12, 24, 48, ... (r = 2)</h4>

              <h3>Geometric Series</h3>
              <p>Sum of n terms:</p>
              <p className="font-mono bg-muted p-2 rounded">Sₙ = a₁(1 - rⁿ)/(1 - r) for r ≠ 1</p>

              <h3>Infinite Geometric Series</h3>
              <p>For |r| &lt; 1:</p>
              <p className="font-mono bg-muted p-2 rounded">S = a₁/(1 - r)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Complex Numbers</CardTitle>
              <CardDescription>Numbers with real and imaginary parts</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Definition</h3>
              <p>A complex number has the form:</p>
              <p className="font-mono bg-muted p-2 rounded">z = a + bi</p>
              <p>where a is the real part, b is the imaginary part, and i = √(-1).</p>

              <h3>Imaginary Unit</h3>
              <ul>
                <li>i = √(-1)</li>
                <li>i² = -1</li>
                <li>i³ = -i</li>
                <li>i⁴ = 1</li>
              </ul>

              <h3>Operations</h3>
              <h4>Addition:</h4>
              <p className="font-mono bg-muted p-2 rounded">(a + bi) + (c + di) = (a + c) + (b + d)i</p>

              <h4>Multiplication:</h4>
              <p className="font-mono bg-muted p-2 rounded">(a + bi)(c + di) = (ac - bd) + (ad + bc)i</p>

              <h3>Complex Conjugate</h3>
              <p>The conjugate of z = a + bi is z̄ = a - bi</p>

              <h3>Modulus</h3>
              <p className="font-mono bg-muted p-2 rounded">|z| = √(a² + b²)</p>

              <h3>Polar Form</h3>
              <p className="font-mono bg-muted p-2 rounded">z = r(cos θ + i sin θ) = r·e^(iθ)</p>
              <p>where r = |z| and θ = arg(z)</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
