import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white ">
      <div className="bg-slate-950 bg-opacity-60">
        <SectionTitle subHeading={"Check It Out"} heading={"Featured Items"} />
        <div className="md:flex justify-center items-center md:space-x-8 py-20 px-32">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="text-white">
            <p className="text-1xl font-bold capitalize">March 20, 2023</p>
            <p className="text-2xl font-bold uppercase">
              WHERE CAN I GET SOME?
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              fugiat voluptates tempora inventore! Assumenda facilis doloremque
              aliquam dignissimos error cupiditate qui a inventore non omnis
              neque id officia numquam deserunt distinctio itaque, debitis
              blanditiis labore minima odio ex. Provident eum officiis porro
              eaque ea harum et accusantium atque nihil omnis.
              <button className="btn btn-xs text-white btn-outline  sm:btn-sm md:btn-md block uppercase border-0 border-b-4">
                order now
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
