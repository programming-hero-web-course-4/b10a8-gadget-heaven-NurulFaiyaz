import { Link } from "react-router-dom";

const Card = ({ gadget }) => {
    const { product_id, product_title, price, description, specification, product_image } = gadget


    // const handleDetails = id => 

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className="h-full">
                <img className="w-full h-full object-contain"
                    src={product_image}
                    alt={product_title}/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p> Price: ${price}k</p>
                <div className="card-actions ">
                    <Link to={`/gadgetInfo/${product_id}`} className="btn btn-sm btn-outline rounded-2xl">
                        View Details</Link>
                </div>
            </div>
        </div >
    );
};

export default Card;