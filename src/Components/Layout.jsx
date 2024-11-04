import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-861px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div> 
    );
};

export default Layout;