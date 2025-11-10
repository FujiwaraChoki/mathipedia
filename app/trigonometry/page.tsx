"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Latex, BlockLatex } from "@/components/latex";

export default function TrigonometryPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Trigonometry</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Trigonometry is the study of relationships between angles and sides of triangles.
          It has applications in physics, engineering, astronomy, and many other fields.
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Right Triangle Trigonometry</CardTitle>
              <CardDescription>Ratios of sides in right triangles</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>The Six Trigonometric Functions</h3>
              <p>For a right triangle with angle θ:</p>
              <ul>
                <li><strong>sine:</strong> sin(θ) = opposite / hypotenuse</li>
                <li><strong>cosine:</strong> cos(θ) = adjacent / hypotenuse</li>
                <li><strong>tangent:</strong> tan(θ) = opposite / adjacent</li>
                <li><strong>cosecant:</strong> csc(θ) = hypotenuse / opposite = 1/sin(θ)</li>
                <li><strong>secant:</strong> sec(θ) = hypotenuse / adjacent = 1/cos(θ)</li>
                <li><strong>cotangent:</strong> cot(θ) = adjacent / opposite = 1/tan(θ)</li>
              </ul>

              <h3>Mnemonic: SOH-CAH-TOA</h3>
              <ul>
                <li>Sine = Opposite / Hypotenuse</li>
                <li>Cosine = Adjacent / Hypotenuse</li>
                <li>Tangent = Opposite / Adjacent</li>
              </ul>

              <h3>Reciprocal Identities</h3>
              <ul>
                <li>csc(θ) = 1/sin(θ)</li>
                <li>sec(θ) = 1/cos(θ)</li>
                <li>cot(θ) = 1/tan(θ)</li>
              </ul>

              <h3>Quotient Identities</h3>
              <ul>
                <li>tan(θ) = sin(θ)/cos(θ)</li>
                <li>cot(θ) = cos(θ)/sin(θ)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Unit Circle</CardTitle>
              <CardDescription>Trigonometric functions on a circle</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Definition</h3>
              <p>
                The unit circle has radius 1 centered at the origin. For angle θ measured from
                the positive x-axis:
              </p>
              <ul>
                <li>cos(θ) = x-coordinate of point on circle</li>
                <li>sin(θ) = y-coordinate of point on circle</li>
              </ul>

              <h3>Special Angles (in degrees and radians)</h3>
              <ul>
                <li><strong>0° (0):</strong> sin = 0, cos = 1, tan = 0</li>
                <li><strong>30° (π/6):</strong> sin = 1/2, cos = √3/2, tan = 1/√3</li>
                <li><strong>45° (π/4):</strong> sin = √2/2, cos = √2/2, tan = 1</li>
                <li><strong>60° (π/3):</strong> sin = √3/2, cos = 1/2, tan = √3</li>
                <li><strong>90° (π/2):</strong> sin = 1, cos = 0, tan = undefined</li>
              </ul>

              <h3>Radian Measure</h3>
              <p>Radians measure angles by arc length on unit circle:</p>
              <div className="my-4 space-y-2">
                <BlockLatex math="1 \text{ radian} = \frac{180°}{\pi} \approx 57.3°" />
                <BlockLatex math="\pi \text{ radians} = 180°" />
              </div>

              <h3>Quadrant Signs</h3>
              <ul>
                <li><strong>Quadrant I (0 to π/2):</strong> All positive</li>
                <li><strong>Quadrant II (π/2 to π):</strong> Sin positive</li>
                <li><strong>Quadrant III (π to 3π/2):</strong> Tan positive</li>
                <li><strong>Quadrant IV (3π/2 to 2π):</strong> Cos positive</li>
              </ul>
              <p>Mnemonic: <strong>All Students Take Calculus</strong></p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pythagorean Identities</CardTitle>
              <CardDescription>Fundamental trigonometric relationships</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Primary Identity</h3>
              <div className="my-4">
                <BlockLatex math="\sin^2(\theta) + \cos^2(\theta) = 1" />
              </div>

              <h3>Derived Identities</h3>
              <p>Divide by <Latex math="\cos^2(\theta)" />:</p>
              <div className="my-4">
                <BlockLatex math="\tan^2(\theta) + 1 = \sec^2(\theta)" />
              </div>

              <p>Divide by <Latex math="\sin^2(\theta)" />:</p>
              <div className="my-4">
                <BlockLatex math="1 + \cot^2(\theta) = \csc^2(\theta)" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Angle Addition Formulas</CardTitle>
              <CardDescription>Trigonometric functions of sums and differences</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Sum Formulas</h3>
              <ul>
                <li className="my-2"><BlockLatex math="\sin(\alpha + \beta) = \sin(\alpha)\cos(\beta) + \cos(\alpha)\sin(\beta)" /></li>
                <li className="my-2"><BlockLatex math="\cos(\alpha + \beta) = \cos(\alpha)\cos(\beta) - \sin(\alpha)\sin(\beta)" /></li>
                <li className="my-2"><BlockLatex math="\tan(\alpha + \beta) = \frac{\tan(\alpha) + \tan(\beta)}{1 - \tan(\alpha)\tan(\beta)}" /></li>
              </ul>

              <h3>Difference Formulas</h3>
              <ul>
                <li className="my-2"><BlockLatex math="\sin(\alpha - \beta) = \sin(\alpha)\cos(\beta) - \cos(\alpha)\sin(\beta)" /></li>
                <li className="my-2"><BlockLatex math="\cos(\alpha - \beta) = \cos(\alpha)\cos(\beta) + \sin(\alpha)\sin(\beta)" /></li>
                <li className="my-2"><BlockLatex math="\tan(\alpha - \beta) = \frac{\tan(\alpha) - \tan(\beta)}{1 + \tan(\alpha)\tan(\beta)}" /></li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Double and Half Angle Formulas</CardTitle>
              <CardDescription>Special cases of angle addition</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Double Angle Formulas</h3>
              <ul>
                <li className="my-2"><BlockLatex math="\sin(2\theta) = 2\sin(\theta)\cos(\theta)" /></li>
                <li className="my-2"><BlockLatex math="\cos(2\theta) = \cos^2(\theta) - \sin^2(\theta) = 2\cos^2(\theta) - 1 = 1 - 2\sin^2(\theta)" /></li>
                <li className="my-2"><BlockLatex math="\tan(2\theta) = \frac{2\tan(\theta)}{1 - \tan^2(\theta)}" /></li>
              </ul>

              <h3>Half Angle Formulas</h3>
              <ul>
                <li className="my-2"><BlockLatex math="\sin(\theta/2) = \pm\sqrt{\frac{1 - \cos(\theta)}{2}}" /></li>
                <li className="my-2"><BlockLatex math="\cos(\theta/2) = \pm\sqrt{\frac{1 + \cos(\theta)}{2}}" /></li>
                <li className="my-2"><BlockLatex math="\tan(\theta/2) = \frac{\sin(\theta)}{1 + \cos(\theta)} = \frac{1 - \cos(\theta)}{\sin(\theta)}" /></li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product-to-Sum Formulas</CardTitle>
              <CardDescription>Converting products to sums</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <ul>
                <li className="font-mono bg-muted p-2 rounded my-2">
                  sin(α)sin(β) = [cos(α-β) - cos(α+β)]/2
                </li>
                <li className="font-mono bg-muted p-2 rounded my-2">
                  cos(α)cos(β) = [cos(α-β) + cos(α+β)]/2
                </li>
                <li className="font-mono bg-muted p-2 rounded my-2">
                  sin(α)cos(β) = [sin(α+β) + sin(α-β)]/2
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Law of Sines</CardTitle>
              <CardDescription>Relating sides and angles in any triangle</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Formula</h3>
              <p>For any triangle with sides a, b, c opposite angles A, B, C:</p>
              <p className="font-mono bg-muted p-2 rounded">
                a/sin(A) = b/sin(B) = c/sin(C)
              </p>

              <h3>When to Use</h3>
              <ul>
                <li>Given two angles and one side (AAS or ASA)</li>
                <li>Given two sides and an angle opposite one of them (SSA - ambiguous case)</li>
              </ul>

              <h3>Ambiguous Case (SSA)</h3>
              <p>When given two sides and an angle opposite one side, there may be:</p>
              <ul>
                <li>No solution</li>
                <li>One solution</li>
                <li>Two solutions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Law of Cosines</CardTitle>
              <CardDescription>Generalizing the Pythagorean theorem</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Formulas</h3>
              <ul>
                <li className="my-2"><BlockLatex math="c^2 = a^2 + b^2 - 2ab\cos(C)" /></li>
                <li className="my-2"><BlockLatex math="b^2 = a^2 + c^2 - 2ac\cos(B)" /></li>
                <li className="my-2"><BlockLatex math="a^2 = b^2 + c^2 - 2bc\cos(A)" /></li>
              </ul>

              <h3>When to Use</h3>
              <ul>
                <li>Given three sides (SSS)</li>
                <li>Given two sides and the included angle (SAS)</li>
              </ul>

              <h3>Finding Angles</h3>
              <p className="font-mono bg-muted p-2 rounded">
                cos(C) = (a² + b² - c²) / (2ab)
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trigonometric Equations</CardTitle>
              <CardDescription>Solving for angles</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Basic Approach</h3>
              <ol>
                <li>Isolate the trigonometric function</li>
                <li>Find the reference angle</li>
                <li>Determine all angles in the given domain</li>
                <li>Check solutions</li>
              </ol>

              <h3>Example</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">Solve: 2sin(x) = 1 for 0 ≤ x &lt; 2π</p>
                <BlockLatex math="\sin(x) = \frac{1}{2}" />
                <BlockLatex math="x = \frac{\pi}{6} \text{ or } x = \frac{5\pi}{6}" />
              </div>

              <h3>Common Techniques</h3>
              <ul>
                <li>Factor trigonometric expressions</li>
                <li>Use identities to simplify</li>
                <li>Substitute to create polynomial equations</li>
                <li>Square both sides (check for extraneous solutions)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Graphs of Trigonometric Functions</CardTitle>
              <CardDescription>Visualizing sine, cosine, and tangent</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Sine and Cosine</h3>
              <p>General form: y = A·sin(B(x - C)) + D or y = A·cos(B(x - C)) + D</p>
              <ul>
                <li><strong>Amplitude (A):</strong> Height of wave</li>
                <li><strong>Period:</strong> 2π/|B|</li>
                <li><strong>Phase shift (C):</strong> Horizontal shift</li>
                <li><strong>Vertical shift (D):</strong> Midline</li>
              </ul>

              <h3>Tangent and Cotangent</h3>
              <ul>
                <li>Period: π/|B|</li>
                <li>Vertical asymptotes where function undefined</li>
                <li>No amplitude (unbounded)</li>
              </ul>

              <h3>Secant and Cosecant</h3>
              <ul>
                <li>Reciprocals of cosine and sine</li>
                <li>Vertical asymptotes where original function = 0</li>
                <li>U-shaped curves</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inverse Trigonometric Functions</CardTitle>
              <CardDescription>Finding angles from ratios</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Definitions</h3>
              <ul>
                <li><strong>arcsin(x) or sin⁻¹(x):</strong> Returns angle in [-π/2, π/2]</li>
                <li><strong>arccos(x) or cos⁻¹(x):</strong> Returns angle in [0, π]</li>
                <li><strong>arctan(x) or tan⁻¹(x):</strong> Returns angle in (-π/2, π/2)</li>
              </ul>

              <h3>Domains and Ranges</h3>
              <ul>
                <li>arcsin: Domain [-1, 1], Range [-π/2, π/2]</li>
                <li>arccos: Domain [-1, 1], Range [0, π]</li>
                <li>arctan: Domain (-∞, ∞), Range (-π/2, π/2)</li>
              </ul>

              <h3>Identities</h3>
              <ul>
                <li>sin(arcsin(x)) = x for x ∈ [-1, 1]</li>
                <li>arcsin(sin(x)) = x for x ∈ [-π/2, π/2]</li>
                <li>arcsin(x) + arccos(x) = π/2</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Applications</CardTitle>
              <CardDescription>Real-world uses of trigonometry</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Navigation and Surveying</h3>
              <p>
                Calculate distances and angles for mapping, GPS, and determining positions.
              </p>

              <h3>Physics and Engineering</h3>
              <ul>
                <li>Analyzing periodic motion (springs, pendulums)</li>
                <li>Wave phenomena (sound, light, water waves)</li>
                <li>Projectile motion</li>
                <li>Forces and vectors</li>
              </ul>

              <h3>Architecture and Construction</h3>
              <p>
                Determining angles, heights, and distances for building design and construction.
              </p>

              <h3>Astronomy</h3>
              <p>
                Calculating distances to stars, planetary positions, and orbital mechanics.
              </p>

              <h3>Computer Graphics</h3>
              <p>
                Rotating, scaling, and transforming images and 3D objects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
