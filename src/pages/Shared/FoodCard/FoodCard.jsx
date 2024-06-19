const FoodCard = ({ item }) => {
  const { name, recipe, price, image } = item;
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
          <button className="btn btn-primary">ADD TO CARD</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
