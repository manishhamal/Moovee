import dune from "../assets/images/dune.jpg";
import { FaCirclePlay } from "react-icons/fa6";

const Card = ({ movie }) => {
  return (
    <div className="card relative rounded-md overflow-hidden cursor-pointer ">
      <div className="">
        <img
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie?.poster_path}`}
          alt=""
          className="w-full h-full "
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent "></div>
      <div className="absolute bottom-2 left-0 p-3 z-10 text-white">
        <h1 className="text-xl font-medium">{movie?.original_title}</h1>
        <div className="text-sm mt-2">{movie?.release_date}</div>
      </div>

      <div className="playbutton absolute z-10">
        <FaCirclePlay size={48} color="#fff5" />
      </div>
    </div>
  );
};

export default Card;
