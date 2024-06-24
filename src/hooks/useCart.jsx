import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  // tan stack query
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const result = await axiosSecure.get(`/carts?email=${user.email}`);
      console.log(result.data);
      return result.data;
    },
  });
  return { cart, refetch };
};

export default useCart;
