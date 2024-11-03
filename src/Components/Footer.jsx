import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center container mx-auto footer py-10">
            <div className="">
                <h2 className="mx-auto font-bold text-2xl">Gadget Heaven</h2>
                <p className="text-sm">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr className="w-full" />

            <div className="flex text-black gap-36">
                <nav className="text-center">
                    <h4 className="mb-2 font-bold ">Service</h4>
                    <div className="flex flex-col space-y-1">
                        <NavLink className="link link-hover">Product Support</NavLink>
                        <NavLink className="link link-hover">Order Tracking</NavLink>
                        <NavLink className="link link-hover">Shipping & Delivery</NavLink>
                        <NavLink className="link link-hover">Return</NavLink>
                    </div>
                </nav>
                <nav className="text-center">
                    <h4 className="mb-2 font-bold">Company</h4>
                    <div className="flex flex-col space-y-1">
                        <NavLink className="link link-hover">About Us</NavLink>
                        <NavLink className="link link-hover">Careers</NavLink>
                        <NavLink className="link link-hover">Contact</NavLink>
                        
                    </div>
                </nav>
                <nav className="text-center">
                    <h4 className="mb-2 font-bold">Legal</h4>
                    <div className="flex flex-col space-y-1">
                        <NavLink className="link link-hover">Terms of use</NavLink>
                        <NavLink className="link link-hover">Privacy policy</NavLink>
                        <NavLink className="link link-hover">Cookie policy</NavLink>
                    </div>
                </nav> 
            </div>
        </footer>
    );
};

export default Footer;