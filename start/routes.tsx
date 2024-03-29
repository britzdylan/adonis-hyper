/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import Home from '#pages/home'
import { Button } from '#components'

router.get('/', async ({ jsx }) => jsx(Home)) // Render full pages - required in order to load all the necessary scripts and styles

router.get('/api', () => {
  return <Button variant="destructive">Incremented</Button> // only use when swapping content with HTMX
})
