import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { inter, poppins } from '@/app/fonts'

// Apply fonts globally using CSS variables
const fontVariables = `${inter.variable} ${poppins.variable}`

// Add metadata configuration
export const metadata: Metadata = {
  title: {
    template: '%s | Emerald City Photo Booth',
    default: 'Emerald City Photo Booth',
  },
  description: 'Capture the magic of your event with our photo booth services.',
  keywords: ['photo booth', 'event photography', 'Emerald City'],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="ecpbEmeraldTheme" className={fontVariables}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen flex flex-col bg-base-100">
        <Header />
        <main className="flex-grow p-4 container mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}