import React, { useState } from 'react'
import Navbar from './Navbar'
import Feedback from './Feedback'
import Buttons from "./Buttons"
import Cards from "./Cards"
import Faq from "./Faq"
import Footer from "./Footer"

const Main = () => {

  const chips = ["Our Customers", "How to use?", "Features", "Support"]

  return (
    <div className="w-[100%]">
      <Navbar />
      <div className="hidden fixed left-[15px] top-[50%] -translate-y-[50%] lg:flex flex-col gap-[30px]">
        {
          chips.map((chip)=>{
            return(
          <div className="cursor-pointer flex items-center w-[10px] h-[33px] hover:w-[100%] hover:h-[100%] overflow-hidden">
            <div className="dot w-[10px] h-[10px] rounded-full bg-gray-500">&nbsp;&nbsp;&nbsp;</div>
            <div className="py-[5px] px-[25px] bg-purple-500 text-white rounded-2xl">{chip}</div>        
          </div>

          )})
        }
      </div>
      <div className="xl:container mx-auto my-0 mt-[200px] px-[20px] md:mt-[350px] flex flex-col md:flex-row gap-[30px] items-center justify-between">
        <div className="left-box lg:w-[50%] flex flex-col gap-[20px] md:gap-[40px] items-start">
          <h1 className="font-bold fonst-sans text-[30px] md:text-[35px] text-left">
            Transform Google Forms Into Interactive Workflows
          </h1>
          <p className="text-left text-[18px] md:text-[20px]">
            BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes.
          </p>
          <button className="premium-btn bg-purple-500 w-[100%] md:w-fit text-white text-[18px] flex items-center justify-center px-[35px] py-[12px] font-bold rounded-lg tracking-normal">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="mr-4 text-lg md:text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M477.64 38.26a4.75 4.75 0 00-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 00-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0010.55 11.2l87.31-9.63a194.1 194.1 0 001.19 19.7 19.53 19.53 0 005.7 12L170.7 375a19.59 19.59 0 0012 5.7 193.53 193.53 0 0019.59 1.19l-9.58 87.2a9.65 9.65 0 0011.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5 8.4-19.27 10.12-41.77 8.18-64.27a317.66 317.66 0 0042.21-35.64C441 232.05 491.74 99.74 477.64 38.26zM294.07 217.93a48 48 0 1167.86 0 47.95 47.95 0 01-67.86 0z"></path><path d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46-23.77 4.05-44.76-16.49-40.49-40.52 1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 00-3.65-7.45 60 60 0 00-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.69 59.69 0 00176 403.09c.37-4.18-4.72-6.67-7.6-3.66z"></path></svg>
              Install For Free
          </button>
        </div>
        <div className="right-box w-[100%] lg:w-[50%]">
        <iframe width="560" height="315" className="border-[5px] w-[100%] md:w-[560px] md:h-[315px] rounded-xl border-purple-500" src="https://www.youtube.com/embed/riiUkCRpIio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      <div className="xl:container mx-auto my-0 mt-[30px] md:mt-[300px] px-[20px]">
        <h1 className="text-center text-[30px] font-bold mb-[20px]">BoloForms Is Used By</h1>
        <div className="content-box mx-auto my-0">
          <div className="boxes h-[300px] flex gap-[20px] mx-auto w-[100%] lg:w-[80%] overflow-x-scroll items-center justify-between">
            <img className="w-[250px] h-[250px] border-[1px] rounded-xl shadow-xl" src={process.env.PUBLIC_URL + "/resource/1.890362c3.svg"} alt="" />
            <img className="w-[250px] h-[250px] border-[1px] rounded-xl shadow-xl" src={process.env.PUBLIC_URL + "/resource/2.0b0df285.svg"} alt="" />
            <img className="w-[250px] h-[250px] border-[1px] rounded-xl shadow-xl" src={process.env.PUBLIC_URL + "/resource/3.8cf4b5f3.svg"} alt="" />
            <img className="w-[250px] h-[250px] border-[1px] rounded-xl shadow-xl" src={process.env.PUBLIC_URL + "/resource/4.b84353dc.svg"} alt="" />
            <img className="w-[250px] h-[250px] border-[1px] rounded-xl shadow-xl" src={process.env.PUBLIC_URL + "/resource/5.9b049047.svg"} alt="" />
          </div>
        </div>
      </div>
      <div className="xl:container mx-auto my-0 mt-[30px] md:mt-[100px] px-[20px]">
        <div className=" text-center mb-[30px]">
          <h1 className="text-[30px] font-bold">How does BoloForms work?</h1>
          <p className="">Set up your first workflow in just 3 easy steps</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[30px] justify-between items-center">
          <div className="flex flex-col items-center">
            <img className="ease-in-out duration-300 hover:-translate-y-[10px]" src={process.env.PUBLIC_URL + "/resource/2.1.b2cc23b0.svg"} alt="" />
            <div className="step text-[30px] font-bold">Step 1:</div>
            <div className="">Choose a template or add questions to create your Google Form.</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="ease-in-out duration-300 hover:-translate-y-[10px]" src={process.env.PUBLIC_URL + "/resource/2.2.2709e204.svg"} alt="" />
            <div className="step text-[30px] font-bold">Step 2:</div>
            <div className="">Enable Single/Multi Step approval and add necessary approvers!</div>
          </div>
          <div className="flex flex-col items-center">
            <img className="ease-in-out duration-300 hover:-translate-y-[10px]" src={process.env.PUBLIC_URL + "/resource/2.2.2709e204.svg"} alt="" />
            <div className="step text-[30px] font-bold">Step 3:</div>
            <div className="">Now you can enable the workflow and share the Google Form.</div>
          </div>
        </div>
      </div>
      <Feedback name="Repa Mandala" image="/resource/repa.483a1471.jpeg" comment="Boloforms has been an absolute lifesaver for me. It makes workflow tasks much easier and helps to ensure that everything runs smoothly. I love how it automates tasks and eliminates manual processes, saving me time and effort. It's a great Google Workflow software and is well worth the money!" />
      <Buttons />
      <Cards />
      <Feedback name="Alaa Khaled" image="/resource/alaa.jpeg" comment="Boloforms has changed the way my team and I work. We used to have a very inefficient workflow, but Boloforms has streamlined it and allowed us to get our daily tasks done in a fraction of the time. Plus, it's incredibly user friendly and easy to understand. I highly recommend Boloforms for anyone who needs an efficient Google workflow software!" />
      <Buttons />
      <Feedback name="Deepak S (Solero Corporation)" image="/resource/deepak.e041dab0.jpeg" comment="Easy to use interface and timely support...looking for more features" />
      <Faq />
      <div className="xl:container hidden md:block mx-auto my-0 mt-[30px] md:mt-[100px] px-[20px]">
        <div className=" text-center mb-[50px]">
            <h1 className="text-[35px] font-bold flex items-center justify-center gap-[20px]">Customers Who Are Trusting Us! <img className="w-[40px]" src={process.env.PUBLIC_URL + "/resource/love.svg"} alt="" /></h1>
            <p className="text-[20px]">Customers' Testinomials</p>
         </div>
         <div className="w-[100%]">
          <img src={process.env.PUBLIC_URL+"/resource/timer_reviews.c0a05474.svg"} alt="" />
         </div>
      </div>
      <Footer />   
      <div className="fixed right-[30px] bottom-[50px] w-[60px] h-[60px] rounded-full bg-black grid place-items-center cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" height="32px" width="32px" role="img" alt="Chat icon" class="tawk-min-chat-icon"><path fill-rule="evenodd" fill="white" clip-rule="evenodd" d="M400 26.2c-193.3 0-350 156.7-350 350 0 136.2 77.9 254.3 191.5 312.1 15.4 8.1 31.4 15.1 48.1 20.8l-16.5 63.5c-2 7.8 5.4 14.7 13 12.1l229.8-77.6c14.6-5.3 28.8-11.6 42.4-18.7C672 630.6 750 512.5 750 376.2c0-193.3-156.7-350-350-350zm211.1 510.7c-10.8 26.5-41.9 77.2-121.5 77.2-79.9 0-110.9-51-121.6-77.4-2.8-6.8 5-13.4 13.8-11.8 76.2 13.7 147.7 13 215.3.3 8.9-1.8 16.8 4.8 14 11.7z"></path></svg>
      </div>
    </div>
  )
}

export default Main
