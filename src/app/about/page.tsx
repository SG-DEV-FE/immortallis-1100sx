import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            About Me
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Passionate software engineer with a drive for creating innovative solutions and meaningful digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Section */}
          <div className="glass-card p-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-amber-100">
              <Image
                src="https://res.cloudinary.com/stegault/image/upload/c_fill,w_300,h_300,g_face/v1/assets/85004"
                alt="Profile Picture"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-amber-900 mb-2">Software Engineer</h2>
              <p className="text-amber-700 mb-4">Full Stack Developer</p>
              <div className="flex justify-center space-x-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">My Journey</h3>
              <p className="text-amber-700 leading-relaxed">
                With years of experience in software development, I&apos;ve had the privilege of working on diverse projects 
                that span from enterprise applications to innovative startups. My passion lies in transforming complex 
                problems into elegant, user-friendly solutions.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Philosophy</h3>
              <p className="text-amber-700 leading-relaxed">
                I believe in writing clean, maintainable code and creating intuitive user experiences. Every project 
                is an opportunity to learn something new and push the boundaries of what&apos;s possible with technology.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Mission</h3>
              <p className="text-amber-700 leading-relaxed">
                To leverage technology to solve real-world problems and create digital experiences that make a positive 
                impact on users&apos; lives while continuously learning and growing as a developer.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Innovation</h3>
              <p className="text-amber-700">
                Constantly exploring new technologies and approaches to solve problems creatively
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Excellence</h3>
              <p className="text-amber-700">
                Committed to delivering high-quality solutions with attention to detail and best practices
              </p>
            </div>

            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Collaboration</h3>
              <p className="text-amber-700">
                Building strong relationships and working effectively with teams to achieve common goals
              </p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold text-amber-900 text-center mb-8">Fun Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">5+</div>
              <p className="text-amber-700">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
              <p className="text-amber-700">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
              <p className="text-amber-700">Technologies Mastered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">∞</div>
              <p className="text-amber-700">Coffee Consumed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
