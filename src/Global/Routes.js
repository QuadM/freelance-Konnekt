import { default as About } from "../Modules/About/About";
import { default as Home } from "../Modules/Home/Home";
import { default as Products } from "../Modules/Products";
import redirectHome from "./../Modules/Home/redirect";
import SignUp from "./../Modules/SignUp/index";
import SignIn from "../Modules/SignIn/index";

export const Routes = [
  {
    element: Home,
    route: "Home",
    path: "/",
  },
  {
    element: redirectHome,
    path: "/home",
  },
  {
    element: About,
    route: "About",
    path: "/about",
  },
  {
    element: Products,
    route: "Products",
    path: "/products",
  },
  {
    element: SignIn,
    route: "Sign in",
    path: "/signin",
  },
  {
    element: SignUp,
    route: "Sign up",
    path: "/signup",
  },
];
