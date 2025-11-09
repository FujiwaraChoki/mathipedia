import { render, screen } from '@/lib/test-utils'
import CalculusPage from '@/app/calculus/page'

describe('Calculus Page', () => {
  it('renders the main heading', () => {
    render(<CalculusPage />)
    expect(screen.getByRole('heading', { name: 'Calculus', level: 1 })).toBeInTheDocument()
  })

  it('renders the page description', () => {
    render(<CalculusPage />)
    expect(
      screen.getByText(/Calculus is the mathematical study of continuous change/i)
    ).toBeInTheDocument()
  })

  it('renders all main section headings', () => {
    render(<CalculusPage />)

    expect(screen.getByText('Limits')).toBeInTheDocument()
    expect(screen.getByText('Derivatives')).toBeInTheDocument()
    expect(screen.getByText('Integrals')).toBeInTheDocument()
    expect(screen.getByText('Applications of Derivatives')).toBeInTheDocument()
    expect(screen.getByText('Series and Sequences')).toBeInTheDocument()
  })

  it('renders limits content', () => {
    render(<CalculusPage />)
    expect(
      screen.getByText(/A limit describes the value that a function approaches/i)
    ).toBeInTheDocument()
  })

  it('renders derivatives section', () => {
    render(<CalculusPage />)
    expect(
      screen.getByText(/The derivative of a function represents the rate at which the function is changing/i)
    ).toBeInTheDocument()
  })

  it('renders derivative rules', () => {
    render(<CalculusPage />)
    expect(screen.getByText('Basic Derivative Rules')).toBeInTheDocument()
  })

  it('renders integrals section', () => {
    render(<CalculusPage />)
    expect(
      screen.getByText(/Integration is the reverse process of differentiation/i)
    ).toBeInTheDocument()
    expect(screen.getByText('Indefinite Integrals')).toBeInTheDocument()
    expect(screen.getByText('Definite Integrals')).toBeInTheDocument()
  })

  it('renders Fundamental Theorem of Calculus', () => {
    render(<CalculusPage />)
    expect(screen.getByText('Fundamental Theorem of Calculus')).toBeInTheDocument()
  })

  it('renders applications section', () => {
    render(<CalculusPage />)
    expect(screen.getByText('Finding Maximum and Minimum Values')).toBeInTheDocument()
    expect(screen.getByText('Related Rates')).toBeInTheDocument()
    expect(screen.getByText('Optimization')).toBeInTheDocument()
  })

  it('renders series and sequences content', () => {
    render(<CalculusPage />)
    expect(screen.getByText(/A sequence is an ordered list of numbers/i)).toBeInTheDocument()
    expect(screen.getByText('Taylor Series')).toBeInTheDocument()
  })
})
