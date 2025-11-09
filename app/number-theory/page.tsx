import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function NumberTheoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Number Theory</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Number Theory is the study of properties and relationships of integers. Often called
          the "queen of mathematics," it has applications in cryptography, computer science,
          and many areas of pure mathematics.
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Divisibility</CardTitle>
              <CardDescription>Fundamental concepts of division</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Definition</h3>
              <p>
                Integer a divides integer b (written a|b) if there exists an integer k such that b = ak.
              </p>

              <h3>Properties of Divisibility</h3>
              <ul>
                <li>If a|b and a|c, then a|(b + c) and a|(b - c)</li>
                <li>If a|b, then a|bc for any integer c</li>
                <li>If a|b and b|c, then a|c (transitivity)</li>
                <li>a|0 for any non-zero a</li>
                <li>1|a for any integer a</li>
              </ul>

              <h3>Division Algorithm</h3>
              <p>For any integers a and b with b &gt; 0, there exist unique integers q and r such that:</p>
              <p className="font-mono bg-muted p-2 rounded">a = bq + r, where 0 ≤ r &lt; b</p>
              <p>q is the quotient, r is the remainder</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prime Numbers</CardTitle>
              <CardDescription>The building blocks of integers</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Definition</h3>
              <p>
                A prime number is a natural number greater than 1 that has no positive divisors
                other than 1 and itself.
              </p>

              <h3>First Few Primes</h3>
              <p className="font-mono bg-muted p-2 rounded">
                2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, ...
              </p>

              <h3>Properties</h3>
              <ul>
                <li>2 is the only even prime</li>
                <li>There are infinitely many primes (Euclid's proof)</li>
                <li>Every integer &gt; 1 is either prime or can be factored into primes</li>
              </ul>

              <h3>Prime Number Theorem</h3>
              <p>
                The number of primes less than or equal to n is approximately n/ln(n).
              </p>

              <h3>Primality Testing</h3>
              <h4>Trial Division:</h4>
              <p>Test divisibility by all primes up to √n</p>

              <h4>Sieve of Eratosthenes:</h4>
              <p>Algorithm to find all primes up to a given number:</p>
              <ol>
                <li>List all numbers from 2 to n</li>
                <li>Mark 2's multiples (except 2)</li>
                <li>Find next unmarked number, mark its multiples</li>
                <li>Repeat until reaching √n</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fundamental Theorem of Arithmetic</CardTitle>
              <CardDescription>Unique prime factorization</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Statement</h3>
              <p>
                Every integer greater than 1 can be expressed uniquely as a product of prime
                numbers, up to the order of factors.
              </p>

              <h3>Example</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">60 = 2² × 3 × 5</p>
                <p className="font-mono">100 = 2² × 5²</p>
                <p className="font-mono">1001 = 7 × 11 × 13</p>
              </div>

              <h3>Canonical Form</h3>
              <p>Any positive integer n can be written as:</p>
              <p className="font-mono bg-muted p-2 rounded">
                n = p₁^a₁ × p₂^a₂ × ... × pₖ^aₖ
              </p>
              <p>where p₁ &lt; p₂ &lt; ... &lt; pₖ are primes and aᵢ &gt; 0</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Greatest Common Divisor (GCD)</CardTitle>
              <CardDescription>Largest number dividing two integers</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Definition</h3>
              <p>
                The GCD of a and b, written gcd(a,b), is the largest positive integer that divides
                both a and b.
              </p>

              <h3>Properties</h3>
              <ul>
                <li>gcd(a,b) = gcd(b,a)</li>
                <li>gcd(a,0) = |a|</li>
                <li>gcd(a,b) = gcd(a-b, b)</li>
                <li>gcd(a,b) divides any linear combination of a and b</li>
              </ul>

              <h3>Euclidean Algorithm</h3>
              <p>Efficient method to compute GCD:</p>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">gcd(48, 18):</p>
                <p className="font-mono">48 = 18×2 + 12</p>
                <p className="font-mono">18 = 12×1 + 6</p>
                <p className="font-mono">12 = 6×2 + 0</p>
                <p className="font-mono">Therefore, gcd(48, 18) = 6</p>
              </div>

              <h3>Bézout's Identity</h3>
              <p>For any integers a and b, there exist integers x and y such that:</p>
              <p className="font-mono bg-muted p-2 rounded">ax + by = gcd(a,b)</p>

              <h3>Relatively Prime</h3>
              <p>Two integers a and b are relatively prime (coprime) if gcd(a,b) = 1.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Least Common Multiple (LCM)</CardTitle>
              <CardDescription>Smallest number divisible by two integers</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Definition</h3>
              <p>
                The LCM of a and b, written lcm(a,b), is the smallest positive integer that is
                divisible by both a and b.
              </p>

              <h3>Formula</h3>
              <p className="font-mono bg-muted p-2 rounded">
                lcm(a,b) = |ab| / gcd(a,b)
              </p>

              <h3>Example</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">lcm(12, 18) = (12 × 18) / gcd(12, 18)</p>
                <p className="font-mono">= 216 / 6 = 36</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modular Arithmetic</CardTitle>
              <CardDescription>Arithmetic with remainders</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Congruence</h3>
              <p>We say a is congruent to b modulo m, written a ≡ b (mod m), if m divides (a - b).</p>
              <p>Equivalently: a and b have the same remainder when divided by m.</p>

              <h3>Properties</h3>
              <ul>
                <li>If a ≡ b (mod m) and c ≡ d (mod m), then a + c ≡ b + d (mod m)</li>
                <li>If a ≡ b (mod m) and c ≡ d (mod m), then ac ≡ bd (mod m)</li>
                <li>If a ≡ b (mod m), then aⁿ ≡ bⁿ (mod m)</li>
              </ul>

              <h3>Modular Inverse</h3>
              <p>
                The modular inverse of a modulo m is an integer x such that ax ≡ 1 (mod m).
                It exists if and only if gcd(a,m) = 1.
              </p>

              <h3>Chinese Remainder Theorem</h3>
              <p>
                If m₁, m₂, ..., mₖ are pairwise coprime, then the system of congruences:
              </p>
              <ul>
                <li>x ≡ a₁ (mod m₁)</li>
                <li>x ≡ a₂ (mod m₂)</li>
                <li>...</li>
                <li>x ≡ aₖ (mod mₖ)</li>
              </ul>
              <p>has a unique solution modulo M = m₁m₂...mₖ.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fermat's Little Theorem</CardTitle>
              <CardDescription>A fundamental result in modular arithmetic</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Statement</h3>
              <p>If p is prime and a is not divisible by p, then:</p>
              <p className="font-mono bg-muted p-2 rounded">a^(p-1) ≡ 1 (mod p)</p>

              <h3>Equivalent Form</h3>
              <p>For any integer a and prime p:</p>
              <p className="font-mono bg-muted p-2 rounded">a^p ≡ a (mod p)</p>

              <h3>Applications</h3>
              <ul>
                <li>Computing large powers modulo a prime</li>
                <li>Primality testing</li>
                <li>Finding modular inverses</li>
                <li>Cryptography (RSA algorithm)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Euler's Theorem and Totient Function</CardTitle>
              <CardDescription>Generalizing Fermat's Little Theorem</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Euler's Totient Function φ(n)</h3>
              <p>
                φ(n) counts the number of positive integers less than or equal to n that are
                relatively prime to n.
              </p>

              <h3>Examples</h3>
              <ul>
                <li>φ(1) = 1</li>
                <li>φ(p) = p - 1 for prime p</li>
                <li>φ(12) = 4 (numbers 1, 5, 7, 11 are coprime to 12)</li>
              </ul>

              <h3>Formula</h3>
              <p>If n = p₁^a₁ × p₂^a₂ × ... × pₖ^aₖ, then:</p>
              <p className="font-mono bg-muted p-2 rounded">
                φ(n) = n(1 - 1/p₁)(1 - 1/p₂)...(1 - 1/pₖ)
              </p>

              <h3>Euler's Theorem</h3>
              <p>If gcd(a,n) = 1, then:</p>
              <p className="font-mono bg-muted p-2 rounded">a^φ(n) ≡ 1 (mod n)</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Diophantine Equations</CardTitle>
              <CardDescription>Equations with integer solutions</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Linear Diophantine Equations</h3>
              <p>Equations of the form ax + by = c</p>
              <p>
                Has integer solutions if and only if gcd(a,b) divides c.
              </p>

              <h3>Finding Solutions</h3>
              <ol>
                <li>Find gcd(a,b) using Euclidean algorithm</li>
                <li>Check if gcd(a,b) divides c</li>
                <li>Use extended Euclidean algorithm to find one solution</li>
                <li>General solution: x = x₀ + (b/d)t, y = y₀ - (a/d)t</li>
              </ol>
              <p>where d = gcd(a,b) and t is any integer</p>

              <h3>Pythagorean Triples</h3>
              <p>
                Integer solutions to a² + b² = c² are called Pythagorean triples.
              </p>
              <p>Primitive triples (gcd(a,b,c) = 1) are generated by:</p>
              <p className="font-mono bg-muted p-2 rounded">
                a = m² - n², b = 2mn, c = m² + n²
              </p>
              <p>where m &gt; n &gt; 0, gcd(m,n) = 1, and m,n not both odd</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Perfect Numbers and Mersenne Primes</CardTitle>
              <CardDescription>Special classes of numbers</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Perfect Numbers</h3>
              <p>
                A perfect number equals the sum of its proper divisors (divisors less than itself).
              </p>
              <p className="font-mono bg-muted p-2 rounded">
                Examples: 6 = 1 + 2 + 3, 28 = 1 + 2 + 4 + 7 + 14
              </p>

              <h3>Euclid-Euler Theorem</h3>
              <p>An even number is perfect if and only if it has the form:</p>
              <p className="font-mono bg-muted p-2 rounded">2^(p-1)(2^p - 1)</p>
              <p>where 2^p - 1 is prime (a Mersenne prime)</p>

              <h3>Mersenne Primes</h3>
              <p>Primes of the form 2^p - 1 where p is prime.</p>
              <p>First few: M₂ = 3, M₃ = 7, M₅ = 31, M₇ = 127</p>
              <p>Note: Not all 2^p - 1 are prime even when p is prime</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cryptographic Applications</CardTitle>
              <CardDescription>Number theory in modern security</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>RSA Encryption</h3>
              <p>Based on:</p>
              <ul>
                <li>Difficulty of factoring large numbers</li>
                <li>Euler's theorem for modular exponentiation</li>
                <li>Computing modular inverses</li>
              </ul>

              <h3>Diffie-Hellman Key Exchange</h3>
              <p>Uses modular exponentiation and discrete logarithm problem.</p>

              <h3>Hash Functions</h3>
              <p>Use modular arithmetic and prime numbers for data integrity.</p>

              <h3>Why Number Theory Works for Cryptography</h3>
              <ul>
                <li>Easy to compute in one direction (multiplication, exponentiation)</li>
                <li>Hard to reverse (factoring, discrete logarithms)</li>
                <li>Mathematical certainty vs. computational difficulty</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
