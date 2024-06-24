import FoodCard from "../../Shared/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";


const OrderTab = ({ items }) => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

    return (
      <>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="grid justify-items-center md:grid-cols-3 gap-4">
              {items.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
};

export default OrderTab;
