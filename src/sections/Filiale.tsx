import React from "react";
import ajelConnect from "@/assets/ajel connect secondary.png";
import ajelStore from "@/assets/ajel store secondary.png";
import ajelAcademy from "@/assets/ajel academy secondary.png";
import ajelAnalytics from "@/assets/ajel analytics secondary.png";
import met from "@/assets/met secondary.png";
import qcic from "@/assets/QCIC .png";
import aec from "@/assets/aec.png";
import pearsonEducation from "@/assets/pearson .png";
import osi from "@/assets/osi.png";
import adNova from "@/assets/adnova secondary.png";
import decode from "@/assets/decode secondary.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Filiale = () => {
  return (
    <div className="min-h-screen p-4" id="filiales">
      <div className="container mx-auto pt-12 pb-20">
        <h2 className="font-extrabold text-2xl text-center md:text-[46px] md:leading-[60px] bg-gradient-to-b from-black to-slate-700 text-transparent bg-clip-text mt-5 my-5">
          Nos Filiales
        </h2>
        <p className="text-gray-700 text-lg text-center mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
          amet magna id ex hendrerit semper.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={adNova} alt="ad nova" height={50} />
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet magna id ex hendrerit semper.Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={aec} alt="aec" height={50} />
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet magna id ex hendrerit semper.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={ajelAcademy} alt="ajel academy" height={50} />
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet magna id ex hendrerit semper.Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={ajelAnalytics} alt="ajel analytics" height={50} />
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet magna id ex hendrerit semper.Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={ajelConnect} alt="ajel connect" height={50} />
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet magna id ex hendrerit semper.Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={ajelStore} alt="ajel store" height={50} />
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet magna id ex hendrerit semper.Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={decode} alt="decode" height={50} />
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet magna id ex hendrerit semper.Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={met} alt="met" height={50} />
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet magna id ex hendrerit semper.Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={osi} alt="osi" height={50} />
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet magna id ex hendrerit semper.Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image
              src={pearsonEducation}
              alt="pearson pearson Education "
              height={50}
            />
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet magna id ex hendrerit semper.Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm transition-all p-8 hover:shadow-lg cursor-pointer">
            <Image src={qcic} alt="qcic" height={50} />
            <p className="text-gray-700 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sit amet magna id ex hendrerit semper.Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filiale;
