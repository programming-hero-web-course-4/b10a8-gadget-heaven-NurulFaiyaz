import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const GadgetInfo = () => {

    const { id } = useParams()
    const gData = useLoaderData()

    const [gadget, setGadget] = useState({})

    useEffect(() => {
        const gInfo = gData.find(info => info.product_id == id)
        setGadget(gInfo)
    }, [gData, id])


    return (
        <div className="hero container mx-auto h-fit">


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
                    <NavLink className={({ isActive }) => `px-2 py-1 ronded-full text-xs w-fit ${isActive ? 'text-emerald-700 bg-emerald-200 border-emerald-600 border' : ''}`}>In Stock</NavLink>
                    <p>{gadget.description}</p>

                    <p>{gadget.specification}</p>
                    <h4>Rating {gadget.rating}</h4>

                    <button className="btn bg-purple-700 text-white rounded-full w-fit hover:bg-purple-600">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default GadgetInfo;