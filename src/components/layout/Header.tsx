import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="navbar bg-base-100 container p-4 md:p-6 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" aria-label="Open menu" className="btn btn-ghost lg:hidden p-4 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-72 text-lg space-y-1">
            <li><Link href="/" className="block py-3 px-4 text-lg">Home</Link></li>
            <li><Link href="/about" className="block py-3 px-4 text-lg">About</Link></li>
            <li><Link href="/services" className="block py-3 px-4 text-lg">Services</Link></li>
            <li><Link href="/gallery" className="block py-3 px-4 text-lg">Gallery</Link></li>
            <li><Link href="/contact" className="block py-3 px-4 text-lg">Contact</Link></li>
          </ul>
        </div>
        <Link href="/" className="flex items-center gap-3 mx-auto lg:mx-0">
          <div className="h-20 md:h-28 lg:h-28 flex items-center">
            <Image
              src="/images/ecpb_logo.webp"
              alt="Emerald City Photo Booth Logo"
              width={1000}
              height={625}
              className="h-full w-auto object-contain"
              priority
              quality={80}
              style={{ height: '100%', width: 'auto' }}
            />
          </div>
          <span className="sr-only">Emerald City Photo Booth</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/book">Booking</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}