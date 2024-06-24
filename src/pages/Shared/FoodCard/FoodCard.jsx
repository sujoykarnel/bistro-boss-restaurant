import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, recipe, price, image, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const { refetch } = useCart();

  const handleAddToCart = () => {
    if (user && user?.email) {
      //Send card item to database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((result) => {
        console.log(result.data);
        if (result.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // Refetch the cart to update the cart item count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are't login!",
        text: "Please login for add to cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Send the user to login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl m-4">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <p>${price}</p>
        <div className="card-actions">
          <button
            onClick={handleAddToCart}
            className="btn btn-xs text-orange-400 btn-outline  sm:btn-sm md:btn-md block uppercase border-0 border-b-4"
          >
            ADD TO CARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
