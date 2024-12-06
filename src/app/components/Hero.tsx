/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';

import Image from "next/image"
import Link from 'next/link';
function Hero(){
    return(
        <div className="w-full flex justify-center items-center">
            <div className="sm:w-full md:w-full lg:w-[80%] flex ">
                {/* left side */}
                <div className='border-r-2 border-neutral-100 p-10 sm:hidden md:block  pb-0  '>
                    <ul>
                        <li className='leading-loose hover:underline cursor-pointer'>Woman&apos;s Fashion  <FontAwesomeIcon icon={faChevronRight} className='text-xs ml-2'></FontAwesomeIcon></li>
                        <li className='leading-loose hover:underline cursor-pointer'>Men&apos;s Fashion  <FontAwesomeIcon icon={faChevronRight} className='text-xs ml-8'></FontAwesomeIcon></li>
                        <li className='leading-loose hover:underline cursor-pointer'>Electronics</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Home & Lifestyle</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Medicine</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Sports & Outdoor</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Baby&apos;s & Toys</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Groceries & Pets</li>
                        <li className='leading-loose hover:underline cursor-pointer'>Health & Beauty</li>
                        
                    </ul>
                </div>
                {/* right side */}
                <div className='sm:w-full md:w-[650px] lg:w-[770px] sm:ml-0 md:ml-0 lg:ml-3 sm:mt-0 md:mt-10 sm:h-[250] md:h-[280px] bg-black flex justify-between pt-6 '>
                     {/* left side */}
                     <div className='text-white sm:w-[140px] md:w-[200px] pt-4 ml-5'>
                          {/* icon div */}
                          <div className='flex gap-x-2 items-center'>
                            <span> <FontAwesomeIcon icon={faApple} className="text-white sm:text-2xl md:text-4xl" /> </span>
                            <span className='sm:text-[10px] md:text-xs'>iPhone 14 Series</span>
                          </div>
                          <h1 className='sm:text-md md:text-4xl font-bold my-5'>Up to 10% off Voucher</h1>
                         <Link href={"#products"} className=' underline underline-offset-4 hover:font-bold'>Shop Now-&gt;</Link>
                          {/* <button className=' underline underline-offset-8 hover:font-bold'>Shop Now-&gt;</button> */}
                     </div>

                     {/* right side */}
                     <div>
                        <Image src={"/images/hero/iphone.png"}
                        width={350}
                        height={200}
                        alt='hero iamges'></Image>
                     </div>
                 </div>
            </div>
        </div>
    )
}
export default Hero;