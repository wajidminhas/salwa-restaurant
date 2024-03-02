
"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

interface PropsTypes{
    id : number;
    title : string;
    img : string;
}

const data = [
    {
        id : 1,
        title: "always fresh & always crispy & always hot",
        img : "/slide1.png"
    },
    {
        id : 2,
        title: "we deliver your order where you are in NY",
        img : "/slide2.png"
    },
    {
        id: 3,
        title : "the best pizza to share with your family",
        img : "/slide3.jpg"
    },
    
]
const HeroTwo : React.FC<PropsTypes> = ({id, title, img}) => {
    const [currentSlide, SetcurrentSlide] = useState(1)
    // here we will use useEffect for creating a slider 
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         SetcurrentSlide(currentSlide => (currentSlide + 1) % data.length)
    //     }, 3000)
    //     return () => clearInterval(interval)
    // }, [])

  return (
      <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center md:justify-center text-center">
                  <svg
                      width="30"
                      height="36"
                      viewBox="0 0 50 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path
                          d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                          fill="black"
                      />
                  </svg>
                  <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1 lg:mb-3">
                      <div className="rounded-full bg-white p-1 px-2">
                          <p className="text-sm font-medium">Place&apos; order</p>
                      </div>
                      <p className="text-sm font-medium" >Enjoy fresh meal &rarr;</p>
                  </div>
                  <h1 className="title-font sm:text-4xl  text-3xl mb-4 font-medium lg:font-extrabold text-gray-900">
                      {data[currentSlide].title}
                      <br className="hidden lg:inline-block" />
                      {/* readymade gluten */}
                  </h1>
                  <p className="mb-8 leading-relaxed">
                      Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                      plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                      tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                      chambray.
                  </p>
                  <div className="flex justify-center">
                      <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                          Button
                      </button>
                      <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                          Button
                      </button>
                  </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img
                      className="object-cover object-center rounded-lg"
                      alt="hero"
                      src={data[currentSlide].img}
                      
                  />
              </div>
          </div>
      </section>


  )
}

export default HeroTwo