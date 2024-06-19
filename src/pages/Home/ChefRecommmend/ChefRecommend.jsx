import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FoodCard from "../../Shared/FoodCard/FoodCard";

const ChefRecommend = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenus = data.filter((item) => item.category === "popular");
        setMenu(popularMenus);
      });
  }, []);

  return (
    <section>
      <SectionTitle subHeading={"Should Try"} heading={"Chef Recommends"} />
      <div className="grid justify-items-center md:flex items-center md:justify-around   ">
        {menu.slice(0, 3).map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ChefRecommend;
