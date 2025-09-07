import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/stegault/image/upload/85004"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-900 mb-6">
              Software Engineer
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-2xl mx-auto">
              Crafting innovative digital solutions with passion, precision, and cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn More About Me
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-amber-600 text-amber-700 hover:bg-amber-600 hover:text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              What I Do
            </h2>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto">
              Transforming ideas into powerful digital experiences through innovative software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Development */}
            <div className="glass-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Frontend Development</h3>
              <p className="text-amber-700">Creating responsive, intuitive user interfaces with modern frameworks</p>
            </div>

            {/* Backend Development */}
            <div className="glass-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Backend Development</h3>
              <p className="text-amber-700">Building robust, scalable server-side applications and APIs</p>
            </div>

            {/* Full Stack Solutions */}
            <div className="glass-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Full Stack Solutions</h3>
              <p className="text-amber-700">End-to-end development from concept to deployment</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
