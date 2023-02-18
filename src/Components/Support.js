import React from 'react'

const supportData = [
   {
      id:1,
      image:"/resource/live-chat-support.8700dc17.png",
      haed1:"Whatsapp chat",
      head2:"Ask a question right now.",
      btntext:"Start a Chat"
   },
   {
      id:2,
      image:"/resource/support-email.d67bf660.png",
      haed1:"Email",
      head2:"Get in touch by email.",
      btntext:"Send an Email"
   },
   {
      id:3,
      image:"/resource/helpcenter.1d93444b.png",
      haed1:"Help Center",
      head2:"In Depth Guides.",
      btntext:"Read articles"
   },
   {
      id:4,
      image:"/resource/book-time.934f28c8.png",
      haed1:"Google Meet",
      head2:"Guided support and Q&A.",
      btntext:"Book a time"
   },
]



const Support = () => {
  return (
   <div className="xl:container mx-auto my-0 mt-[30px] md:mt-[100px] px-[20px]">
      <div className="flex flex-col items-center justify-center text-center mb-[50px]">
         <img className="w-[200px]" src={process.env.PUBLIC_URL + "/resource/stars.big.png"} alt="" />
         <h1 className="text-[45px] font-bold">Award-winning support.</h1>
         <h2 className="text-[18px]">Best-in-class support. We’re always here to help – here’s how to connect.</h2>
      </div>
      <div className="grid grid-col-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-4">
         {supportData.map((sd) => {
            return (
               <div className="p-[20px] flex flex-col justify-between items-left gap-[10px] rounded-lg border-[1px] shadow-xl">
                  <img className="w-[100%]" src={process.env.PUBLIC_URL+sd.image} alt="" />
                  <h1 className="font-bold text-[35px] text-left">? {sd.haed1}</h1>
                  <p className="text-16px text-left">{sd.head2}</p>
                  <button className="rounded-lg w-[100%] border-2 border-purple-500 py-[5px]">{sd.btntext}</button>
               </div>
            )
         })}
         
      </div>
   </div>
  )
}

export default Support
