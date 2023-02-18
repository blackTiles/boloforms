import React from 'react'

const cardData = [
   {
      id:1,
      image:"1.svg",
      cardtitle:"Get started in less than 5 minutes.",
      description:"Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made.",
   },
   {
      id:2,
      image:"2.svg",
      cardtitle:"Multi-level workflows",
      description:"To ensure that your executives do not approve a document until it has been reviewed and accepted by other employees, you can set up multi-level approval processes.",
   },
   {
      id:3,
      image:"3.svg",
      cardtitle:"Dynamic Reciepients",
      description:"Approvers can be selected based on the answers to a form response or entered manually by the requestor.",
   },
   {
      id:4,
      image:"4.svg",
      cardtitle:"Role Based Workflows",
      description:"Assign the following roles to your recipients: Approver, Receive a Copy, and Send Final Email Only.",
   },
   {
      id:5,
      image:"5.svg",
      cardtitle:"Conditional Logic",
      description:"To prevent unnecessary work for approvers, set logic with your approvals to ensure approvers only receive the requests that are relevant to them.",
   },
   {
      id:6,
      image:"6.svg",
      cardtitle:"One-click Approvals",
      description:"Notification emails are sent to users and can be approved with a single click.",
   },
   {
      id:7,
      image:"7.svg",
      cardtitle:"Responsive design",
      description:"It is designed to be mobile-first, and seamlessly works on desktop and tablet as well.",
   },
   {
      id:8,
      image:"8.svg",
      cardtitle:"Enterprise grade security",
      description:"Majority of data stored in your spreadsheet. This ensures you have the complete control of your data with end to end encryption.",
   },
   {
      id:9,
      image:"9.svg",
      cardtitle:"Custom Dashboard",
      description:"Track approvals of various forms from a single place! See the approval process for each request in real-time",
   },
]

const Cards = () => {
   
  return (
   <div className="xl:container mx-auto my-0 my-[30px] md:mt-[100px] px-[20px]">
      <div className=" text-center mb-[50px]">
          <h1 className="text-[30px] font-bold">How does BoloForms work?</h1>
          <p className="">Set up your first workflow in just 3 easy steps</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[50px] sm:gap-[30px]">
            {cardData.map((card)=>{
               return(
                  <div className="flex flex-col items-start gap-[10px] text-left">
                  <img src={process.env.PUBLIC_URL + "/resource/features/"+card.image} alt="" />
                  <div className="font-bold text-[25px]">{card.cardtitle}</div>
                  <div className="text-[17px]">{card.description}</div>
               </div> 
               )
            })}
      </div>
   </div>
  )
}

export default Cards
