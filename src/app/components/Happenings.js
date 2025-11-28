"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

const items = [
  
  { id: 1, url: "/eventImg9.jpeg" },
  { id: 2, url: "/HappeningsImage1.jpg" },
  { id: 3, url: "/gallery/industrial-visit1.jpg" },
  { id: 4, url: "/eventImg3.jpeg" },
  { id: 5, url: "/SarojTimesMagazine.JPEG" },
  { id: 6, url: "/gallery/sports-meet-10.jpeg" },
  { id: 7, url: "/eventImg10.jpeg" },
  { id: 8, url: "/eventImg11.jpeg" },
  { id: 9, url: "/eventImg12.jpeg" },
  { id: 10, url: "/eventImg13.jpeg" },
  { id: 11, url: "/eventImg14.jpeg" },
  { id: 12, url: "/eventImg15.jpeg" },
  { id: 13, url: "/eventImg16.jpeg" },
  { id: 14, url: "/eventImg17.jpeg" },
  { id: 15, url: "/eventImg18.jpeg" },
  { id: 16, url: "/eventImg19.jpeg" },
  
  
];

export default function Happenings() {
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      const velocity = 50; // pixels per second
      const moveBy = (velocity * delta) / 1000; // delta is in ms
      x.set(x.get() - moveBy);

      const containerWidth = containerRef.current?.offsetWidth || 0;
      const contentWidth = items.length * 300 * 2; // since doubled (items x 2), each image ~300px

      if (Math.abs(x.get()) >= contentWidth / 2) {
        x.set(0); // loop seamlessly
      }
    }
  });

  return (
    <div>
      <div className="py-7 max-w-7xl mx-auto">
        <h1 className="text-5xl lg:text-6xl font-bold">Happenings</h1>
      </div>

      <div
        className="overflow-hidden w-full relative py-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        ref={containerRef}
      >
        <motion.div
          className="flex space-x-4 will-change-transform"
          style={{ x }}
        >
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="relative group px-2 h-[300px] lg:h-[400px] md:h-[350px] w-[300px] lg:w-[380px] flex-shrink-0"
            >
              <img
                src={item.url}
                alt={`Happenings image ${index + 1}`}
                className="rounded-lg shadow-lg w-full h-full object-fill transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
