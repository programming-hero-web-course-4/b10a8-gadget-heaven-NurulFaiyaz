import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const Gadget = () => {
    const gadget = useLoaderData()
    const { smart } = useParams()


    const [gadgets, setGadgets] = useState([])

    useEffect(() => {
        if (smart) {
            const filteredByCategory = [...gadget].filter(
                newGadget => newGadget.category_name === smart
            )
            setGadgets(filteredByCategory)
        } else {
            setGadgets(gadget)
        }

    }, [smart, gadget])

    console.log(gadget)
    console.log(smart)
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                gadgets.map(gadget => <Card key={gadget.product_id} gadget={gadget}></Card>)
            }
        </div>
    );
};

export default Gadget;