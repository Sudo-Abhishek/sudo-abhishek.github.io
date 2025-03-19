"use client";
import { useEffect, useState } from "react";

export const Header = () => {
  const [selectedNavItem, setSelectedNavItem] = useState<string | null>(
    "home_id"
  );

  useEffect(() => {
    // Select all section elements and navigation items
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("nav .container ul li a");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        console.log("section : ", section);
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        // Check if the middle of the viewport is within the section
        if (
          window.pageYOffset + window.innerHeight / 2 >= sectionTop &&
          window.pageYOffset + window.innerHeight / 2 < sectionBottom
        ) {
          current = section.getAttribute("id") || "";
        }
      });

      // Update the state to reflect the active nav item
      setSelectedNavItem(current);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home_id"
          className={`nav-item ${
            selectedNavItem === "home_id"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Home
        </a>
        <a
          href="#projects_id"
          className={`nav-item ${
            selectedNavItem === "projects_id"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#about_id"
          className={`nav-item ${
            selectedNavItem === "about_id"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          About
        </a>
        <a
          href="#contact_id"
          className={`nav-item ${
            selectedNavItem === "contact_id"
              ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
