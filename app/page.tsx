import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

// The homepage's own address, so Google treats eaztrav.com/ (with or without
// tracking codes on the end) as one page
export const metadata: Metadata = {
  alternates: { canonical: 'https://www.eaztrav.com' },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* contact 
      <div className="bg-gray-900 text-gray-300 text-xs px-6 py-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
          <span>📍 Parshvnath Tower, Freeganj, Ujjain, Madhya Pradesh (pin:456010)</span>
          <span>✉️ eazz.trav@gmail.com</span>
          <a href="tel:+919752087904" className="hover:text-white transition">📞 9752087904</a>
          <a href="tel:+918305587779" className="hover:text-white transition">📞 8305587779</a>
        </div>

        */}
      {/* Navbar */}
      <nav className="flex items-center justify-between px-2 py-5 border-b border-gray-100">
         <Link href="/" className="group flex flex-col min-w-max">
          <Image src="/images/logo.png" alt="eazTrav" width={160} height={50} priority />
        </Link>

     

      
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="/about" className="hover:text-gray-900">About</a>
          <a href="/contact" className="hover:text-gray-900">Contact</a>
        </div>
   
{/*}        <a
  href="tel:+919752087904"
  className="bg-gray-900 text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition inline-block"
>
  Book Now
</a>
*/}
<a
  href="tel:+919752087904"
  className="bg-[#173F73] text-white px-5 py-2 rounded-full font-medium hover:opacity-90 transition inline-block"
>
  Book Now
</a>
      </nav>
      

      
            {/* City Selector */}
      <section className="flex flex-col items-center justify-center py-24 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Choose Your City</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <a
            href="/bangalore"
            className="bg-[#173F73] text-white-900 text-xl font-semibold px-16 py-8 rounded-2xl shadow-md hover:opacity-90 transition text-center"
          >
            Bangalore
          </a>
          
          <a
            href="/ujjain"
            className="bg-[#3FA3D1] text-white text-xl font-semibold px-16 py-8 rounded-2xl shadow-md hover:opacity-90 transition text-center"
          >
            Ujjain
          </a>
        </div>
      </section>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-24 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 max-w-3xl leading-tight">
          Cabs &amp; Trips in Ujjain, <span className="text-[#3FA3D1]">Anytime, Anywhere.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Fast, reliable, and affordable cab service at your fingertips. Book in seconds, ride in comfort.
        </p>
      </section>
    </main>
  );
}