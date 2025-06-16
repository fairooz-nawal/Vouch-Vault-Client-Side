import { FaAngleRight } from "react-icons/fa6";
import bg from "../assets/ready.jpg"
const Ready = () => {
    return (
        <div className="">
            <div className="text-center">
                <p className='text-orange-600 font-semibold text-2xl'>Ready to serve you</p>
                <h className=' text-2xl md:text-3xl lg:text-5xl font-bold'>Successful work</h>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className=""><img src={bg} alt="" /></div>
                <div className="bg-sky-500">
                    <div className="space-y-4 md:ml-5 md:mt-5 text-white p-5">
                        <p className='text-orange-600 font-semibold text-2xl p-5 bg-white'>Ready to serve you</p>
                        <h className=' text-2xl md:text-3xl lg:text-5xl font-bold'>Successful work With successful team</h><br /><br />
                        <div className="flex items-center pl-5"><FaAngleRight className="text-orange-600"></FaAngleRight> <p>New Marketing Strategy</p></div>
                        <div className="flex items-center pl-5"><FaAngleRight className="text-orange-600"></FaAngleRight> <p>Branding Design</p></div>
                        <div className="flex items-center pl-5"><FaAngleRight className="text-orange-600"></FaAngleRight> <p>Having a plan feels good</p></div>
                        <div className="flex items-center pl-5"><FaAngleRight className="text-orange-600"></FaAngleRight> <p>Discover what's possible</p></div>
                        <div className="flex items-center pl-5"><FaAngleRight className="text-orange-600"></FaAngleRight> <p>People really matter</p></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Ready;