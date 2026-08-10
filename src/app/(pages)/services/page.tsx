import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our photo booth services and packages for your special event.',
}

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8">
      <section className="mb-16">
        <div className="mb-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Packages</p>
            <h2 className="text-3xl font-bold">Choose the experience that fits your event</h2>
          </div>
          <p className="text-base-content/70">Every package includes setup, teardown, and a polished guest experience.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="card overflow-hidden bg-base-100 shadow-xl">
            <figure className="relative h-48">
              <Image
                src="/images/events/IMG_4492.jpg"
                alt="A couple enjoying a photo booth experience at their wedding"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-gray-400">Silver Package</h3>
              <p className="my-4 text-2xl font-bold text-gray-400">$1,395</p>
              <ul className="space-y-2 text-sm">
                <li>✓ 3 Hours of Service</li>
                <li>✓ Unlimited Photos</li>
                <li>✓ Prop Box</li>
                <li>✓ Digital Gallery</li>
                <li>✓ Personalized Photo Strip Design</li>
                <li>✓ Customized Guest Book</li>
              </ul>
              <div className="card-actions mt-4 justify-end">
                <Link href="/book?package=silver" className="btn btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          <div className="card overflow-hidden border-2 border-primary bg-base-100 shadow-xl">
            <figure className="relative h-48">
              <Image
                src="/images/events/IMG_4170.jpg"
                alt="A customized guest book with photo strips and messages from guests"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-yellow-500">Gold Package</h3>
              <p className="my-4 text-2xl font-bold text-yellow-500">$1,595</p>
              <ul className="space-y-2 text-sm">
                <li>✓ 3 Hours of Service</li>
                <li>✓ Unlimited Photos</li>
                <li>✓ Prop Box</li>
                <li>✓ Digital Gallery</li>
                <li>✓ Personalized Photo Strip Design</li>
                <li>✓ Customized Guest Book</li>
              </ul>
              <div className="card-actions mt-4 justify-end">
                <Link href="/book?package=gold" className="btn btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          <div className="card overflow-hidden bg-base-100 shadow-xl">
            <figure className="relative h-48">
              <Image
                src="/images/events/IMG_2615.jpg"
                alt="An elegant photo booth moment captured during an event"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-primary">Emerald Package</h3>
              <p className="my-4 text-2xl font-bold text-primary">$1,795</p>
              <ul className="space-y-2 text-sm">
                <li>✓ 3 Hours of Service</li>
                <li>✓ Unlimited Photos</li>
                <li>✓ Prop Box</li>
                <li>✓ Digital Gallery</li>
                <li>✓ Personalized Photo Strip Design</li>
                <li>✓ Guest Option to Leave 30 Second Video</li>
                <li>✓ Extra Set of Double Prints</li>
              </ul>
              <div className="card-actions mt-4 justify-end">
                <Link href="/book?package=emerald" className="btn btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg">
            $395 deposit secures your date. Ask about custom packages or add-on hours.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Why it stands out</p>
          <h2 className="text-3xl font-bold">Every detail is designed to make guests smile</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card overflow-hidden bg-base-100 shadow-xl">
            <figure className="relative h-52">
              <Image
                src="/images/events/cook.jpg"
                alt="A colorful backdrop setup for a photo booth"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Unique Backdrops</h3>
              <p>Choose from a curated selection of backdrops that complement your event theme and style.</p>
            </div>
          </div>
          <div className="card overflow-hidden bg-base-100 shadow-xl">
            <figure className="relative h-52">
              <Image
                src="/images/events/props_v2.jpg"
                alt="A collection of props for guests to use in the photo booth"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Prop Box Collection</h3>
              <p>From hats and glasses to bold signs and themed accessories, our props keep the fun going.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-base-200 p-8 text-center shadow-sm">
        <h2 className="mb-4 text-2xl font-bold">Need a Custom Package?</h2>
        <p className="mb-6">Contact us to create a package that perfectly fits your event.</p>
        <Link href="/contact" className="btn btn-secondary">
          Contact Us
        </Link>
      </section>
    </div>
  )
}