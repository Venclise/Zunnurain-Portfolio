import Link from 'next/link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { NavLinks } from '@/lib/constants'
import { Button } from './ui/button'

export default function Header() {
  return (
    <div className='w-full h-[5rem] p-3 flex items-center justify-center fixed top-0 left-0   z-50 '>

        <div className='w-[70%] h-full bg-gray-100 px-5 py-3 rounded-full flex items-center border-2p justify-between '>
        <Link href="/" className='font-bold text-2xl w-max '>Zunnurain</Link>
            <Sheet >
  <SheetTrigger className='cursor-pointer'>
    <Menu />
    </SheetTrigger>
  <SheetContent className='p-10'>
   
      <SheetTitle>
        <SheetClose>
        <Link href="/" className='font-bold text-2xl'>Zunnurain</Link>
        </SheetClose>

      </SheetTitle>

      <div className='h-[80vh]  flex items-center'>
      <div className='flex items-start justify-start flex-col gap-4'>

           {
               NavLinks.map(({id,title,link}) => (
                   <Link key={id} href={link}>
<SheetClose>
                    <span className='font-semibold text-gray-700 text-3xl hover:text-black transition-all '> {title}.</span>
                       
        </SheetClose>
                  </Link>
            ))
        } 
           </div>
      </div>
   <Link href="/#footer" className='w-full h-max'>
    <Button className='font-mono w-full'>Contact me</Button>
   </Link>
  </SheetContent>
</Sheet>
        </div>
        
    </div>
  )
}
