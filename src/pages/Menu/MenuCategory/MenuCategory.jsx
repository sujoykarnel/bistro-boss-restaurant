import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className="my-4">
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-4 my-4 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="grid justify-items-center">
        <Link to={`/order/${title || "salad"}`}>
          <button className="btn btn-xs text-orange-400 btn-outline  sm:btn-sm md:btn-md block uppercase border-0 border-b-4">
            View Full Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
