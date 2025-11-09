import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DiscreteMathPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Discrete Mathematics</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Discrete mathematics is the study of mathematical structures that are fundamentally
          discrete rather than continuous. It includes topics particularly relevant to computer
          science and logic.
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Set Theory</CardTitle>
              <CardDescription>Collections of objects and their relationships</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A set is a well-defined collection of distinct objects. The objects in a set are
                called elements or members.
              </p>

              <h3>Set Notation</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">A = {'{1, 2, 3, 4, 5}'}</p>
                <p className="font-mono">B = {'{x | x is an even number}'}</p>
              </div>

              <h3>Set Operations</h3>
              <ul>
                <li><strong>Union (A ∪ B):</strong> All elements in A or B or both</li>
                <li><strong>Intersection (A ∩ B):</strong> Elements common to both A and B</li>
                <li><strong>Difference (A - B):</strong> Elements in A but not in B</li>
                <li><strong>Complement (A'):</strong> All elements not in A</li>
              </ul>

              <h3>Special Sets</h3>
              <ul>
                <li><strong>Empty set (∅):</strong> A set with no elements</li>
                <li><strong>Universal set (U):</strong> The set containing all elements under consideration</li>
                <li><strong>Subset (A ⊆ B):</strong> Every element of A is also in B</li>
              </ul>

              <h3>Cardinality</h3>
              <p>
                The cardinality of a set is the number of elements in it, denoted |A|.
              </p>
              <p className="font-mono bg-muted p-2 rounded">
                If A = {'{1, 2, 3}'}, then |A| = 3
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Logic and Propositions</CardTitle>
              <CardDescription>Foundations of mathematical reasoning</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A proposition is a declarative statement that is either true or false, but not both.
              </p>

              <h3>Logical Operators</h3>
              <ul>
                <li><strong>NOT (¬):</strong> Negation - reverses truth value</li>
                <li><strong>AND (∧):</strong> Conjunction - true only if both are true</li>
                <li><strong>OR (∨):</strong> Disjunction - true if at least one is true</li>
                <li><strong>Implies (→):</strong> Conditional - "if p then q"</li>
                <li><strong>If and only if (↔):</strong> Biconditional - p and q have same truth value</li>
              </ul>

              <h3>Truth Tables</h3>
              <p>
                Truth tables show all possible truth values for logical expressions:
              </p>
              <div className="bg-muted p-4 rounded">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">p</th>
                      <th className="px-4 py-2">q</th>
                      <th className="px-4 py-2">p ∧ q</th>
                      <th className="px-4 py-2">p ∨ q</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">T</td>
                      <td className="px-4 py-2">T</td>
                      <td className="px-4 py-2">T</td>
                      <td className="px-4 py-2">T</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">T</td>
                      <td className="px-4 py-2">F</td>
                      <td className="px-4 py-2">F</td>
                      <td className="px-4 py-2">T</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">F</td>
                      <td className="px-4 py-2">T</td>
                      <td className="px-4 py-2">F</td>
                      <td className="px-4 py-2">T</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">F</td>
                      <td className="px-4 py-2">F</td>
                      <td className="px-4 py-2">F</td>
                      <td className="px-4 py-2">F</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Combinatorics</CardTitle>
              <CardDescription>Counting and arrangements</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                Combinatorics is the study of counting, arrangement, and combination of objects.
              </p>

              <h3>Fundamental Counting Principle</h3>
              <p>
                If there are m ways to do one thing and n ways to do another, then there are m × n
                ways to do both.
              </p>

              <h3>Permutations</h3>
              <p>
                An arrangement of objects in a specific order. The number of permutations of n
                objects is:
              </p>
              <p className="font-mono bg-muted p-2 rounded">P(n) = n!</p>
              <p>
                The number of permutations of r objects chosen from n objects is:
              </p>
              <p className="font-mono bg-muted p-2 rounded">P(n,r) = n!/(n-r)!</p>

              <h3>Combinations</h3>
              <p>
                A selection of objects where order doesn't matter. The number of combinations of r
                objects chosen from n objects is:
              </p>
              <p className="font-mono bg-muted p-2 rounded">C(n,r) = n!/[r!(n-r)!]</p>

              <h3>Example</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">How many ways can 3 people be chosen from 5?</p>
                <p className="font-mono">C(5,3) = 5!/(3!×2!) = 10 ways</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Graph Theory</CardTitle>
              <CardDescription>Networks and connections</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A graph consists of vertices (nodes) connected by edges (links). Graphs model
                relationships and networks.
              </p>

              <h3>Graph Terminology</h3>
              <ul>
                <li><strong>Vertex (node):</strong> A point in the graph</li>
                <li><strong>Edge:</strong> A connection between two vertices</li>
                <li><strong>Degree:</strong> The number of edges connected to a vertex</li>
                <li><strong>Path:</strong> A sequence of vertices connected by edges</li>
                <li><strong>Cycle:</strong> A path that starts and ends at the same vertex</li>
              </ul>

              <h3>Types of Graphs</h3>
              <ul>
                <li><strong>Undirected graph:</strong> Edges have no direction</li>
                <li><strong>Directed graph (digraph):</strong> Edges have a specific direction</li>
                <li><strong>Weighted graph:</strong> Edges have associated values (weights)</li>
                <li><strong>Complete graph:</strong> Every pair of vertices is connected</li>
              </ul>

              <h3>Graph Properties</h3>
              <ul>
                <li><strong>Connected:</strong> There's a path between every pair of vertices</li>
                <li><strong>Tree:</strong> A connected graph with no cycles</li>
                <li><strong>Bipartite:</strong> Vertices can be divided into two sets with edges only between sets</li>
              </ul>

              <h3>Applications</h3>
              <ul>
                <li>Social networks</li>
                <li>Computer networks</li>
                <li>Transportation systems</li>
                <li>Task scheduling</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Number Theory</CardTitle>
              <CardDescription>Properties of integers</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Divisibility</h3>
              <p>
                An integer a is divisible by integer b (written b|a) if there exists an integer k
                such that a = bk.
              </p>

              <h3>Prime Numbers</h3>
              <p>
                A prime number is a natural number greater than 1 that has no positive divisors
                other than 1 and itself.
              </p>
              <p className="font-mono bg-muted p-2 rounded">
                Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, ...
              </p>

              <h3>Fundamental Theorem of Arithmetic</h3>
              <p>
                Every integer greater than 1 can be expressed uniquely as a product of prime numbers
                (up to the order of factors).
              </p>

              <h3>Greatest Common Divisor (GCD)</h3>
              <p>
                The GCD of two integers is the largest positive integer that divides both numbers.
              </p>
              <p className="font-mono bg-muted p-2 rounded">
                Example: GCD(12, 18) = 6
              </p>

              <h3>Modular Arithmetic</h3>
              <p>
                Modular arithmetic deals with remainders. We write a ≡ b (mod m) if a and b have the
                same remainder when divided by m.
              </p>
              <p className="font-mono bg-muted p-2 rounded">
                Example: 17 ≡ 5 (mod 12) because both have remainder 5
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recurrence Relations</CardTitle>
              <CardDescription>Sequences defined recursively</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                A recurrence relation defines each term of a sequence using previous terms.
              </p>

              <h3>Fibonacci Sequence</h3>
              <p>A famous example of a recurrence relation:</p>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">F(0) = 0</p>
                <p className="font-mono">F(1) = 1</p>
                <p className="font-mono">F(n) = F(n-1) + F(n-2) for n ≥ 2</p>
                <p className="font-mono">Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...</p>
              </div>

              <h3>Linear Recurrence Relations</h3>
              <p>
                A linear recurrence relation has the form:
              </p>
              <p className="font-mono bg-muted p-2 rounded">
                aₙ = c₁aₙ₋₁ + c₂aₙ₋₂ + ... + cₖaₙ₋ₖ
              </p>

              <h3>Applications</h3>
              <ul>
                <li>Algorithm analysis</li>
                <li>Modeling growth processes</li>
                <li>Financial calculations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
