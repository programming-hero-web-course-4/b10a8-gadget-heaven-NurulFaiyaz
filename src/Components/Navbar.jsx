import { Link, NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="md:m-8 bg-purple-600 rounded-2xl md:pb-40 lg:pb-64 text-white">

            {/* Navbar starts here */}
            <div className="navbar justify-between bg-base-100 bg-transparent px-14">
                <div className="">
                    <NavLink to={'/'} className="text-lg font-bold">Gadget Heaven</NavLink>
                </div>
                <div className="gap-5 items-center ">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/statistics'}>Statistics</Link>
                    <Link to={'/dashboard'}>Dashboard</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="btn btn-sm btn-circle bg-white">
                        <MdOutlineShoppingCart className="text-lg text-black"></MdOutlineShoppingCart>
                    </div>
                    <div className="btn btn-sm btn-circle">
                        <FaRegHeart></FaRegHeart>
                    </div>
                </div>
            </div>

            {/* Banner section starts here */}

            <div className="text-center md:w-9/12 lg:w-6/12 mx-auto space-y-6">
                <h1 className="md:text-4xl lg:text-5xl  font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="lg:px-20">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="btn rounded-full font-bold text-purple-600 ">Shop Now</button>
            </div>
            
        </div>
    );
};

export default Navbar;