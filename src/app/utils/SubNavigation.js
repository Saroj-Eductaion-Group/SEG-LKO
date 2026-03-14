"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SubNavigation({links}) {

  const pathname = usePathname();


  return (
    <nav className="text-gray-600 border-b border-[#e1e1e1] h-14 md:h-16 flex justify-center  w-full">

      {/* Scroll container for mobile */}
      <div className="max-w-[1280px] w-full overflow-x-auto flex items-center">

        <ul className="flex items-center px-4 md:px-6 text-xs lg:ml-10 md:text-sm uppercase whitespace-nowrap">

          {links.map((link, index) => {

            const isActive = pathname === link.path;

            return (
              <li key={link.path} className="flex items-center flex-shrink-0">

                <Link
                  href={link.path}
                  className={`hover:text-blue-500 transition ${
                    isActive ? "text-[#e1b671] font-semibold" : ""
                  }`}
                >
                  {link.name}
                </Link>

                {index < links.length - 1 && (
                  <span className="mx-2 md:mx-3 text-gray-400"> &gt; </span>
                )}

              </li>
            );
          })}

        </ul>

      </div>

    </nav>
  );
}