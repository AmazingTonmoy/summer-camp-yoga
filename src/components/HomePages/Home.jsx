import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footers from "../Footer/Footer";
import Headers from "../Header/Header";

const Home = () => {
    return (
        <div>
             <ToastContainer position="top-center" autoClose={1000} theme="colored"/>
             <Headers></Headers>
            <Outlet></Outlet>
            <Footers></Footers>
            
        </div>
    );
};

export default Home;