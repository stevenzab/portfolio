import React from "react";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

export default function Footer(): React.JSX.Element {
  return (
    <>
      <div className="text-white py-10 text-base bg-slate-950 border-t border-white/10">
        <div className="max-w-screen-lg lg:mx-auto md:mx-auto sm:mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex-row md:items-center mb-5 md:mb-0 mx-auto">
            <p className="font-semibold mb-5 border-b border-white/20 text-center inline-block text-white">
              Steven
            </p>
            <ul className="space-y-3">
              <li>
                <Link href="mailto:zabandithsteven@gmail.com" className="text-slate-300 hover:text-white transition">zabandithsteven@gmail.com</Link>
              </li>
            </ul>
          </div>
          <div className="flex-row md:mb-0 mx-auto">
            <p className="font-semibold mb-3 border-b border-white/20 text-center inline-block text-white">
              Lien
            </p>
            <ul className="space-y-3">
              <li>
                <Github className="inline-block mr-2 text-slate-300" />
                <Link href="https://github.com/stevenzab" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">Github</Link>
              </li>
              <li>
                <Linkedin className="inline-block mr-2 text-slate-300" />
                <Link href="https://www.linkedin.com/in/stevenzab/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">Linkedin</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
