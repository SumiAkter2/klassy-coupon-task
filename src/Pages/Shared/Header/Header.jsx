import "./Header.css";
import brandLogo from "../../../assets/images/klassy-missy-logo.png";
import signIn from "../../../assets/images/sign_in_icon.png";
import cart from "../../../assets/images/carticon.png";
import { ImSearch } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Modal from "react-modal";

const Header = () => {
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
   let subtitle;
   const [modalIsOpen, setIsOpen] = useState(false);
   function openModal() {
     setIsOpen(true);
     
   }
   function afterOpenModal() {
     document.style.color = "#444";

   }
   function closeModal() {
     setIsOpen(false);
   }
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
            <li>
              <a
                onClick={openModal}
                className="flex justify-between items-center gap-2"
              >
                SIGN IN
                <img src={signIn} alt="Sign In logo" />
              </a>
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

      {/* category header  section */}
      <div>
        <ul className="category-header rounded-full flex justify-center items-center uppercase gap-7">
          <li>
            <a href="">
              <FiMenu size="25px" />
            </a>
          </li>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Brands</a>
          </li>
          <li>
            <a href="">PreOrder</a>
          </li>
          <li>
            <a href="">Campaigns</a>
          </li>
          <li>
            <a href="">Coupons</a>
          </li>
          <li>
            <a href="">Discounts</a>
          </li>
        </ul>
      </div>

      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>dddddddddddddddddd</h1>
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form> */}
      </Modal>
    </div>
  );
};

export default Header;
