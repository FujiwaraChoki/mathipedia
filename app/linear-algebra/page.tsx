"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Latex, BlockLatex } from "@/components/latex";

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
              <div className="my-4">
                <BlockLatex math="\mathbf{v} = [v_1, v_2, \ldots, v_n] \text{ or } \mathbf{v} = (v_1, v_2, \ldots, v_n)" />
              </div>

              <h3>Vector Operations</h3>
              <h4>Addition:</h4>
              <div className="my-4">
                <BlockLatex math="(a_1, a_2) + (b_1, b_2) = (a_1 + b_1, a_2 + b_2)" />
              </div>

              <h4>Scalar Multiplication:</h4>
              <div className="my-4">
                <BlockLatex math="c \cdot (a_1, a_2) = (c \cdot a_1, c \cdot a_2)" />
              </div>

              <h3>Dot Product</h3>
              <p>The dot product of two vectors:</p>
              <div className="my-4">
                <BlockLatex math="\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + \cdots + a_n b_n" />
              </div>

              <h3>Vector Length (Magnitude)</h3>
              <div className="my-4">
                <BlockLatex math="||\mathbf{v}|| = \sqrt{v_1^2 + v_2^2 + \cdots + v_n^2}" />
              </div>

              <h3>Unit Vectors</h3>
              <p>A unit vector has length 1. To normalize a vector:</p>
              <div className="my-4">
                <BlockLatex math="\hat{\mathbf{u}} = \frac{\mathbf{v}}{||\mathbf{v}||}" />
              </div>
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
              <div className="my-4">
                <BlockLatex math="(AB)_{ij} = \sum_{k=1}^{n} a_{ik} \cdot b_{kj}" />
              </div>
              <p>Note: <Latex math="AB \neq BA" /> in general (not commutative)</p>

              <h3>Special Matrices</h3>
              <ul>
                <li><strong>Identity Matrix (I):</strong> 1s on diagonal, 0s elsewhere</li>
                <li><strong>Zero Matrix:</strong> All elements are 0</li>
                <li><strong>Diagonal Matrix:</strong> Non-zero elements only on diagonal</li>
                <li><strong>Symmetric Matrix:</strong> <Latex math="A = A^T" /></li>
                <li><strong>Upper/Lower Triangular:</strong> Zeros below/above diagonal</li>
              </ul>

              <h3>Matrix Transpose</h3>
              <p>Flip rows and columns: <Latex math="(A^T)_{ij} = A_{ji}" /></p>

              <h3>Trace</h3>
              <p>Sum of diagonal elements:</p>
              <div className="my-4">
                <BlockLatex math="\text{tr}(A) = \sum_{i=1}^{n} a_{ii}" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Determinants</CardTitle>
              <CardDescription>A scalar value from square matrices</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>2×2 Determinant</h3>
              <div className="my-4">
                <BlockLatex math="\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc" />
              </div>

              <h3>3×3 Determinant</h3>
              <p>Computed using cofactor expansion along any row or column.</p>

              <h3>Properties</h3>
              <ul>
                <li><Latex math="\det(AB) = \det(A) \cdot \det(B)" /></li>
                <li><Latex math="\det(A^T) = \det(A)" /></li>
                <li><Latex math="\det(A^{-1}) = \frac{1}{\det(A)}" /></li>
                <li><Latex math="\det(cA) = c^n \cdot \det(A)" /> for n×n matrix</li>
                <li>If <Latex math="\det(A) = 0" />, matrix is singular (non-invertible)</li>
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
              <div className="my-4">
                <BlockLatex math="A\mathbf{x} = \mathbf{b}" />
              </div>
              <p>where A is the coefficient matrix, <Latex math="\mathbf{x}" /> is the unknown vector, <Latex math="\mathbf{b}" /> is the constant vector.</p>

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
              <p>For square matrix A, the inverse <Latex math="A^{-1}" /> satisfies:</p>
              <div className="my-4">
                <BlockLatex math="A \cdot A^{-1} = A^{-1} \cdot A = I" />
              </div>

              <h3>2×2 Matrix Inverse</h3>
              <div className="my-4">
                <BlockLatex math="A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}, \quad A^{-1} = \frac{1}{ad-bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}" />
              </div>

              <h3>Finding Inverses</h3>
              <p>Methods include:</p>
              <ul>
                <li>Gauss-Jordan elimination on [A|I]</li>
                <li>Adjugate matrix method: <Latex math="A^{-1} = \frac{\text{adj}(A)}{\det(A)}" /></li>
                <li>LU decomposition</li>
              </ul>

              <h3>Properties</h3>
              <ul>
                <li><Latex math="(AB)^{-1} = B^{-1}A^{-1}" /></li>
                <li><Latex math="(A^T)^{-1} = (A^{-1})^T" /></li>
                <li><Latex math="(A^{-1})^{-1} = A" /></li>
              </ul>

              <h3>Solving Ax = b</h3>
              <p>If A is invertible:</p>
              <div className="my-4">
                <BlockLatex math="\mathbf{x} = A^{-1}\mathbf{b}" />
              </div>
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
              <p>Vectors <Latex math="\mathbf{v}_1, \ldots, \mathbf{v}_n" /> are linearly independent if:</p>
              <div className="my-4">
                <BlockLatex math="c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_n\mathbf{v}_n = \mathbf{0} \text{ implies } c_1 = c_2 = \cdots = c_n = 0" />
              </div>

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
              <p>For square matrix A, <Latex math="\lambda" /> is an eigenvalue and <Latex math="\mathbf{v}" /> is an eigenvector if:</p>
              <div className="my-4">
                <BlockLatex math="A\mathbf{v} = \lambda\mathbf{v}" />
              </div>

              <h3>Characteristic Equation</h3>
              <p>Find eigenvalues by solving:</p>
              <div className="my-4">
                <BlockLatex math="\det(A - \lambda I) = 0" />
              </div>

              <h3>Finding Eigenvectors</h3>
              <p>For each eigenvalue <Latex math="\lambda" />, solve:</p>
              <div className="my-4">
                <BlockLatex math="(A - \lambda I)\mathbf{v} = \mathbf{0}" />
              </div>

              <h3>Properties</h3>
              <ul>
                <li>Trace equals sum of eigenvalues</li>
                <li>Determinant equals product of eigenvalues</li>
                <li>Eigenvectors for distinct eigenvalues are linearly independent</li>
              </ul>

              <h3>Diagonalization</h3>
              <p>If A has n linearly independent eigenvectors:</p>
              <div className="my-4">
                <BlockLatex math="A = PDP^{-1}" />
              </div>
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
              <div className="my-4">
                <BlockLatex math="\ker(T) = \{\mathbf{v} : T(\mathbf{v}) = \mathbf{0}\}" />
              </div>

              <h3>Image (Range)</h3>
              <p>The set of all possible outputs:</p>
              <div className="my-4">
                <BlockLatex math="\text{im}(T) = \{T(\mathbf{v}) : \mathbf{v} \in V\}" />
              </div>

              <h3>Rank-Nullity Theorem</h3>
              <div className="my-4">
                <BlockLatex math="\dim(V) = \text{rank}(T) + \text{nullity}(T)" />
              </div>

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
                <li>Positivity: <Latex math="\langle \mathbf{v}, \mathbf{v} \rangle \geq 0" /></li>
                <li>Linearity in first argument</li>
                <li>Symmetry: <Latex math="\langle \mathbf{u}, \mathbf{v} \rangle = \langle \mathbf{v}, \mathbf{u} \rangle" /></li>
              </ul>

              <h3>Norm</h3>
              <div className="my-4">
                <BlockLatex math="||\mathbf{v}|| = \sqrt{\langle \mathbf{v}, \mathbf{v} \rangle}" />
              </div>

              <h3>Orthogonality</h3>
              <p>Vectors <Latex math="\mathbf{u}" /> and <Latex math="\mathbf{v}" /> are orthogonal if <Latex math="\langle \mathbf{u}, \mathbf{v} \rangle = 0" /></p>

              <h3>Orthonormal Basis</h3>
              <p>A basis where all vectors are unit vectors and mutually orthogonal.</p>

              <h3>Gram-Schmidt Process</h3>
              <p>Algorithm to convert any basis into an orthonormal basis.</p>

              <h3>Projections</h3>
              <p>Orthogonal projection of <Latex math="\mathbf{v}" /> onto <Latex math="\mathbf{u}" />:</p>
              <div className="my-4">
                <BlockLatex math="\text{proj}_{\mathbf{u}}(\mathbf{v}) = \frac{\langle \mathbf{v}, \mathbf{u} \rangle}{\langle \mathbf{u}, \mathbf{u} \rangle}\mathbf{u}" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
