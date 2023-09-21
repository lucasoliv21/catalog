import { ShoppingCart } from '@phosphor-icons/react'
import Image from 'next/image'

export default function Cart() {
  return (
    <div className='h-screen font-inter font-semibold'>
      <header className='h-9 w-full '>
        <nav className='flex flex-auto justify-between items-center '>
          <a href="" className='px-3 text-xs font-semibold '>
            Catálogo
          </a>
          <a href="">
            <ShoppingCart size={20} weight="fill" />
          </a>
        </nav>
      </header>
      <div className='py-5 text-xs font-semibold text-center'>
        Carrinho
      </div>
      <div className='my-3 flex bg-gray-300 p-2 rounded h-24'>
       
          <Image src="/bed.png" width={75} height={70} alt='Foto do produto' className='rounded-md'/>
     
          <div className='flex flex-col justify-between w-full'>
            <div className='px-2 text-xs'>
              Lençol casal para cama box
            </div>
            <div className="flex justify-between items-center ">
              <div className='px-2 text-xs font-bold'>
                R$ 40,00 
              </div>
              <div className="flex items-center">
                <button className=" py-1 bg-gray-300  rounded-l">
                  +
                </button>
                <span className="px-2">
                  1
                </span>
                <button className="pr-2 py-1 bg-gray-300  rounded-r">
                  -
                </button>
              </div>
            </div>
          </div>
      </div>
      <div className='flex justify-between py-2 rounded h-24'>
        <div className='flex flex-col justify-between py-3'>
          <div className='text-xs'>
            Total
          </div>
          <div className='font-bold'>
            R$ 40,00
          </div>
        </div>
        <div className='flex items-center h-full'>
          <button className="w-32 h-14 bg-emerald-300 font-bold px-4 rounded-md text-xs">
            Realizar pedido
          </button>
        </div>
      </div>
    </div>
  )
}
