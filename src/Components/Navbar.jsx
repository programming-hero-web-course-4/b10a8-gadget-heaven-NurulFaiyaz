import { Link, NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {

    const location = useLocation();

    return (
        <div className={location.pathname === ('/' || '/gadget/:') ? "md:m-8 bg-purple-700 rounded-2xl md:pb-60 text-white" : "md:pb-40"}>

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

            {
                location.pathname === '/' &&
                <div className="text-center md:w-9/12 lg:w-6/12 mx-auto space-y-6 lg:pb-24">
                    <h1 className="md:text-4xl lg:text-5xl  font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="lg:px-20">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <button className="btn rounded-full font-bold text-purple-600 ">Shop Now</button>
                </div>
            }
            {
                location.pathname === '/gadgetInfo/:id' &&
                <div className=" text-black">
                    <h2 className="">Gadget Details</h2>
                    <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            }
            {
                location.pathname === '/dashboard' &&

                <div className="text-center space-y-5 bg-purple-700 py-10">
                    <div className="space-y-5 text-white">
                        <h2 className="text-2xl md:text-3xl font-bold">Dashboard</h2>
                        <p className="w-3/4 lg:w-1/3 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                    <div className="space-x-5">
                        <NavLink to={'/cart'} className="btn rounded-full px-10 text-lg font-bold">Cart</NavLink>
                        <button className="btn rounded-full px-10 text-lg font-bold">Wishlist</button>
                    </div>
                </div>
            }

        </div>
    );
};

export default Navbar;