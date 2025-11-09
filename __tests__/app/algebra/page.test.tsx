import { render, screen } from '@/lib/test-utils'
import AlgebraPage from '@/app/algebra/page'

describe('Algebra Page', () => {
  it('renders the main heading', () => {
    render(<AlgebraPage />)
    expect(screen.getByRole('heading', { name: 'Algebra', level: 1 })).toBeInTheDocument()
  })

  it('renders the page description', () => {
    render(<AlgebraPage />)
    expect(
      screen.getByText(/Algebra is the branch of mathematics that studies mathematical symbols/i)
    ).toBeInTheDocument()
  })

  it('renders all main section headings', () => {
    render(<AlgebraPage />)

    expect(screen.getByText('Basic Concepts')).toBeInTheDocument()
    expect(screen.getByText('Linear Equations')).toBeInTheDocument()
    expect(screen.getByText('Quadratic Equations')).toBeInTheDocument()
    expect(screen.getByText('Polynomials')).toBeInTheDocument()
    expect(screen.getByText('Functions')).toBeInTheDocument()
  })

  it('renders variables section content', () => {
    render(<AlgebraPage />)
    expect(screen.getByText('Variables')).toBeInTheDocument()
    expect(
      screen.getByText(/A variable is a symbol \(usually a letter\) that represents a number/i)
    ).toBeInTheDocument()
  })

  it('renders linear equations content', () => {
    render(<AlgebraPage />)
    expect(
      screen.getByText(/A linear equation is an equation where the highest power of the variable is 1/i)
    ).toBeInTheDocument()
  })

  it('renders quadratic formula', () => {
    render(<AlgebraPage />)
    expect(screen.getByText('Quadratic Formula')).toBeInTheDocument()
  })

  it('renders examples in code blocks', () => {
    const { container } = render(<AlgebraPage />)
    const codeBlocks = container.querySelectorAll('.font-mono')
    expect(codeBlocks.length).toBeGreaterThan(0)
  })

  it('renders functions section with domain and range', () => {
    render(<AlgebraPage />)
    expect(screen.getByText(/function is a relation that assigns exactly one output/i)).toBeInTheDocument()
    expect(screen.getByText(/Domain:/)).toBeInTheDocument()
    expect(screen.getByText(/Range:/)).toBeInTheDocument()
  })

  it('renders all card components', () => {
    const { container } = render(<AlgebraPage />)
    // Check for Card components by looking for elements with border and rounded classes
    const cards = container.querySelectorAll('.rounded-lg.border')
    expect(cards.length).toBe(5) // 5 main sections
  })
})
