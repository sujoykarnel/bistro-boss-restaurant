import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const GoogleLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const userInfo = { email: result.user?.email, name: result.user?.displayName };
      console.log(userInfo);
      axiosPublic.post("/users", userInfo).then((result) => {
        console.log(result);
        if (result.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Create Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate(from, { replace: true });
      });
    });
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn w-full btn-outline">
        <FaGoogle /> Sign in Google
      </button>
    </div>
  );
};

export default GoogleLogin;
