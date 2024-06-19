import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenus = data.filter((item) => item.category === "popular");
        setMenu(popularMenus);
      });
  }, []);
  console.log(menu);
  return (
    <div className="space-y-4">
      <SectionTitle heading={"Popular Items"} subHeading={"From Our Menu "} />
      <div className="grid md:grid-cols-2 gap-4 ">
        {menu.map((item) => (
          <MenuCard key={item._id} item={item} />
        ))}
      </div>
      <div className="grid justify-items-center">
        <button className="btn btn-xs text-orange-400 btn-outline  sm:btn-sm md:btn-md block uppercase border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
