import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function StatisticsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-6">Statistics</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Statistics is the science of collecting, organizing, analyzing, interpreting, and
          presenting data. It provides tools for making informed decisions in the face of
          uncertainty.
        </p>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Descriptive Statistics</CardTitle>
              <CardDescription>Summarizing and describing data</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                Descriptive statistics summarize and describe the main features of a dataset.
              </p>

              <h3>Measures of Central Tendency</h3>
              <ul>
                <li>
                  <strong>Mean (Average):</strong> Sum of all values divided by the number of values
                  <p className="font-mono bg-muted p-2 rounded my-2">
                    Mean = (x₁ + x₂ + ... + xₙ) / n
                  </p>
                </li>
                <li>
                  <strong>Median:</strong> The middle value when data is ordered (50th percentile)
                </li>
                <li>
                  <strong>Mode:</strong> The most frequently occurring value
                </li>
              </ul>

              <h3>Measures of Spread</h3>
              <ul>
                <li>
                  <strong>Range:</strong> Difference between maximum and minimum values
                </li>
                <li>
                  <strong>Variance:</strong> Average of squared deviations from the mean
                  <p className="font-mono bg-muted p-2 rounded my-2">
                    σ² = Σ(xᵢ - μ)² / n
                  </p>
                </li>
                <li>
                  <strong>Standard Deviation:</strong> Square root of variance
                  <p className="font-mono bg-muted p-2 rounded my-2">
                    σ = √(variance)
                  </p>
                </li>
              </ul>

              <h3>Example</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">Data: {'{5, 8, 10, 10, 12, 15}'}</p>
                <p className="font-mono">Mean = (5+8+10+10+12+15)/6 = 10</p>
                <p className="font-mono">Median = (10+10)/2 = 10</p>
                <p className="font-mono">Mode = 10</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Probability</CardTitle>
              <CardDescription>Measuring likelihood of events</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                Probability measures how likely an event is to occur, expressed as a number between
                0 and 1 (or 0% to 100%).
              </p>

              <h3>Basic Probability</h3>
              <p className="font-mono bg-muted p-2 rounded">
                P(event) = (Number of favorable outcomes) / (Total number of possible outcomes)
              </p>

              <h3>Probability Rules</h3>
              <ul>
                <li>0 ≤ P(A) ≤ 1 for any event A</li>
                <li>P(certain event) = 1</li>
                <li>P(impossible event) = 0</li>
                <li>
                  <strong>Complement rule:</strong> P(not A) = 1 - P(A)
                </li>
              </ul>

              <h3>Combining Probabilities</h3>
              <ul>
                <li>
                  <strong>Addition rule (OR):</strong> For mutually exclusive events:
                  <p className="font-mono bg-muted p-2 rounded my-2">
                    P(A or B) = P(A) + P(B)
                  </p>
                </li>
                <li>
                  <strong>Multiplication rule (AND):</strong> For independent events:
                  <p className="font-mono bg-muted p-2 rounded my-2">
                    P(A and B) = P(A) × P(B)
                  </p>
                </li>
              </ul>

              <h3>Example</h3>
              <div className="bg-muted p-4 rounded space-y-2">
                <p className="font-mono">Probability of rolling a 6 on a die:</p>
                <p className="font-mono">P(6) = 1/6 ≈ 0.167 or 16.7%</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Probability Distributions</CardTitle>
              <CardDescription>Patterns in random data</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Normal Distribution (Bell Curve)</h3>
              <p>
                The most important probability distribution. Many natural phenomena follow a normal
                distribution.
              </p>
              <ul>
                <li>Symmetric, bell-shaped curve</li>
                <li>Mean = Median = Mode (at the center)</li>
                <li>Defined by mean (μ) and standard deviation (σ)</li>
              </ul>

              <h3>Empirical Rule (68-95-99.7 Rule)</h3>
              <p>For normal distributions:</p>
              <ul>
                <li>68% of data falls within 1 standard deviation of the mean</li>
                <li>95% falls within 2 standard deviations</li>
                <li>99.7% falls within 3 standard deviations</li>
              </ul>

              <h3>Binomial Distribution</h3>
              <p>
                Describes the number of successes in a fixed number of independent trials, each with
                the same probability of success.
              </p>
              <p className="font-mono bg-muted p-2 rounded">
                P(X = k) = C(n,k) × p^k × (1-p)^(n-k)
              </p>

              <h3>Other Important Distributions</h3>
              <ul>
                <li><strong>Uniform distribution:</strong> All outcomes equally likely</li>
                <li><strong>Poisson distribution:</strong> Models rare events</li>
                <li><strong>Exponential distribution:</strong> Models time between events</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sampling and Estimation</CardTitle>
              <CardDescription>Making inferences about populations</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Population vs. Sample</h3>
              <ul>
                <li>
                  <strong>Population:</strong> The entire group we want to study
                </li>
                <li>
                  <strong>Sample:</strong> A subset of the population used to make inferences
                </li>
              </ul>

              <h3>Sampling Methods</h3>
              <ul>
                <li><strong>Random sampling:</strong> Each member has equal chance of selection</li>
                <li><strong>Stratified sampling:</strong> Population divided into groups, random sample from each</li>
                <li><strong>Systematic sampling:</strong> Select every nth member</li>
                <li><strong>Cluster sampling:</strong> Divide into clusters, randomly select entire clusters</li>
              </ul>

              <h3>Confidence Intervals</h3>
              <p>
                A range of values likely to contain the true population parameter:
              </p>
              <p className="font-mono bg-muted p-2 rounded">
                CI = sample mean ± (critical value × standard error)
              </p>
              <p>
                Common confidence levels: 90%, 95%, 99%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hypothesis Testing</CardTitle>
              <CardDescription>Testing claims about populations</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>
                Hypothesis testing is a method for testing a claim or hypothesis about a parameter
                in a population.
              </p>

              <h3>Steps in Hypothesis Testing</h3>
              <ol>
                <li>State the null hypothesis (H₀) and alternative hypothesis (H₁)</li>
                <li>Choose significance level (α), commonly 0.05</li>
                <li>Calculate the test statistic</li>
                <li>Find the p-value or critical value</li>
                <li>Make a decision: reject or fail to reject H₀</li>
              </ol>

              <h3>Types of Errors</h3>
              <ul>
                <li>
                  <strong>Type I Error:</strong> Rejecting H₀ when it's true (false positive)
                </li>
                <li>
                  <strong>Type II Error:</strong> Failing to reject H₀ when it's false (false negative)
                </li>
              </ul>

              <h3>Common Tests</h3>
              <ul>
                <li><strong>t-test:</strong> Compare means of two groups</li>
                <li><strong>ANOVA:</strong> Compare means of three or more groups</li>
                <li><strong>Chi-square test:</strong> Test relationships between categorical variables</li>
                <li><strong>Z-test:</strong> Test for population mean when σ is known</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Correlation and Regression</CardTitle>
              <CardDescription>Analyzing relationships between variables</CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <h3>Correlation</h3>
              <p>
                Correlation measures the strength and direction of the linear relationship between
                two variables.
              </p>
              <ul>
                <li>
                  <strong>Correlation coefficient (r):</strong> Ranges from -1 to +1
                </li>
                <li>r = +1: Perfect positive correlation</li>
                <li>r = 0: No linear correlation</li>
                <li>r = -1: Perfect negative correlation</li>
              </ul>

              <h3>Linear Regression</h3>
              <p>
                Linear regression finds the best-fitting straight line through the data points:
              </p>
              <p className="font-mono bg-muted p-2 rounded">
                y = mx + b
              </p>
              <p>where:</p>
              <ul>
                <li>y is the predicted value (dependent variable)</li>
                <li>x is the independent variable</li>
                <li>m is the slope</li>
                <li>b is the y-intercept</li>
              </ul>

              <h3>Coefficient of Determination (R²)</h3>
              <p>
                R² indicates the proportion of variance in the dependent variable that is
                predictable from the independent variable. Ranges from 0 to 1.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
