"use client";

import employmentData from "../../data/employment.json";
import educationData from "../../data/education.json";
import testimonialData from "../../data/Testimonial.json";
import { CldImage } from "next-cloudinary";
import { MapIcon, StepForward } from "lucide-react";

export default function Career() {
  const { Employment } = employmentData;
  const { Education } = educationData;
  const { Testimonials } = testimonialData;

  // Sort employment by most recent end date first
  const sortedEmployment = [...Employment].sort((a, b) => {
    const aLatestRole = a.roles.reduce((latest, role) => {
      const roleEndDate = role.endDate ? new Date(role.endDate) : new Date();
      const latestDate = latest
        ? new Date(latest.endDate || new Date())
        : new Date(0);
      return roleEndDate > latestDate ? role : latest;
    }, a.roles[0]);

    const bLatestRole = b.roles.reduce((latest, role) => {
      const roleEndDate = role.endDate ? new Date(role.endDate) : new Date();
      const latestDate = latest
        ? new Date(latest.endDate || new Date())
        : new Date(0);
      return roleEndDate > latestDate ? role : latest;
    }, b.roles[0]);

    const aDate = aLatestRole.endDate
      ? new Date(aLatestRole.endDate)
      : new Date();
    const bDate = bLatestRole.endDate
      ? new Date(bLatestRole.endDate)
      : new Date();
    return bDate.getTime() - aDate.getTime();
  });

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  // Calculate career highlights from employment data
  const calculateYearsExperience = () => {
    const allDates = Employment.flatMap((job) =>
      job.roles.map((role) => ({
        start: new Date(role.startDate),
        end: role.endDate ? new Date(role.endDate) : new Date(),
      }))
    );
    const earliest = new Date(
      Math.min(...allDates.map((d) => d.start.getTime()))
    );
    const latest = new Date(Math.max(...allDates.map((d) => d.end.getTime())));
    return Math.floor(
      (latest.getTime() - earliest.getTime()) / (1000 * 60 * 60 * 24 * 365)
    );
  };

  // Extract unique technologies from all descriptions
  const extractTechnologies = () => {
    const techKeywords = [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Angular",
      "Vue",
      "HTML",
      "CSS",
      "SCSS",
      "Sass",
      "Bootstrap",
      "Tailwind",
      "Node.js",
      "PHP",
      "C#",
      ".NET",
      "VB.NET",
      "Python",
      "SQL",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Git",
      "Azure",
      "AWS",
      "Docker",
      "Jenkins",
      "Figma",
      "Photoshop",
      "Illustrator",
      "Premiere",
      "Umbraco",
      "WordPress",
      "SharePoint",
      "Contentful",
      "Babylon.js",
      "Blender",
      "jQuery",
      "MVC",
    ];

    const allDescriptions = Employment.flatMap((job) =>
      job.roles.map((role) => role.description)
    ).join(" ");

    const foundTechs = new Set(
      techKeywords.filter((tech) =>
        allDescriptions.toLowerCase().includes(tech.toLowerCase())
      )
    );

    return foundTechs.size;
  };

  // Count games tested from Sony roles
  const countGamesWorkedOn = () => {
    const sonyRoles = Employment.filter((job) =>
      job.employerName.includes("Sony")
    ).flatMap((job) => job.roles);

    // Count credited and uncredited games mentioned
    const gamesPattern = /credited|uncredited/gi;
    const descriptions = sonyRoles.map((role) => role.description).join(" ");

    // Approximate count based on game mentions (Tearaway, Killzone HD, etc.)
    const gameNames = [
      "Tearaway",
      "Killzone",
      "Ratchet & Clank",
      "Beyond: Two Souls",
      "Minecraft",
      "LittleBigPlanet",
      "Hustle Kings",
      "Travel Bug",
      "DriveClub",
      "Wonderbook",
      "Book of Spells",
      "Walking with Dinosaurs",
      "Sorcery",
      "Book of Potions",
      "Knack",
    ];

    return gameNames.filter((game) => descriptions.includes(game)).length;
  };

  const yearsExperience = calculateYearsExperience();
  const technologiesUsed = extractTechnologies();
  const gamesWorkedOn = countGamesWorkedOn();

  return (
    <main className="min-h-screen pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-amber-900 mb-4">
            Career Journey
          </h1>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            From PlayStation game testing to senior frontend development - a
            progression through technology spans over a decade of learning and
            growth.
          </p>
        </div>

        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 flex items-center">
            <div className="w-2 h-8 bg-linear-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Professional Experience
          </h2>
          <div className="space-y-8">
            {sortedEmployment.map((job, index) => (
              <div
                key={`${job.employerName}-${job.roles[0]?.startDate || index}`}
                className="rounded-sm w-full h-full shadow-lg p-8 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Company Logo and Info */}
                  <div className="flex items-center justify-center space-x-4 lg:w-80 shrink-0">
                    <div>
                      {job.companyLogo ? (
                        <div className="relative w-64 h-64">
                          <CldImage
                            src={job.companyLogo}
                            alt={job.employerName}
                            fill
                            quality={100}
                            format="auto"
                            className="object-contain rounded-lg bg-white/10 p-2"
                          />
                        </div>
                      ) : (
                        <div className="w-32 h-32 flex items-center justify-center rounded-lg bg-amber-100 p-2">
                          <span className="text-amber-900 font-bold text-center text-sm">
                            {job.employerName}
                          </span>
                        </div>
                      )}

                      <a
                        href={job.companyURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 hover:text-amber-900 text-sm transition-colors inline-flex items-center gap-1"
                      >
                        Visit Company Website{" "}
                        <StepForward className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Role Details */}
                  <div className="flex-1">
                    {job.roles.map((role) => (
                      <div key={`${job.employerName}-${role.title}`}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                          <h4 className="text-lg font-semibold text-amber-700">
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
                          <MapIcon className="w-4 h-4 mr-2" />

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
          <h2 className="text-3xl font-bold text-amber-900 mb-8 flex items-center">
            <div className="w-2 h-8 bg-linear-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Education & Qualifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Education.map((edu) => (
              <div
                key={edu.id}
                className="rounded-xs shadow-lg p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start space-x-4">
                  {edu.institutionLogo && (
                    <div className="relative w-16 h-16 shrink-0">
                      <CldImage
                        src={edu.institutionLogo}
                        alt={edu.institutionName}
                        fill
                        quality={100}
                        format="auto"
                        className="object-contain rounded-lg bg-white/10 p-1"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-amber-600 mb-2">
                      {edu.institutionName}
                    </h3>
                    <h4 className="text-amber-600 font-medium mb-1">
                      {edu.courseStudied}
                    </h4>
                    <p className="text-amber-900 text-sm mb-2">
                      {edu.gradeAchieved} {edu.yearCompleted}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-8 flex items-center">
            <div className="w-2 h-8 bg-linear-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            What Colleagues Say
          </h2>
          <div className="space-y-8">
            {Testimonials.map((testimonial) => (
              <div key={testimonial.id} className="rounded-xs shadow-lg p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex items-center space-x-4 lg:w-80 shrink-0">
                    <img
                      src={testimonial.testimonialAvatar}
                      alt={testimonial.imageAlt}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-amber-600">
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
          <h2 className="text-3xl font-bold text-amber-900 mb-8 flex items-center">
            <div className="w-2 h-8 bg-linear-to-b from-amber-400 to-orange-500 mr-4 rounded"></div>
            Career Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[3px_3px_4px_1px_rgba(0,0,0,0.55)]">
                <span className="text-2xl font-bold text-white">
                  {yearsExperience}+
                </span>
              </div>
              <h3 className="text-xl font-bold text-amber-700 mb-2">
                Years Experience
              </h3>
              <p className="text-amber-900 text-sm">
                Professional software development spanning over a decade
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[3px_3px_4px_1px_rgba(0,0,0,0.55)]">
                <span className="text-2xl font-bold text-white">
                  {technologiesUsed}+
                </span>
              </div>
              <h3 className="text-xl font-bold text-amber-700 mb-2">
                Technologies
              </h3>
              <p className="text-amber-900 text-sm">
                Diverse tech stack across frontend, backend, and design tools
              </p>
            </div>
            <div className="p-6 text-center">
              <div className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[3px_3px_4px_1px_rgba(0,0,0,0.55)]">
                <span className="text-2xl font-bold text-white">
                  {gamesWorkedOn}+
                </span>
              </div>
              <h3 className="text-xl font-bold text-amber-700 mb-2">
                PlayStation Games
              </h3>
              <p className="text-amber-900 text-sm">
                AAA titles tested including BAFTA-winning games
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
