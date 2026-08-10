import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BookingForm from '@/components/forms/BookingForm'

export const metadata: Metadata = {
  title: 'Book Your Photo Booth',
  description: 'Book your Emerald City Photo Booth experience.',
}

export default function BookingPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
      <section className="mb-0 overflow-hidden rounded-[2rem] rounded-b-none border border-base-300 bg-base-100 shadow-xl">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Reserve your experience
            </p>
            <h1 className="mb-4 text-3xl font-bold leading-tight">
              Bring the photo booth fun to your next event.
            </h1>
            <p className="mb-6 text-lg text-base-content/80">
              Share your date, venue, and vision and we&apos;ll help you choose the perfect package
              for a seamless, memorable guest experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/services" className="btn btn-outline">
                Explore Services
              </Link>
              <Link href="/contact" className="btn btn-primary">
                Ask a Question
              </Link>
            </div>
          </div>
          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/events/slider_05.jpg"
              alt="Guests enjoying a photo booth at an event"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <div className="-mt-2 rounded-[2rem] rounded-t-none border border-base-300 bg-base-100 p-6 shadow-xl sm:p-8 lg:-mt-6 lg:p-10">
        <div className="mb-6 prose max-w-none">
          <p className="text-base-content/80">
            Ready to make your event special? Fill out the form below and we&apos;ll get back to you
            within 24 hours to confirm availability and details.
          </p>
        </div>

        <div className="rounded-2xl bg-base-200/70 p-4 sm:p-6">
          <BookingForm />
        </div>
      </div>
    </div>
  )
}