import { render, screen } from '@/lib/test-utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

describe('Card Components', () => {
  describe('Card', () => {
    it('renders children correctly', () => {
      render(
        <Card>
          <div>Card content</div>
        </Card>
      )
      expect(screen.getByText('Card content')).toBeInTheDocument()
    })

    it('applies custom className', () => {
      const { container } = render(<Card className="custom-card">Content</Card>)
      const card = container.querySelector('.custom-card')
      expect(card).toBeInTheDocument()
    })
  })

  describe('CardHeader', () => {
    it('renders header content', () => {
      render(
        <Card>
          <CardHeader>
            <div>Header content</div>
          </CardHeader>
        </Card>
      )
      expect(screen.getByText('Header content')).toBeInTheDocument()
    })
  })

  describe('CardTitle', () => {
    it('renders title text', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Test Title</CardTitle>
          </CardHeader>
        </Card>
      )
      expect(screen.getByText('Test Title')).toBeInTheDocument()
    })

    it('has proper styling classes', () => {
      render(<CardTitle>Title</CardTitle>)
      const title = screen.getByText('Title')
      expect(title).toHaveClass('text-2xl', 'font-semibold')
    })
  })

  describe('CardDescription', () => {
    it('renders description text', () => {
      render(
        <Card>
          <CardHeader>
            <CardDescription>Test Description</CardDescription>
          </CardHeader>
        </Card>
      )
      expect(screen.getByText('Test Description')).toBeInTheDocument()
    })

    it('has muted foreground styling', () => {
      render(<CardDescription>Description</CardDescription>)
      expect(screen.getByText('Description')).toHaveClass('text-muted-foreground')
    })
  })

  describe('CardContent', () => {
    it('renders content area', () => {
      render(
        <Card>
          <CardContent>Main content</CardContent>
        </Card>
      )
      expect(screen.getByText('Main content')).toBeInTheDocument()
    })
  })

  describe('CardFooter', () => {
    it('renders footer content', () => {
      render(
        <Card>
          <CardFooter>Footer content</CardFooter>
        </Card>
      )
      expect(screen.getByText('Footer content')).toBeInTheDocument()
    })
  })

  describe('Complete Card', () => {
    it('renders all card parts together', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Complete Card</CardTitle>
            <CardDescription>This is a description</CardDescription>
          </CardHeader>
          <CardContent>This is the main content</CardContent>
          <CardFooter>This is the footer</CardFooter>
        </Card>
      )

      expect(screen.getByText('Complete Card')).toBeInTheDocument()
      expect(screen.getByText('This is a description')).toBeInTheDocument()
      expect(screen.getByText('This is the main content')).toBeInTheDocument()
      expect(screen.getByText('This is the footer')).toBeInTheDocument()
    })
  })
})
