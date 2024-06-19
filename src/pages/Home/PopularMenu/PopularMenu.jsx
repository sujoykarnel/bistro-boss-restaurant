import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const { menu } = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <div className="space-y-4 px-4">
      <SectionTitle heading={"Popular Items"} subHeading={"From Our Menu "} />
      <div className="grid md:grid-cols-2 gap-4 my-4 ">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item} />
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
