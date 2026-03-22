import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'View our photo booth gallery and past events.',
}

export default function GalleryPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Gallery</h1>
      <div className="prose lg:prose-xl">
        <p>Your gallery content here</p>
      </div>
    </div>
  )
}