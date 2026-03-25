import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Emerald City Photo Booth and our mission to create lasting memories.',
}

export default function AboutPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose lg:prose-xl">
          <p className="mb-6">Emerald City Photo Booth is a family-owned, local business dedicated to making your celebrations unforgettable. We provide stylish, high-quality photo booth rentals for weddings, corporate events, birthdays, proms, graduations, and more, bringing fun, personality, and lasting memories to every occasion.</p>

          <p className="mb-6">Our fully customizable booths include personalized photo designs, themed props, instant high-quality prints, and easy digital sharing for guests. From start to finish, we focus on creating a seamless, joy-filled experience that captures the moments you&rsquo;ll want to remember long after the event ends.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="/book" className="btn btn-primary">Book Your Booth</a>
          <a href="/availability" className="btn btn-accent">Check Availability</a>
        </div>
        <p className="mt-3 text-sm text-base-content/60">
          Prefer to chat? <a href="tel:+18646253580" className="link link-primary">Call or text us</a>.
        </p>
      </div>


    </>
  )
}
