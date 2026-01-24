import type { Metadata } from 'next'
import './globals.scss'
import { ThemeProvider } from './providers'

export const metadata: Metadata = {
  title: 'El Panetario | Catálogo',
  description: 'Catálogo de precios - El Panetario',
  themeColor: '#f7f3ec', // color neutro (light). El browser lo ajusta luego
}

/**
 * Script para evitar el "flash" de tema
 * Se ejecuta ANTES de que React hidrate
 */
const themeInitScript = `
(function () {
  try {
    var key = 'panetario_theme'
    var saved = localStorage.getItem(key)

    if (saved === 'light' || saved === 'dark') {
      document.documentElement.dataset.theme = saved
      return
    }

    var prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    document.documentElement.dataset.theme = prefersDark ? 'dark' : 'light'
  } catch (e) {}
})()
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
