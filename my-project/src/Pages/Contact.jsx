
import React from 'react'
import location from "../assets/profilepic/location.jpg"
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <section className="text-black body-font relative ">
  <div className="container px-5 py-24 mx-auto flex  sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2   overflow-hidden sm:mr-10 p-10 flex flex-col items-center justify-start relative">
      {/* <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
      /> */}
      <img  className='w-[100%] my-3' src={location} alt="" />
      {/* <div className="bg-white relative flex flex-wrap py-6  shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
           Bhadorabad Head Office Saylani (S)
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-myTheme leading-relaxed">Abc@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">9202-006-2233</p>
        </div>
      </div> */}
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-black  text-3xl mb-1 2xl:font-extrabold xl:font-extrabold lg:font-extrabold md:font-bold sm:font-bold mobile:font-bold title-font">
        Feedback
      </h2>
      <p className="leading-relaxed mb-5 text-black">
        We Need For Your Feedback
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-black">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white  border border-gray-300  focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-black">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white  border border-gray-300 focus:border-black   text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-black">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white  border border-gray-300   h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <button className="text-white bg-black border-0 py-2 px-6 focus:outline-none active:bg-myTheme  text-lg">
        Button
      </button>
      <p className="text-xs text-black mt-3">
       The Knowldge is Light
      </p>
    </div>
  </div>
  <div className="flex justify-center items-start my-3"><Link className="bg-myTheme active:bg-red-700 py-3 px-8 rounded text-white" to={"/"}>Go To Home</Link></div>
</section>



  )
}

export default Contact