import productImage from "@/assets/product-image.png";
import Image from "next/image";

export const BusinessShowcase = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24">
        <div className="container">
          <div className="flex justify-center">
            <div className="badge">Lorem ipsum dolor sit amet consectetur.</div>
          </div>
          <h2 className="font-extrabold text-3xl text-center bg-gradient-to-b from-black to-slate-700 text-transparent bg-clip-text">
            Parlons un peu de nous
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            impedit repellendus assumenda sequi veritatis corrupti accusamus
            perspiciatis commodi voluptas praesentium autem ipsa eum architecto
            distinctio rerum, nobis aspernatur. Quidem, architecto?
          </p>
          <Image src={productImage} alt="product image" className="" />
        </div>
      </section>
    </>
  );
};
