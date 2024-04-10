import herobg from "../assets/images/herobg.jpeg";
import { FaStar } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero h-[88.5vh] relative">
      <div className="mask absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-[#0006]"></div>
      <div className="h-full">
        <img
          src={herobg}
          alt="herobg"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="absolute top-1/3 left-0 z-10 text-white px-8 w-full md:w-[667px]">
        <h1 className="font-bold text-[48px]">Dune: Part Two</h1>
        <p className="text-slate-300 font-medium my-2">
          Follow the mythic journey of Paul Atreides as he unites with Chani and
          the Fremen while on a path of revenge against the conspirators who
          destroyed his family. Facing a choice between the love of his life and
          the fate of the known universe, Paul endeavors to prevent a terrible
          future only he can foresee.
        </p>
        <button className="text-white bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-2 rounded-md my-3">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
