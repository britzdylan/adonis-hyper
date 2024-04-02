import Alpine from 'alpinejs'
import htmx from 'htmx.org'

window.htmx = htmx
window.Alpine = Alpine

Alpine.start()

console.log('Log from JS entrypoint')
