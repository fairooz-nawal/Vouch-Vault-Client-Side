import card1 from "../assets/partner-1.png"
import card2 from "../assets/partner-2.jpg"
import card3 from "../assets/partner-3.png"
import card4 from "../assets/partner-4.png"
import { Slide } from "react-awesome-reveal";
const Partner = () => {
    return (
        <div className='max-w-full md:max-w-5xl lg:max-w-7xl mx-auto p-4 py-[50px] md:py-[100px] lg:py-[100px]'>
            <div className="w-full md:w-3/4 lg:w-3/4 mx-auto p-5 space-y-4 text-center">
                <p className='text-orange-600 font-semibold text-2xl'>Meet Our Partners</p>
                <h1 className='text-gray-800 text-2xl md:text-3xl lg:text-5xl font-bold'>We Work With</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 md:p-10 lg:p-10 ">
                <Slide direction="left">
                    <div className="space-y-4 shadow-2xl border-2 border-gray-300  text-gray-800 hover:bg-red-500 hover:text-white hover:scale-110">
                        <img className='w-full md:w-[500px] md:h-[200px]' src={card1} alt="" />
                        <div className="h-[300px] space-y-4 p-5">
                            <h1 className=' text-lg md:text-xl lg:text-xl font-bold '>PepsiCo</h1>
                            <p className=''>PepsiCo is a multinational food and beverage corporation that manufactures and distributes a wide range of products, including soft drinks, snacks, and sports nutrition products.</p>
                        </div>
                    </div>
                    <div className="space-y-4 shadow-2xl border-2 border-gray-300  text-gray-800 hover:bg-red-500 hover:text-white hover:scale-110">
                        <img className='w-full md:w-[500px] md:h-[200px]' src={card2} alt="" />
                        <div className="h-[300px] space-y-4 p-5">
                            <h1 className=' text-lg md:text-xl lg:text-xl font-bold '>Marsh & McLennan</h1>
                            <p className=''>Marsh & McLennan is a global professional services firm that provides risk management, insurance brokerage, and consulting services to clients across a wide range of industries</p>
                        </div>
                    </div>
                </Slide>
                <Slide direction="right">
                    <div className="space-y-4 shadow-2xl border-2 border-gray-300  text-gray-800 hover:bg-red-500 hover:text-white hover:scale-110">
                        <img className='w-full md:w-[500px] md:h-[200px]' src={card4} alt="" />
                        <div className="h-[300px] space-y-4 p-5">
                            <h1 className=' text-lg md:text-xl lg:text-xl font-bold'>Marriott International</h1>
                            <p className=''>Marriott International is a multinational hospitality company that operates a portfolio of over 7,000 properties across 131 countries, offering a range of accommodations and services to business and leisure travelers.</p>
                        </div>
                    </div>
                </Slide>


            </div>
        </div>
    );
};

export default Partner;