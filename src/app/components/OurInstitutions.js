"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import { MdPersonSearch } from 'react-icons/md';

export default function OurInstitutions() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    async function fetchUpdates() {
      try {
        const res = await fetch("/api/placement-update");
        const data = await res.json();
        if (data.success) {
          setUpdates(data.data);
        }
      } catch (err) {
        console.error("Error fetching placement updates:", err);
      }
    }
    fetchUpdates();
  }, []);

  return (
    <div className="w-full bg-[#fff9f2] py-10 mt-2">
      <div className="max-w-7xl drop-shadow-lg shadow-lg bg-white w-full mx-auto flex flex-col lg:flex-row gap-4 p-4">
        {/* OUR Institutions */}
        <div className="lg:w-1/2 w-full flex flex-col items-center">
          <div className="p-3 flex text-2xl md:text-3xl lg:text-4xl gap-2 md:gap-4 text-center justify-center border-b-2 border-blue-600 w-full text-[#354b87]">
            <HiOutlineBuildingLibrary /> Our Institutions
          </div>

          <div className="w-full md:w-4/5 flex flex-col gap-2 pt-3">
            <div className="pb-2">
              <Link href="/ssitm" className="font-bold text-[#003963] text-lg md:text-xl lg:text-2xl hover:text-blue-600">
                Shivdan Singh Institute of Technology and Management
              </Link>
              <p>College Code: 007</p>
              <p>Approved by AICTE and affiliated to AKTU, Lucknow.</p>
            </div>
            <div className="w-full border border-blue-600" />

            <div className="pb-2">
              <Link href="/sitm" className="font-bold text-[#003963] text-lg md:text-xl lg:text-2xl hover:text-blue-600">
                Saroj Institute of Technology and Management
              </Link>
              <p>College Code: 123</p>
              <p>Approved by AICTE and affiliated to AKTU, Lucknow.</p>
            </div>
            <div className="w-full border border-blue-600" />

            <div className="pb-2">
              <Link href="/scl" className="font-bold text-[#003963] text-lg md:text-xl lg:text-2xl hover:text-blue-600">
                Saroj College of Law
              </Link>
              <p>Approved by Bar Council of India (BCI) and affiliated to Lucknow University.</p>
            </div>
            <div className="w-full border border-blue-600" />

            <div className="pb-2">
              <Link href="/scp" className="font-bold text-[#003963] text-lg md:text-xl lg:text-2xl hover:text-blue-600">
                Saroj College of Pharmacy
              </Link>
              <p>College Code: 2031</p>
              <p>Approved by Pharmacy Council of India and affiliated to AKTU, Lucknow.</p>
            </div>
            <div className="w-full border border-blue-600" />

            <div className="pb-2">
              <Link href="/scep" className="font-bold text-[#003963] text-lg md:text-xl lg:text-2xl hover:text-blue-600">
                Saroj College of Engineering and Polytechnic
              </Link>
              <p>Approved by AICTE and affiliated to AKTU, Lucknow.</p>
            </div>
            <div className="w-full border border-blue-600" />

            <div className="pb-2">
              <Link href="/lip" className="font-bold text-[#003963] text-lg md:text-xl lg:text-2xl hover:text-blue-600">
                Lucknow Institute of Pharmacy
              </Link>
              <p>Approved by PCI and affiliated to AKTU, Lucknow.</p>
            </div>
          </div>
        </div>

        {/* Placement Update */}
        <div className="lg:w-1/2 w-full flex flex-col items-center">
          <div className="p-3 flex text-2xl md:text-3xl lg:text-4xl gap-2 md:gap-4 text-center justify-center border-b-2 border-blue-600 w-full text-[#354b87]">
            <MdPersonSearch /> Placement Update
          </div>

          <div className="w-full md:w-4/5 flex flex-col gap-2 pt-3">
            {updates.length === 0 ? (
              <p className="text-gray-500">No placement updates at the moment.</p>
            ) : (
              updates.map((update) => (
                <div key={update._id}>
                  <p>
                    This is to inform you that{' '}
                    <strong className="text-[#354b87] font-bold text-lg md:text-xl">
                      {update.company}
                    </strong>{' '}
                    is visiting the SEG campus for{' '}
                    <strong className="text-[#354b87] font-bold text-lg md:text-xl">
                      {update.course}
                    </strong>{' '}
                    students.
                  </p>
                  <div className="w-full border border-blue-600 my-2" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
