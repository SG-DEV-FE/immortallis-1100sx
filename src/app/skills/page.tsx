export default function Skills() {
  const frontendSkills = [
    { name: "React", level: 90, description: "Advanced component development and state management" },
    { name: "TypeScript", level: 85, description: "Strong typing and modern JavaScript features" },
    { name: "Next.js", level: 88, description: "Full-stack React framework with SSR/SSG" },
    { name: "HTML5", level: 95, description: "Semantic markup and accessibility standards" },
    { name: "CSS3", level: 92, description: "Advanced styling, animations, and responsive design" },
    { name: "Tailwind CSS", level: 85, description: "Utility-first CSS framework" },
    { name: "JavaScript (ES6+)", level: 90, description: "Modern JavaScript features and patterns" },
    { name: "Angular", level: 75, description: "Component-based application development" }
  ];

  const backendSkills = [
    { name: "Node.js", level: 80, description: "Server-side JavaScript development" },
    { name: ".NET", level: 75, description: "C# and VB.NET application development" },
    { name: "SQL", level: 85, description: "Database design and stored procedures" },
    { name: "REST APIs", level: 88, description: "RESTful service design and implementation" }
  ];

  const tools = [
    { name: "Git", level: 90, description: "Version control and collaborative development" },
    { name: "Visual Studio Code", level: 95, description: "Primary development environment" },
    { name: "Adobe Creative Suite", level: 80, description: "PhotoShop, Illustrator, Premiere" },
    { name: "Figma", level: 75, description: "UI/UX design and prototyping" },
    { name: "Adobe XD", level: 78, description: "Design and prototyping workflows" }
  ];

  const SkillCard = ({ skill }: { skill: typeof frontendSkills[0] }) => (
    <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-semibold text-amber-100">{skill.name}</h3>
        <span className="text-amber-300 font-bold">{skill.level}%</span>
      </div>
      <div className="w-full bg-warm-800/30 rounded-full h-3 mb-3">
        <div 
          className="bg-gradient-to-r from-amber-400 to-orange-500 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      <p className="text-warm-300 text-sm">{skill.description}</p>
    </div>
  );

  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-100 mb-4">
            Technical Skills
          </h1>
          <p className="text-xl text-warm-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across frontend, backend, 
            and design tools developed through years of professional experience.
          </p>
        </div>

        {/* Frontend Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-200 mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Frontend Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </section>

        {/* Backend Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-200 mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Backend Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {backendSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </section>

        {/* Tools & Software */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-200 mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Tools & Software
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-200 mb-8 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Certifications
          </h2>
          <div className="glass-card p-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">MS</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-amber-100">
                  Microsoft Technology Associate
                </h3>
                <p className="text-warm-300">Software Development Fundamentals</p>
                <p className="text-warm-400 text-sm">Firebrand Training - 2018</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
