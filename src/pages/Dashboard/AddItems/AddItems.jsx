import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const axiosPublic = useAxiosPublic();
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    // image upload to imgbb then get url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // now send the menu item to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price).toFixed(2),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };

      const menuRes = await axiosSecure.post("/menu", menuItem);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} added successfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle subHeading={"What's New"} heading={"Add an Item"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">Recipe Name*</span>
          </div>
          <input
            {...register("name")}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full"
            required
          />
        </label>
        <div className="flex gap-6">
          {/* Category */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Category*</span>
            </div>
            <select
              {...register("category")}
              defaultValue={"default"}
              className="select select-bordered w-full "
              required
            >
              <option disabled value={"default"}>
                Select a category
              </option>
              <option value="Salad">Salad</option>
              <option value="Dessert">Dessert</option>
              <option value="Soup">Soup</option>
              <option value="Pizza">Pizza</option>
            </select>
          </label>

          {/* Price */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text">Price*</span>
            </div>
            <input
              {...register("price")}
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
              step={"0.01"}
              required
            />
          </label>
        </div>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Recipe Details*</span>
          </div>
          <textarea
            {...register("recipe")}
            className="textarea textarea-bordered h-24"
            placeholder="Recipe Details"
          ></textarea>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Recipe Image</span>
          </div>
          <input
            {...register("image")}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </label>
        <button className="btn my-4">
          <FaUtensils /> Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItems;
