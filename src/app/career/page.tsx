import employmentData from '../../data/employment.json';
import educationData from '../../data/education.json';
import testimonialData from '../../data/Testimonial.json';

export default function Career() {
  const { Employment } = employmentData;
  const { Education } = educationData;
  const { Testimonials } = testimonialData;

  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-100 mb-4">
            Career Journey
          </h1>
          <p className="text-xl text-warm-300 max-w-3xl mx-auto">
            From PlayStation game testing to senior frontend development - 
            a progression through technology that spans over a decade of learning and growth.
          </p>
        </div>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-200 mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Professional Experience
          </h2>
          <div className="space-y-8">
            {Employment.map((job) => (
              <div key={job.id} className="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Company Logo and Info */}
                  <div className="flex items-center space-x-4 lg:w-80 flex-shrink-0">
                    <img 
                      src={job.companyLogo} 
                      alt={job.employerName}
                      className="w-16 h-16 object-contain rounded-lg bg-white/10 p-2"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-amber-100">{job.employerName}</h3>
                      <a 
                        href={job.companyURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:text-amber-300 text-sm transition-colors"
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
                          <h4 className="text-lg font-semibold text-amber-200">{role.title}</h4>
                          <span className="text-warm-400 text-sm">
                            {formatDate(role.startDate)} - {formatDate(role.endDate)}
                          </span>
                        </div>
                        <p className="text-warm-300 mb-4 leading-relaxed">{role.description}</p>
                        <div className="flex items-center text-sm text-warm-400">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-200 mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Education & Qualifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Education.map((edu) => (
              <div key={edu.id} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-start space-x-4">
                  {edu.institutionLogo && (
                    <img 
                      src={edu.institutionLogo} 
                      alt={edu.institutionName}
                      className="w-12 h-12 object-contain rounded-lg bg-white/10 p-1 flex-shrink-0"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-amber-100 mb-2">{edu.institutionName}</h3>
                    <h4 className="text-amber-200 font-medium mb-1">{edu.courseStudied}</h4>
                    <p className="text-warm-300 text-sm mb-2">{edu.gradeAchieved}</p>
                    <span className="text-warm-400 text-sm">{edu.yearCompleted}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-200 mb-8 flex items-center">
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
                      <h3 className="text-lg font-bold text-amber-100">{testimonial.imageAlt}</h3>
                      <a 
                        href={testimonial.companyURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:text-amber-300 text-sm transition-colors"
                      >
                        {testimonial.companyName}
                      </a>
                    </div>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-warm-300 italic leading-relaxed">
                      &quot;{testimonial.testimonialContent}&quot;
                    </blockquote>
                    <div className="mt-4">
                      <a 
                        href={testimonial.testimonialSource}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:text-amber-300 text-sm transition-colors"
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
          <h2 className="text-3xl font-bold text-amber-200 mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Career Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <h3 className="text-xl font-bold text-amber-100 mb-2">Years Experience</h3>
              <p className="text-warm-300 text-sm">
                Over a decade of professional software development experience
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">50+</span>
              </div>
              <h3 className="text-xl font-bold text-amber-100 mb-2">Projects Delivered</h3>
              <p className="text-warm-300 text-sm">
                Successfully completed projects across multiple industries
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">15+</span>
              </div>
              <h3 className="text-xl font-bold text-amber-100 mb-2">Technologies Mastered</h3>
              <p className="text-warm-300 text-sm">
                Expertise across frontend, backend, and design technologies
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
  const experiences = [
    {
      company: "Tech Innovation Inc.",
      position: "Senior Software Engineer",
      duration: "2022 - Present",
      description: "Leading frontend development team, architecting scalable React applications, and mentoring junior developers.",
      technologies: ["React", "TypeScript", "Next.js", "GraphQL", "AWS"],
      achievements: [
        "Improved application performance by 40%",
        "Led migration to TypeScript across 5 major projects",
        "Mentored 8 junior developers"
      ]
    },
    {
      company: "Digital Solutions Corp",
      position: "Full Stack Developer",
      duration: "2020 - 2022",
      description: "Developed end-to-end web applications using modern technologies and collaborated with cross-functional teams.",
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React"],
      achievements: [
        "Built 12+ full-stack applications",
        "Reduced API response time by 60%",
        "Implemented automated testing pipeline"
      ]
    },
    {
      company: "StartupTech",
      position: "Frontend Developer",
      duration: "2019 - 2020",
      description: "Created responsive user interfaces and collaborated closely with designers to implement pixel-perfect designs.",
      technologies: ["Vue.js", "JavaScript", "SCSS", "Webpack", "Firebase"],
      achievements: [
        "Delivered 20+ responsive web components",
        "Improved mobile user experience by 35%",
        "Reduced bundle size by 25%"
      ]
    },
    {
      company: "FreelanceWork",
      position: "Web Developer",
      duration: "2018 - 2019",
      description: "Provided web development services to small businesses and startups, focusing on modern, responsive websites.",
      technologies: ["HTML5", "CSS3", "JavaScript", "WordPress", "PHP"],
      achievements: [
        "Completed 15+ client projects",
        "Achieved 98% client satisfaction rate",
        "Built custom WordPress themes"
      ]
    }
  ];

  const education = [
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      duration: "2014 - 2018",
      gpa: "3.8/4.0",
      highlights: [
        "Software Engineering concentration",
        "Dean&apos;s List for 6 semesters",
        "Computer Science Club President"
      ]
    }
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "React Developer Certification",
    "Scrum Master Certified",
    "Google Cloud Professional"
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            Career Journey
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            A comprehensive overview of my professional experience, education, and continuous learning journey
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="glass-card p-8 hover:transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-amber-900 mb-2">{exp.position}</h3>
                    <h4 className="text-xl text-amber-700 mb-2">{exp.company}</h4>
                    <p className="text-amber-600 font-medium">{exp.duration}</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-amber-700 mb-6 leading-relaxed">{exp.description}</p>
                
                <div>
                  <h5 className="text-lg font-semibold text-amber-900 mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <svg className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-amber-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="glass-card p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">{edu.degree}</h3>
                  <h4 className="text-xl text-amber-700 mb-2">{edu.institution}</h4>
                  <p className="text-amber-600 font-medium">{edu.duration}</p>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full font-semibold">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>
              
              <div>
                <h5 className="text-lg font-semibold text-amber-900 mb-3">Highlights:</h5>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-amber-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">
            Certifications & Training
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="glass-card p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-amber-900">{cert}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Growth */}
        <div className="glass-card p-8">
          <h2 className="text-2xl font-bold text-amber-900 text-center mb-8">
            Career Progression
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">4+</div>
              <p className="text-amber-700 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">4</div>
              <p className="text-amber-700 font-medium">Companies</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-600 mb-2">100+</div>
              <p className="text-amber-700 font-medium">Projects Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
