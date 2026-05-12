"use client";
import React, { useState, useEffect } from "react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function NewsAndEvents() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [notices, setNotices] = useState([]);
  const [latestPlacement, setLatestPlacement] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const noticeRes = await fetch("/api/notice");
        const noticeData = await noticeRes.json();
        if (noticeData.success) {
          const sorted = noticeData.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setNotices(sorted.slice(0, 4));
        }

        const placementRes = await fetch("/api/placement");
        const placementData = await placementRes.json();
        if (placementData.success && placementData.data.length > 0) {
          const sorted = placementData.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setLatestPlacement(sorted[0]);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-full bg-[#fff9f2]">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 py-2 pt-10">
        {/* Heading */}
        <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 px-6 md:px-0 flex items-center justify-start">
          <div className="absolute inset-0 flex ml-10 sm:ml-20 md:ml-28 justify-center items-center">
            <img src="/NewsSectionHeading.png" width={300} height={20} alt="bg" className="opacity-50 w-[200px] sm:w-[200px] md:w-[280px]" />
          </div>
          <div className="relative font-bold text-black">Updates & Announcements</div>
        </div>

        <div className="p-2 flex flex-col lg:flex-row gap-4 w-full justify-start">
          {/* Left News Section */}
          <div className="w-full lg:w-1/4 h-auto flex flex-col py-4">
            <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-10 items-center justify-center">
              <div className="w-4/5">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  <p>Latest</p>
                  <p className="ml-4 sm:ml-6 md:ml-8">News</p>
                </h1>
              </div>
              <div className="text-justify w-4/5 text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl">
                Stay updated with the latest happenings at Saroj Educational Group! From academic updates to campus developments, we bring you all the important news in one place.
              </div>
            </div>
          </div>

          {/* Middle News Section */}
          <div className="w-full lg:w-2/5 flex justify-center items-center">
            <div className="w-11/12 flex flex-col gap-4 sm:gap-6">
              <div className="bg-black p-2 flex flex-col gap-2 rounded-md">
                <div className="flex gap-2 items-center">
                  <h1 className="text-white text-sm sm:text-base md:text-lg">Placement</h1>
                  <h1 className="w-2 h-2 rounded-full bg-red-500"></h1>
                  <h1 className="text-red-400 text-sm sm:text-base md:text-lg">Latest Update</h1>
                </div>
                <div className="flex flex-row">
                  <div>
                    <p className="text-white text-sm sm:text-base md:text-lg">
                      {latestPlacement
                        ? `${latestPlacement.name} from ${latestPlacement.course} secured placement at ${latestPlacement.company} with ${latestPlacement.compensation} LPA package.`
                        : "Stay tuned for latest placement updates."}
                    </p>
                  </div>
                  <div className="text-white">
                    <GoArrowUpRight className="text-2xl sm:text-3xl text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-black p-2 flex flex-col gap-2 rounded-md">
                <div className="flex gap-2 items-center">
                  <h1 className="text-white text-sm sm:text-base md:text-lg">Admissions</h1>
                  <h1 className="w-2 h-2 rounded-full bg-red-500"></h1>
                  <h1 className="text-red-400 text-sm sm:text-base md:text-lg">2026-27 Session</h1>
                </div>
                <div className="flex flex-row">
                  <div>
                    <p className="text-white text-sm sm:text-base md:text-lg">
                      Admissions are now open for the 2026-27 academic session. Apply now for B.Tech, MBA, BBA, MCA, Pharmacy and Diploma programs.
                    </p>
                  </div>
                  <div className="text-white">
                    <GoArrowUpRight className="text-2xl sm:text-3xl text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Student Notice Board */}
          <div className="w-full lg:w-1/3 h-auto flex flex-col gap-4 bg-white drop-shadow-lg shadow-lg rounded-md">
            <div className="rounded-md text-xl sm:text-2xl md:text-3xl text-center font-bold text-white bg-blue-800 py-2">
              Student Notice Board
            </div>
            <div className="flex justify-center items-center text-green-600 flex-row mx-auto w-11/12">
              <span className="before:content-[''] before:block before:w-32 sm:before:w-40 md:before:w-56 before:h-[1px] before:bg-green-600 before:mr-2"></span>
              <Link href="/studentzone/student-notices" className="flex items-center justify-center text-sm sm:text-base md:text-base">
                Read all Notices<IoIosArrowRoundForward />
              </Link>
            </div>

            <div className="flex flex-col justify-center h-auto gap-4 sm:gap-6 w-full px-2">
              {notices.length === 0 ? (
                <p className="text-center text-gray-400 py-4">No notices available</p>
              ) : (
                notices.map((notice) => (
                  <div key={notice._id} className="flex gap-4 w-[96%]">
                    <div
                      className="w-[30%] h-24 sm:h-32 cursor-pointer flex-shrink-0"
                      onClick={() => setSelectedImage(notice.image)}
                    >
                      <img
                        src={notice.image}
                        className="h-full w-full object-contain rounded-md"
                        alt="Notice"
                      />
                    </div>
                    <div className="w-[70%] flex flex-col gap-2 justify-center">
                      <div className="flex flex-row gap-2 text-gray-500 text-xs sm:text-sm">
                        <h1>{new Date(notice.createdAt).toLocaleDateString("en-IN")}</h1>
                        <h1>-</h1>
                        <h1>Notice</h1>
                      </div>
                      <div>
                        <h1 className="text-sm sm:text-base">{notice.title}</h1>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[5001]">
              <div className="relative bg-white p-4 rounded-lg shadow-lg">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-lg font-bold hover:bg-red-700"
                >
                  ✕
                </button>
                <img src={selectedImage} width={500} height={500} alt="Notice" className="rounded-lg max-w-[90vw] max-h-[80vh] object-contain" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
