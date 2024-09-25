import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import Image from "next/image";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";

export const Hero = () => {
  return (
    <>
      <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#f5992a,#EAEEFE_100%)] overflow-x-clip">
        <div className="container">
          <div className="md:flex items-center">
            <div className="md:w-[478px]">
              <div className="badge">ajel-corporation v2.0</div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-orange-500 to-orange-600 text-transparent bg-clip-text mt-6 ">
                Des outils taillés pour vous aider
              </h1>
              <p className="text-xl text-slate-800 mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
                impedit nemo, quas quidem veritatis animi architecto aliquid
                recusandae ratione minus sapiente explicabo fugiat, vitae rem
                placeat quam perferendis natus. Eaque.
              </p>
              <div className="flex gap-1 items-center mt-[30px] ">
                <button className="btn btn-text">Contactez-nous</button>
                <button className="btn btn-primary gap-1 font-extrabold">
                  <span>Nos services</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              <Image
                src={cogImage}
                alt="cog Image"
                className="md:h-full md:absolute md:w-auto md:max-w-none md:-left-6 lg:left-0"
              />
              <Image
                src={cylinderImage}
                width={220}
                height={220}
                alt="cylinder Image"
                className="hidden md:block -top-8 -left-32 md:absolute"
              />
              <Image
                src={noodleImage}
                width={220}
                className="hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]"
                alt="noodle Image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
