import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { inter, poppins } from '@/app/fonts'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

// Apply fonts globally using CSS variables
const fontVariables = `${inter.variable} ${poppins.variable}`

// Add metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://emeraldcityphotobooth.com'),
  title: {
    template: '%s | Emerald City Photo Booth - Premium Photo Booth Rentals in Upstate South Carolina',
    default: 'Emerald City Photo Booth - Premium Photo Booth Rentals in Upstate South Carolina',
  },
  description: 'Capture the magic of your wedding, birthday party, or other special event with our photo booth rental services in Upstate South Carolina.',
  keywords: ['photo booth', 'event photography', 'Emerald City'],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Emerald City Photo Booth',
    description: 'Premium photo booth rentals for weddings, birthdays, and corporate events in Upstate South Carolina.',
    url: 'https://emeraldcityphotobooth.com',
    siteName: 'Emerald City Photo Booth',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emerald City Photo Booth',
    description: 'Premium photo booth rentals for weddings, birthdays, and corporate events in Upstate South Carolina.',
  },
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}