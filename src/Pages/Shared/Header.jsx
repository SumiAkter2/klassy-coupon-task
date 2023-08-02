import "./Header.css";
import brandLogo from "../../assets/images/klassy-missy-logo.png";
import signIn from "../../assets/images/sign_in_icon.png";
import cart from "../../assets/images/carticon.png";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <div>
      {/* top header section */}
      <div className="top-header flex items-center">
        <p className="text-xs text-white pl-20 hover:font-semibold ">
          Customer Care:Need Help ? Just Call - 01310202026 ( 10 AM to 6 PM
          only)
        </p>
      </div>

      {/* middle header section */}

      <div className="flex justify-around items-center middle-header">
        <div>
          <a href="">
            <img src={brandLogo} alt="brand-logo" />
          </a>
        </div>
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

        <div>
          <ul className="flex justify-between items-center gap-5">
            <li className="flex justify-between items-center gap-2">
              <a href="">SIGN IN</a>
              <img src={signIn} alt="Sign In logo" />
            </li>
            <li className="flex justify-between items-center gap-2">
              <a href="">MY BAG</a>
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
    </div>
  );
};

export default Header;
