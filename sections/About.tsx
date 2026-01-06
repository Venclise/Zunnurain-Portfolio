import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Work } from "@/components/Work"
import { Plus, Send, SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const stacks = [
    {
title: "Mongo DB",
        img:"/mongodb.png",
    },
    {
title: "React JS",
       img: "/react.svg",
    },
{

    title: "Next JS",
   img: "/next.png",
},
{
title: "Tailwind CSS",
   img: "/tailwind.png"
},

]


const chats = [
     {
        id: 1,
        chat: "Hey, I am looking for a Web Developer"
     },
     {
         id: 2,
        chat: "You're in the right place Tell me your idea — I’ll handle the rest.",
        left: true
     }
]
export default function About() {
  return (
    <div className='h-max w-full p-10' id="about">
       

      <div className="flex md:flex-row flex-col w-full  border border-dashed   h-max  mt-12  overflow-hidden ">
    <div className="w-full md:w-[80%] gap-4 row-span-10  border-r flex flex-col justify-center overflow-hidden p-10 relative ">
        <h2 className="font- text-2xl font-semibold ">
            UI/UX Designer
        </h2>
        <p className="text-md text-gray-700 top-[50%] ">

Passionate UI/UX Designer crafting user-friendly and visually appealing interfaces.
        </p>
        <div className="flex items-center gap-6 flex-col mt-8">
            <p className="font-bold text-gray-200 text-[10rem] absolute">Zunnurain</p>
<div className=" bg-gray-100 p-2 border rounded-lg flex items-center justify-center relative rotate-12 ">
<Link className=" flex items-center   gap-4 absolute z-10 bg-gray-50 px-2    py-1  rounded-full text-xs border-4 text-black" href="https://layer-delta.vercel.app/" target="_blank">Layer
        <SquareArrowOutUpRight className="w-3 h-3" />
</Link>
          <Image src="/layer.webp" alt="Layers website" height="350" width="350" className="rounded-md border-10 border-white"/>
</div>
<div className=" bg-gray-100 p-2 border rounded-lg flex items-center justify-center relative rotate-[-12deg]">
<Link className=" flex items-center  gap-4 absolute z-10 bg-gray-50 border-4 px-2    py-1  rounded-full text-xs  text-black" href="https://skycast-blond.vercel.app/" target="_blank">Skycast
        <SquareArrowOutUpRight className="w-3 h-3" />
</Link>
          <Image src="/skycast.webp" alt="Skycast website" height="350" width="350" className="rounded-md border-10 border-gray-50 "/>
</div>

                </div>

    </div>
    <div  className="w-full md:w-[40%] h-screen p-5">
             <h2  className="text-2xl font-semibold p-3">Have an Idea?</h2>
    <div className="bg-gray-100 rounded-4xl h-full p-5 border">
      
        <div className="h-full w-full rounded-4xl flex flex-col justify-between relative bg-white border-2">
   <div className="w-1/5 rounded-full p-3 mx-auto m-5 bg-gray-100 absolute top-0 left-[40%] border-2 "/>

            <div className="flex flex-col items-end gap-4 h-max p-10 relative mt-12">
                  {
                      chats.map(({id,chat,left}) => { 
                          return <div key={id} className={`rounded-3xl w-[80%] h-max px-5 py-2 text-sm  ${left ? "absolute left-3 mt-24 bg-gray-200 text-gray-700 " : "bg-green-500 text-white"}`}>
                                      {chat}
                              </div>
                    })
                } 

                  
            </div>
            <div className="flex items-center   w-full p-5 gap-4 ">

            <Input  className="flex-2" placeholder="Enter your message here.."/>
            <Button className="rounded-full bg-green-400">
                <Send />
                  </Button>        
            </div>
                </div>


        
            
    </div>
</div>
</div>
    <div className=" h-max  flex-col flex items-center md:flex-row border border-dashed ">
                      
    <div className="p-7 w-full md:w-[50%]  h-full flex flex-col gap-8  justify-center lg:justify-around border-r">
        <div className="gap-4 flex flex-col">
        <h2 className="font-semibold text-2xl tracking-tight">Open to work in every stack.</h2>
         
        </div>
             <div className="flex items-center flex-col  gap-4 justify-center flex-wrap bg-gray-50 border rounded-2xl p-10  ">
                   {
                    stacks.map((item) => {

                          return ( 
                            <div className="flex items-center border-b w-full gap-4 py-1">           

<Image src={item?.img} alt={item?.img} height="30" width="30" key={item.title} className="rounded-full" />
                            <p className="text-sm text-center font-semibold ">{item.title}</p>
                         
 </div>
                          )
                    })
                   }
             </div>
    </div>
    <div>
         <Work />  
    </div>
    </div>
    </div>
  )
}
