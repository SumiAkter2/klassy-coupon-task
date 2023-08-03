import { useEffect, useState } from "react";
import CouponDetails from "./CouponDetails";
import axios from "axios";

const Coupon = () => {
  const [coupons, setCoupons] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const rest = await axios.get(" http://localhost:5000/coupons");
      setCoupons(rest.data.data);
    };
    fetch();
  }, []);
  console.log(coupons);

  return (
    <div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-12  px-28 py-16">
        {/* <h1> {coupons.length}</h1> */}

        {coupons.map((coupon) => (
          <CouponDetails key={coupon._id} coupon={coupon}></CouponDetails>
        ))}
      </div>
    </div>
  );
};

export default Coupon;
