import type { Metadata } from 'next'
import BookingForm from '@/components/forms/BookingForm'

export const metadata: Metadata = {
  title: 'Book Your Photo Booth',
  description: 'Book your Emerald City Photo Booth experience.',
}

export default function BookingPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Book Your Photo Booth</h1>
      
      <div className="prose max-w-none mb-8">
        <p>
          Ready to make your event special? Fill out the form below and we&apos;ll get back to you
          within 24 hours to confirm availability and details.
        </p>
      </div>

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <BookingForm />
        </div>
      </div>
    </div>
  )
}