import "./Coupon.css";

const CouponDetails = ({ coupon }) => {
  const { tittle, code, Description, maxDis, spend, validity, condition } =
    coupon;

  return (
    <div className="coupon-box relative">
      <div className="circle-left absolute"></div>
      <div className="flex justify-between items-center text-white text-xs">
        <div className="lg:w-2/3 px-12 py-6">
          <h3 className="text-sm py-2">{tittle}</h3>
          <p className="pb-1"> {Description} </p>
          <p className="font-bold">CODE:{code} </p>
          <button className="coupon-detail-button">See Details</button>
        </div>
        <div className="border-dotted border-l-2 border-white text-sm lg:w-1/3 px-6">
          <h4 className="">Spend:{spend} </h4>
          <h2 className="text-xl">
            {maxDis} <br />
            <span className="text-sm">Max Discount</span>
          </h2>

          <p className="text-xs">Valid until {validity}</p>
        </div>
      </div>
      <div className="circle-right absolute"></div>
    </div>
  );
};

export default CouponDetails;
