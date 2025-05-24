import Cookies from "js-cookie";
const logOutHandler = (navigate) => {
  Cookies.remove("accessToken");
  navigate("/login");
};
export { logOutHandler };
