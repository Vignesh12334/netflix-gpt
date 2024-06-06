import { useRef, useState } from "react";
import { Header } from "./Header";
import { checkValidateData } from "../utils/Validate";
import { signUpValidation } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Login = () => {
  const [isSignInFrom, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [signUpError, setSignUpError] = useState(null);


  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    //validate the form data

    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidateData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);

    if (message) return;

    if (!message) {
      if (isSignInFrom) {
      } else {
        handleSignUp();
      }
    }

    if (!isSignInFrom) {
      //signUp
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("User : ", user);
          navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSignUpError(errorCode , "-" , errorMessage);
         
        });
    } else {
      // signIn
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in

          const user = userCredential.user;
          // console.log(user)
          navigate("/browse")
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode ,'-', errorMessage)

        });
    }
  };

  const handleSignUp = () => {
    console.log(name.current.value);

    const signUp = signUpValidation(name.current.value);

    setSignUpError(signUp);
  };

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInFrom);
  };

  return (
    <div>
      <Header />
      <div className=" absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-pic"
        />
      </div>

      <from className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0  text-white bg-opacity-80">
        <h1 className=" font-bold text-3xl py-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}{" "}
        </h1>

        {!isSignInFrom && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        <p className=" text-red-500  font-bold text-lg p-2 ">
          {isSignInFrom ? errorMessage : signUpError}
        </p>

        <button
          className="p-4 my-6 bg-red-700  w-full rounded-lg "
          onClick={handleButtonClick}
        >
          {isSignInFrom ? "Sign In" : "Sign Up"}{" "}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInFrom
            ? "New to Netflix? Sign Up Now"
            : "Already Registered ? Sign In Now."}{" "}
        </p>
      </from>
    </div>
  );
};
