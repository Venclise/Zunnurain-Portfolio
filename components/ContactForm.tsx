'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

export default function Page() {
 
  const form = useRef<HTMLFormElement | null>(null);
  const [loading,setLoading] = useState(false)
  useEffect(() => {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
}, []);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
   
  e.preventDefault();

  if (!form.current) return;

 emailjs.sendForm(
   process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
   process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
   form.current!,
   {
     publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
   }
 )


    .then(() => {
      console.log("SUCCESS!");
      toast.success("Message has been submitted.Thank You")
      form.current?.reset();

      setLoading(false)
    })
    .catch((error:any) => {
      console.error("EMAILJS ERROR:", error);
    })
    
};



  return (
    <div className="h-max   flex flex-col items-center md:flex-row justify-center gap-4 md:justify-between p-7">
      

   

   
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-fullmd:w-[30%] flex flex-col gap-6 mt-12"
      >
        <div className="flex gap-4">
          <label className="flex flex-col gap-2 text-sm w-full">
            <span className="font-semibold">Name</span>
            <Input
              name="first_name"
              placeholder="Enter your name"
              type="text"
              required
            />
          </label>

          <label className="flex flex-col gap-2 text-sm w-full">
            <span className="font-semibold">Last name</span>
            <Input
              name="last_name"
              placeholder="Enter your last name"
              type="text"
              
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold">Email</span>
          <Input
            name="email"
            placeholder="Enter your email"
            type="email"
            required
          />
        </label>

        <label className="flex flex-col gap-2 text-sm">
          <span className="font-semibold">Your message</span>
          <textarea
            name="message"
            className="w-full h-40 p-3 text-sm rounded-md border border-gray-200 dark:border-gray-800 bg-neutral-100 dark:bg-neutral-900 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Enter your message..."
            required
          />
        </label>
{
  loading ? 
  <Button  disabled className="rounded-full">
    <Spinner />
    Loading
      </Button> : 
  <Button   className="rounded-full cursor-pointer">
        Submit
      </Button>
      }
        
  
      </form>
    </div>
  );
}
