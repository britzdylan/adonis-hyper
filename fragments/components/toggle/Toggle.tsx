import { ToggleRoot, type ToggleRootProps } from '#fragments/components/toggle/toggleRoot'
import { ToggleThumb } from '#fragments/components/toggle/toggleThumb'
import { ToggleSlide } from '#fragments/components/toggle/toggleSlide'
import type { classProps } from '#fragments/lib/utils/types'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '#fragments/lib/utils'

export interface ToggleProps {
  input: ToggleRootProps
  thumbClass?: string
  trackClass?: string
}

export function Toggle({ ...props }: ToggleProps) {
  const { input, thumbClass, trackClass } = props

  return (
    <ToggleRoot {...input}>
      <ToggleSlide className={trackClass}>
        <ToggleThumb id={input.id} className={thumbClass} />
      </ToggleSlide>
    </ToggleRoot>
  )
}
