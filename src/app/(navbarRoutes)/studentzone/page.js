"use client";

import SubNavigation from "@/app/utils/subNavigation";

export default function StudentZonePage() {

  const studentLinks = [
    { name: "Student Zone", path: "/studentzone" },
    { name: "Student Notice", path: "/studentzone/student-notices" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Student Zone
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            Access academic resources, student services, and campus
            information designed to support students throughout their
            academic journey.
          </p>

        </div>
      </section>

      {/* Student Navigation */}
      <SubNavigation links={studentLinks} />

      {/* Student Services Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Student Services
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              The Student Zone provides access to important academic
              resources including examination schedules, results,
              academic calendars, and learning materials.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our goal is to support students by providing a digital
              platform where they can easily access important
              information related to their academic life.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              Student Facilities
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>✔ Digital Library Access</li>
              <li>✔ Online Examination Updates</li>
              <li>✔ Academic Calendar</li>
              <li>✔ Student Portal</li>
              <li>✔ Course Materials & Downloads</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Student Highlights
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">5000+</h3>
              <p className="text-gray-600">Students</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-600">Clubs & Activities</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">100+</h3>
              <p className="text-gray-600">Workshops</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">90%</h3>
              <p className="text-gray-600">Placement Support</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 text-center px-6">

        <h2 className="text-3xl font-bold mb-4">
          Explore Student Resources
        </h2>

        <p className="mb-6 text-lg">
          Access all academic tools and student services in one place.
        </p>

         <a className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition" href="https://seglko.in8.nopaperforms.com/" target="_blank">
          Go to Student Portal
        </a>

      </section>

    </div>
  );
}