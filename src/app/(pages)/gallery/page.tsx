import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View our photo booth gallery and past events.',
}

export default function GalleryPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Photo Booth Gallery
        </p>
        <h1 className="text-3xl font-bold">
          
        </h1>
        <p>Coming Soon!</p>
      </section>
    </div>
  )
}