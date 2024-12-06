/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt,faDesktop,faStopwatch,faCamera,faHeadphones,faGamepad } from '@fortawesome/free-solid-svg-icons';




function Category(){
    return (
         <div className="w-full flex justify-center items-center mt-10 mb-1 ">
            {/* container */}
            <div className="sm:w-full md:w-[80%]  border-b-2 border-neutral-100 pb-10">

                {/* container boxes */}
                <div className="flex flex-col sm:pl-[6%] md:pl-0">
                    <h3 className="text-red-500 font-bold border-l-8  border-red-400 pl-3 ml-1">Categories</h3>
                    <div className="flex ">
                    <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">Browse By Category</h1> 
                  </div>
                </div>

                <div className="flex sm:flex-row gap-x-5 gap-y-10 md:flex-row lg:flex-row sm:justify-center md:justify-between mt-5 sm:flex-wrap  lg:flex-nowrap">
                    {/* box1 */}
                    <div className="group shadow-2xl border-solid border-2 rounded-md hover:bg-red-500 sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                  {/* Icon mobile */}
                  <FontAwesomeIcon icon={faMobileAlt} size='3x' />
                  <p>Phones</p>
                 </div>
                    
                    {/* box2 */}
                    <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500  sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                  {/* Icon mobile */}
                  <FontAwesomeIcon icon={faDesktop} size='3x' />
                  <p>Computers</p>
                 </div>
                    {/* box 3 */}
                    <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500   sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                  {/* Icon mobile */}
                  <FontAwesomeIcon icon={faStopwatch} size='3x' />
                  <p>SmartWatch</p>
                 </div>
                    {/* box4 */}
                    <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500   sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                  {/* Icon mobile */}
                  <FontAwesomeIcon icon={faCamera} size='3x' />
                  <p>Camera</p>
                 </div>
                 {/* box 5 */}
                 <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500  sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                 {/* Icon mobile */}
                  <FontAwesomeIcon icon={faHeadphones} size='3x' />
                  <p>Headphones</p>
                 </div>
                  {/* box 6 */}
                  <div className="group border-solid border-2 shadow-2xl rounded-md hover:bg-red-500   sm:w-[120px] md:w-[200px] h-[150px] flex flex-col gap-y-5 justify-center items-center cursor-pointer relative">
                  {/* Icon mobile */}
                  <FontAwesomeIcon icon={faGamepad} size='3x' />
                  <p>Gaming</p>
                 </div>
                   {/* box complete */}
                   
                </div>
            </div>
         </div>
    )
}
export default Category