import logo from "../assets/images/Disney.png";
import LinkItems from "./LinkItem";
import { GoHome } from "react-icons/go";
import { TbCategory } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { MdAddReaction } from "react-icons/md";
import { AiFillInteraction } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { VscReactions } from "react-icons/vsc";

const link = [
  {
    icon: <GoHome />,
    name: "Home",
  },

  {
    icon: <TbCategory />,
    name: "Category",
    child: [
      {
        icon: <MdAddReaction />,
        name: "Action",
      },
      {
        icon: <AiFillInteraction />,
        name: "Adventure",
      },
      {
        icon: <GrTransaction />,
        name: "Si-Fi",
      },
      {
        icon: <VscReactions />,
        name: "Comedy",
      },
    ],
  },

  {
    icon: <IoIosContact />,
    name: "Contact",
  },
];
const Header = () => {
  return (
    <div>
      <div className="flex items-center gap-8 justify-between px-8 py-3 shadow-md">
        <div>
          <img src={logo} alt="logo" className="w-20 " />
        </div>
        <div className=" flex gap-8 items-center  ">
          {link.map((item, idx) => (
            <LinkItems key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
