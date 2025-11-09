import { cn } from '@/lib/utils'

describe('cn utility', () => {
  it('merges class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2')
  })

  it('handles conditional classes', () => {
    expect(cn('base', false && 'hidden', 'visible')).toBe('base visible')
  })

  it('handles undefined and null values', () => {
    expect(cn('class1', undefined, null, 'class2')).toBe('class1 class2')
  })

  it('handles arrays of classes', () => {
    expect(cn(['class1', 'class2'])).toBe('class1 class2')
  })

  it('deduplicates conflicting Tailwind classes', () => {
    // twMerge should handle conflicting classes
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('handles empty input', () => {
    expect(cn()).toBe('')
  })

  it('handles objects with boolean values', () => {
    expect(cn({ 'class1': true, 'class2': false, 'class3': true })).toBe('class1 class3')
  })

  it('combines clsx and twMerge functionality', () => {
    expect(
      cn(
        'base-class',
        { 'conditional-class': true },
        'override-class',
        undefined,
        'final-class'
      )
    ).toContain('base-class')
  })
})
