/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore,faDollarSign,faShoppingBag,faMoneyBill1Wave} from '@fortawesome/free-solid-svg-icons';




function Views(){
    return (
         <div className="w-full flex justify-center items-center mt-10 mb-1 ">
            {/* container */}
            <div className="sm:w-full md:w-[80%]  border-b-2 border-neutral-100 pb-10">

                {/* container boxes */}
              

                <div className="flex sm:flex-row gap-x-5 gap-y-10 md:flex-row lg:flex-row sm:justify-center md:justify-between mt-5 mb-4 sm:flex-wrap  lg:flex-nowrap">
                    {/* box1 */}
                    <div className=" shadow-lg border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer ">
                  {/* Icon mobile */}
                  <span className='bg-black rounded-full text-white p-3'><FontAwesomeIcon icon={faStore} size='2x'/></span>
                  <span className='text-xl font-bold '>10.5k </span>
                  <p  className='sm:text-[8px]  md:text-sm'>Sallers active our site</p>
                 </div>
                    
                    {/* box2 */}
                    <div className=" border-solid border-2 shadow-2xl rounded-md hover:bg-red-500  sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer ">
                  {/* Icon mobile */}
                  <span className='bg-black rounded-full text-white p-3'><FontAwesomeIcon icon={faDollarSign} size='2x'/></span>
                  <span className='text-xl font-bold '>33k</span>
                  <p  className='sm:text-[8px]  md:text-sm'>Monthly Produduct Sale</p>
                 </div>
                    {/* box 3 */}
                    <div className=" border-solid border-2 shadow-2xl rounded-md hover:bg-red-500   sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer">
                  {/* Icon mobile */}
                  <span className='bg-black rounded-full text-white p-3'><FontAwesomeIcon icon={faShoppingBag} size='2x'/></span>
                  <span className='text-xl font-bold '>45.5k </span>
                  <p className='sm:text-[8px]  md:text-sm'>Customer active in our site</p>
                 </div>
                    {/* box4 */}
                    <div className=" border-solid border-2 shadow-2xl rounded-md hover:bg-red-500   sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-2 justify-center items-center cursor-pointer ">
                  {/* Icon mobile */}
                  <span className='bg-black rounded-full text-white p-3'><FontAwesomeIcon icon={faMoneyBill1Wave} size='2x'/></span>
                  <span className='text-xl font-bold '>25k </span>
                  <p  className='sm:text-[8px]  md:text-sm'>Anual gross sale in our site</p>
                 </div>
               
                   {/* box complete */}
                   
                </div>
            </div>
         </div>
    )
}
export default Views;