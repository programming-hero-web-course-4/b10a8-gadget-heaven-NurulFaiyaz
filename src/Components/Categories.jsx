import { Link } from "react-router-dom";

const Categories = ({ category }) => {

   
    return (
        <div className=" flex">
            <div className="">
                <ul className="bg-base-200 flex flex-col p-6 rounded-xl">
                    {
                        category.map(category => <Link to={`/gadget/${category.category_name}`} className="border rounded-xl " key={category.id}>
                            <li>{category.category_name}</li>
                        </Link>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Categories;