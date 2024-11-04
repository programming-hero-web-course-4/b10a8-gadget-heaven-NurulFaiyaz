import { Outlet, useLoaderData } from "react-router-dom";
import banner from "../../assets/banner.jpg";
import Categories from "./Categories";

const Home = () => {

    const category = useLoaderData()

    return (
        <div>
            {/* Banner Starts Here */}
            <div className="border md:h-[16rem] lg:h-[24rem]">
                <div className="relative md:-top-40 lg:-top-60  border-2 rounded-xl border-white p-4 w-2/3 lg:w-7/12 mx-auto backdrop-blur-sm">
                    <img className="w-full h-[22rem] rounded-xl lg:h-[34rem] object-cover mx-auto" src={banner} alt="" />
                </div>
            </div>

            {/* product section starts here */}
            <div className="my-20 border md:container mx-auto">

                <Categories category={category}></Categories>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Home;