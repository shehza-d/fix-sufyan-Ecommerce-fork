import React from "react";
import { Link } from "react-router-dom";

function SiginUp() {
  return (
    //     <div className='font-semibold text-lg    flex flex-col items-center gap-2 justify-center' >SiginUp

    // <form action="">
    //     <ul className='font-normal text-xs flex flex-col gap-5 items-center'>
    //        <li> <label htmlFor="">UserName :<input type="text" name="" id="" /></label></li>
    //        <li> <label htmlFor="">UserEmail :<input type="email" name="" id="" /></label></li>
    //        <li> <label htmlFor="">Password :<input type="password" name="" id="" /></label></li>
    //        <li> <label htmlFor="">Cheak Password :<input type="password" name="" id="" /></label></li>
    //        <li>  <button>Submit</button></li>
    //        </ul>
    //         </form>
    //     </div>

    <section className="bg-gray-50 dark:bg-black">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {/* <a
      href="#"
      className="flex items-center mb-6 text-2xl font-semibold text-black dark:text-white"
    >
      <img
        className="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo"
      />
      Flowbite
    </a> */}
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl flex justify-center font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded block w-full p-2.5  "
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded  block w-full p-2.5"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-black text-sm    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 rounded"
                  required=""
                />
              </div>
              {/* <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms"
                className="font-light text-black dark:text-gray-300"
              >
                I accept the{" "}
                <Link
                  className="font-medium hover:text-myTheme text-primary-600 hover:underline dark:text-primary-500"
                  href="#"
                >
                  Terms and Conditions
                </Link>
              </label>
            </div>
          </div> */}
              <button
                type="submit"
                className="w-full text-white bg-black active:bg-myTheme  font-medium rounded text-sm px-5 py-2.5 text-center "
              >
                Create an account
              </button>
              <p className="text-sm font-light flex justify-center text-black dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="#"
                  className="font-medium hover:text-myTheme text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SiginUp;
