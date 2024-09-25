"use client";

import productImage from "@/assets/product-image.png";
import Image from "next/image";
import kiteImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const BusinessShowcase = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
      >
        <div className="container">
          <div className="max-w-[540px] mx-auto">
            <div className="flex justify-center">
              <div className="badge">
                Lorem ipsum dolor sit amet consectetur.
              </div>
            </div>
            <h2 className="font-extrabold text-3xl text-center md:text-[54px] md:leading-[60px] bg-gradient-to-b from-black to-slate-700 text-transparent bg-clip-text mt-5 my-5">
              Parlons un peu de nous
            </h2>
            <p className="text-center text-[22px] leading-[30px] text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              impedit repellendus assumenda
            </p>
          </div>
          <div className="relative">
            <Image src={productImage} alt="product image" className="mt-5" />
            <motion.img
              src={kiteImage.src}
              alt="Kite Image"
              className="hidden md:block absolute -right-36 -top-32"
              height={262}
              width={262}
              style={{
                translateY,
              }}
            />
            <motion.img
              src={tubeImage.src}
              alt="tube Image"
              height={450}
              width={450}
              className="hidden md:block absolute bottom-24 -left-36"
              style={{
                translateY,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};
