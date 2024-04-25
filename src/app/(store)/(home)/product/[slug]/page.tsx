import Image from 'next/image';

export default function ProductPage() { 
     return (
          <div className="relative grid max-h-[860px] grid-cols-3">
               <div className="col-span-2 overflow-hidden">
                    <Image
                         src="/moletom-never-stop-learning.png" 
                         alt="" 
                         width={1000} 
                         height={1000} 
                         quality={100}
                    />
               </div>

               <div className="flex flex-col justify-center px-12">
                    <h1 className="text-3xl font-bold leading-tight">Moletom Never Stop Learning</h1>
               </div>
          </div>
     )
     
}