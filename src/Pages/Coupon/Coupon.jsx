import { useState, useEffect } from "react";
import CouponDetails from "./CouponDetails";

const Coupon = () => {
  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/coupons")
      .then((res) => res.json())
      .then((data) => setCoupons(data));
  }, []);
  console.log(coupons);
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12  px-28 py-16">
          {
              coupons.map(coupon=><CouponDetails key={coupon._id} coupon={coupon}></CouponDetails>)
     }
    </div>
  );
};

export default Coupon;
