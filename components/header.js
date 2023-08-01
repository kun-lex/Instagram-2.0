import Image from 'next/image';
import {
    SearchIcon,
    PlusCircleIcon,
    UseGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <div>dev
        <div className='flex justify-between max-w-6xl' >
            <div className=' relative hidden lg:inline-grid w-24 cursor-pointer' >
                <Image 
                    src='https://links.papareact.com/ocw'
                    fill
                    alt=''
                    style={{objectFit:"contain"}}
                    
                />
            </div>
            <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer ' >
                <Image 
                    src='https://links.papareact.com/jjm'
                    fill
                    alt=''
                    style={{objectFit:"contain"}}
                />
            </div>
            <div className=' relative mt-1 p-3 rounded-md '>
                {/* search input */}
                <div className='absolute inset-y-0 flex items-center pointer-events-none' >
                    <SearchIcon className='h-5 w-5 text-gray-300' />
                </div>
                <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black' type="text" placeholder='Search' />
            </div>
        </div>
    </div>
  )
}

export default Header