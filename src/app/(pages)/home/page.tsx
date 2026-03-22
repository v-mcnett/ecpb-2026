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
              Make your event unforgettable with our premium photo booth rentals.
            </p>
            <Link href="/book" className="btn bg-white text-primary border-white hover:bg-gray-100 hover:text-primary">Book Now</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Vintage-Style Equipment</h2>
            <p>Experience the charm of classic photo booths with our vintage-style equipment.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Custom Props</h2>
            <p>Extensive collection of fun props to make your photos unique.</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
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
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="text-center">
        <TestimonialList /> 
      </section>

      {/* CTA Section */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Make Your Event Memorable?
        </h2>
        <p className="mb-8">
          Contact us today to check availability for your date.
        </p>
        <Link href="/contact" className="btn btn-secondary">Book Now</Link>

      </section>
      
    </div>
  );
}
