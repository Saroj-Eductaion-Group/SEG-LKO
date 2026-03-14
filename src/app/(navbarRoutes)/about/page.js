"use client";
import SubNavigation from "@/app/utils/subNavigation";
export default function AboutPage() {
  const aboutLinks = [
  { name: "About", path: "/about" },
  { name: "Chairman Message", path: "/about/chairman-message" },
  { name: "History", path: "/about/history" },
  { name: "Mission Vision", path: "/about/mission-vision" },
  { name: "Why Join", path: "/about/whyjoin" }
];
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Saroj Education Group
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering students with quality education, innovation, and strong
            values to shape the leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* // navigation ......... */}
      <SubNavigation links={aboutLinks} />

      {/* About SEG */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About Saroj Education Group
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Saroj Education Group (SEG) is a premier educational institution
              dedicated to providing high-quality education and fostering
              academic excellence. Our campus offers modern infrastructure,
              experienced faculty, and a dynamic learning environment that
              prepares students for real-world challenges.
            </p>

            <p className="text-gray-600 leading-relaxed">
              At SEG, we believe in nurturing talent, encouraging innovation,
              and building a strong foundation for students to achieve success
              in their careers. Our programs combine theoretical knowledge with
              practical experience to help students grow professionally and
              personally.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-700">
              Why Choose SEG?
            </h3>

            <ul className="space-y-3 text-gray-600">
              <li>✔ Modern Campus Infrastructure</li>
              <li>✔ Experienced & Qualified Faculty</li>
              <li>✔ Industry-Oriented Curriculum</li>
              <li>✔ Well Equipped Labs & Library</li>
              <li>✔ Sports & Cultural Activities</li>
              <li>✔ Placement & Career Support</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="p-8 rounded-xl shadow-md border">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become a leading center of excellence in education that
              nurtures innovation, knowledge, and leadership among students,
              enabling them to contribute positively to society and the global
              community.
            </p>
          </div>

          <div className="p-8 rounded-xl shadow-md border">
            <h3 className="text-2xl font-bold text-indigo-700 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide quality education through modern
              teaching methodologies, practical learning, and continuous
              development programs that prepare students for professional
              success and lifelong learning.
            </p>
          </div>

        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            SEG Highlights
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">36+</h3>
              <p className="text-gray-600">Courses Offered</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-4xl font-bold text-indigo-600 mb-2">5000+</h3>
              <p className="text-gray-600">Students</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-4xl font-bold text-purple-600 mb-2">335+</h3>
              <p className="text-gray-600">Expert Faculty</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-4xl font-bold text-pink-600 mb-2">29+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Journey with SEG
        </h2>

        <p className="mb-6 text-lg">
          Join Saroj Education Group and build a successful future.
        </p>

        <a className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition" href="https://seglko.in8.nopaperforms.com/" target="_blank">
          Apply for Admission
        </a>
        
      </section>

    </div>
  );
}