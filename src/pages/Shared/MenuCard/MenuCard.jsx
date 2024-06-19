const MenuCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "200px 0 200px 200px " }}
        className="w-[120px]"
        src={image}
        alt=""
      />
      <div className="">
        <h3 className="uppercase font-bold">{name}</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-400">${price}</p>
    </div>
  );
};

export default MenuCard;
