import "./Footer.css";
import logo1 from "../../assets/images/footer/62Spuc3rmSJJD4gP4Li0XkBf4ayWeJxMe0Qqcvdx.webp";
import logo2 from "../../assets/images/footer/Yg5m89EjyrnnCWO5MEubTilt859SbsiwkK8m9N7G.webp";
import logo3 from "../../assets/images/footer/YTUjtBjrOkWOxxDJO59eASvEDAGXNhwV7wNZapM9.webp";
import logo4 from "../../assets/images/footer/s.webp";
import logo5 from "../../assets/images/footer/JGXuhr2YF5Q0s4dx0TgI5eI3ziF3yuknrsjJGEq9.png";
import logo6 from "../../assets/images/footer/6QxBaiA56CLrMH6IrWb6xtpzxts6T4FWa7O04CLC.webp";
import logo from "../../assets/images/footer/brand-logo.png";
import socailLogo1 from "../../assets/images/footer/social1.svg";
import socailLogo2 from "../../assets/images/footer/social2.svg";
import socailLogo3 from "../../assets/images/footer/social3.svg";
import socailLogo4 from "../../assets/images/footer/social4.svg";
import socailLogo5 from "../../assets/images/footer/social5.svg";
import socailLogo6 from "../../assets/images/footer/social6.svg";
import img1 from "../../assets/images/footer/bikash.png";
import img2 from "../../assets/images/footer/img1.png";
import img3 from "../../assets/images/footer/img2.png";
import img4 from "../../assets/images/footer/img4.png";
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
          <img src={logo5} alt="brand-logo" />
          <img className="rounded-full" src={logo4} alt="brand-logo" />
          <img className="rounded-full" src={logo6} alt="brand-logo" />
        </div>
      </div>
      {/* middle footer */}
      <div>
        <div className="middle-footer flex justify-between items-center px-28">
          <div>
            <img src={logo} alt="brand-logo" />
            <p className="text-xs py-4">
              Klassy Missy is the largest online retailer of premium beauty
              products in Bangladesh and one of the fastest growing Beauty
              E-commerce Company In Bangladesh. Our focus is to make you feel
              special. Our maths is simple: Beauty is more then skin deep.
              That’s why we’re as independent and inclusive as possible;
              providing trustworthy reviews and expert insights, so you can
              explore Trends , find new favourites and discover the products
              that make you feel like you. We source exceptional & authentic
              products from all over the world for you. There's over 200 Makeup
              & Skin care brand at your fingertips.
            </p>
            <div className="flex justify-center items-center gap-4 social-img">
              <img src={socailLogo1} alt="social-logo" />
              <img src={socailLogo2} alt="social-logo" />
              <img src={socailLogo3} alt="social-logo" />
              <img src={socailLogo4} alt="social-logo" />
              <img src={socailLogo5} alt="social-logo" />
              <img src={socailLogo6} alt="social-logo" />
            </div>
          </div>

          <div className="flex justify-between items-center gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
