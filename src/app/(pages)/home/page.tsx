import Image from 'next/image';
import { Laugh } from 'lucide-react';
import Link from 'next/link';

import TestimonialList from "@/components/testimonials/testimonialList";
import { dancingScript } from '@/app/fonts';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section 
        className="hero min-h-[70vh] bg-base-200 rounded-lg"
        style={{
          backgroundImage: 'url(/images/events/slider_04.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
        <div className="hero-content text-center relative z-10">
          <div className="max-w-md">
            <h1 className={`text-5xl font-bold text-white`}>Capture Your Moments</h1>
            <p className={`text-3xl py-8 text-white ${dancingScript.className}`}>
              Make your event unforgettable with our premium photo booth rentals in Upstate South Carolina.
            </p>
            <Link href="/book" className="btn bg-white text-primary border-white hover:bg-gray-100 hover:text-primary">Check Availability</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="card bg-base-100 shadow-xl overflow-hidden">
          <Image
            src="/images/events/idosodo.jpg"
            alt="Vintage-style photo booth setup"
            width={400}
            height={240}
            className="h-48 w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="card-body">
            <h2 className="card-title">Vintage-Style Equipment</h2>
            <p>Experience the charm of classic photo booths with our vintage-style equipment.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl overflow-hidden">
          <Image
            src="/images/photobooths/propbox_v2.jpg"
            alt="Guests using fun photo booth props"
            width={400}
            height={240}
            className="h-48 w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="card-body">
            <h2 className="card-title">Custom Props</h2>
            <p>Extensive collection of fun props to make your photos unique.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl overflow-hidden">
          <Image
            src="/images/events/IMG_2606.jpg"
            alt="Guests sharing photos from the booth"
            width={400}
            height={240}
            className="h-48 w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="card-body">
            <h2 className="card-title">Instant Sharing</h2>
            <p>Digital delivery and social media integration included.</p>
          </div>
        </div>
      </section>

      {/* Social proof image grid */}
      <section>
        <div className="container mx-auto pb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">Real Moments. Real Smiles. <Laugh className="w-6 h-6" /></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: "/images/events/20130119210452.jpg", alt: "Bride and groom posing with props", width: 290, height: 218 },
               { src: "/images/events/20130825201233.jpg", alt: "Couple posing with props", width: 290, height: 218 },
              { src: "/images/events/20130323194403.jpg", alt: "Friends posing with props", width: 290, height: 218 },
              { src: "/images/events/20130825175713.jpg", alt: "Friends posing with props", width: 290, height: 218 },
         ].map((img) => (
              <div key={img.src} className="relative">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works / CTA Section */}
      <section className="bg-base-200 rounded-2xl p-8 md:p-10 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">How It Works</h2>
          <p className="text-lg text-base-content/70 mb-8">
            Booking your photo booth is simple, fast, and fun. Here’s how it comes together.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <div className="text-4xl font-bold text-primary mb-2">1</div>
                <h3 className="card-title justify-center">Tell Us About Your Event</h3>
                <p>Share your date, location, guest count, and vibe so we can recommend the best setup.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <h3 className="card-title justify-center">We Handle the Details</h3>
                <p>We coordinate delivery, setup, and styling so everything is ready when your guests arrive.</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-md">
              <div className="card-body">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <h3 className="card-title justify-center">Enjoy the Memories</h3>
                <p>Your guests snap, share, and celebrate while we deliver the highlights after the event.</p>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">Ready to Make Your Event Memorable?</h3>
          <p className="mb-8">
            Contact us today to check availability for your date.
          </p>
          <Link href="/contact" className="btn btn-secondary">Check Availability & Pricing</Link>
        </div>
      </section>
      
    </div>
  );
}
