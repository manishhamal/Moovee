import herobg from "../assets/images/herobg.jpeg";
import { FaStar } from "react-icons/fa6";
const IMG =
  "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg";
const Hero = ({ movie }) => {
  return (
    <div className="hero h-[88.5vh] relative">
      <div className="mask absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-[#0006]"></div>
      <div className="h-full">
        <img
          src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie?.backdrop_path}`}
          alt="herobg"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="absolute top-1/3 left-0 z-10 text-white px-8 w-full md:w-[667px]">
        <h1 className="font-bold text-[48px]">{movie?.original_title}</h1>
        <p className="text-slate-300 font-medium my-2">{movie?.overview}</p>
        <button className="text-white bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-2 rounded-md my-3">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
