import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { addToCard } from "../Utilities/localStorage";
import toast from "react-hot-toast";
import { Rating } from "@smastrom/react-rating";

const GadgetInfo = () => {

    const { id } = useParams()
    const gData = useLoaderData()

    const [gadget, setGadget] = useState({})

    useEffect(() => {
        const gInfo = gData.find(info => info.product_id == id)
        setGadget(gInfo)
    }, [gData, id])

    const handleAddToCard = (gadget) => {
        addToCard(gadget)
        // getAllCardData()
    }

    const success = () => toast.success('Successfully added!');


    return (
        <div className="hero container mx-auto h-">


            <div className="hero-content relative -top-40 border bg-white rounded-2xl">

                <div className="flex">
                    <img
                        src=
                        {gadget.product_image}
                        className="rounded-lg shadow-2xl w-48 bg-slate-300" />
                </div>
                <div className="flex flex-col space-y-3">
                    <h2 className="text-3xl font-bold">{gadget.product_title}</h2>
                    <p className="">
                        {gadget.price}
                    </p>

                    <NavLink className={({ isActive }) => `px-2 py-1 rounded-full text-xs w-fit cursor-default ${isActive ? 'text-emerald-700 bg-emerald-200 border-emerald-600 border' : ''}`}>In Stock</NavLink>



                    <p>{gadget.description}</p>

                    <ul>
                        <ol>{gadget.specification}</ol>
                    </ul>
                    <h4><Rating
                        style={{ maxWidth: 120 }}
                        value={gadget.rating}
                        readOnly
                    /></h4>

                    <div className="flex items-center gap-2">
                        <button onClick={() => { handleAddToCard(gadget); success(); }} className="btn bg-purple-700 text-white rounded-full w-fit hover:bg-purple-600">Add To Card <MdOutlineShoppingCart className="text-lg text-white"></MdOutlineShoppingCart></button>

                        <button className="btn rounded-full text-lg">
                            <FaRegHeart></FaRegHeart>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GadgetInfo;