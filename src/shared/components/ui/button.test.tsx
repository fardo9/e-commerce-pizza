import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Button } from './button'

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    const button = screen.getByRole('button', { name: 'Click me' })
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('respects variant and size props', () => {
    render(
      <Button variant="secondary" size="lg">
        Big Secondary
      </Button>
    )
    const button = screen.getByRole('button', { name: 'Big Secondary' })
    expect(button).toHaveClass('bg-secondary')
    expect(button).toHaveClass('h-10')
  })

  it('renders as child when asChild is true', () => {
    render(
      <Button asChild>
        <a href="/test">Go to link</a>
      </Button>
    )
    const link = screen.getByRole('link', { name: 'Go to link' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })
})
