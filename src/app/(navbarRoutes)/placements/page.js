"use client";
import NavigationPages from "@/app/utils/NavigationPages";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Calendar, Briefcase, IndianRupee } from "lucide-react";
import { FaBook } from "react-icons/fa6";
import { BeatLoader } from "react-spinners";

export default function PlacementPage() {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    document.title = "Placements - Saroj Educational Group";
    async function fetchPlacements() {
      try {
        const res = await fetch("/api/placement");
        const data = await res.json();
        if (data.success) {
          const sorted = data.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setPlacements(sorted);
        }
      } catch (err) {
        console.error("Error fetching placements:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPlacements();
  }, []);

  const totalPages = Math.ceil(placements.length / itemsPerPage);
  const currentItems = placements.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  function convertToIST(date) {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  return (
    <>
      <div className="w-full h-[26vh] md:h-[40vh] lg:h-80">
        <img src="/PlacementBanner.PNG" alt="Placement Banner" className="w-full h-full object-cover" />
      </div>

      <NavigationPages />

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        {loading && (
          <div className="flex justify-center py-20">
            <BeatLoader color="#3498db" size={15} />
          </div>
        )}

        {!loading && placements.length === 0 && (
          <p className="text-center text-gray-500 py-20">No placements found.</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-6">
          {currentItems.map((placement) => (
            <div
              key={placement._id}
              className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden p-4 gap-4 md:gap-6"
            >
              <div className="w-full md:w-2/5 relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={placement.image}
                  alt={placement.name}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="w-full md:w-3/5 flex flex-col gap-3">
                <h2 className="text-xl md:text-2xl font-bold text-blue-800 underline">
                  {placement.name}
                </h2>

                <div className="flex flex-wrap gap-2 mb-2">
                  <div className="bg-yellow-200 flex items-center gap-1 px-2 py-1 rounded-md font-semibold text-sm">
                    <Calendar size={16} /> {convertToIST(placement.createdAt)}
                  </div>
                  <div className="bg-yellow-200 flex items-center gap-1 px-2 py-1 rounded-md font-semibold text-sm">
                    <Briefcase size={16} /> {placement.company}
                  </div>
                  <div className="bg-yellow-200 flex items-center gap-1 px-2 py-1 rounded-md font-semibold text-sm">
                    <FaBook size={16} /> {placement.course}
                  </div>
                  <div className="bg-yellow-200 flex items-center gap-1 px-2 py-1 rounded-md font-semibold text-sm">
                    <IndianRupee size={16} /> {placement.compensation} LPA
                  </div>
                </div>

                <p className="text-gray-700 text-sm md:text-base">
                  {placement.name} from {placement.course} secured a campus placement at {placement.company} as {placement.designation}.
                </p>

                <div className="mt-4 flex items-center justify-center bg-blue-800 text-white font-semibold rounded-md py-2 px-4 shadow-md text-sm">
                  Package Offer: ₹{placement.compensation} LPA
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-4 gap-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="text-gray-600">{currentPage} / {totalPages}</span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}
