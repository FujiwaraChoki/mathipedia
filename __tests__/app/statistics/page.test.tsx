import { render, screen } from '@/lib/test-utils'
import StatisticsPage from '@/app/statistics/page'

describe('Statistics Page', () => {
  it('renders the main heading', () => {
    render(<StatisticsPage />)
    expect(screen.getByRole('heading', { name: 'Statistics', level: 1 })).toBeInTheDocument()
  })

  it('renders the page description', () => {
    render(<StatisticsPage />)
    expect(
      screen.getByText(/Statistics is the science of collecting, organizing, analyzing/i)
    ).toBeInTheDocument()
  })

  it('renders all main section headings', () => {
    render(<StatisticsPage />)

    expect(screen.getByText('Descriptive Statistics')).toBeInTheDocument()
    expect(screen.getByText('Probability')).toBeInTheDocument()
    expect(screen.getByText('Probability Distributions')).toBeInTheDocument()
    expect(screen.getByText('Sampling and Estimation')).toBeInTheDocument()
    expect(screen.getByText('Hypothesis Testing')).toBeInTheDocument()
    expect(screen.getByText('Correlation and Regression')).toBeInTheDocument()
  })

  it('renders measures of central tendency', () => {
    render(<StatisticsPage />)
    expect(screen.getByText('Measures of Central Tendency')).toBeInTheDocument()
    expect(screen.getByText(/Mean \(Average\):/)).toBeInTheDocument()
    expect(screen.getByText(/Median:/)).toBeInTheDocument()
    expect(screen.getByText(/Mode:/)).toBeInTheDocument()
  })

  it('renders probability content', () => {
    render(<StatisticsPage />)
    expect(
      screen.getByText(/Probability measures how likely an event is to occur/i)
    ).toBeInTheDocument()
  })

  it('renders normal distribution content', () => {
    render(<StatisticsPage />)
    expect(screen.getByText('Normal Distribution (Bell Curve)')).toBeInTheDocument()
    expect(screen.getByText('Empirical Rule (68-95-99.7 Rule)')).toBeInTheDocument()
  })

  it('renders hypothesis testing steps', () => {
    render(<StatisticsPage />)
    expect(screen.getByText('Steps in Hypothesis Testing')).toBeInTheDocument()
  })

  it('renders correlation and regression content', () => {
    render(<StatisticsPage />)
    expect(screen.getByText('Correlation')).toBeInTheDocument()
    expect(screen.getByText('Linear Regression')).toBeInTheDocument()
    expect(
      screen.getByText(/Correlation measures the strength and direction of the linear relationship/i)
    ).toBeInTheDocument()
  })

  it('renders sampling methods', () => {
    render(<StatisticsPage />)
    expect(screen.getByText('Sampling Methods')).toBeInTheDocument()
  })
})
