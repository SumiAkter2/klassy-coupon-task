import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";


const Main = () => {
    return (
        <div>
            <Header />
            
            <Outlet />
            <ToastContainer/>
           <Footer/> 
        </div>
    );
};

export default Main;