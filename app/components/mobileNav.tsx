"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useScroll } from "../context/scroll";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { useMenu } from "../context/menuContext";
export default function MobileNav({}: {}) {
  const {
    scrollToSection,
    aboutRef,
    missionRef,
    projectRef,
    teamRef,
  } = useScroll() as any;

  const { handleOpenMenu ,openMenu } = useMenu();
  const [aniLeft, setAniLeft] = useState<boolean>(false);
  const handleCloseMenu = (section?: any) => {
    if (section) {
      scrollToSection(section);
    }
    setAniLeft(true);
    setTimeout(() => {
      handleOpenMenu();
    }, 1000);
  };
  const segment = useSelectedLayoutSegment();
  return (
    <>
    { openMenu &&
    <nav
      className={`lg:hidden top-0 menu fixed bottom-0 w-[80%] z-[100]  h-full`}>
        <Image alt='Flip In Labs' src='/logo.png' width={98} height={62}  className="absolute top-8 left-6"/>
        <ul className="flex flex-col gap-8 justify-center items-start w-fit mx-auto    ">
          <li
            onClick={() => handleCloseMenu(aboutRef)}
            className={`text-white text-2xl font-bold cursor-pointer
             text-start  bottom-0 overflow-hidden relative mb-2 
              ${aniLeft ? "left-[]" : "left-0"}
            `}
          >
           <span className=" menuli"> About</span>
          </li>
          <li
            onClick={() => handleCloseMenu(missionRef)}
            className={`text-white text-2xl font-bold overflow-hidden cursor-pointer ${
              aniLeft ? "left-[]" : "left-0"
            }`}
          >
            <span className="menuli">Our Mission</span>
          </li>
          <li
            onClick={() => handleCloseMenu(projectRef)}
            className={`text-white text-2xl font-bold overflow-hidden cursor-pointer ${
              aniLeft ? "left-[]" : "left-0"
            }`}
          >
            <span className="menuli">Projects</span>
          </li>
          <li
            onClick={() => handleCloseMenu(teamRef)}
            className={`text-white text-2xl font-bold overflow-hidden cursor-pointer ${
              aniLeft ? "left-[]" : "left-0"
            }`}
          >
            <span className="menuli">Team</span>
          </li>
        </ul>
    
    </nav>
    }
    </>
  );
}
