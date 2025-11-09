import { render, screen } from '@/lib/test-utils'
import Home from '@/app/page'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    expect(screen.getByText('Welcome to Mathipedia')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(<Home />)
    expect(
      screen.getByText(/The free mathematics encyclopedia that anyone can explore/i)
    ).toBeInTheDocument()
  })

  it('renders all math section cards', () => {
    render(<Home />)

    const sections = ['Algebra', 'Calculus', 'Geometry', 'Discrete Mathematics', 'Statistics']

    sections.forEach((section) => {
      expect(screen.getByText(section)).toBeInTheDocument()
    })
  })

  it('renders section descriptions', () => {
    render(<Home />)

    expect(
      screen.getByText(/Study of mathematical symbols and rules for manipulating these symbols/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Mathematics of continuous change, including derivatives and integrals/i)
    ).toBeInTheDocument()
  })

  it('renders topic lists for each section', () => {
    render(<Home />)

    // Check for some topics
    expect(screen.getByText('Linear Equations')).toBeInTheDocument()
    expect(screen.getByText('Derivatives')).toBeInTheDocument()
    expect(screen.getByText('Triangles')).toBeInTheDocument()
    expect(screen.getByText('Set Theory')).toBeInTheDocument()
    expect(screen.getByText('Probability')).toBeInTheDocument()
  })

  it('renders the About Mathipedia section', () => {
    render(<Home />)
    expect(screen.getByText('About Mathipedia')).toBeInTheDocument()
    expect(
      screen.getByText(/Mathipedia is a comprehensive, free encyclopedia dedicated to mathematics/i)
    ).toBeInTheDocument()
  })

  it('has correct links to section pages', () => {
    render(<Home />)

    const links = [
      { text: 'Algebra', href: '/algebra' },
      { text: 'Calculus', href: '/calculus' },
      { text: 'Geometry', href: '/geometry' },
      { text: 'Discrete Mathematics', href: '/discrete-math' },
      { text: 'Statistics', href: '/statistics' },
    ]

    links.forEach((link) => {
      const element = screen.getByText(link.text)
      const anchor = element.closest('a')
      expect(anchor).toHaveAttribute('href', link.href)
    })
  })

  it('renders all section icons', () => {
    const { container } = render(<Home />)
    // Check that SVG icons are rendered (lucide-react icons render as SVGs)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThan(0)
  })
})
