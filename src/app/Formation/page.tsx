import { Header } from "@/sections/Header";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <h2 className="text-center font-bold text-lg mt-5">
        Enregistrement pour la formation
      </h2>
      <div className="container mx-auto">
        <p className="text-center mt-5">
          Merci de prendre un moment pour remplir le formulaire
          d&prime;inscription à notre formation ? Votre participation est
          essentielle pour nous permettre de mieux organiser et adapter le
          contenu à vos besoins. Merci d&prime;avance pour votre coopération !
        </p>
        <div className="p-6 space-y-6">
          <form action="#">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Product Name
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
                  Category
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
                  Category
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
                  Category
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
                Sélèctionnez une formation :
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                <div className="group cursor-pointer relative">
                  <img
                    src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8bmF0dXJlfGVufDB8MHx8fDE2OTQwOTk3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Image 1"
                    className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      View
                    </button>
                  </div>
                </div>

                <div className="group cursor-pointer relative">
                  <img
                    src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8bmF0dXJlfGVufDB8MHx8fDE2OTQwOTk3Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Image 1"
                    className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      View
                    </button>
                  </div>
                </div>

                <div className="group cursor-pointer relative">
                  <img
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Image 1"
                    className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      View
                    </button>
                  </div>
                </div>

                <div className="group cursor-pointer relative">
                  <img
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Image 1"
                    className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      View
                    </button>
                  </div>
                </div>

                <div className="group cursor-pointer relative">
                  <img
                    src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxuYXR1cmV8ZW58MHwwfHx8MTY5NDA5OTcyOXww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Image 1"
                    className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      View
                    </button>
                  </div>
                </div>

                <div className="group cursor-pointer relative">
                  <img
                    src="https://images.unsplash.com/photo-1419133203517-f3b3ed0ba2bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxyaXZlcnxlbnwwfDB8fHwxNjk0MDk5ODgyfDA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Image 1"
                    className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      View
                    </button>
                  </div>
                </div>

                <div className="group cursor-pointer relative">
                  <img
                    src="https://images.unsplash.com/photo-1498855926480-d98e83099315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxyaXZlcnxlbnwwfDB8fHwxNjk0MDk5ODgyfDA&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Image 1"
                    className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      View
                    </button>
                  </div>
                </div>

                <div className="group cursor-pointer relative">
                  <img
                    src="https://images.unsplash.com/photo-1502754400466-c87ff3039da7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8cml2ZXJ8ZW58MHwwfHx8MTY5NDA5OTg4Mnww&ixlib=rb-4.0.3&q=80&w=1080"
                    alt="Image 1"
                    className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center w-full m-5">
          <button
            type="button"
            className="py-2 px-4 w-[400px] bg-slate-800 hover:bg-slate-900 focus:ring-slate-900 outline-none text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none rounded-lg"
          >
            M'enregister
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
