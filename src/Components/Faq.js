import React, { useState } from 'react'

const faqs = [
   {
      id: "1",
      question: "What is the difference between email and request?",
      answer: "A request needs to send multiple emails to different recipients and respondent (optional) for approval. This means that one request may costs lots of email quota."
   },
   {
      id: "2",
      question: "How to calculate the number of requests based on email quota?",
      answer: "Emails & Requests are different. For examples, if you set up a workflow with 2 recipients, a form respondent submit a request then 2 emails counted to be sent to 2 recipients. In average, a request from our users consists of 4 emails. That is why free plan (500 emails) is calculated to be approximately 125 requests per month. The smaller number of recipient you set up in the workflow, the more request you have with a fixed email quota and vice versa."
   },
   {
      id: "3",
      question: "What will happen if I run out of email quota?",
      answer: "When you run out of email quota, the addon will temporary stop running. You will have to wait for quota renewal to send email again. If you are Free user, you can purchase Individual Plan and enjoy much higher quotas (at least 5000 emails/month) and unlimited emails sent per day."
   },
   {
      id: "4",
      question: "Why the addon requires access to my Google Drive?",
      answer: "Permission to Google Drive is only necessary for the addon to perform actions related to your connected Google Form and spreadsheet on your behalf. In no circumstance that we will use those files for any other purposes or sharing to third parties."
   },
   {
      id: "5",
      question: "What will happen to my data if I cancel my subscription?",
      answer: "You data will still be stored in our database even after your subscription cancellation. If you want to remove your data, please contact to us via support@boloforms.com."
   },
   {
      id:"6",
      question:"How does approval workflow feature work?",
      answer:"When a Form Respondent sends a request, the addon will automatically send approval notification email to your specified recipient(s). Recipient can make One-click approve/reject decision on email, or, approve/reject & comment on BoloForms Approvals website. Finally, an email will be sent to all recipients notifying the final result."
   },
   {
      id:"7",
      question:"I receive a permission error when I try to setup the Add-on",
      answer:"This is a known issue with Google permissions and it happens when you are logged in with more than one Google account. Try to sign out of all account except your main account. Alternatively, try Guest/Incognito mode."
   },
   {
      id:"8",
      question:"Does recipient need Google Account?",
      answer:"No. Recipients do not need Google account. They also do not need to have access to your Google Form or spreadsheet. When a request is sent, recipient will receive an email which includes: One-click Approve & One-click Reject button: to approve/reject immediately. Approve/Reject & Comment button: to open BoloForms Website where you can approve/reject & give comment on the request"
   },
   {
      id:"9",
      question:"Can I use the addon if my organisation does not use Google accounts?",
      answer:"Yes, but be aware that Form owner/adminstrator in particular still needs Google account. This is because the addon sends email on your Gmail behalf."
   },
   {
      id:"10",
      question:"How many recipients can I add?",
      answer:"There is no limit to the number of recipients. However, be aware that the higher number of recipients is, the quicker your emails quota may run out."
   },
   {
      id:"11",
      question:"How can I contact support?",
      answer:"For any additional questions, you can contact us on support@boloforms.com or on WhatsApp at +91-8830631677 anytime."
   },
   {
      id:"12",
      question:"Can Form Respondent or Recipients edit a form submission?",
      answer:"You can have option to allow Form Respondents to edit their own submission. However, Recipients can not edit submissions from Respondent."
   },
   {
      id:"13",
      question:"Why does the approval workflow sometimes work smoothly and other times throws errors?",
      answer:"If you suddenly have an error running when using an add-on, please let us know by sending an email to support@boloforms.com. Our team will contact you as soon as possible to look into the issue. If you need an expedited support, feel free to message us on WhatsApp at +91-8830631677."
   },
]


const Faq = () => {

   const [elementId, setElementId] = useState("0");

   return (
      <div className="xl:container mx-auto my-0 my-[30px] md:mt-[100px] px-[20px]">
         <div className=" text-center mb-[50px]">
            <h1 className="text-[30px] font-bold">Frequently Asked Questions</h1>
         </div>
         <div className="columns-1 md:columns-2 gap-6">
            {
               faqs.map((faq) => {
                  return (
                     <div className="text-left border-[1px] rounded-xl px-[15px] py-[15px] mb-[20px]">
                        <div onClick={()=>{
                           elementId==="0"?setElementId(faq.id):setElementId("0")
                        }} className="flex items-center justify-between cursor-pointer">
                           <h1 className="font-bold text-[20px]">{faq.question}</h1>
                           <div className="expand-button cursor-pointer ml-[10px]">
                              <svg width="24" height="24"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg"
                              >
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                                    fill="currentColor"
                                 />
                                 <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V11H7C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13H11V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V7Z"
                                    fill="currentColor"
                                 />
                              </svg>
                           </div>
                        </div>
                        {
                           elementId === faq.id ?
                           <h2 className="text-[16px] mt-[20px]">{faq.answer}</h2>
                           :
                           ""
                        }
                        
                     </div>
                  )
               })
            }

         </div>
      </div>
   )
}

export default Faq
