import React, { useState } from "react";

const Navbar = () => {

   const [navbar, setNavbar] = useState("hidden");
   const [extraElement, setExtraElement] = useState("hidden");

   const navElement = [
      {id:1, image:"/resource/top1.5489abce.svg", title:"Form Approvals", description:"Create interactive workflows, approval flows & automate processes using Google Forms"},
      {id:1, image:"/resource/top2.svg", title:"SheetGod", description:"AI-powered Excel magic made easy!"},
      {id:1, image:"/resource/top3.svg", title:"Signature", description:"Add Signature href your Google Forms"},
   ]

  return (
    <div className="navbar fixed top-0 left-[50%] -translate-x-[50%] xl:container mx-auto my-0 px-[10px] md:px-[20px] w-[100%] flex justify-between items-center">
      <div className="nav-left flex items-center gap-[40px]">
        <img
          className="w-[150px]"
          src={process.env.PUBLIC_URL + "/resource/logo.png"}
          alt=""
        />
        <ul className="lg:flex gap-[20px] hidden">
          <li onClick={()=>{
            extraElement === "hidden"?setExtraElement("visible"):setExtraElement("hidden")
          }} className="flex font-bold cursor-pointer">
            Products
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="text-xl ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
            </svg>
            {
               extraElement === "hidden"?
               ""
               :
               <div className="absolute bg-white z-100 top-[100px] px-[30px] py-[30px] rounded-xl border shadow-lg hidden lg:flex flex-col">
               {
                  navElement.map((element)=>{
                     return(
                        <div className="flex items-start gap-[10px] p-[15px] rounded-xl hover:bg-gray-200">
                           <img src={process.env.PUBLIC_URL + element.image} alt="" />
                           <div className="flex flex-col items-start gap-[15px]">
                              <div className="title">{element.title}</div>
                              <div className="desc text-gray-600 font-thin">{element.description}</div>
                           </div>
                        </div>
                  )})
               }
            </div>
            }
            
          </li>
          <li className="cursor-pointer font-bold">Pricing</li>
          <li className="cursor-pointer font-bold">Guides</li>
          <li className="cursor-pointer font-bold">Templates</li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="nav-btns lg:flex hidden items-center gap-[20px]">
          <button className="install-btn text-[16px] px-[35px] py-[10px] border-2 border-purple-500 font-bold rounded-xl text-purple-500 hover:text-white hover:bg-purple-500">
            Install Now
          </button>
          <button className="premium-btn bg-purple-500 text-white text-[16px] px-[35px] py-[10px] font-bold rounded-xl tracking-normal">
            BoloForms Premium
          </button>
        </div>
        <div className="hamburger lg:hidden">
         {
            navbar === "hidden"?
               <svg onClick={()=>{ setNavbar("opened") }} width="30" height="30" className="cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor" />
                  <path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="currentColor" />
                  <path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="currentColor" />
               </svg>
            :
               <svg onClick={()=> {setNavbar("hidden")}} width="30" height="30" className="cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z" fill="currentColor" />
               </svg>
         }
          
          
          {
            navbar === "opened"?
            <div className="mobile-nav absolute lg:hidden top-[100px] left-[0px] w-[100%] h-[100vh] py-[50px] px-[30px] bg-gray-200">
            <ul className="flex flex-col items-start gap-[15px] text-[25px]">
               <li className="cursor-pointer">Products</li>
               <li className="cursor-pointer">Pricing</li>
               <li className="cursor-pointer">Blogs</li>
               <li className="cursor-pointer">Guides</li>
               <li className="cursor-pointer">Templates</li>
               <li className="cursor-pointer">About Us</li>
            </ul>
            <div className="nav-btns flex flex-col items-center gap-[20px] mt-[30px]">
               <button className="install-btn w-[100%] text-[20px] px-[35px] py-[10px] border-2 border-purple-500 rounded-xl text-purple-500 hover:text-white hover:bg-purple-500">
                  Install Now
               </button>
               <button className="premium-btn w-[100%] bg-purple-500 text-white text-[16px] px-[35px] py-[15px] font-bold rounded-xl tracking-normal">
                  BoloForms Premium
               </button>
            </div>
            </div>
          :
          ""
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
