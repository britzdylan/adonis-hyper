import { Html, PropsWithChildren } from 'adonisjsx'
import { viteAssets, viteReactRefresh } from 'adonisjsx'

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {viteReactRefresh()}
        {viteAssets(['resources/css/app.css','resources/js/app.js'])}
        <title>AdonisJS</title>
      </head>
      <body class="bg-white flex flex-col justify-center items-center min-h-screen font-sans">{children}</body>
    </html>
  )
}
