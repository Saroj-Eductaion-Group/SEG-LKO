"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export default function PlacementSection() {
  const planeRef = useRef(null);
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.to(planeRef.current, {
      motionPath: {
        path: [
          { x: -100, y: 20 },
          { x: 300, y: 120 },
          { x: 350, y: 105 },
          { x: 400, y: 95 },
          { x: 450, y: 80 },
          { x: 500, y: 60 },
          { x: 550, y: 50 },
          { x: 670, y: 30 },
        ],
        curviness: 1.2,
        autoRotate: true,
      },
      duration: 5,
      ease: "power2.out",
    });

    async function fetchPlacements() {
      try {
        const res = await fetch("/api/placement");
        const data = await res.json();
        if (data.success) {
          // Sort by newest first, show top 3
          const sorted = data.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setPlacements(sorted.slice(0, 3));
        }
      } catch (err) {
        console.error("Error fetching placements:", err);
      }
    }
    fetchPlacements();
  }, []);

  const hiringPartners = [
    "/Cognizant-Logo.png",
    "/Accenture-logo.png",
    "/Aon-logo.png",
    "/asian-paints-logo.png",
    "/CMCLogo.png",
    "/Google-logo.png",
    "/HDFC-Bank-logo.png",
    "/Microsoft-Logo.png",
    "/niit-logo.png",
    "/tcs-logo.png",
    "/Wipro-logo.png",
  ];

  return (
    <div className="relative w-full">
      <div
        style={{
          backgroundImage: `url(/ourRecruitersBg1.png)`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="ourRecuriters relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl py-7"
            style={{
              WebkitTextStroke: "1px black",
              WebkitTextFillColor: "transparent",
            }}
          >
            Placement & Hiring Partners
          </h1>
          <div className="w-full h-auto lg:flex hidden">
            <div
              ref={planeRef}
              className="absolute left-0 top-1"
              style={{ width: "60px", height: "60px" }}
            >
              <Image src="/paper-plane.png" alt="Paper Plane" width={40} height={40} />
            </div>
          </div>
        </div>

        <div className="py-4">
          <Marquee gradient={true} gradientWidth={10} direction="right">
            {hiringPartners.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={120}
                height={100}
                alt="Hiring partners logos"
                className="rounded mx-4 sm:mx-6 md:mx-10"
              />
            ))}
          </Marquee>
        </div>
      </div>

      <div
        className="w-full"
        style={{
          backgroundImage: `url(/BG1.svg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl py-4"
            style={{
              WebkitTextStroke: "1px black",
              WebkitTextFillColor: "transparent",
            }}
          >
            Recent Placements
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placements.map((placement) => (
              <div
                key={placement._id}
                className="bg-yellow-300 shadow-xl drop-shadow-lg overflow-hidden"
              >
                <div className="relative w-full aspect-square overflow-hidden bg-white">
                  <img
                    src={placement.image}
                    alt={`${placement.name} placement`}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-3 p-4">
                  <h2 className="text-2xl sm:text-3xl">Congratulations!</h2>
                  <div className="flex flex-col gap-1">
                    <p className="text-xl sm:text-2xl text-blue-600">{placement.name}</p>
                    <p className="text-sm sm:text-base text-justify">
                      {placement.name} from {placement.course} secured a campus placement at {placement.company} as {placement.designation}.
                    </p>
                  </div>
                  <div className="bg-blue-800 rounded-md flex flex-col justify-center items-center py-3 px-4">
                    <p className="text-2xl sm:text-3xl md:text-4xl text-white whitespace-nowrap">
                      {placement.compensation} LPA
                    </p>
                    <p className="text-white text-sm sm:text-base text-center">
                      {placement.company}
                    </p>
                  </div>
                  <div>
                    <p>Best Wishes,</p>
                    <p>Saroj Educational Group</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center p-4">
            <Link href="/placements">
              <button
                className="border-none shadow-xl p-2 rounded-md cursor-pointer flex items-center justify-center group space-x-2"
                style={{ background: "linear-gradient(145deg, #e6e0da, #ffffff)" }}
              >
                <span className="relative text-black uppercase text-sm tracking-widest pb-1 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-black after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                  View all Placements
                </span>
                <span className="transition-transform duration-300 transform group-hover:translate-x-1">→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
