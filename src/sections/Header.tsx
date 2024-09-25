import Logo from "@/assets/ajel icon.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <>
      <header className="sticky top-0 backdrop-blur-md z-20">
        <div className="flex justify-center items-center py-3 bg-slate-700 text-white text-sm mx-auto gap-3">
          <p className="hidden md:block ml-5 text-slate-50/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus?
          </p>
          <p className="ml-5">+237 6XX XXX XXX</p>
          <p>xxxxxxxx@ajel.com</p>
        </div>
        <div className="py-5">
          <div className="container">
            <div className="flex justify-between items-center">
              <Image src={Logo} alt="logo" height={60} width={60} />
              <MenuIcon className="h-8 w-8 md:hidden" />
              <nav className="hidden md:flex gap-6 text-slate-700 items-center">
                <a href="#">Accueil</a>
                <a href="#">A propos</a>
                <a href="#">Nos services</a>
                <a href="#">Nos filiales</a>
                <a href="#">Actualitées</a>
                <a href="#">Galérie</a>
                <a href="#">FAQs</a>
                <button className="btn btn-primary">Contactez-nous</button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
