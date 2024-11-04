import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const Gadget = () => {
    const obj = useParams()

const gadget = useLoaderData()
console.log(gadget)
    return (
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {
                gadget.map(gadget => <Card key={gadget.product_id} gadget={gadget}></Card>)
            }
          
            
        </div>
    );
};

export default Gadget;