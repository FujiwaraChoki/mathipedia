"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Latex, BlockLatex } from "@/components/latex";

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
              <div className="my-4">
                <BlockLatex math="\lim_{x \to a} f(x) = L" />
              </div>
              <p>
                This reads: "the limit of f(x) as x approaches a equals L"
              </p>

              <h3>Example</h3>
              <div className="bg-muted p-4 rounded space-y-3">
                <BlockLatex math="\lim_{x \to 2} (x^2 + 1)" />
                <BlockLatex math="= 2^2 + 1 = 5" />
              </div>

              <h3>Properties of Limits</h3>
              <ul>
                <li><Latex math="\lim_{x \to a} [f(x) + g(x)] = \lim_{x \to a} f(x) + \lim_{x \to a} g(x)" /></li>
                <li><Latex math="\lim_{x \to a} [f(x) \times g(x)] = \lim_{x \to a} f(x) \times \lim_{x \to a} g(x)" /></li>
                <li><Latex math="\lim_{x \to a} [c \times f(x)] = c \times \lim_{x \to a} f(x)" />, where c is a constant</li>
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
              <div className="my-4">
                <BlockLatex math="f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}" />
              </div>

              <h3>Notation</h3>
              <p>Several notations are used for derivatives:</p>
              <ul className="list-disc ml-6">
                <li><Latex>f'(x)</Latex> - Lagrange notation</li>
                <li><Latex math="\frac{dy}{dx}" /> - Leibniz notation</li>
                <li><Latex math="\frac{df}{dx}" /> - Alternative Leibniz notation</li>
              </ul>

              <h3>Basic Derivative Rules</h3>
              <div className="bg-muted p-4 rounded space-y-3">
                <BlockLatex math="\frac{d}{dx}(c) = 0 \text{ (constant rule)}" />
                <BlockLatex math="\frac{d}{dx}(x) = 1" />
                <BlockLatex math="\frac{d}{dx}(x^n) = nx^{n-1} \text{ (power rule)}" />
                <BlockLatex math="\frac{d}{dx}(e^x) = e^x" />
                <BlockLatex math="\frac{d}{dx}(\sin x) = \cos x" />
                <BlockLatex math="\frac{d}{dx}(\cos x) = -\sin x" />
              </div>

              <h3>Example</h3>
              <div className="bg-muted p-4 rounded space-y-3">
                <p>If <Latex>f(x) = x^3</Latex></p>
                <p>Then <Latex>f'(x) = 3x^2</Latex></p>
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
              <div className="my-4">
                <BlockLatex math="\int f(x) \, dx = F(x) + C" />
              </div>

              <h3>Basic Integration Rules</h3>
              <div className="bg-muted p-4 rounded space-y-3">
                <BlockLatex math="\int x^n \, dx = \frac{x^{n+1}}{n+1} + C \quad (n \neq -1)" />
                <BlockLatex math="\int e^x \, dx = e^x + C" />
                <BlockLatex math="\int \sin x \, dx = -\cos x + C" />
                <BlockLatex math="\int \cos x \, dx = \sin x + C" />
              </div>

              <h3>Definite Integrals</h3>
              <p>
                A definite integral has upper and lower bounds and represents a specific numerical
                value (the area under the curve).
              </p>
              <div className="my-4">
                <BlockLatex math="\int_a^b f(x) \, dx" />
              </div>

              <h3>Fundamental Theorem of Calculus</h3>
              <p>
                If F(x) is an antiderivative of f(x), then:
              </p>
              <div className="my-4">
                <BlockLatex math="\int_a^b f(x) \, dx = F(b) - F(a)" />
              </div>
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
              <div className="my-4">
                <BlockLatex math="S = a_1 + a_2 + a_3 + \cdots = \sum_{n=1}^{\infty} a_n" />
              </div>

              <h3>Geometric Series</h3>
              <p>A series where each term is multiplied by a constant ratio r:</p>
              <div className="my-4">
                <BlockLatex math="a + ar + ar^2 + ar^3 + \cdots = \frac{a}{1-r} \text{ when } |r| < 1" />
              </div>

              <h3>Taylor Series</h3>
              <p>
                A way to represent functions as infinite sums of terms:
              </p>
              <div className="my-4">
                <BlockLatex math="f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)(x-a)^2}{2!} + \frac{f'''(a)(x-a)^3}{3!} + \cdots" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
