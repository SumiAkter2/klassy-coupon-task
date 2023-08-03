import "./Header.css";
import brandLogo from "../../../assets/images/klassy-missy-logo.png";
import signIn from "../../../assets/images/sign_in_icon.png";
import cart from "../../../assets/images/carticon.png";
import { ImSearch } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* top header section */}
      <div className="top-header flex items-center">
        <p className="text-xs text-white px-28 hover:font-semibold ">
          Customer Care:Need Help ? Just Call - 01310202026 ( 10 AM to 6 PM
          only)
        </p>
      </div>

      {/* middle header section */}

      <div className="flex px-28 justify-between items-center middle-header">
        {/* brand logo */}
        <div>
          <Link className="hover:text-[#d3066d]" to="/coupon">
            <img src={brandLogo} alt="brand-logo" />
          </Link>
        </div>
        {/* input */}
        <div className="relative">
          <input
            className="text-xs text-thin"
            type="text"
            name="search"
            id="search"
            placeholder="Search for products"
          />
          <ImSearch
            className="absolute right-2 bottom-2"
            size="18px"
            color="#d3066d"
          />
        </div>
        {/* item */}
        <div>
          <ul className="flex justify-between items-center gap-5">
            <li>
              <Link className="flex justify-between items-center gap-2 hover:text-[#d3066d]">
                SIGN IN
                <img src={signIn} alt="Sign In logo" />
              </Link>
            </li>
            <li className="flex justify-between items-center gap-2">
              <Link className="hover:text-[#d3066d]" to="/coupon">
                MY BAG
              </Link>
              <div className="relative">
                <img src={cart} alt="cart logo" />
                <span className="absolute text-white rounded-full w-4 h-4 px-1 text-xs left-5 bottom-3">
                  0
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* category header  section */}
      <div>
        <ul className="category-header rounded-full flex justify-center items-center uppercase gap-7 text-sm font-bold text-[#646464]">
          <li>
            <Link className=" hover:text-[#d3066d]" to="/coupon">
              <FiMenu size="25px" />
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#d3066d]" to="/coupon">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#d3066d]" to="/coupon">
              Brands
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#d3066d]" to="/coupon">
              PreOrder
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#d3066d]" to="/coupon">
              Campaigns
            </Link>
          </li>
          <li>
            <Link className="text-[#d3066d]" to="/coupon">
              Coupons
            </Link>
          </li>
          <li>
            <Link className="hover:text-[#d3066d]" to="/coupon">
              Discounts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
