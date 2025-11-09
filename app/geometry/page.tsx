import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function GeometryPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Geometry</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Geometry is the branch of mathematics concerned with the properties and relations of
          points, lines, surfaces, and solids. It is one of the oldest branches of mathematics.
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Geometric Concepts</CardTitle>
              <CardDescription>Fundamental building blocks of geometry</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Point</h3>
              <p>
                A point is a location in space with no dimension. It is represented by a dot and
                named with a capital letter (e.g., point A).
              </p>

              <h3>Line</h3>
              <p>
                A line is a straight one-dimensional figure extending infinitely in both directions.
                It has no thickness and contains infinitely many points.
              </p>

              <h3>Line Segment</h3>
              <p>
                A line segment is a part of a line bounded by two endpoints. The length of a segment
                can be measured.
              </p>

              <h3>Ray</h3>
              <p>
                A ray is a part of a line that starts at one point and extends infinitely in one
                direction.
              </p>

              <h3>Plane</h3>
              <p>
                A plane is a flat, two-dimensional surface extending infinitely in all directions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Angles</CardTitle>
              <CardDescription>Measuring and classifying angles</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                An angle is formed by two rays (called sides) sharing a common endpoint (called the
                vertex). Angles are measured in degrees (°) or radians.
              </p>

              <h3>Types of Angles</h3>
              <ul>
                <li><strong>Acute angle:</strong> Less than 90°</li>
                <li><strong>Right angle:</strong> Exactly 90°</li>
                <li><strong>Obtuse angle:</strong> Greater than 90° but less than 180°</li>
                <li><strong>Straight angle:</strong> Exactly 180°</li>
                <li><strong>Reflex angle:</strong> Greater than 180° but less than 360°</li>
              </ul>

              <h3>Angle Relationships</h3>
              <ul>
                <li><strong>Complementary angles:</strong> Two angles that sum to 90°</li>
                <li><strong>Supplementary angles:</strong> Two angles that sum to 180°</li>
                <li><strong>Vertical angles:</strong> Opposite angles formed by intersecting lines (always equal)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Triangles</CardTitle>
              <CardDescription>Properties and theorems about triangles</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A triangle is a polygon with three sides and three angles. The sum of angles in any
                triangle is always 180°.
              </p>

              <h3>Types of Triangles by Sides</h3>
              <ul>
                <li><strong>Equilateral:</strong> All three sides are equal</li>
                <li><strong>Isosceles:</strong> Two sides are equal</li>
                <li><strong>Scalene:</strong> All sides are different lengths</li>
              </ul>

              <h3>Types of Triangles by Angles</h3>
              <ul>
                <li><strong>Acute:</strong> All angles are less than 90°</li>
                <li><strong>Right:</strong> One angle is exactly 90°</li>
                <li><strong>Obtuse:</strong> One angle is greater than 90°</li>
              </ul>

              <h3>Pythagorean Theorem</h3>
              <p>
                In a right triangle, the square of the hypotenuse (the side opposite the right
                angle) equals the sum of squares of the other two sides:
              </p>
              <p className="font-mono bg-muted p-2 rounded">a² + b² = c²</p>

              <h3>Area of a Triangle</h3>
              <p className="font-mono bg-muted p-2 rounded">
                Area = (1/2) × base × height
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Circles</CardTitle>
              <CardDescription>Properties of circular shapes</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A circle is the set of all points in a plane that are equidistant from a fixed point
                called the center.
              </p>

              <h3>Circle Terminology</h3>
              <ul>
                <li><strong>Radius (r):</strong> Distance from center to any point on the circle</li>
                <li><strong>Diameter (d):</strong> Distance across the circle through the center (d = 2r)</li>
                <li><strong>Circumference (C):</strong> Distance around the circle</li>
                <li><strong>Chord:</strong> Line segment connecting two points on the circle</li>
                <li><strong>Tangent:</strong> Line that touches the circle at exactly one point</li>
              </ul>

              <h3>Circle Formulas</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">Circumference: C = 2πr = πd</p>
                <p className="font-mono">Area: A = πr²</p>
              </div>

              <h3>Arc and Sector</h3>
              <ul>
                <li><strong>Arc:</strong> A portion of the circumference</li>
                <li><strong>Sector:</strong> A "slice" of the circle (like a pizza slice)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Polygons</CardTitle>
              <CardDescription>Many-sided figures</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A polygon is a closed figure made up of straight line segments. The segments are
                called sides, and the points where sides meet are called vertices.
              </p>

              <h3>Common Polygons</h3>
              <ul>
                <li><strong>Triangle:</strong> 3 sides</li>
                <li><strong>Quadrilateral:</strong> 4 sides</li>
                <li><strong>Pentagon:</strong> 5 sides</li>
                <li><strong>Hexagon:</strong> 6 sides</li>
                <li><strong>Heptagon:</strong> 7 sides</li>
                <li><strong>Octagon:</strong> 8 sides</li>
              </ul>

              <h3>Regular Polygons</h3>
              <p>
                A regular polygon has all sides equal and all angles equal. For example, an
                equilateral triangle is a regular triangle.
              </p>

              <h3>Sum of Interior Angles</h3>
              <p>
                For a polygon with n sides:
              </p>
              <p className="font-mono bg-muted p-2 rounded">
                Sum of angles = (n - 2) × 180°
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Solid Geometry</CardTitle>
              <CardDescription>Three-dimensional shapes</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Cube</h3>
              <p>A three-dimensional shape with 6 square faces.</p>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">Volume: V = s³ (where s is side length)</p>
                <p className="font-mono">Surface Area: SA = 6s²</p>
              </div>

              <h3>Rectangular Prism (Box)</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">Volume: V = l × w × h</p>
                <p className="font-mono">Surface Area: SA = 2(lw + lh + wh)</p>
              </div>

              <h3>Sphere</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">Volume: V = (4/3)πr³</p>
                <p className="font-mono">Surface Area: SA = 4πr²</p>
              </div>

              <h3>Cylinder</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">Volume: V = πr²h</p>
                <p className="font-mono">Surface Area: SA = 2πr² + 2πrh</p>
              </div>

              <h3>Cone</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">Volume: V = (1/3)πr²h</p>
                <p className="font-mono">Surface Area: SA = πr² + πrl (where l is slant height)</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
