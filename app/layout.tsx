import type { Metadata } from 'next'
import './globals.scss'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'El Panetario | Catálogo',
  description: 'Catálogo de precios - El Panetario',
  themeColor: '#0b0c0e',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}
