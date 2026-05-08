"use client";

import SubNavigation from "@/app/utils/subNavigation";

export default function ResearchPage() {

  const researchLinks = [
    { name: "Research", path: "/research" },
    { name: "Research Projects ", path: "/research/research-projects" },
    { name: "Award Projects", path: "/research/award-projects" },
    { name: "Research Publications", path: "/research/research-publications" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Research & Innovation
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            At Saroj Education Group, research and innovation play a vital
            role in advancing knowledge and developing solutions for
            real-world challenges.
          </p>

        </div>
      </section>


      {/* Research Navigation */}
      <SubNavigation links={researchLinks} />

      {/* Research Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Research at SEG
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Saroj Education Group encourages students and faculty members
              to participate in research activities that promote innovation,
              creativity, and technological advancement.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our research initiatives focus on solving real-world problems
              through interdisciplinary collaboration and modern technology.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">
              Research Focus
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>✔ Artificial Intelligence & Data Science</li>
              <li>✔ Software Development & Cloud Computing</li>
              <li>✔ Pharmaceutical Research</li>
              <li>✔ Healthcare & Medical Technology</li>
              <li>✔ Engineering Innovation</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Research Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
              <p className="text-gray-600">Machine learning and intelligent systems.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Pharmaceutical Research</h3>
              <p className="text-gray-600">Drug development and healthcare innovation.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Software Engineering</h3>
              <p className="text-gray-600">Modern software development technologies.</p>
            </div>

          </div>

        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Research Facilities
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-600">

            <ul className="space-y-3">
              <li>✔ Advanced Computer Labs</li>
              <li>✔ Modern Pharmacy Laboratories</li>
              <li>✔ Digital Library Resources</li>
            </ul>

            <ul className="space-y-3">
              <li>✔ Research Mentorship Programs</li>
              <li>✔ Industry Collaboration</li>
              <li>✔ Innovation & Incubation Support</li>
            </ul>

          </div>

        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Research Highlights
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-4xl font-bold text-purple-600 mb-2">50+</h3>
              <p className="text-gray-600">Research Papers</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">20+</h3>
              <p className="text-gray-600">Active Projects</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">15+</h3>
              <p className="text-gray-600">Industry Collaborations</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-4xl font-bold text-pink-600 mb-2">100+</h3>
              <p className="text-gray-600">Student Researchers</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 text-center px-6">

        <h2 className="text-3xl font-bold mb-4">
          Join Our Research Community
        </h2>

        <p className="mb-6 text-lg">
          Explore research opportunities and collaborate with experts
          to create innovative solutions.
        </p>

        <a className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition" href="https://seglko.in8.nopaperforms.com/" target="_blank">
          Explore Research
        </a>

      </section>

    </div>
  );
}