"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Twitter,
  Dribbble,
  Music,
  SquareStackIcon as StackOverflow,
} from "lucide-react";

export default function Profile() {
  const typingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const importTyped = async () => {
        const Typed = (await import("typed.js")).default;

        if (typingRef.current) {
          new Typed(typingRef.current, {
            strings: ["Web Designer", "Developer", "Freelancer"],
            typeSpeed: 80,
            backSpeed: 40,
            loop: true,
          });
        }
      };

      importTyped();
    }
  }, []);

  return (
    <div
      className="card-started min-h-screen flex items-center justify-center bg-gradient-primary relative overflow-hidden"
      id="home-card"
    >
      <ul className="bg-bubbles">
        {[...Array(10)].map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>

      <div className="profile max-w-md mx-auto text-center text-white z-10">
        <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=160&width=160"
            alt="Ryan Adlard"
            width={160}
            height={160}
            className="object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold mb-2">Ryan Adlard</h1>

        <div className="subtitle mb-6">
          <span ref={typingRef}></span>
        </div>

        <div className="social flex justify-center space-x-4 mb-8">
          <Link
            href="https://dribbble.com/"
            target="_blank"
            className="text-white hover:opacity-80"
          >
            <Dribbble size={20} />
            <span className="sr-only">Dribbble</span>
          </Link>
          <Link
            href="https://twitter.com/"
            target="_blank"
            className="text-white hover:opacity-80"
          >
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://github.com/"
            target="_blank"
            className="text-white hover:opacity-80"
          >
            <Github size={20} />
            <span className="sr-only">Github</span>
          </Link>
          <Link
            href="https://www.spotify.com/"
            target="_blank"
            className="text-white hover:opacity-80"
          >
            <Music size={20} />
            <span className="sr-only">Spotify</span>
          </Link>
          <Link
            href="https://stackoverflow.com/"
            target="_blank"
            className="text-white hover:opacity-80"
          >
            <StackOverflow size={20} />
            <span className="sr-only">Stack Overflow</span>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="#" className="btn btn-primary">
            Download CV
          </Link>
          <Link
            href="#contacts-card"
            className="btn bg-white text-primary hover:bg-gray-100"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}
