"use client";

import { Header } from "@/sections/Header";
import { useState } from "react";
import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

// Images from the public/assets/formation directory
const courses = [
  {
    image: "/formation/image-1.jpg", // Update these paths to match your image names
  },
  {
    image: "/formation/image-2.jpg",
  },
  {
    image: "/formation/image-3.jpg",
  },
  {
    image: "/formation/image-4.jpg", // Update these paths to match your image names
  },
  {
    image: "/formation/image-5.jpg",
  },
  {
    image: "/formation/image-6.jpg",
  },
  {
    image: "/formation/image-7.jpg",
  },
  {
    image: "/formation/image-8.jpg",
  },
];

const Page = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (selectedCourse === null) {
      setSelectedCourse(index); // Set only if no course is selected
    }
  };

  return (
    <>
      <Header />
      <h2 className="text-center font-bold text-lg mt-5">
        Enregistrement pour la formation
      </h2>
      <div className="container mx-auto">
        <p className="text-center mt-5">
          Merci de prendre un moment pour remplir le formulaire
          d&prime;inscription à notre formation. Votre participation est
          essentielle pour nous permettre de mieux organiser et adapter le
          contenu à vos besoins.
        </p>
        <div className="p-6 space-y-6">
          <form action="#">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 outline-none"
                  placeholder="Apple Imac 27”"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 outline-none"
                  placeholder="Electronics"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 outline-none"
                  placeholder="Electronics"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Numéro de téléphone
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 outline-none"
                  placeholder="Electronics"
                />
              </div>
            </div>
            <div className="mt-20">
              <h2 className="text-xl font-semibold">
                Sélectionnez une formation :
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {courses.map((course, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer relative"
                    onClick={() => handleSelect(index)}
                  >
                    {/* Image */}
                    <img
                      src={course.image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity rounded-lg"></div>

                    {/* Button or Check Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      {selectedCourse === index ? (
                        <div className="bg-white p-2 rounded-lg">
                          <CheckIcon className="h-6 w-6 text-green-500" />
                        </div> // Display check icon if selected
                      ) : (
                        <button
                          className={`bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors ${
                            selectedCourse !== null ? "cursor-not-allowed" : ""
                          }`}
                          disabled={selectedCourse !== null} // Disable further selection after first choice
                        >
                          choisir cette formation
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
