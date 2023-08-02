import "./Footer.css";
import logo1 from "../../../assets/images/footer/62Spuc3rmSJJD4gP4Li0XkBf4ayWeJxMe0Qqcvdx.webp";
import logo2 from "../../../assets/images/footer/Yg5m89EjyrnnCWO5MEubTilt859SbsiwkK8m9N7G.webp";
import logo3 from "../../../assets/images/footer/YTUjtBjrOkWOxxDJO59eASvEDAGXNhwV7wNZapM9.webp";
import logo4 from "../../../assets/images/footer/s.webp";
import logo5 from "../../../assets/images/footer/JGXuhr2YF5Q0s4dx0TgI5eI3ziF3yuknrsjJGEq9.png";
import logo6 from "../../../assets/images/footer/6QxBaiA56CLrMH6IrWb6xtpzxts6T4FWa7O04CLC.webp";
import logo from "../../../assets/images/footer/brand-logo.png";
import socailLogo1 from "../../../assets/images/footer/social1.svg";
import socailLogo2 from "../../../assets/images/footer/social2.svg";
import socailLogo3 from "../../../assets/images/footer/social3.svg";
import socailLogo4 from "../../../assets/images/footer/social4.svg";
import socailLogo5 from "../../../assets/images/footer/social5.svg";
import socailLogo6 from "../../../assets/images/footer/social6.svg";
import img1 from "../../../assets/images/footer/bikash.png";
import img2 from "../../../assets/images/footer/img1.png";
import img3 from "../../../assets/images/footer/img2.png";
import img4 from "../../../assets/images/footer/img4.png";
import ScrollToTop from "react-scroll-to-top";
import {BiSolidUpArrow} from "react-icons/bi"
const Footer = () => {
  return (
    <div>
      <ScrollToTop
        style={{
                boxShadow: "none",
            height:"24px",
            width:"24px",
          backgroundColor: "#000",
          borderRadius: "50%",
          zIndex: 20,
        }}
        component={
          <BiSolidUpArrow size="14px"
            style={{ fontSize: "20px", margin: "0 auto", color: "#fff" }}
          />
        }
        smooth
      />

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

      <div className="middle-footer flex justify-between items-start px-28">
        <div className="lg:w-7/12 ">
          <img src={logo} alt="brand-logo" />
          <p className="text-sm py-4">
            Klassy Missy is the largest online retailer of premium beauty
            products in Bangladesh and one of the fastest growing Beauty
            E-commerce Company In Bangladesh. Our focus is to make you feel
            special. Our maths is simple: Beauty is more then skin deep. That’s
            why we’re as independent and inclusive as possible; providing
            trustworthy reviews and expert insights, so you can explore Trends ,
            find new favourites and discover the products that make you feel
            like you. We source exceptional & authentic products from all over
            the world for you. There's over 200 Makeup & Skin care brand at your
            fingertips.
          </p>
          <div className="flex justify-start items-center gap-4 social-img pt-4">
            <img src={socailLogo1} alt="social-logo" />
            <img src={socailLogo2} alt="social-logo" />
            <img src={socailLogo3} alt="social-logo" />
            <img src={socailLogo4} alt="social-logo" />
            <img src={socailLogo5} alt="social-logo" />
            <img src={socailLogo6} alt="social-logo" />
          </div>
        </div>

        <div className="lg:w-5/12 px-12 flex justify-between items-start gap-4 text-sm">
          <div>
            <p className="text-sm pb-4">IMPORTANT LINKS</p>
            <div className="grid text-xs  gap-y-4 ">
              <a href="">- FAQ </a>
              <a href="">- Our Story & Team</a>
              <a href="">- Career</a>
              <a href="">- About Us</a>
              <a href="">- Contacts </a>
              <a href="">- Pre Order Terms and Conditions</a>
              <a href="">- Becoming a supplier</a>
              <a href="">- Terms and Conditions</a>
              <a href="">- Offer & Campaings Details</a>
              <a href="">- Return & Refund Policy</a>
              <a href="">- Delivery Information</a>
              <a href="">- General Products FAQ</a>
            </div>
          </div>

          <div className="pl-12 grid gap-y-2">
            <p className="pb-4">CONTACT INFO </p>

            <p>01310202026</p>
            <small>Email: hello@klassy.com.bd </small>

            <p className="pt-4">ADDRESS</p>
            <small>465C Noyatola, moghbazar, Dhaka</small>
          </div>
        </div>
      </div>

      {/* bottom-footer section */}
      <div className="bottom-footer px-28 flex justify-start items-center">
        <p>&#169; Copyright 2023 All Rights Reserved By Klassy Missy</p>
        <div className="flex justify-center items-center h-10 w-10 lg:ml-52">
          <img src={img1} alt="img" />
          <img src={img2} alt="img" />
          <img src={img3} alt="img" />
          <img src={img4} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
