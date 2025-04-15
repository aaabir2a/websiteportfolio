"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageIcon, Video, MusicIcon, Images } from "lucide-react";

type WorkCategory = "all" | "photo" | "gallery" | "video" | "music" | "design";

interface Work {
  id: number;
  title: string;
  category: WorkCategory;
  image: string;
  link: string;
  icon: React.ReactNode;
}

export default function Works() {
  const [filter, setFilter] = useState<WorkCategory>("all");

  const works: Work[] = [
    {
      id: 1,
      title: "Motorcycle Helmet",
      category: "photo",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      icon: <ImageIcon size={20} />,
    },
    {
      id: 2,
      title: "Minimalism Shapes",
      category: "video",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://vimeo.com/97102654",
      icon: <Video size={20} />,
    },
    {
      id: 3,
      title: "Staircase",
      category: "music",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      icon: <MusicIcon size={20} />,
    },
    {
      id: 4,
      title: "Mobile Application",
      category: "design",
      image: "/placeholder.svg?height=300&width=400",
      link: "#popup-1",
      icon: <Images size={20} />,
    },
    {
      id: 5,
      title: "Gereal Travels",
      category: "gallery",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      icon: <Images size={20} />,
    },
    {
      id: 6,
      title: "Daylight Entrance",
      category: "music",
      image: "/placeholder.svg?height=300&width=400",
      link: "#",
      icon: <MusicIcon size={20} />,
    },
    {
      id: 7,
      title: "Architecture",
      category: "video",
      image: "/placeholder.svg?height=300&width=400",
      link: "https://vimeo.com/97102654",
      icon: <Video size={20} />,
    },
    {
      id: 8,
      title: "Social Website",
      category: "design",
      image: "/placeholder.svg?height=300&width=400",
      link: "#popup-2",
      icon: <Images size={20} />,
    },
  ];

  const filteredWorks =
    filter === "all" ? works : works.filter((work) => work.category === filter);

  return (
    <div className="card-inner bg-white py-16" id="works-card">
      <div className="card-wrap max-w-6xl mx-auto px-4">
        <div className="content works">
          <h2 className="section-title">Recent Works</h2>

          {/* Filters */}
          <div className="filter-menu flex flex-wrap gap-2 mb-8">
            <button
              className={`px-4 py-2 rounded-full text-sm ${
                filter === "all"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm ${
                filter === "photo"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setFilter("photo")}
            >
              Image
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm ${
                filter === "gallery"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setFilter("gallery")}
            >
              Gallery
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm ${
                filter === "video"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setFilter("video")}
            >
              Video
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm ${
                filter === "music"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setFilter("music")}
            >
              Music
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm ${
                filter === "design"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setFilter("design")}
            >
              Content
            </button>
          </div>

          {/* Works Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorks.map((work) => (
              <div key={work.id} className="work-item">
                <div className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Link
                    href={work.link}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="text-white p-2 rounded-full bg-primary">
                      {work.icon}
                    </span>
                  </Link>
                </div>
                <div className="mt-4">
                  <Link
                    href={work.link}
                    className="text-lg font-medium hover:text-primary"
                  >
                    {work.title}
                  </Link>
                  <div className="text-sm text-gray-500 capitalize">
                    {work.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
