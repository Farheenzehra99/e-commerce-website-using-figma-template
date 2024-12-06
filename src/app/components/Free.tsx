/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTruckFast,faHeadphonesAlt,faCheckSquare} from '@fortawesome/free-solid-svg-icons';


export default function Freedelvry(){
    return(
        <div className="w-full sm:h-[500px] lg:h-[300px] flex justify-center items-center ">
            <div className="sm:w-[100%] lg:w-[70%] sm:justify-center gap-y-4 sm:items-center flex sm:flex-col md:flex-col lg:flex-row  lg:justify-evenly  gap-x-4 ">
                
                {/* boxe 1 */}
                <div className='w-[260px] h-[130px]  flex justify-center items-center flex-col gap-y-3'>
                <div className='w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center'>
                    <span><FontAwesomeIcon icon={faTruckFast} className='text-2xl'/></span></div>
                  <div>
                    <h1 className='font-bold text-center'>FREE AND FAST DELIVERY</h1>
                    <p className='text-sm'>Free delivery for all orders over $140</p>
                </div>
                </div>
                {/* box 2 */}
                <div className='w-[260px] h-[130px]  flex justify-center items-center flex-col gap-y-3'>
                <div className='w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center'>
                    <span><FontAwesomeIcon icon={faHeadphonesAlt} className='text-2xl'/></span></div>
                  <div>
                    <h1 className='font-bold text-center'>24/7 CUSTOMER SERVICE</h1>
                    <p className='text-sm'>Friendly 24/7 customer support</p>
                </div>
                </div>
                {/* box 3 */}
                <div className='w-[260px] h-[130px]  flex justify-center items-center flex-col gap-y-3'>
                <div className='w-[50px] h-[50px] rounded-full bg-gray-400 flex justify-center items-center'>
                    <span><FontAwesomeIcon icon={faCheckSquare} className='text-2xl'/></span></div>
                  <div>
                    <h1 className='font-bold text-center'>MONEY BACK GUARANTEE</h1>
                    <p className='text-sm'>We reurn money within 30 days</p>
                </div>
                </div>
                {/* boxes complete */}
            </div>
        </div>
    )
}