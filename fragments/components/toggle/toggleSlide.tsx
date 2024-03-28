import { cn } from '#fragments/lib/utils'
import { PropsWithChildren } from 'adonisjsx'

export interface ToggleSlideProps {
  className?: string
}
export function ToggleSlide({ children, ...props }: PropsWithChildren<ToggleSlideProps>) {
  const { className } = props
  return (
    <div
      class={[
        cn(
          'inline-flex group h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50'
        ),
        className,
      ]}
      x-on:click="toggle = !toggle"
      x-bind:class="toggle ? 'bg-primary' : 'bg-input'"
    >
      {children}
    </div>
  )
}
