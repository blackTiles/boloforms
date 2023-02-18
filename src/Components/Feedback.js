import React from 'react'

const Feedback = ({name, image, comment}) => {
  return (
    <div className="xl:container mx-auto my-0 mt-[30px] md:mt-[100px] mb-[100px]">
      <div className="mx-[10px] my-0 px-[20px] py-[30px] shadow-2xl rounded-xl flex items-center justify-start gap-[20px]">
            <img className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] rounded-full object-cover" src={process.env.PUBLIC_URL + image} alt="" />
            <div className="flex flex-col items-start text-left gap-[10px]">
                <img className="w-[150px]" src={process.env.PUBLIC_URL + "/resource/Stars.885edd0c.svg"} alt="" />
                <div className="para">"{comment}"</div>
                <div className="name font-bold">{name}</div>
            </div>
      </div>
   </div>
  )
}

export default Feedback
