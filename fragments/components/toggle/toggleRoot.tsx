import { PropsWithChildren } from 'adonisjsx'

export interface ToggleRootProps {
  checked: boolean
  id: string
  name: string
}

export function ToggleRoot({ children, ...props }: PropsWithChildren<ToggleRootProps>) {
  const { checked } = props

  return (
    <div x-data={`{ toggle: ${checked} }`}>
      <input
        {...props}
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
        tabindex={-1}
        x-bind:checked="toggle"
        x-bind:value="toggle"
      />
      {children}
    </div>
  )
}
