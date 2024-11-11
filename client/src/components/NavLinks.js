// import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
// import LoginLink from "./LoginLink";
// import SearchBar from "./ui/SearchBar";
// import { useSelector, useDispatch } from "react-redux";
// import { setIsNavBtnClicked } from "../store/slices/profileSlice";

const NavLinks = () => {
  const isNavBtnClicked = false;
  // const dispatch = useDispatch();
  // const isNavBtnClicked = useSelector((state) => {
  //   return state.profile.isNavBtnClicked;
  // });
  const handleClick = () => {
    // dispatch(setIsNavBtnClicked(!isNavBtnClicked));
  };
  return (
    <div className=" z-10  md:pl-80  text-gray-800 hover:text-black font-semibold  ">
      <ul
        onClick={handleClick}
        className={`flex flex-col w-full bg-white md:items-center transition ease delay-1500
           md:flex-row h-full absolute md:static  inset-y-0 my-10 md:my-0 left-0 px-4  gap-y-4 md:gap-x-4 md:gap-y-0 -translate-x-0 md:translate-x-0 md:top-0 md:right-4 
         ${isNavBtnClicked ? "" : "-translate-x-full"} `}
      >
        <li className="py-4 md:py-0 border-gray-200 border-b-[1px] md:border-0  ">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="py-4 md:py-0 border-gray-200 border-b-[1px] md:border-0">
          <NavLink to="/">Book</NavLink>
        </li>
        <li className="py-4 md:py-0 border-gray-200 border-b-[1px] md:border-0">
          <NavLink to="/compaint">complaint</NavLink>
        </li>
        <li className="py-4 md:py-0 border-gray-200 border-b-[1px] md:border-0">
          <NavLink to="">Contact</NavLink>
        </li>
        <div className="md:ml-72 flex  flex-col md:flex-row md:items-center md:gap-x-5 gap-y-6 ">
          <NavLink to="/login">Login</NavLink>
          <div className="">
            <div className="md:hidden">Your Profile</div>
            <div className="hidden md:block">
              <NavLink to="/profile">
                {/* <VscAccount size={22} /> */} profile
              </NavLink>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default NavLinks;
