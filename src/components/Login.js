import { useState } from "react"
import { Header } from "./Header"

export const Login = () => {

     const [isSignInFrom, setIsSignForm] = useState(true);

    const toggleSignInForm = () => {
            setIsSignForm(!isSignInFrom)
    }


    return (
   
          < div>
         <Header/>
          <div className=" absolute">
            <img src= "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="bg-pic" />
            </div>

            <from  className='w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0  text-white bg-opacity-80' >
                <h1 className=" font-bold text-3xl py-4" >{ isSignInFrom? 'Sign In' : 'Sign Up'} </h1>

                { !isSignInFrom &&  <input 
                 type="text" 
                 placeholder="Full Name" 
                 className="p-4 my-4 w-full bg-gray-700 rounded-lg"  
                />}
             
                <input
                 type="text" 
                 placeholder="Email Address" 
                 className="p-4 my-4 w-full bg-gray-700 rounded-lg"  
                
                />
               
                
                <input 
                 type="password" 
                 placeholder="Password" 
                 className="p-4 my-4 w-full bg-gray-700 rounded-lg"  
                />


                <button className="p-4 my-6 bg-red-700  w-full rounded-lg ">{ isSignInFrom? 'Sign In' : 'Sign Up'}  </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{ isSignInFrom? 'New to Netflix? Sign Up Now' : 'Already Registered ? Sign In Now.'} </p>
            </from>
        </div>

    
    )
}

