import Modal from "react-modal";
import "./Coupon.css";
import { useState } from "react";
import { PiCopyFill } from "react-icons/pi";
import Swal from "sweetalert2";

const CouponDetails = ({ coupon }) => {
  const [copy, setCopy] = useState("");

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const { tittle, img, code, Description, maxDis, spend, validity, condition } =
    coupon;
  const codeCopy = (code) => {
    const copyText = navigator.clipboard.writeText(code);
    setCopy(copyText);
    Swal.fire("SuccessFully copied");
  };
  // modal
  const customStyles = {
    content: {
      width: "480px",
      height: "100%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="coupon-box relative">
        <div className="circle-left absolute"></div>

        {/* coupon info section */}
        <a onClick={openModal}>
          <div className="flex justify-between items-center text-white text-xs">
            <div className="lg:w-3/5 px-12  border-dashed  border-r-2 border-white py-6">
              <h3 className="text-sm pb-2">{tittle.slice(0, 20) + "..."}</h3>
              <p className="pb-1 text-xs">
                {" "}
                {Description.slice(0, 60) + "..."}{" "}
              </p>
              <p className="font-bold pt-2">CODE:{code} </p>
              <button className="coupon-detail-button mt-2 ">
                See Details
              </button>
            </div>
            <div className="lg:w-2/5  ">
              <div className="">
                <div className="text-sm  pl-6 ">
                  <h4 className="">Spend:{spend} </h4>
                  <h2 className="text-xl">
                    {maxDis} <br />
                    <span className="text-sm">Max Discount</span>
                  </h2>

                  <p className="text-xs">Valid until {validity}</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <div className="circle-right absolute"></div>
      </div>
      {/* modal */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* top modal */}
        <div className="flex justify-between items-center ">
          <img className="w-52 rounded-lg" src={img} alt="product-img" />
          <div className="text-xs font-bold p-5">
            <p className="text-[#d3066d] text-xl font-bold pb-2">{spend}</p>
            <p>Max Discount </p>
            <p>Min Discount {maxDis}</p>
            <p className="font-thin pt-2">Valid Until {validity}</p>
          </div>
        </div>
        {/*  bottom modal */}
        <div className="text-xl font-bold pt-6">
          <h1>{tittle} </h1>
          <p className="text-xs py-2 font-thin pl-6 leading-6">
            {Description}{" "}
          </p>
          <p className="py-2 ">CONDITIONS: </p>
          <li className="text-sm font-thin pb-12 ">
            {condition ? condition : "Not Available"}{" "}
          </li>
          <div className="flex items-center justify-center border-dashed  border-t-2 border-[#000000a5]">
            <div className="pt-6">
              <p className="text-sm text-center text-[#d3066d] border border-dashed border-[#d3066d] p-2">
                CODE:{code}
              </p>
              <button
                onClick={() => {
                  codeCopy(code);
                }}
                className="copy-code-button flex items-center justify-center gap-x-2"
              >
                <PiCopyFill /> COPY CODE
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CouponDetails;
