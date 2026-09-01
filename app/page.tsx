

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gray-900 text-gray-300 text-xs px-6 py-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
          <span>📍 Parshvnath Tower, Freeganj, Ujjain, Madhya Pradesh (pin:456010)</span>
          <span>✉️ easy.stay.ujjain@gmail.com</span>
          <a href="tel:+919752087904" className="hover:text-white transition">📞 9752087904</a>
          <a href="tel:+918305587779" className="hover:text-white transition">📞 8305587779</a>
        </div>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
         <div>
          <div className="text-2xl font-bold text-gray-900">
          Eaz<span className="text-yellow-500">Trav</span>
          </div>
          <p className="text-xs text-gray-500 tracking-wide">Travel with Eaze</p>
         </div>
        
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
        <button className="bg-gray-900 text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition">
          Book Now
        </button>
      </nav>
      
            {/* City Selector */}
      <section className="flex flex-col items-center justify-center py-24 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Choose Your City</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <a
            href="/Bangalore"
            className="bg-yellow-500 text-gray-900 text-xl font-semibold px-16 py-8 rounded-2xl shadow-md hover:bg-yellow-400 transition text-center"
          >
            Bangalore
          </a>
          
          <a
            href="/Ujjain"
            className="bg-gray-900 text-white text-xl font-semibold px-16 py-8 rounded-2xl shadow-md hover:bg-gray-800 transition text-center"
          >
            Ujjain
          </a>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-24 bg-gradient-to-b from-gray-50 to-white">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 max-w-3xl leading-tight">
          Your Ride, <span className="text-yellow-500">Anytime, Anywhere.</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-xl">
          Fast, reliable, and affordable cab service at your fingertips. Book in seconds, ride in comfort.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
            Book a Ride
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}