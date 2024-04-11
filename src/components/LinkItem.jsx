import { useState } from "react";

const LinkItems = ({ item }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="flex items-center gap-2 font-medium cursor-pointer relative"
      onMouseOver={() => setVisible(true)}
      onMouseOut={() => setVisible(false)}
    >
      {item.icon}
      {item.name}
      {item?.child?.length && (
        <ul
          className={`absolute top-6 border left-0 bg-white z-20 min-w-44 ${
            visible ? "block" : "hidden"
          }`}
        >
          {item?.child?.map((child, idx) => (
            <li
              key={idx}
              className="flex gap-1 items-center px-3 py-1 text-sm hover:bg-slate-200"
            >
              {child.icon} {child.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LinkItems;
