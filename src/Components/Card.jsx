
const Card = ({gadget}) => {
    const {product_id, product_title, product_name} = gadget
    return (
        <div className="">
            <h2>name: {product_title}</h2>
        </div>
    );
};

export default Card;