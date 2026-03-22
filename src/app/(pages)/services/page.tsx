import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our photo booth services and packages for your special event.',
}

export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      
      {/* Introduction Section */}
      <section className="mb-12">
        <p className="mb-6">
          Create unforgettable memories with our premium photo booth experiences. 
          Perfect for weddings, corporate events, birthdays, and more.
        </p>
      </section>

      {/* Packages Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Packages</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Silver Package */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-gray-400">Silver Package</h3>
              <p className="text-2xl font-bold my-4 text-gray-400">$1,395</p>
              <ul className="space-y-2">
                <li>✓ 3 Hours of Service</li>
                <li>✓ Unlimited Photos</li>
                <li>✓ Prop Box</li>
                <li>✓ Digital Gallery</li>
                <li>✓ Personalized Photo Strip Design</li>
                <li>✓ Double Photo Prints in Black & White or Color</li>
                <li>✓ Customized Guest Book</li>
                <li>✓ Setup & Teardown</li>
              </ul>
              <div className="card-actions justify-end mt-4">
                <Link href="/book?package=silver" className="btn btn-primary">
                    Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Gold Package */}
          <div className="card bg-base-100 shadow-xl border-2 border-primary">
            <div className="card-body">
              <h3 className="card-title text-yellow-500">Gold Package</h3>
              <p className="text-2xl font-bold my-4 text-yellow-500">$1,595</p>
              <ul className="space-y-2">
                <li>✓ 3 Hours of Service</li>
                <li>✓ Unlimited Photos</li>
                <li>✓ Prop Box</li>
                <li>✓ Digital Gallery</li>
                <li>✓ Personalized Photo Strip Design</li>
                <li>✓ Double Photo Prints in Black & White or Color</li>
                <li>✓ Customized Guest Book</li>
                <li>✓ Setup & Teardown</li>
              </ul>
              <div className="card-actions justify-end mt-4">
                <Link href="/book?package=gold" className="btn btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Emerald Package */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-primary">Emerald Package</h3>
              <p className="text-2xl font-bold my-4 text-primary">$1,795</p>
              <ul className="space-y-2">
                <li>✓ 3 Hours of Service</li>
                <li>✓ Unlimited Photos</li>
                <li>✓ Prop Box</li>
                <li>✓ Digital Gallery</li>
                <li>✓ Personalized Photo Strip Design</li>
                <li>✓ Double Photo Prints in Black & White or Color</li>
                <li>✓ Customized Guest Book</li>
                <li>✓ Setup & Teardown</li>
                <li>✓ Extra Set of Double Prints</li>
                <li>✓ Guest Option to Leave 30 Second Video</li>
                <li>✓ Guest Option to Print Their Favorite 4x6 Photo</li>
              </ul>
              <div className="card-actions justify-end mt-4">
                <Link href="/book?package=emerald" className="btn btn-primary">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Additional Features</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Unique Backdrops</h3>
              <p>Choose from our wide selection of backdrops.</p>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">Prop Box Collection</h3>
              <p>Extensive collection of props to match your event theme, including hats, glasses, and signs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center py-8 bg-base-200 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Package?</h2>
        <p className="mb-6">Contact us to create a package that perfectly fits your event.</p>
        <button className="btn btn-secondary">Book Now</button>
      </section>
    </div>
  )
}