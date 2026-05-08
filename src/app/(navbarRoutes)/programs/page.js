"use client";

import SubNavigation from "@/app/utils/subNavigation";

export default function ProgramsPage() {

    const programLinks = [
        { name: "Programs", path: "/programs" },
        { name: "BCA", path: "/programs/bachelor-of-computer-application" },
        { name: "BBA", path: "/programs/bachelor-of-business-administration" },
        { name: "B.Tech", path: "/programs/bachelor-of-technology" },
        { name: "MBA", path: "/programs/master-of-business-administration" },
        { name: "MCA", path: "/programs/master-of-computer-application" },
        { name: "M.Tech", path: "/programs/master-of-technology" },
        { name: "Polytechnic", path: "/programs/polytechnic" },
        { name: "B-Pharma", path: "/programs/b-pharma" },
        { name: "D-Pharma", path: "/programs/d-pharma" },
        { name: "M-Pharma", path: "/programs/m-pharma" },

    ];

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20">
                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h1 className="text-5xl font-bold mb-6">
                        Our Academic Programs
                    </h1>

                    <p className="text-xl max-w-3xl mx-auto">
                        Saroj Education Group offers diverse undergraduate and postgraduate
                        programs designed to build strong academic foundations and prepare
                        students for successful careers.
                    </p>

                </div>
            </section>

            {/* Breadcrumb */}
            {/* <NavigationPages /> */}

            {/* Programs Navigation */}
            <SubNavigation links={programLinks} />

            {/* Programs Overview */}
            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Explore Our Programs
                        </h2>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            At Saroj Education Group, we provide industry-oriented programs
                            that combine theoretical learning with practical experience.
                            Our courses are designed to equip students with the knowledge
                            and skills required in today’s competitive world.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            From management and computer applications to engineering and
                            healthcare, our programs help students build successful
                            professional careers.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-indigo-700">
                            Program Benefits
                        </h3>

                        <ul className="space-y-3 text-gray-600">
                            <li>✔ Industry-Relevant Curriculum</li>
                            <li>✔ Experienced Faculty Members</li>
                            <li>✔ Modern Labs & Infrastructure</li>
                            <li>✔ Internship Opportunities</li>
                            <li>✔ Placement Assistance</li>
                            <li>✔ Skill Development Programs</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Programs List */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl font-bold text-gray-800 mb-12">
                        Our Courses
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-2">Diploma</h3>
                            <p className="text-gray-600">Diploma in Engineering & Technical Programs</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-2">BCA</h3>
                            <p className="text-gray-600">Bachelor of Computer Applications</p>
                        </div>


                        <div className="bg-gray-50 p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-2">B.Tech</h3>
                            <p className="text-gray-600">Bachelor of Technology</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-2">BBA</h3>
                            <p className="text-gray-600">Bachelor of Business Administration</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-2">B.Pharm</h3>
                            <p className="text-gray-600">Bachelor of Pharmacy</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-2">D.Pharm</h3>
                            <p className="text-gray-600">Diploma in Pharmacy</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-2">M.Pharm</h3>
                            <p className="text-gray-600">Master of Pharmacy</p>
                        </div>


                        <div className="bg-gray-50 p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-2">MBA</h3>
                            <p className="text-gray-600">Master of Business Administration</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-2">MCA</h3>
                            <p className="text-gray-600">Master of Computer Applications</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl shadow">
                            <h3 className="text-xl font-semibold mb-2">M.Tech</h3>
                            <p className="text-gray-600">Master of Technology</p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Highlights */}
            <section className="py-16 bg-gray-100 px-6">
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-3xl font-bold text-gray-800 mb-12">
                        Program Highlights
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-4xl font-bold text-blue-600 mb-2">10+</h3>
                            <p className="text-gray-600">Courses Offered</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-4xl font-bold text-indigo-600 mb-2">5000+</h3>
                            <p className="text-gray-600">Students Enrolled</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-4xl font-bold text-purple-600 mb-2">100+</h3>
                            <p className="text-gray-600">Expert Faculty</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow">
                            <h3 className="text-4xl font-bold text-pink-600 mb-2">95%</h3>
                            <p className="text-gray-600">Placement Support</p>
                        </div>

                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-indigo-700 text-white py-16 text-center px-6">

                <h2 className="text-3xl font-bold mb-4">
                    Start Your Academic Journey
                </h2>

                <p className="mb-6 text-lg">
                    Join Saroj Education Group and choose the program that shapes your future.
                </p>

                <a className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition" href="https://seglko.in8.nopaperforms.com/" target="_blank">
                    Apply for Admission
                </a>

            </section>

        </div>
    );
}