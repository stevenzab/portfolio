import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import ABOUT from "../assets/about.svg";
import CONTACT from "../assets/contact.svg";
import HOME from "../assets/home.svg";

export default function NavBar() {
  let [open, setOpen] = useState(false);
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  return (
    <>
      <div className="sticky top-0 z-10">
        <div
          className="md:flex md:flex-row w-full md:items-center md:justify-between p-4 bg-slate-950/80 backdrop-blur border-b border-white/10"
        >
          <div className="md:flex items-center">
            <span className="text-2xl cursor-pointer relative md:left-8">
              <Link href="/">
								<label className="text-white font-bold text-lg hover:text-blue-300 transition">Steven ZABANDITH</label>
              </Link>
            </span>

            {!open && (
              <button
                onClick={() => setOpen(!open)}
                className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 mr-5"
                >
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              </button>
            )}

            {open && (
              <button
                className="md:text-3xl absolute right-8 top-6 cursor-pointer md:hidden mr-5"
                onClick={() => setOpen(!open)}
              >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <g clipPath="url(#clip0_712_7983)">
                    <path
                      d="M9 27L27 9M9 9L27 27"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_712_7983">
                      <rect width="36" height="36" rx="9" fill="transparent" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            )}
          </div>
          <div
            className={`md:flex-1 md:flex md:justify-center ${
              open ? "block" : "hidden"
            } md:block`}
          >
            <ul className="md:flex md:flex-row font-semibold">
              <li className="mx-4 my-6 md:my-0">
                <Link
                  href="/"
                  className={`md:text-xl duration-300 flex items-center pb-1 border-b ${
                    isActive("/")
                      ? "text-white border-white/50"
                      : "text-slate-300 border-transparent hover:text-white hover:border-white/30"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src={HOME}
                    alt="IA"
                    width={30}
                    className="mr-2 md:hidden"
                  />
                  Accueil
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link
                  href="/about-page"
                  className={`md:text-xl text-sm duration-300 flex items-center pb-1 border-b ${
                    isActive("/about-page")
                      ? "text-white border-white/50"
                      : "text-slate-300 border-transparent hover:text-white hover:border-white/30"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src={ABOUT}
                    alt="IA"
                    width={30}
                    className="mr-2 md:hidden"
                  />
                  A propos
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link
                  href="/projects"
                  className={`md:text-xl text-sm duration-300 flex items-center pb-1 border-b ${
                    isActive("/projects")
                      ? "text-white border-white/50"
                      : "text-slate-300 border-transparent hover:text-white hover:border-white/30"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src={HOME}
                    alt="Projets"
                    width={30}
                    className="mr-2 md:hidden"
                  />
                  Projets
                </Link>
              </li>
              <li className="mx-4 my-6 md:my-0">
                <Link
                  href="/contact"
                  className={`md:text-xl text-sm duration-300 flex items-center pb-1 border-b ${
                    isActive("/contact")
                      ? "text-white border-white/50"
                      : "text-slate-300 border-transparent hover:text-white hover:border-white/30"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src={CONTACT}
                    alt="Contact"
                    width={30}
                    className="mr-2 md:hidden"
                  />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
