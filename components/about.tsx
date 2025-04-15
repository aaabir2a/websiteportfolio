import {
  Code,
  Music,
  BadgePercent,
  Gamepad,
  Battery,
  BatteryFull,
  MusicIcon,
  Trophy,
  Coffee,
  Flag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="card-inner bg-white py-16" id="about-card">
      <div className="card-wrap max-w-6xl mx-auto px-4">
        {/* About Me */}
        <div className="content about mb-16">
          <h2 className="section-title">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="text-box">
                <p className="text-gray-600">
                  I am Ryan Adlard, web designer from USA, California. I have
                  rich experience in web site design and building and
                  customization, also I am good at wordpress. I love to talk
                  with you about our unique.
                </p>
              </div>
            </div>
            <div>
              <div className="info-list">
                <ul className="space-y-2 text-gray-600">
                  <li>
                    <strong className="font-medium">Age . . . . .</strong> 24
                  </li>
                  <li>
                    <strong className="font-medium">Residence . . . . .</strong>{" "}
                    USA
                  </li>
                  <li>
                    <strong className="font-medium">Freelance . . . . .</strong>{" "}
                    Available
                  </li>
                  <li>
                    <strong className="font-medium">Address . . . . .</strong>{" "}
                    California, USA
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="content services mb-16">
          <h2 className="section-title">My Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="service-item">
              <div className="flex items-start">
                <div className="icon mr-4 text-primary">
                  <Code size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Web Development</h3>
                  <p className="text-gray-600">
                    Modern and mobile-ready website that will help you reach all
                    of your marketing.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-item">
              <div className="flex items-start">
                <div className="icon mr-4 text-primary">
                  <Music size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Music Writing</h3>
                  <p className="text-gray-600">
                    Music copying, writing, creating, transcription, arranging
                    and composition services.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-item">
              <div className="flex items-start">
                <div className="icon mr-4 text-primary">
                  <BadgePercent size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Advertising</h3>
                  <p className="text-gray-600">
                    Advertising services include television, radio, print, mail,
                    and web apps.
                  </p>
                </div>
              </div>
            </div>

            <div className="service-item">
              <div className="flex items-start">
                <div className="icon mr-4 text-primary">
                  <Gamepad size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Game Development</h3>
                  <p className="text-gray-600">
                    Developing memorable and unique mobile android, ios and
                    video games.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="content pricing mb-16">
          <h2 className="section-title">Pricing</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="pricing-item border border-gray-100 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="icon mb-4 text-primary">
                <Battery size={32} />
              </div>
              <h3 className="text-xl font-medium mb-4">Basic</h3>
              <div className="amount mb-6">
                <span className="text-3xl font-bold">$22</span>
                <span className="text-gray-500">/hour</span>
              </div>
              <ul className="feature-list space-y-2 mb-8">
                <li className="text-gray-600">Web Development</li>
                <li className="text-gray-600">Advertising</li>
                <li className="text-gray-600">Game Development</li>
                <li className="text-gray-400 line-through">Music Writing</li>
                <li className="text-gray-400 line-through">
                  Photography <strong>new</strong>
                </li>
              </ul>
              <Link href="#" className="btn btn-primary">
                Buy Basic
              </Link>
            </div>

            <div className="pricing-item border border-gray-100 rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300">
              <div className="icon mb-4 text-primary">
                <BatteryFull size={32} />
              </div>
              <h3 className="text-xl font-medium mb-4">Pro</h3>
              <div className="amount mb-6">
                <span className="text-3xl font-bold">$48</span>
                <span className="text-gray-500">/hour</span>
              </div>
              <ul className="feature-list space-y-2 mb-8">
                <li className="text-gray-600">Web Development</li>
                <li className="text-gray-600">Advertising</li>
                <li className="text-gray-600">Game Development</li>
                <li className="text-gray-600">Music Writing</li>
                <li className="text-gray-600">
                  Photography <strong>new</strong>
                </li>
              </ul>
              <Link href="#" className="btn btn-primary">
                Buy Pro
              </Link>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="content fun-facts mb-16">
          <h2 className="section-title">Fun Facts</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="fun-fact-item text-center">
              <div className="icon mb-4 text-primary">
                <MusicIcon size={32} />
              </div>
              <div className="text-gray-600">80 Albums Listened</div>
            </div>

            <div className="fun-fact-item text-center">
              <div className="icon mb-4 text-primary">
                <Trophy size={32} />
              </div>
              <div className="text-gray-600">15 Awards Won</div>
            </div>

            <div className="fun-fact-item text-center">
              <div className="icon mb-4 text-primary">
                <Coffee size={32} />
              </div>
              <div className="text-gray-600">1,000 Cups of Coffee</div>
            </div>

            <div className="fun-fact-item text-center">
              <div className="icon mb-4 text-primary">
                <Flag size={32} />
              </div>
              <div className="text-gray-600">10 Countries Visited</div>
            </div>
          </div>
        </div>

        {/* Clients */}
        <div className="content clients mb-16">
          <h2 className="section-title">Clients</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="client-item">
                <Link
                  href="https://www.google.com"
                  target="_blank"
                  className="block border border-gray-100 p-4 rounded-lg hover:shadow-md transition-all duration-300"
                >
                  <Image
                    src={`/placeholder.svg?height=80&width=160`}
                    alt={`Client ${i}`}
                    width={160}
                    height={80}
                    className="mx-auto"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="content quote">
          <h2 className="section-title">Quote</h2>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-gray-600 italic mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Ryan Adlard"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div>
                <div className="font-medium">Ryan Adlard</div>
                <div className="text-sm text-gray-500">Web Designer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
