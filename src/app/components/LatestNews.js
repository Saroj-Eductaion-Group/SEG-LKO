"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function LatestNews() {
  const [items, setItems] = useState([
    "Admissions Open for 2026-27 Session",
    "Saroj Educational Group Launches Its Official Magazine",
    "New Campus Events Coming Soon",
  ]);

  useEffect(() => {
    async function fetchLatest() {
      try {
        const res = await fetch("/api/placement");
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          const sorted = data.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          const placementNews = sorted.slice(0, 4).map(
            (p) => `${p.name} selected at ${p.company} - ${p.compensation} LPA`
          );
          setItems([
            "Admissions Open for 2026-27 Session",
            ...placementNews,
            "Saroj Educational Group Launches Its Official Magazine",
          ]);
        }
      } catch (err) {
        // keep default items on error
      }
    }
    fetchLatest();
  }, []);

  return (
    <div className="w-full fixed bottom-0 z-[600] flex flex-col sm:flex-row items-center">
      <div className="flex-1 w-full overflow-hidden rounded-t-xl shadow-sm">
        <Marquee
          className="bg-red-700 text-white text-sm sm:text-base px-4 py-2"
          speed={50}
          gradient={false}
          pauseOnHover
        >
          <div className="flex items-center whitespace-nowrap">
            {items.map((item, index) => (
              <React.Fragment key={index}>
                <span className="mr-6 sm:mr-10">{item}</span>
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 mr-6 sm:mr-10"></span>
              </React.Fragment>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
