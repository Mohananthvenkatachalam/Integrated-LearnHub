import React from 'react'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const loaderVariants = cva(
  'size-16 animate-spin rounded-full border-4 border-primary !border-t-transparent',
  {
    variants: {
      size: {
        default: 'size-8 border-[3px]',
        lg: 'size-12 border-4',
        xl: 'size-16 border-4',
        sm: 'size-4 border-2',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

type Props = {
  className?: string
  size?: 'default' | 'sm' | 'lg' | 'xl'
} & React.HTMLAttributes<HTMLDivElement>

function CircularSpinner({ className, size, ...props }: Props) {
  return (
    <div
      className={cn(loaderVariants({ size, className }))}
      aria-busy='true'
      aria-label='Loading'
      aria-live='assertive'
      role='status'
      {...props}
    />
  )
}

CircularSpinner.displayName = 'CircularSpinner'

export { loaderVariants, CircularSpinner }
