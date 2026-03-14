"use client";

import SubNavigation from "@/app/utils/subNavigation";

export default function AdmissionPage() {

  const admissionLinks = [
    { name: "Admission", path: "/admission" },
    { name: "Admission-Process", path: "/admission/admission-process" },
    { name: "Eligibility", path: "/admission/eligibility" },
    { name: "Fee Structure", path: "/admission/fees-structure" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold mb-6">
            Admissions 2025
          </h1>

          <p className="text-xl max-w-3xl mx-auto">
            Join Saroj Education Group and start your journey toward
            academic excellence and career success with our diverse programs.
          </p>

        </div>
      </section>

      {/* Admission Navigation */}
      <SubNavigation links={admissionLinks} />

      {/* Admission Overview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Admission Overview
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Saroj Education Group offers admission to undergraduate,
              postgraduate, and diploma programs. Students can apply
              online by filling the application form and completing
              the admission process through the official portal.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Admissions are based on merit and entrance exam scores
              depending on the program selected.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">
              Why Apply at SEG?
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>✔ Quality Education & Modern Infrastructure</li>
              <li>✔ Industry-Oriented Curriculum</li>
              <li>✔ Experienced Faculty</li>
              <li>✔ Internship & Placement Support</li>
              <li>✔ Scholarships for Meritorious Students</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Admission Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6">

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Step 1</h3>
              <p className="text-gray-600">Register Yourself</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Step 2</h3>
              <p className="text-gray-600">Verify Email</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Step 3</h3>
              <p className="text-gray-600">Fill Application Form</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Step 4</h3>
              <p className="text-gray-600">Pay Application Fee</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold mb-2">Step 5</h3>
              <p className="text-gray-600">Submit Application</p>
            </div>

          </div>

        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Documents Required
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-gray-600">

            <ul className="space-y-3">
              <li>✔ Class 10 Marksheet</li>
              <li>✔ Class 12 Marksheet</li>
              <li>✔ Graduation Marksheet (for PG courses)</li>
            </ul>

            <ul className="space-y-3">
              <li>✔ Aadhaar Card</li>
              <li>✔ Passport Size Photographs</li>
              <li>✔ Transfer / Migration Certificate</li>
            </ul>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 text-center px-6">

        <h2 className="text-3xl font-bold mb-4">
          Apply for Admission
        </h2>

        <p className="mb-6 text-lg">
          Start your application today and take the first step
          toward a successful future.
        </p>

        <a className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition" href="https://seglko.in8.nopaperforms.com/" target="_blank">
          Apply Now
        </a>

      </section>

    </div>
  );
}