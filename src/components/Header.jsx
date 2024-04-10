import logo from "../assets/images/Disney.png";
import LinkItems from "./LinkItem";
import { GoHome } from "react-icons/go";
import { TbCategory } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";

const link = [
  {
    icon: <GoHome />,
    name: "Home",
  },

  {
    icon: <TbCategory />,
    name: "Category",
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
