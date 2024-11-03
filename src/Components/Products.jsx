import banner from "../../assets/banner.jpg";

const Products = () => {
    return (
        <div>
            {/* Banner Starts Here */}
            <div className=" ">
                <div className="relative md:-top-48 lg:-top-80  border-2 rounded-xl border-white p-4 w-2/3 mx-auto backdrop-blur-sm">
                    <img className="w-full rounded-xl lg:h-[40rem] object-cover mx-auto" src={banner} alt="" />
                    {/* <div className=" h-96  bg-banner-img bg-contain bg-no-repeat bg-center  ">
                    </div> */}
                </div>
            </div>

            {/* product section starts here */}
            <div>

            </div>

        </div>
    );
};

export default Products;