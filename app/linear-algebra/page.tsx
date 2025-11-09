import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LinearAlgebraPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Linear Algebra</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Linear Algebra is the study of vectors, vector spaces, linear transformations, and
          systems of linear equations. It has applications in physics, computer graphics,
          machine learning, and many other fields.
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Vectors</CardTitle>
              <CardDescription>Basic building blocks of linear algebra</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Definition</h3>
              <p>
                A vector is an ordered list of numbers. Vectors can be written as rows or columns.
              </p>
              <p className="font-mono bg-muted p-2 rounded">v = [v₁, v₂, ..., vₙ] or v = (v₁, v₂, ..., vₙ)</p>

              <h3>Vector Operations</h3>
              <h4>Addition:</h4>
              <p className="font-mono bg-muted p-2 rounded">
                (a₁, a₂) + (b₁, b₂) = (a₁ + b₁, a₂ + b₂)
              </p>

              <h4>Scalar Multiplication:</h4>
              <p className="font-mono bg-muted p-2 rounded">c · (a₁, a₂) = (c·a₁, c·a₂)</p>

              <h3>Dot Product</h3>
              <p>The dot product of two vectors:</p>
              <p className="font-mono bg-muted p-2 rounded">
                a · b = a₁b₁ + a₂b₂ + ... + aₙbₙ
              </p>

              <h3>Vector Length (Magnitude)</h3>
              <p className="font-mono bg-muted p-2 rounded">||v|| = √(v₁² + v₂² + ... + vₙ²)</p>

              <h3>Unit Vectors</h3>
              <p>A unit vector has length 1. To normalize a vector:</p>
              <p className="font-mono bg-muted p-2 rounded">û = v / ||v||</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Matrices</CardTitle>
              <CardDescription>Rectangular arrays of numbers</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Definition</h3>
              <p>
                A matrix is a rectangular array of numbers arranged in rows and columns.
                An m × n matrix has m rows and n columns.
              </p>

              <h3>Matrix Operations</h3>
              <h4>Addition:</h4>
              <p>Add corresponding elements (matrices must have same dimensions).</p>

              <h4>Scalar Multiplication:</h4>
              <p>Multiply every element by the scalar.</p>

              <h4>Matrix Multiplication:</h4>
              <p>For matrices A (m × n) and B (n × p):</p>
              <p className="font-mono bg-muted p-2 rounded">
                (AB)ᵢⱼ = Σ(k=1 to n) aᵢₖ · bₖⱼ
              </p>
              <p>Note: AB ≠ BA in general (not commutative)</p>

              <h3>Special Matrices</h3>
              <ul>
                <li><strong>Identity Matrix (I):</strong> 1s on diagonal, 0s elsewhere</li>
                <li><strong>Zero Matrix:</strong> All elements are 0</li>
                <li><strong>Diagonal Matrix:</strong> Non-zero elements only on diagonal</li>
                <li><strong>Symmetric Matrix:</strong> A = Aᵀ</li>
                <li><strong>Upper/Lower Triangular:</strong> Zeros below/above diagonal</li>
              </ul>

              <h3>Matrix Transpose</h3>
              <p>Flip rows and columns: (Aᵀ)ᵢⱼ = Aⱼᵢ</p>

              <h3>Trace</h3>
              <p>Sum of diagonal elements:</p>
              <p className="font-mono bg-muted p-2 rounded">tr(A) = Σ aᵢᵢ</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Determinants</CardTitle>
              <CardDescription>A scalar value from square matrices</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>2×2 Determinant</h3>
              <p className="font-mono bg-muted p-2 rounded">
                det([a b; c d]) = ad - bc
              </p>

              <h3>3×3 Determinant</h3>
              <p>Computed using cofactor expansion along any row or column.</p>

              <h3>Properties</h3>
              <ul>
                <li>det(AB) = det(A) · det(B)</li>
                <li>det(Aᵀ) = det(A)</li>
                <li>det(A⁻¹) = 1/det(A)</li>
                <li>det(cA) = cⁿ·det(A) for n×n matrix</li>
                <li>If det(A) = 0, matrix is singular (non-invertible)</li>
              </ul>

              <h3>Geometric Interpretation</h3>
              <p>
                The absolute value of the determinant represents the volume scaling factor of
                the linear transformation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Systems of Linear Equations</CardTitle>
              <CardDescription>Solving multiple equations simultaneously</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Matrix Form</h3>
              <p>A system of equations can be written as:</p>
              <p className="font-mono bg-muted p-2 rounded">Ax = b</p>
              <p>where A is the coefficient matrix, x is the unknown vector, b is the constant vector.</p>

              <h3>Gaussian Elimination</h3>
              <p>Transform the augmented matrix [A|b] to row echelon form:</p>
              <ol>
                <li>Forward elimination (create zeros below pivots)</li>
                <li>Back substitution (solve from bottom to top)</li>
              </ol>

              <h3>Gauss-Jordan Elimination</h3>
              <p>Continue to reduced row echelon form (RREF) with 1s on diagonal and 0s above and below.</p>

              <h3>Solution Types</h3>
              <ul>
                <li><strong>Unique solution:</strong> System has rank n</li>
                <li><strong>Infinite solutions:</strong> System has rank &lt; n</li>
                <li><strong>No solution:</strong> Inconsistent system</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Matrix Inverse</CardTitle>
              <CardDescription>The multiplicative inverse of a matrix</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Definition</h3>
              <p>For square matrix A, the inverse A⁻¹ satisfies:</p>
              <p className="font-mono bg-muted p-2 rounded">A·A⁻¹ = A⁻¹·A = I</p>

              <h3>2×2 Matrix Inverse</h3>
              <p className="font-mono bg-muted p-2 rounded">
                A = [a b; c d], A⁻¹ = (1/(ad-bc)) × [d -b; -c a]
              </p>

              <h3>Finding Inverses</h3>
              <p>Methods include:</p>
              <ul>
                <li>Gauss-Jordan elimination on [A|I]</li>
                <li>Adjugate matrix method: A⁻¹ = adj(A)/det(A)</li>
                <li>LU decomposition</li>
              </ul>

              <h3>Properties</h3>
              <ul>
                <li>(AB)⁻¹ = B⁻¹A⁻¹</li>
                <li>(Aᵀ)⁻¹ = (A⁻¹)ᵀ</li>
                <li>(A⁻¹)⁻¹ = A</li>
              </ul>

              <h3>Solving Ax = b</h3>
              <p>If A is invertible:</p>
              <p className="font-mono bg-muted p-2 rounded">x = A⁻¹b</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vector Spaces</CardTitle>
              <CardDescription>Abstract spaces with vector structure</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Definition</h3>
              <p>
                A vector space V over a field F is a set with vector addition and scalar
                multiplication satisfying 8 axioms.
              </p>

              <h3>Subspaces</h3>
              <p>A subset W of V that is itself a vector space. Must contain:</p>
              <ul>
                <li>The zero vector</li>
                <li>Closure under addition</li>
                <li>Closure under scalar multiplication</li>
              </ul>

              <h3>Linear Independence</h3>
              <p>Vectors v₁, ..., vₙ are linearly independent if:</p>
              <p className="font-mono bg-muted p-2 rounded">
                c₁v₁ + c₂v₂ + ... + cₙvₙ = 0 implies c₁ = c₂ = ... = cₙ = 0
              </p>

              <h3>Span</h3>
              <p>The span of vectors v₁, ..., vₙ is the set of all linear combinations.</p>

              <h3>Basis</h3>
              <p>A basis is a linearly independent spanning set. Properties:</p>
              <ul>
                <li>Every vector can be uniquely expressed as a linear combination of basis vectors</li>
                <li>All bases of a space have the same number of vectors (dimension)</li>
              </ul>

              <h3>Dimension</h3>
              <p>The number of vectors in a basis for the space.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Eigenvalues and Eigenvectors</CardTitle>
              <CardDescription>Special vectors and scalars</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Definition</h3>
              <p>For square matrix A, λ is an eigenvalue and v is an eigenvector if:</p>
              <p className="font-mono bg-muted p-2 rounded">Av = λv</p>

              <h3>Characteristic Equation</h3>
              <p>Find eigenvalues by solving:</p>
              <p className="font-mono bg-muted p-2 rounded">det(A - λI) = 0</p>

              <h3>Finding Eigenvectors</h3>
              <p>For each eigenvalue λ, solve:</p>
              <p className="font-mono bg-muted p-2 rounded">(A - λI)v = 0</p>

              <h3>Properties</h3>
              <ul>
                <li>Trace equals sum of eigenvalues</li>
                <li>Determinant equals product of eigenvalues</li>
                <li>Eigenvectors for distinct eigenvalues are linearly independent</li>
              </ul>

              <h3>Diagonalization</h3>
              <p>If A has n linearly independent eigenvectors:</p>
              <p className="font-mono bg-muted p-2 rounded">A = PDP⁻¹</p>
              <p>where D is diagonal with eigenvalues, P has eigenvectors as columns.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Linear Transformations</CardTitle>
              <CardDescription>Functions between vector spaces</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Definition</h3>
              <p>A function T: V → W is linear if:</p>
              <ul>
                <li>T(u + v) = T(u) + T(v)</li>
                <li>T(cv) = cT(v)</li>
              </ul>

              <h3>Matrix Representation</h3>
              <p>Every linear transformation can be represented by a matrix.</p>

              <h3>Kernel (Null Space)</h3>
              <p>The set of vectors that map to zero:</p>
              <p className="font-mono bg-muted p-2 rounded">ker(T) = {'{v : T(v) = 0}'}</p>

              <h3>Image (Range)</h3>
              <p>The set of all possible outputs:</p>
              <p className="font-mono bg-muted p-2 rounded">im(T) = {'{T(v) : v ∈ V}'}</p>

              <h3>Rank-Nullity Theorem</h3>
              <p className="font-mono bg-muted p-2 rounded">
                dim(V) = rank(T) + nullity(T)
              </p>

              <h3>Common Transformations</h3>
              <ul>
                <li><strong>Rotation:</strong> Rotates vectors</li>
                <li><strong>Reflection:</strong> Mirrors across a line/plane</li>
                <li><strong>Scaling:</strong> Stretches/compresses</li>
                <li><strong>Shear:</strong> Slants the space</li>
                <li><strong>Projection:</strong> Projects onto subspace</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inner Product Spaces</CardTitle>
              <CardDescription>Spaces with notion of angles and lengths</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Inner Product</h3>
              <p>A generalization of the dot product with properties:</p>
              <ul>
                <li>Positivity: ⟨v,v⟩ ≥ 0</li>
                <li>Linearity in first argument</li>
                <li>Symmetry: ⟨u,v⟩ = ⟨v,u⟩</li>
              </ul>

              <h3>Norm</h3>
              <p className="font-mono bg-muted p-2 rounded">||v|| = √⟨v,v⟩</p>

              <h3>Orthogonality</h3>
              <p>Vectors u and v are orthogonal if ⟨u,v⟩ = 0</p>

              <h3>Orthonormal Basis</h3>
              <p>A basis where all vectors are unit vectors and mutually orthogonal.</p>

              <h3>Gram-Schmidt Process</h3>
              <p>Algorithm to convert any basis into an orthonormal basis.</p>

              <h3>Projections</h3>
              <p>Orthogonal projection of v onto u:</p>
              <p className="font-mono bg-muted p-2 rounded">
                proj_u(v) = (⟨v,u⟩/⟨u,u⟩)u
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
