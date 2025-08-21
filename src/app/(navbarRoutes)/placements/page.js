"use client";
import NavigationPages from "@/app/utils/NavigationPages";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Briefcase, IndianRupee } from "lucide-react";
import BeatLoader from "react-spinners/BeatLoader";
import { FaBook } from "react-icons/fa6";

export default function PlacementPage() {
  document.title = "Placements - Saroj Educational Group";
  const [PlacementData, setPlacementData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const sortedData = [...PlacementData].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(PlacementData.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  function convertToIST(date) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  const fetchPlacementrecords = async () => {
    try {
      setLoading(true);
      const url = "/api/placement";
      const response = await axios.get(url);
      const placements = response?.data?.data;
      setPlacementData(placements);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching placement records:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlacementrecords();
  }, []);

  return (
    <>
      <div className=" w-full h-[26vh] md:h-[40vh] lg:h-80 ">
        <img
          src="/PlacementBanner.PNG"
          alt="Placement Banner"
          className="w-full h-full object-fit"
        />
      </div>

      <div>
        <NavigationPages />
      </div>

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <BeatLoader color="#3498db" size={15} />
          </div>
        ) : (
          <>
            {/* Grid Layout for 2 Cards per Row */}
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-6">
      {currentItems.map((placement, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden p-4 gap-4 md:gap-6"
        >
          {/* Student Image */}
          <div className="w-full md:w-2/5 relative h-40 md:h-60">
            <Image
              src={placement.image || "/default-student.jpg"}
              alt={placement.name}
              className="object-cover h-full w-full lg:object-top object-top"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Placement Details */}
          <div className="w-full md:w-3/5 flex flex-col gap-2">
            <h2 className="text-xl md:text-2xl font-bold text-blue-800 underline">
              {placement.name}
            </h2>

            {/* Information Badges */}
            <div className="flex gap-2 flex-wrap mb-2">
              <div className="bg-yellow-200 flex items-center gap-1 px-2 py-1 rounded-md font-semibold text-sm md:text-base">
                <Calendar size={16} /> {convertToIST(placement.createdAt)}
              </div>
              <div className="bg-yellow-200 flex items-center gap-1 px-2 py-1 rounded-md font-semibold text-sm md:text-base">
                <Briefcase size={16} /> {placement.company}
              </div>
              <div className="bg-yellow-200 flex items-center gap-1 px-2 py-1 rounded-md font-semibold text-sm md:text-base">
                <FaBook size={16} /> {placement.course}
              </div>
              <div className="bg-yellow-200 flex items-center gap-1 px-2 py-1 rounded-md font-semibold text-sm md:text-base">
                <IndianRupee size={16} /> {placement.compensation} LPA
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm md:text-base">
              Congratulations! <strong>{placement.name}</strong> has secured a placement at <strong>{placement.company}</strong>!
            </p>

            {/* Compensation */}
            <div className="mt-4 flex items-center justify-center bg-blue-800 text-white font-semibold rounded-md py-2 px-4 shadow-md text-sm md:text-base">
              Package Offer: ₹{placement.compensation} LPA
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-4 w-full col-span-full ">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 md:px-4 md:py-2 mx-1 md:mx-2 bg-blue-500 text-white rounded disabled:opacity-50 text-sm md:text-base"
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 md:px-4 md:py-2 mx-1 md:mx-2 bg-blue-500 text-white rounded disabled:opacity-50 text-sm md:text-base"
        >
          Next
        </button>
      </div>
    </div>

          </>
        )}
      </div>
    </>
  );
}
