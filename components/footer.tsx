import React from "react";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

export default function Footer(): React.JSX.Element {
  return (
    <>
      <div className="text-black py-10 text-base" style={{backgroundColor: '#FAF2D9'}}>
        <div className="max-w-screen-lg lg:mx-auto md:mx-auto sm:mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex-row md:items-center mb-5 md:mb-0 mx-auto">
            <p className="font-semibold mb-5 border-b border-black text-center inline-block text-black">
              Steven
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="mailto:zabandithsteven@gmail.com" className="text-black hover:text-gray-600">zabandithsteven@gmail.com</Link>
              </li>
            </ul>
          </div>
          <div className="flex-row md:mb-0 mx-auto">
            <p className="font-semibold mb-3 border-b border-black text-center inline-block text-black">
              Lien
            </p>
            <ul className="space-y-3">
              <li>
                <Github className="inline-block mr-2" />
                <Link href="https://github.com/stevenzab" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">Github</Link>
              </li>
              <li>
                <Linkedin className="inline-block mr-2" />
                <Link href="https://www.linkedin.com/in/stevenzab/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">Linkedin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
