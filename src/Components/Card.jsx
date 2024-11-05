
const Card = ({ gadget }) => {
    const { product_id, product_title, price, description, specification } = gadget



    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p> Price: ${price}k</p>
                <div className="card-actions ">
                    <button className="btn btn-sm btn-outline rounded-2xl">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Card;