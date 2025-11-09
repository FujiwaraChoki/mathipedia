import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CalculusPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Calculus</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Calculus is the mathematical study of continuous change. It has two major branches:
          differential calculus (concerning rates of change and slopes) and integral calculus
          (concerning accumulation of quantities and areas).
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Limits</CardTitle>
              <CardDescription>The foundation of calculus</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A limit describes the value that a function approaches as the input approaches some
                value. Limits are essential to defining derivatives and integrals.
              </p>

              <h3>Notation</h3>
              <p className="font-mono bg-muted p-2 rounded">lim(x→a) f(x) = L</p>
              <p>
                This reads: "the limit of f(x) as x approaches a equals L"
              </p>

              <h3>Example</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">lim(x→2) (x² + 1)</p>
                <p className="font-mono">= 2² + 1 = 5</p>
              </div>

              <h3>Properties of Limits</h3>
              <ul>
                <li>lim(x→a) [f(x) + g(x)] = lim(x→a) f(x) + lim(x→a) g(x)</li>
                <li>lim(x→a) [f(x) × g(x)] = lim(x→a) f(x) × lim(x→a) g(x)</li>
                <li>lim(x→a) [c × f(x)] = c × lim(x→a) f(x), where c is a constant</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Derivatives</CardTitle>
              <CardDescription>Rates of change and slopes of curves</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                The derivative of a function represents the rate at which the function is changing
                at any given point. Geometrically, it represents the slope of the tangent line to
                the function's graph.
              </p>

              <h3>Definition</h3>
              <p className="font-mono bg-muted p-2 rounded">
                f'(x) = lim(h→0) [f(x + h) - f(x)] / h
              </p>

              <h3>Notation</h3>
              <p>Several notations are used for derivatives:</p>
              <ul className="list-disc ml-6">
                <li>f'(x) - Lagrange notation</li>
                <li>dy/dx - Leibniz notation</li>
                <li>df/dx - Alternative Leibniz notation</li>
              </ul>

              <h3>Basic Derivative Rules</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">d/dx(c) = 0 (constant rule)</p>
                <p className="font-mono">d/dx(x) = 1</p>
                <p className="font-mono">d/dx(xⁿ) = n·xⁿ⁻¹ (power rule)</p>
                <p className="font-mono">d/dx(eˣ) = eˣ</p>
                <p className="font-mono">d/dx(sin x) = cos x</p>
                <p className="font-mono">d/dx(cos x) = -sin x</p>
              </div>

              <h3>Example</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">If f(x) = x³</p>
                <p className="font-mono">Then f'(x) = 3x²</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integrals</CardTitle>
              <CardDescription>Accumulation and area under curves</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                Integration is the reverse process of differentiation. It can be used to find areas,
                volumes, central points, and many other useful things.
              </p>

              <h3>Indefinite Integrals</h3>
              <p>
                An indefinite integral represents a family of functions and includes a constant of
                integration (C).
              </p>
              <p className="font-mono bg-muted p-2 rounded">∫ f(x) dx = F(x) + C</p>

              <h3>Basic Integration Rules</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">∫ xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)</p>
                <p className="font-mono">∫ eˣ dx = eˣ + C</p>
                <p className="font-mono">∫ sin x dx = -cos x + C</p>
                <p className="font-mono">∫ cos x dx = sin x + C</p>
              </div>

              <h3>Definite Integrals</h3>
              <p>
                A definite integral has upper and lower bounds and represents a specific numerical
                value (the area under the curve).
              </p>
              <p className="font-mono bg-muted p-2 rounded">∫[a to b] f(x) dx</p>

              <h3>Fundamental Theorem of Calculus</h3>
              <p>
                If F(x) is an antiderivative of f(x), then:
              </p>
              <p className="font-mono bg-muted p-2 rounded">
                ∫[a to b] f(x) dx = F(b) - F(a)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Applications of Derivatives</CardTitle>
              <CardDescription>Using calculus to solve real-world problems</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Finding Maximum and Minimum Values</h3>
              <p>
                Derivatives help find where functions reach their highest or lowest points.
              </p>
              <ol>
                <li>Find the derivative f'(x)</li>
                <li>Set f'(x) = 0 and solve for x (critical points)</li>
                <li>Use the second derivative test or first derivative test to classify each point</li>
              </ol>

              <h3>Related Rates</h3>
              <p>
                Related rates problems involve finding how fast one quantity changes in relation to
                another.
              </p>

              <h3>Optimization</h3>
              <p>
                Finding the best solution (maximum profit, minimum cost, etc.) using derivatives.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Series and Sequences</CardTitle>
              <CardDescription>Infinite sums and patterns</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Sequences</h3>
              <p>
                A sequence is an ordered list of numbers. For example: 1, 2, 3, 4, 5, ...
              </p>

              <h3>Series</h3>
              <p>
                A series is the sum of the terms of a sequence.
              </p>
              <p className="font-mono bg-muted p-2 rounded">
                S = a₁ + a₂ + a₃ + ... = Σ aₙ
              </p>

              <h3>Geometric Series</h3>
              <p>A series where each term is multiplied by a constant ratio r:</p>
              <p className="font-mono bg-muted p-2 rounded">
                a + ar + ar² + ar³ + ... = a/(1-r) when |r| &lt; 1
              </p>

              <h3>Taylor Series</h3>
              <p>
                A way to represent functions as infinite sums of terms:
              </p>
              <p className="font-mono bg-muted p-2 rounded">
                f(x) = f(a) + f'(a)(x-a) + f''(a)(x-a)²/2! + ...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
