"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { resolve } from "styled-jsx/css";

export default function Contact() {
  const route = useRouter();
  const [isFilled, setisFilled] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const { name, email, subject, message } = formData;
    const allValid = [name, email, subject, message].every(
      (val) => val.trim() !== ""
    );
    setisFilled(allValid);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    if(!isFilled || isLoading) return;
    e.preventDefault();
    setisLoading(true);
    setisFilled(false);
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    route.push("/success");
  };

  return (
    <section className="bg-black min-h-screen">
      <Navbar />
      <div className="min-h-screen w-full bg-black flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8 font-['Aalto']">
        {/* Title - Responsive sizing */}
        <h1 className="text-7xl lg:text-8xl xl:text-9xl text-white mb-8 sm:mb-12 text-center">
          Contact Me
        </h1>

        {/* Form Container */}
        <div className="w-full max-w-6xl">
          <div className="w-full border-2 border-white rounded-2xl p-6 sm:p-8 lg:p-12">
            {/* Form Grid - Responsive layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
              {/* Name Field */}
              <div className="space-y-3">
                <label
                  htmlFor="name"
                  className="block text-5xl lg:text-6xl text-white"
                >
                  name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full text-white border-2 border-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-3xl lg:text-5xl tracking-widest focus:outline-none transition-colors"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-3">
                <label
                  htmlFor="email"
                  className="block text-5xl lg:text-6xl text-white"
                >
                  email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full text-white border-2 border-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-3xl lg:text-5xl tracking-widest focus:outline-none transition-colors"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-3">
                <label
                  htmlFor="phone"
                  className="block text-5xl lg:text-6xl text-white"
                >
                  phone number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full text-white border-2 border-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-3xl lg:text-5xl tracking-widest focus:outline-none transition-colors"
                />
              </div>

              {/* Subject Field */}
              <div className="space-y-3">
                <label
                  htmlFor="subject"
                  className="block text-5xl lg:text-6xl text-white"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-2 bg-black border-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-[1.9rem] lg:text-[2.5rem] focus:outline-none transition-colors appearance-none cursor-pointer text-white tracking-wider"
                >
                  <option value="" disabled>
                    select your subject
                  </option>
                  <option value="build">building a website</option>
                  <option value="collaboration">
                    collaboration opportunities
                  </option>
                  <option value="freelance">freelance inquiry</option>
                  <option value="sayinghello">just saying hi! 👋</option>
                </select>
              </div>
            </div>

            {/* Message Field - Full width */}
            <div className="space-y-3 mb-8">
              <label
                htmlFor="message"
                className="block text-5xl lg:text-6xl text-white"
              >
                message
              </label>
              <textarea
                id="message"
                name="message"
                rows={7}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border-2 border-white text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-3xl lg:text-5xl tracking-wider focus:outline-none transition-colors resize-vertical"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                disabled={!isFilled || isLoading}
                type="submit"
                onClick={handleSubmit}
                className={`bg-white text-black px-8 sm:px-12 py-3 sm:py-4 rounded-xl text-5xl lg:text-7xl font-bold hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105 active:scale-95 w-full tracking-wider hover:cursor-none ${
                  isFilled || isLoading
                    ? "hover:scale-105 active:scale-95"
                    : "opacity-50 cursor-not-allowed"
                }`}
              >
                {}
                {isLoading ? "sending..." : isFilled ? "submit" : "complete the form please!"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
