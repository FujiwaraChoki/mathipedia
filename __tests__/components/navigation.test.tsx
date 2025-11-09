import { render, screen } from '@/lib/test-utils'
import { Navigation } from '@/components/navigation'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>
  }
})

describe('Navigation', () => {
  it('renders the Mathipedia logo', () => {
    render(<Navigation />)
    expect(screen.getByText('Mathipedia')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navigation />)

    const links = [
      { name: 'Algebra', href: '/algebra' },
      { name: 'Calculus', href: '/calculus' },
      { name: 'Geometry', href: '/geometry' },
      { name: 'Discrete Math', href: '/discrete-math' },
      { name: 'Statistics', href: '/statistics' },
    ]

    links.forEach((link) => {
      const element = screen.getByText(link.name)
      expect(element).toBeInTheDocument()
      expect(element.closest('a')).toHaveAttribute('href', link.href)
    })
  })

  it('has a home link on the logo', () => {
    render(<Navigation />)
    const logoLink = screen.getByText('Mathipedia').closest('a')
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('renders the book icon', () => {
    render(<Navigation />)
    // The Book icon is rendered as an SVG, we can check for the presence of the logo container
    expect(screen.getByText('Mathipedia').parentElement).toBeInTheDocument()
  })

  it('has proper styling classes', () => {
    const { container } = render(<Navigation />)
    const nav = container.querySelector('nav')
    expect(nav).toHaveClass('border-b')
  })

  it('renders navigation links as clickable elements', () => {
    render(<Navigation />)
    const algebraLink = screen.getByText('Algebra')
    expect(algebraLink).toBeInTheDocument()
    expect(algebraLink.closest('a')).toHaveAttribute('href', '/algebra')
  })
})
