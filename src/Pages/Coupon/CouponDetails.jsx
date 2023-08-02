import Modal from "react-modal";
import "./Coupon.css";

const CouponDetails = ({ coupon }) => {
      let subtitle;
      const [modalIsOpen, setIsOpen] = React.useState(false);
  const { tittle, code, Description, maxDis, spend, validity, condition } =
    coupon;
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className="coupon-box relative">
        <div className="circle-left absolute"></div>

        {/* coupon info */}
        <a href="" onClick={openModal}>
          <div className="flex justify-between items-center text-white text-xs">
            <div className="lg:w-3/5 px-12  border-dashed  border-r-2 border-white py-6">
              <h3 className="text-sm pb-2">{tittle.slice(0, 22)}...</h3>
              <p className="pb-1 text-xs"> {Description.slice(0, 60)}... </p>
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

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default CouponDetails;
