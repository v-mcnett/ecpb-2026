import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Emerald City Photo Booth and our mission to create lasting memories.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
        <section>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Premium photo booth experiences
          </p>
          <h1 className="text-3xl font-bold">
            Memories that feel just as good as the celebration itself.
          </h1>
        </section>
        <div className="my-8">
          <Image
            src="/images/events/DSC_1869.jpg"
            alt="Event photo"
            width={1200}
            height={800}
            className="w-full h-80 md:h-[40rem] object-cover object-right-top rounded-xl"
            priority
          />
        </div>
        <div className="prose lg:prose-xl">
          <p className="mb-6">Emerald City Photo Booth is a family-owned, local business dedicated to making your celebrations unforgettable. We provide stylish, high-quality photo booth rentals for weddings, corporate events, birthdays, proms, graduations, and more, bringing fun, personality, and lasting memories to every occasion.</p>

          <p className="mb-6">Our fully customizable booths include personalized photo designs, themed props, instant high-quality prints, and easy digital sharing for guests. From start to finish, we focus on creating a seamless, joy-filled experience that captures the moments you&rsquo;ll want to remember long after the event ends.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/book" className="btn btn-primary">Book Your Booth</a>
          <a href="/contact" className="btn btn-accent">Check Availability</a>
        </div>
        <p className="mt-3 text-sm text-base-content/60">
          Prefer to chat? <a href="tel:+18646253580" className="link link-primary">Call or text us</a>.
        </p>
    </div>
  )
}
