import {  NavLink } from "react-router-dom";

const Categories = ({ category }) => {


    return (
        <div className=''>
            <div className="">
                <ul className="bg-base-200 flex flex-col p-5 space-y-4 rounded-xl w-[250px]">

                    {
                        category.map(category => <NavLink
                            to={`/gadget/${category.category_name}`}
                            className={({ isActive }) => `border rounded-3xl pl-6 pr-8 py-2 bg-white ${isActive ? 'bg-purple-700 ' : ''}`}
                            key={category.id}>
                            <li>{category.category_name}</li>
                        </NavLink>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Categories;