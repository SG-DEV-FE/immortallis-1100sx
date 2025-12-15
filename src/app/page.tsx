"use client";

import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import {
  Lightbulb,
  Zap,
  Users,
  Code,
  MonitorCloud,
  Network,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <CldImage
            src="85004"
            className="object-cover"
            alt="Hero Background"
            fill
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 h-full w-full md:w-176">
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold text-accessible-primary mb-6">
              Stephen Gault
            </h1>
            <h2 className="text-xl md:text-3xl text-white/75 mb-4 max-w-2xl mx-auto">
              Senior Software Engineer
            </h2>
            <p className="text-xl md:text-2xl text-white/75 mb-8 max-w-2xl mx-auto">
              Creating innovative UI /UX experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn More About Me
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-amber-600 text-amber-900 hover:bg-amber-600 hover:text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
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

      <section className="max-w-7xl mt-16 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            About Me
          </h3>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Passionate software engineer with a drive for creating innovative
            solutions and meaningful digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Section */}
          <div className="w-full h-full rounded-sm shadow-lg p-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden ">
              <CldImage
                width={300}
                height={300}
                src="SteveG_gpdiyn"
                alt="Profile Picture"
                className="object-cover w-full h-full"
                crop="fill"
                gravity="face"
              />
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-amber-900 mb-2">
                Software Engineer
              </h4>
              <p className="text-amber-700 mb-4">Full Stack Developer</p>
              <div className="flex justify-center space-x-4 mt-8">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-bounce-high"></div>
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce-high delay-100"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce-high delay-200"></div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-6">
            <div className="w-full h-full rounded-sm shadow-lg p-6">
              <h4 className="text-xl font-semibold text-amber-900 mb-4">
                My Journey
              </h4>
              <p className="text-amber-700 leading-relaxed">
                With years of experience in software development, I&apos;ve had
                the privilege of working on diverse projects that span from
                enterprise applications to innovative startups. My passion lies
                in transforming complex problems into elegant, user-friendly
                solutions.
              </p>
            </div>

            <div className="w-full h-full rounded-sm shadow-lg p-6">
              <h4 className="text-xl font-semibold text-amber-900 mb-4">
                Philosophy
              </h4>
              <p className="text-amber-700 leading-relaxed">
                I believe in writing clean, maintainable code and creating
                intuitive user experiences. Every project is an opportunity to
                learn something new and push the boundaries of what&apos;s
                possible with technology.
              </p>
            </div>

            <div className="w-full h-full rounded-sm shadow-lg p-6">
              <h4 className="text-xl font-semibold text-amber-900 mb-4">
                Mission
              </h4>
              <p className="text-amber-700 leading-relaxed">
                To leverage technology to solve real-world problems and create
                digital experiences that make a positive impact on users&apos;
                lives while continuously learning and growing as a developer.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="w-full h-full p-6 text-center">
              <div className=" w-16 h-16 mx-auto mb-4">
                <div className=" w-16 h-16 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center shadow-[3px_3px_4px_1px_rgba(0,0,0,0.55)]">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Innovation
              </h3>
              <p className="text-amber-700">
                Constantly exploring new technologies and approaches to solve
                problems creatively
              </p>
            </div>

            <div className="w-full h-full p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center shadow-[3px_3px_4px_1px_rgba(0,0,0,0.55)]">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Excellence
              </h3>
              <p className="text-amber-700">
                Committed to delivering high-quality solutions with attention to
                detail and best practices
              </p>
            </div>

            <div className="w-full h-full p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center shadow-[3px_3px_4px_1px_rgba(0,0,0,0.55)]">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Collaboration
              </h3>
              <p className="text-amber-700">
                Building strong relationships and working effectively with teams
                to achieve common goals
              </p>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="w-full h-full rounded-sm shadow-lg p-8">
          <h2 className="text-2xl font-bold text-amber-900 text-center mb-8">
            Fun Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">35+</div>
              <p className="text-amber-700">Years collecting miniatures</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">10</div>
              <p className="text-amber-700">Platinum Tophies PS</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
              <p className="text-amber-700">Tea's consumed daily</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">∞</div>
              <p className="text-amber-700">Sci-Fi / Fantasy knowledge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-accessible-primary mb-4">
              What I Do
            </h2>
            <p className="text-lg text-amber-900 max-w-2xl mx-auto">
              Transforming ideas into powerful digital experiences through
              innovative software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Development */}
            <div className="w-full h-full p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className=" w-16 h-16 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center shadow-[3px_3px_4px_1px_rgba(0,0,0,0.55)]">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-accessible-primary mb-2">
                Frontend Development
              </h3>
              <p className="text-amber-900">
                Creating responsive, intuitive user interfaces with modern
                frameworks
              </p>
            </div>

            {/* Backend Development */}
            <div className="w-full h-full p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className=" w-16 h-16 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center shadow-[3px_3px_4px_1px_rgba(0,0,0,0.55)]">
                <MonitorCloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-accessible-primary mb-2">
                UI / UX Design
              </h3>
              <p className="text-amber-900">
                Designing user-friendly interfaces and engaging user experiences
              </p>
            </div>

            {/* Full Stack Solutions */}
            <div className="w-full h-full p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className=" w-16 h-16 mx-auto mb-4 bg-stone-900 rounded-full flex items-center justify-center shadow-[3px_3px_4px_1px_rgba(0,0,0,0.55)]">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-accessible-primary mb-2">
                Full Stack Solutions
              </h3>
              <p className="text-amber-900">
                End-to-end development from concept to deployment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
