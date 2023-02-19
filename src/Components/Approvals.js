import React from 'react'

const Approvals = () => {
  return (
   <div className="xl:container mx-auto my-0 mt-[30px] md:mt-[100px] px-[20px] flex flex-col items-center justify-center border rounded-xl p-[30px]">
      <div className=" text-center mb-[50px]">
          <h1 className="text-[30px] font-bold">Fully Automated Workflows</h1>
          <p className="text-[17px] md:text-[20px]">No more painful manual approval management and wasting countless hours.</p>
      </div>
      <div className="approval-boxes">
         <div className="ap-box">
            <div className="approval-box-left approval-box">
               <div className="approval-content">
                  <img src={process.env.PUBLIC_URL+"/resource/purchase_request.e735191e.svg"} alt="" />
                  Leave Application
               </div>
               <div className="approval-content">
                  <img src={process.env.PUBLIC_URL+"/resource/purchase_request.e735191e.svg"} alt="" />
                  Purchase Order
               </div>
               <div className="approval-content">
                  <img src={process.env.PUBLIC_URL+"/resource/purchase_request.e735191e.svg"} alt="" />
                  Fulfillment
               </div>
            </div>
            <div className="approval-border"></div>
         </div>
         
         <img className="approval-image" src={process.env.PUBLIC_URL+"/resource/approvals.73c8d904.svg"} alt="" />
         
         <div className="ap-box">
            <div className="approval-border"></div>
            <div className="approval-box-right approval-box">
               <div className="approval-content">
                  <img src={process.env.PUBLIC_URL+"/resource/purchase_request.e735191e.svg"} alt="" />
                  Approval
               </div>
               <div className="approval-content">
                  <img src={process.env.PUBLIC_URL+"/resource/purchase_request.e735191e.svg"} alt="" />
                  Reject
               </div>
               <div className="approval-content">
                  <img src={process.env.PUBLIC_URL+"/resource/purchase_request.e735191e.svg"} alt="" />
                  Send Pdf
               </div>
            </div>
         </div>
         
      </div>
      <div className=" text-center mt-[20px]">
          <p className="text-[17px] md:text-[20px]">BoloForms workflows acts as a glue holding together all your approval processes.</p>
      </div>
   </div>
  )
}

export default Approvals
