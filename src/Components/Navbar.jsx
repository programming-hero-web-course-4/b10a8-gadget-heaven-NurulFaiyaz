import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="md:m-8 bg-purple-600 rounded-2xl pb-36 text-white">

            {/* Navbar starts here */}
            <div className="navbar justify-between bg-base-100 bg-transparent px-14">
                <div className="">
                    <NavLink to={'/'} className="btn btn-ghost text-xl">Gadget Heaven</NavLink>
                </div>
                <div className="gap-5 items-center text-sm">
                    <NavLink to={'./home'}>Home</NavLink>
                    <NavLink to={'./statistic'}>Statistics</NavLink>
                    <NavLink to={'./dashboard'}>Dashboard</NavLink>
                </div>
                <div className="flex-none">
                    <div className="">


                    </div>
                    <div className="dropdown dropdown-end items-center">
                        <div tabindex="0" role="button" className="btn btn-sm btn-circle bg-white">
                            <div className="indicator">
                                <MdOutlineShoppingCart className="text-xl text-black"></MdOutlineShoppingCart>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div
                           
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div>
                            <div className="rounded-full">
                                <FaRegHeart></FaRegHeart>
                            </div>
                        </div>
                        <ul
                            tabindex="0"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </NavLink>
                            </li>
                            <li><NavLink>Settings</NavLink></li>
                            <li><NavLink>Logout</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Banner section starts here */}

            <div className="text-center md:w-9/12 mx-auto space-y-6">
                <h1 className="text-4xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                <p className="text-sm ">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button className="btn rounded-full font-bold text-purple-600 ">Shop Now</button>
            </div>
        </div>
    );
};

export default Navbar;