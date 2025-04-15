import {
  Briefcase,
  GraduationCap,
  PaintbrushIcon as PaintBrush,
  Flag,
  Code,
  List,
} from "lucide-react";

export default function Resume() {
  return (
    <div className="card-inner bg-gray-50 py-16" id="resume-card">
      <div className="card-wrap max-w-6xl mx-auto px-4">
        {/* Resume */}
        <div className="content resume mb-16">
          <h2 className="section-title">Resume</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience */}
            <div>
              <div className="resume-title flex items-center mb-6">
                <Briefcase size={20} className="mr-2 text-primary" />
                <h3 className="text-xl font-medium">Experience</h3>
              </div>

              <div className="resume-items space-y-8">
                <div className="resume-item border-l-2 border-primary pl-6 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <div className="text-sm text-gray-500 mb-1">
                    2013 - Present
                  </div>
                  <h4 className="text-lg font-medium mb-1">Art Director</h4>
                  <div className="text-gray-600 mb-2">Facebook Inc.</div>
                  <p className="text-gray-600">
                    Collaborate with creative and development teams on the
                    execution of ideas.
                  </p>
                </div>

                <div className="resume-item border-l-2 border-gray-200 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px] top-1"></div>
                  <div className="text-sm text-gray-500 mb-1">2011 - 2012</div>
                  <h4 className="text-lg font-medium mb-1">
                    Front-end Developer
                  </h4>
                  <div className="text-gray-600 mb-2">Google Inc.</div>
                  <p className="text-gray-600">
                    Monitored technical aspects of the front-end delivery for
                    several projects.
                  </p>
                </div>

                <div className="resume-item border-l-2 border-gray-200 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px] top-1"></div>
                  <div className="text-sm text-gray-500 mb-1">2009 - 2010</div>
                  <h4 className="text-lg font-medium mb-1">Senior Developer</h4>
                  <div className="text-gray-600 mb-2">Abc Inc.</div>
                  <p className="text-gray-600">
                    Optimize website performance using latest technology.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="resume-title flex items-center mb-6">
                <GraduationCap size={20} className="mr-2 text-primary" />
                <h3 className="text-xl font-medium">Education</h3>
              </div>

              <div className="resume-items space-y-8">
                <div className="resume-item border-l-2 border-gray-200 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px] top-1"></div>
                  <div className="text-sm text-gray-500 mb-1">2006 - 2008</div>
                  <h4 className="text-lg font-medium mb-1">Art University</h4>
                  <div className="text-gray-600 mb-2">New York</div>
                  <p className="text-gray-600">
                    Bachelor's Degree in Computer Science ABC Technical
                    Institute, Jefferson, Missouri
                  </p>
                </div>

                <div className="resume-item border-l-2 border-gray-200 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px] top-1"></div>
                  <div className="text-sm text-gray-500 mb-1">2005 - 2006</div>
                  <h4 className="text-lg font-medium mb-1">
                    Programming Course
                  </h4>
                  <div className="text-gray-600 mb-2">Paris</div>
                  <p className="text-gray-600">
                    Coursework - Git, WordPress, Javascript, iOS, Android.
                  </p>
                </div>

                <div className="resume-item border-l-2 border-gray-200 pl-6 relative">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[7px] top-1"></div>
                  <div className="text-sm text-gray-500 mb-1">2004 - 2005</div>
                  <h4 className="text-lg font-medium mb-1">
                    Web Design Course
                  </h4>
                  <div className="text-gray-600 mb-2">London</div>
                  <p className="text-gray-600">
                    Converted Photoshop layouts to web pages using HTML, CSS,
                    and JavaScript
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="content skills mb-16">
          <h2 className="section-title">My Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Design Skills */}
            <div>
              <div className="skill-title flex items-center mb-6">
                <PaintBrush size={20} className="mr-2 text-primary" />
                <h3 className="text-xl font-medium">Design</h3>
              </div>

              <div className="skills-list space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Web Design</span>
                    <span className="text-gray-500">90%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Write Music</span>
                    <span className="text-gray-500">65%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Photoshop</span>
                    <span className="text-gray-500">75%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Graphic Design</span>
                    <span className="text-gray-500">85%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages Skills */}
            <div>
              <div className="skill-title flex items-center mb-6">
                <Flag size={20} className="mr-2 text-primary" />
                <h3 className="text-xl font-medium">Languages</h3>
              </div>

              <div className="skills-list space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">English</span>
                    <span className="text-gray-500">90%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">German</span>
                    <span className="text-gray-500">60%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">Italian</span>
                    <span className="text-gray-500">30%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "30%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700">French</span>
                    <span className="text-gray-500">70%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-bar-fill"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coding Skills */}
            <div>
              <div className="skill-title flex items-center mb-6">
                <Code size={20} className="mr-2 text-primary" />
                <h3 className="text-xl font-medium">Coding</h3>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-primary mb-4">
                    <span className="text-lg font-medium">90%</span>
                  </div>
                  <div className="text-gray-700">WordPress</div>
                </div>

                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-primary mb-4">
                    <span className="text-lg font-medium">75%</span>
                  </div>
                  <div className="text-gray-700">PHP / MySQL</div>
                </div>

                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-primary mb-4">
                    <span className="text-lg font-medium">85%</span>
                  </div>
                  <div className="text-gray-700">Angular / JavaScript</div>
                </div>

                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-primary mb-4">
                    <span className="text-lg font-medium">95%</span>
                  </div>
                  <div className="text-gray-700">HTML / CSS</div>
                </div>
              </div>
            </div>

            {/* Knowledge */}
            <div>
              <div className="skill-title flex items-center mb-6">
                <List size={20} className="mr-2 text-primary" />
                <h3 className="text-xl font-medium">Knowledge</h3>
              </div>

              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Website hosting</li>
                <li>iOS and android apps</li>
                <li>Create logo design</li>
                <li>Design for print</li>
                <li>Modern and mobile-ready</li>
                <li>Advertising services include</li>
                <li>Graphics and animations</li>
                <li>Search engine marketing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="content testimonials">
          <h2 className="section-title">Testimonials</h2>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-gray-600 italic mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <img
                  src="/placeholder.svg?height=60&width=60"
                  alt="Helen Floyd"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <div>
                <div className="font-medium">Helen Floyd</div>
                <div className="text-sm text-gray-500">Art Director</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
