import React from "react";
import Link from "next/link";

export default function Footer(): React.JSX.Element {
  return (
    <>
      <div className="bg-black text-white py-10 text-base">
        <div className="max-w-screen-lg lg:mx-auto md:mx-auto sm:mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex-row md:items-center mb-5 md:mb-0 mx-auto">
            <p className="font-semibold mb-5 border-b text-center inline-block">
              Steven
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="/about-page">A propos de moi</Link>
              </li>
              <li>
                <Link href="/contact-page">Me contacter</Link>
              </li>
            </ul>
          </div>
          <div className="flex-row md:mb-0 mx-auto">
            <p className="font-semibold mb-3 border-b text-center inline-block">
              Lien
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="https://github.com/stevenzab" target="_blank" rel="noopener noreferrer">Github</Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/stevenzab/" target="_blank" rel="noopener noreferrer">Linkedin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
