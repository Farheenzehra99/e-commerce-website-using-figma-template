/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faHeart} from '@fortawesome/free-regular-svg-icons';

import Image from "next/image"
import Link from 'next/link';

function Products(){
    return (
        <main>
         <div className="w-full flex justify-center items-center mt-10 mb-1 ">
            {/* container */}
            <div className="w-[80%]">
                {/* container boxes */}
                <div className="flex flex-col">
                    <h3 className="text-red-500 font-bold border-l-8  border-red-400 pl-3 ml-1">This Month</h3>
                    <div className="flex justify-between">
                    <h1 className="text-gray-800 font-bold sm:text-md md:text-3xl lg:text-3xl pt-4">Best Selling Products</h1>
                    <Link href={"#products"} className='bg-red-500 pt-2 hover:bg-red-600  sm:px-3 md:px-7 sm:text-sm md:text-sm py-0 text-white rounded-sm h-10 mt-3  '>View All</Link>

                    </div>
                </div>
                <div className="flex sm:flex-col md:flex-row lg:flex-row justify-between mt-5 sm:flex-nowrap md:flex-wrap lg:flex-nowrap">
                    {/* box1 */}
                    <div>
                    <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                  {/* Image */}
                  <Image
                    src={"/images/bestSeling/shirt.png"}
                    width={150}
                    height={100}
                    alt="game-images"
                  />
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                 </div>

                    <h1 className="font-bold font-sans pt-2 ">The north coat</h1>
                    <span className="text-red-500 font-bold">$260</span> <span className="text-gray-400 font-bold line-through ml-2">$360</span>
                    
                    <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(88)</span>

                     </div>
                    </div>
                    {/* box2 */}
                    <div>
                    <div className="group shadow-md bg-neutral-100 sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center cursor-pointer relative">
                  {/* Image */}
                  <Image
                    src={"/images/bestSeling/prs.png"}
                    width={150}
                    height={100}
                    alt="game-images"
                  />
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                 </div>
                    <h1 className="font-bold font-sans pt-2 ">Gucci duffle bag</h1>
                    <span className="text-red-500 font-bold">$960</span> <span className="text-gray-400 font-bold line-through ml-2">$1160</span>
                    <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(90)</span>

                     </div>
                    </div>
                    {/* box 3 */}
                    <div>
                    <div  className="shadow-md group relative bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px]  h-[180px] flex justify-center items-center"> 
                        <Image src={"/images/bestSeling/speaker.png"}
                        width={150} height={100} 
                        alt="game-images">
                        </Image>
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                    </div>
                    <h1 className="font-bold font-sans pt-2">RGB liquid CPU Cooler</h1>
                    <span className="text-red-500 font-bold">$160</span> <span className="text-gray-400 font-bold line-through ml-2">$170</span>
                    <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 mb-5">
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(95)</span>

                     </div>
                    </div>
                    {/* box4 */}
                   <div>
                   <div className="group shadow-md relative bg-neutral-100 cursor-pointer sm:w-full md:w-[300px] lg:w-[220px] h-[180px] flex justify-center items-center"> 
                   <Image src={"/images/bestSeling/table.png"}
                        width={150} height={100} 
                        alt="game-images">
                        </Image>
            <span className='absolute top-1 right-1 text-red rounded-full'><FontAwesomeIcon icon={faHeart} className='text-xl  ' /></span>

                  {/* Add to Cart */}
                  <button className=" w-full absolute bottom-0   bg-black text-white px-4 py-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Add to Cart
                  </button>
                    </div>
                    <h1 className="font-bold font-sans pt-2">Small BookSelf </h1>
                    <span className="text-red-500 font-bold">$320</span> 
                    <div className="flex space-x-1 ml-1 text-yellow-400 text-md pt-1 ">
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={solidStar} />
                      <FontAwesomeIcon icon={regularStar} /> {/* Empty star */}
                      <span className='text-gray-400'>(99)</span>
                     </div>
                   </div>
                   {/* box complete */}
                   
                </div>
            </div>
         </div>
     
    
         </main>
    )
}
export default Products;