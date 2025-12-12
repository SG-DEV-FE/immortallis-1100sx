import employmentData from "../../data/employment.json";
import educationData from "../../data/education.json";
import testimonialData from "../../data/Testimonial.json";
import Image from "next/image";

export default function Career() {
  const { Employment } = employmentData;
  const { Education } = educationData;
  const { Testimonials } = testimonialData;

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-accessible-light mb-4">
            Career Journey
          </h1>
          <p className="text-xl text-amber-900 max-w-3xl mx-auto">
            From PlayStation game testing to senior frontend development - a
            progression through technology spans over a decade of learning and
            growth.
          </p>
        </div>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-accessible-light mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Professional Experience
          </h2>
          <div className="space-y-8">
            {Employment.map((job) => (
              <div
                key={job.id}
                className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Company Logo and Info */}
                  <div className="flex items-center space-x-4 lg:w-80 flex-shrink-0">
                    <Image
                      src={job.companyLogo}
                      alt={job.employerName}
                      className="w-16 h-16 object-contain rounded-lg bg-white/10 p-2"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-accessible-light">
                        {job.employerName}
                      </h3>
                      <a
                        href={job.companyURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accessible-accent hover:text-accessible-accent text-sm transition-colors"
                      >
                        Visit Company →
                      </a>
                    </div>
                  </div>

                  {/* Role Details */}
                  <div className="flex-1">
                    {job.roles.map((role) => (
                      <div key={role.id}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                          <h4 className="text-lg font-semibold text-accessible-light">
                            {role.title}
                          </h4>
                          <span className="text-accessible-muted text-sm">
                            {formatDate(role.startDate)} -{" "}
                            {formatDate(role.endDate)}
                          </span>
                        </div>
                        <p className="text-amber-900 mb-4 leading-relaxed">
                          {role.description}
                        </p>
                        <div className="flex items-center text-sm text-accessible-muted">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {role.location}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="my-16 ">
          <h2 className="text-3xl font-bold text-accessible-light mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Education & Qualifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Education.map((edu) => (
              <div
                key={edu.id}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start space-x-4">
                  {edu.institutionLogo && (
                    <img
                      src={edu.institutionLogo}
                      alt={edu.institutionName}
                      className="w-12 h-12 object-contain rounded-lg bg-white/10 p-1 flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-accessible-light mb-2">
                      {edu.institutionName}
                    </h3>
                    <h4 className="text-accessible-light font-medium mb-1">
                      {edu.courseStudied}
                    </h4>
                    <p className="text-amber-900 text-sm mb-2">
                      {edu.gradeAchieved}
                    </p>
                    <span className="text-accessible-muted text-sm">
                      {edu.yearCompleted}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-accessible-light mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            What Colleagues Say
          </h2>
          <div className="space-y-8">
            {Testimonials.map((testimonial) => (
              <div key={testimonial.id} className="glass-card p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-center space-x-4 lg:w-80 flex-shrink-0">
                    <img
                      src={testimonial.testimonialAvatar}
                      alt={testimonial.imageAlt}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-accessible-light">
                        {testimonial.imageAlt}
                      </h3>
                      <a
                        href={testimonial.companyURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accessible-accent hover:text-accessible-accent text-sm transition-colors"
                      >
                        {testimonial.companyName}
                      </a>
                    </div>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-amber-900 italic leading-relaxed">
                      &quot;{testimonial.testimonialContent}&quot;
                    </blockquote>
                    <div className="mt-4">
                      <a
                        href={testimonial.testimonialSource}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accessible-accent hover:text-accessible-accent text-sm transition-colors"
                      >
                        View on LinkedIn →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Career Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-accessible-light mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Career Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <h3 className="text-xl font-bold text-accessible-light mb-2">
                Years Experience
              </h3>
              <p className="text-amber-900 text-sm">
                Over a decade of professional software development experience
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <h3 className="text-xl font-bold text-accessible-light mb-2">
                Projects Delivered
              </h3>
              <p className="text-amber-900 text-sm">
                Successfully completed projects across multiple industries
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">15+</span>
              </div>
              <h3 className="text-xl font-bold text-accessible-light mb-2">
                Technologies Mastered
              </h3>
              <p className="text-amber-900 text-sm">
                Expertise across frontend, backend, and design technologies
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
