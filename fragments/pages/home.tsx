import Button from '#fragments/components/button'
import { Toggle } from '#fragments/components/toggle/index'
export default function Home() {
  return (
    <>
      <h1 class="text-4xl font-bold mb-4">Welcome to AdonisJs ATHX starter template</h1>
      <p>Alpine | Tailwind | HTMX | JSX</p>
      <div class="py-4 inline-flex gap-2 items-center" x-data="{ count: 0 }">
        <Button x-on:click="count++">Increment</Button>
        <p>
          Count: <span x-text="count"></span>
        </p>
      </div>
      <Toggle input={{ id: 'toggle', name: 'toggle', checked: false }} />
    </>
  )
}
