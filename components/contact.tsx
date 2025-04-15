"use client";

import type React from "react";

import { useState } from "react";
import { MapPin, Mail, Phone, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="card-inner bg-white py-16" id="contacts-card">
      <div className="card-wrap max-w-6xl mx-auto px-4">
        {/* Contact Info */}
        <div className="content contacts mb-16">
          <h2 className="section-title">Get in Touch</h2>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="h-64 md:h-full bg-gray-200 rounded-lg">
                {/* Map placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <MapPin size={32} />
                  <span className="ml-2">Map goes here</span>
                </div>
              </div>

              <div className="info-list">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin size={20} className="mr-3 text-primary mt-1" />
                    <div>
                      <strong className="font-medium block">Address</strong>
                      <span className="text-gray-600">California, USA</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail size={20} className="mr-3 text-primary mt-1" />
                    <div>
                      <strong className="font-medium block">Email</strong>
                      <span className="text-gray-600">adlard@example.com</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone size={20} className="mr-3 text-primary mt-1" />
                    <div>
                      <strong className="font-medium block">Phone</strong>
                      <span className="text-gray-600">+123 654 78900</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      size={20}
                      className="mr-3 text-green-500 mt-1"
                    />
                    <div>
                      <strong className="font-medium block">Freelance</strong>
                      <span className="text-gray-600">Available</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="content contacts">
          <h2 className="section-title">Contact Form</h2>

          <div className="bg-gray-50 p-6 rounded-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {isSubmitted && (
                  <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                    Thanks, your message is sent successfully.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
