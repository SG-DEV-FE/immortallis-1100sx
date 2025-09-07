export default function Gallery() {
  const projects = [
    {
      id: 1,
      title: "Appreciate Group - Park Christmas Savings",
      description: "Front-end development for getpark.co.uk using Java, HTML5, CSS & JavaScript. Focused on mobile responsiveness and accessibility.",
      image: "https://res.cloudinary.com/stegault/image/upload/f_auto,q_auto:eco/v1601114883/company-site/Appreciate_Group_Plc.png",
      technologies: ["Java", "HTML5", "CSS3", "JavaScript", "Google Optimize"],
      link: "https://www.getpark.co.uk",
      category: "Commercial"
    },
    {
      id: 2,
      title: "D2i Systems Website",
      description: "Complete website rebuild and rebrand including custom graphics, video content, and marketing collateral design.",
      image: "https://res.cloudinary.com/stegault/image/upload/f_auto,q_auto:eco/v1560094277/company-site/d2i-site_dp4vmg.png",
      technologies: ["Umbraco", "Visual Studio", ".NET", "Adobe Creative Suite"],
      link: "https://www.d2isystems.com",
      category: "Commercial"
    },
    {
      id: 3,
      title: "Trelleborg Marine Solutions",
      description: "React and Angular development for SPM2 and Fleet software solutions in the marine infrastructure sector.",
      image: "https://res.cloudinary.com/stegault/image/upload/f_auto,q_auto:eco/v1573213740/company-site/trelleborg-site.png",
      technologies: ["React", "Angular", "HTML5", "CSS3", "JavaScript ES6"],
      link: "https://www.trelleborg.com/en/marine-and-infrastructure",
      category: "Enterprise"
    },
    {
      id: 4,
      title: "Destination2 Travel Platform",
      description: "Full-stack development for travel booking platform with custom Google Maps integration and responsive design.",
      image: "https://res.cloudinary.com/stegault/image/upload/f_auto,q_auto:eco/v1560094278/company-site/d2-site_dyzutn.png",
      technologies: ["MVC", "jQuery", "CSS3", "Google Maps API", "SQL"],
      link: "https://www.destination2.co.uk",
      category: "Travel"
    },
    {
      id: 5,
      title: "Holiday Gems",
      description: "Frontend development and navigation redesign for holiday booking platform with cross-device compatibility.",
      image: "https://res.cloudinary.com/stegault/image/upload/f_auto,q_auto:eco/v1560094277/company-site/gems-site_oelbgr.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      link: "https://www.holidaygems.co.uk",
      category: "Travel"
    },
    {
      id: 6,
      title: "InstaSmile Platform",
      description: "Senior developer role working with React and Bootstrap for dental technology platform.",
      image: "https://res.cloudinary.com/stegault/image/upload/f_auto,q_auto:eco/v1590676107/company-site/instasmile.png",
      technologies: ["React", "Bootstrap", "GitLab", "TeamCity"],
      link: "https://uk.instasmile.com/",
      category: "Healthcare"
    }
  ];

  const categories = ["All", "Commercial", "Enterprise", "Travel", "Healthcare"];

  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-accessible-light mb-4">
            Project Gallery
          </h1>
          <p className="text-xl text-accessible-secondary max-w-3xl mx-auto">
            A showcase of professional projects spanning various industries, 
            from enterprise software to consumer-facing web applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 bg-warm-800/30 backdrop-blur-sm border border-amber-500/30 
                       rounded-full text-accessible-light hover:bg-amber-500/20 hover:border-amber-400
                       transition-all duration-300 hover:scale-105"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="glass-card overflow-hidden hover:scale-105 transition-transform duration-300">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-amber-500/80 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-accessible-light mb-3">
                  {project.title}
                </h3>
                <p className="text-accessible-secondary text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-warm-700/50 text-accessible-accent text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-warm-700/50 text-accessible-accent text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Project Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 
                           text-white rounded-lg hover:from-amber-600 hover:to-orange-600 
                           transition-all duration-300 text-sm font-medium"
                >
                  View Project
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-accessible-light mb-4">
              Interested in collaborating?
            </h2>
            <p className="text-accessible-secondary mb-6">
              I am always open to discussing new opportunities and exciting projects.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 
                       text-white rounded-lg hover:from-amber-600 hover:to-orange-600 
                       transition-all duration-300 font-medium"
            >
              Get In Touch
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
