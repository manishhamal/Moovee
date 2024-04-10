const LinkItems = ({ item }) => {
  return (
    <div className="flex items-center gap-2 font-medium cursor-pointer">
      {item.icon}
      {item.name}
    </div>
  );
};

export default LinkItems;
