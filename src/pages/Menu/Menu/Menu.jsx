import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const { menu } = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      {/* Main Cover */}
      <Cover img={menuImg} title={"Our Menu"} />
      {/* Offered Menu Items */}
      <SectionTitle subHeading={"Do not miss"} heading={"Today's offer"} />
      <MenuCategory items={offered} />
      {/* Dessert Menu Items */}
      <MenuCategory items={dessert} title={"Dessert"} coverImg={dessertImg} />
      {/* Salad Menu Items */}
      <MenuCategory items={salad} title={"Salad"} coverImg={saladImg} />
      {/* Pizza Menu Items */}
      <MenuCategory items={pizza} title={"Pizza"} coverImg={pizzaImg} />
      {/* Soup Menu Items */}
      <MenuCategory items={soup} title={"Soup"} coverImg={soupImg} />
    </div>
  );
};

export default Menu;
