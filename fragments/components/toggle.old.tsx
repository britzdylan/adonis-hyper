import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '#fragments/lib/utils'

interface inputProps {
  checked: boolean
  id: string
  name: string
}

interface classProps {
  class?: string
}

export interface ToggleProps {
  input: inputProps
  thumb?: classProps
  track?: classProps
}

export default function Toggle({ ...props }: ToggleProps) {
  const { input, track, thumb } = props
  return (
    <div x-data={`{ toggle: ${input.checked} }`}>
      <input
        {...props.input}
        aria-hidden
        type="checkbox"
        style={{
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0,
          margin: 0,
          appearance: 'none',
        }}
        class="peer"
        tabIndex={-1}
        x-bind:checked="toggle"
        x-bind:value="toggle"
      />
      <div
        class={[
          cn(
            'inline-flex group h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50'
          ),
          track?.class,
        ]}
        x-on:click="toggle = !toggle"
        x-bind:class="toggle ? 'bg-primary' : 'bg-input'"
      >
        <label
          for={input.id}
          class={[
            cn(
              'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform translate-x-0'
            ),
            thumb?.class,
          ]}
          x-bind:class="!toggle ? '' : 'translate-x-5'"
        ></label>
      </div>
    </div>
  )
}
