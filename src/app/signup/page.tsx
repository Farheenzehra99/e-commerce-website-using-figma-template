import Image from "next/image"


function Signup(){
    return(
        <div className="w-full flex sm:flex-col md:flex-col lg:flex-row justify-start items-start">
            {/* left */}
            <div className="sm:w-full md:w-full lg:w-[600px] sm:h-full lg:h-[500px] sm:m-0 sm:mt-10 lg:m-11 cursor-pointer">
                <Image src={"/images/signup/mobile.png"}
                width={400}
                height={400}
                alt="Mobile"
                className="w-full"></Image>

            </div>
            {/* right */}
            <div className="sm:w-full lg:w-[600px] sm:h-full lg:h-[500px]  my-11 flex flex-col justify-center items-center">
              <div className="w-[70%] h-[80%] ">
              <div>
              <h1 className="sm:text-lg md:text-2xl lg:text-3xl">Create an account</h1>
              <p className="text-sm pt-2">Enter your details below</p>
              </div>
              <form action="" >
              <input type="text" placeholder="Name" className="py-2 px-3 w-96 mt-5 bg-transparent border-b-2"/> <br />
              <input type="email" placeholder="Email or Phone Number" className="py-2 px-3 w-96 mt-5 bg-transparent border-b-2 "/> <br />
              <input type="password" placeholder="password" className="py-2 px-3 w-96 mt-5 bg-transparent border-b-2"/> <br />
              {/* <button className='bg-red-500 hover:bg-red-600 py-2 px-5 text-white rounded-sm  '>Create Account</button> */}
                <input className="py-2 px-10 w-96 mt-5 bg-red-500 hover:bg-red-600  text-white rounded-sm " type="button" value="Create Account" />

                <button className="flex items-center justify-center gap-2 outline py-2 px-4 w-96 mt-5 bg-white hover:bg-gray-100 text-black rounded-sm">
                  <Image src="/images/google.jpg" width={20} height={20} alt="Google" />
                  <span>Sign up with Google</span>
                </button>
                <p  className="px-2 py-6 ml-20">Already have an account? login</p>
              </form>
              </div>
            </div>
        </div>
    )
}
export default Signup;