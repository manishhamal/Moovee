import dune from "../assets/images/dune.jpg";
import { FaCirclePlay } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="card relative rounded-md overflow-hidden cursor-pointer ">
      <div className="">
        <img src={dune} alt="" className="w-full h-full " />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent "></div>
      <div className="absolute bottom-2 left-0 p-3 z-10 text-white">
        <h1 className="text-xl font-medium">Dune: Part Two</h1>
        <div className="text-sm mt-2">15 Jan 2025</div>
      </div>

      <div className="playbutton absolute z-10">
        <FaCirclePlay size={48} color="#fff5" />
      </div>
    </div>
  );
};

export default Card;
