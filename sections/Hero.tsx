

import { Button } from '@/components/ui/button'
import { ArrowDown,  } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className=' h-screen w-full flex items-center justify-center flex-col relative'>
    
      <Image  src="./computer.svg"  width="100" height="100" alt="Computer" className='absolute left-7 top-7 rotate-10 '/>
   
      <div className='flex flex-col gap-4'>
         
      <span className='font-semibold text-sm lg:text-md'>Hy I'm</span>
      <h1 className='font-bold  text-7xl lg:text-[10rem] tracking-tighter' >Zunnurain</h1>
      <p className='text-sm lg:text-md'>I design and build fast, scalable, and user-friendly web applications</p>
      </div>
<div className='mt-8 flex items-center gap-4'>
  <Link href="/#gallery">
     <Button className='p-5 rounded-full font-mono cursor-pointer  hover:bg-neutral-700 hover:gap-4'>
        Check My Work
        <ArrowDown />
     </Button>
  </Link>
  <Link href="/#footer">
        <Button variant="outline" className='rounded-full tracking-tight cursor-pointer border-2'>
        Contact me
     </Button>
  </Link>
</div>

      <Image  src="./tabs.svg"  width="100" height="100" alt="Computer" className='absolute right-7 bottom-7 rotate-10 '/>

    </div>
  )
}
