import { cn } from '#fragments/lib/utils'
import type { ToggleRootProps } from '#fragments/components/toggle/toggleRoot'

interface ToggleThumbProps {
  id: string
  className?: string
}
export function ToggleThumb({ ...props }: ToggleThumbProps) {
  const { id, className } = props
  return (
    <label
      for={id}
      class={[
        cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform translate-x-0'
        ),
        className,
      ]}
      x-bind:class="!toggle ? '' : 'translate-x-5'"
    ></label>
  )
}
