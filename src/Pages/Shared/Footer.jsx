import "./Footer.css";
import logo1 from "../../assets/images/footer/62Spuc3rmSJJD4gP4Li0XkBf4ayWeJxMe0Qqcvdx.webp";
import logo2 from "../../assets/images/footer/Yg5m89EjyrnnCWO5MEubTilt859SbsiwkK8m9N7G.webp";
import logo3 from "../../assets/images/footer/YTUjtBjrOkWOxxDJO59eASvEDAGXNhwV7wNZapM9.webp";
import logo4 from "../../assets/images/footer/gYBfX8tLCAZSg5mt4jIFauXAcjwT8q4kuZsYyAJN.webp";
import logo5 from "../../assets/images/footer/JGXuhr2YF5Q0s4dx0TgI5eI3ziF3yuknrsjJGEq9.png";
import logo6 from "../../assets/images/footer/6QxBaiA56CLrMH6IrWb6xtpzxts6T4FWa7O04CLC-removebg-preview.png";
// import { ImOffice } from "react-icons/im";
const Footer = () => {
  return (
    <div className>
      {/* top footer section */}
      <div className="top-footer">
        <p className="text-sm text-center text-white">
          Our Promises To Make A Better World Together
        </p>
        <div className="flex justify-center items-center gap-24 pt-6">
          <img src={logo1} alt="brand-logo" />
          <img src={logo2} alt="brand-logo" />
          <img src={logo3} alt="brand-logo" />
          <img src={logo4} alt="brand-logo" />
          <img src={logo5} alt="brand-logo" />
          <img src={logo6} alt="brand-logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
