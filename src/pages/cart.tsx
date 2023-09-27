
import React from 'react';
import { ShoppingCart } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './CartContext';

interface CartProps {
}
interface CartItem {
  id: number;
  title: string;
  price: number;
  imageSrc: string;
  quantity: number; 
}

export default function Cart({}: CartProps) {
  const { cart } = useCart(); 


  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="h-screen font-inter font-semibold">
      <header className="h-9 w-full">
        <nav className="flex flex-auto justify-between items-center">
          <Link href="/" className="px-3 text-xs font-semibold">
            Catálogo
          </Link>
          <Link href="/cart">
            
              <ShoppingCart size={20} weight="fill" />
            
          </Link>
        </nav>
      </header>
      <div className="py-5 text-xs font-semibold text-center">Carrinho</div>

      {Array.isArray(cart) && cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <div key={item.id} className="my-3 flex bg-gray-300 p-2 rounded h-24">
              <Image
                src={item.imageSrc}
                width={75}
                height={70}
                alt={item.title}
                className="rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                <div className="px-2 text-xs">{item.title}</div>
                <div className="flex justify-between items-center">
                  <div className="px-2 text-xs font-bold">R$ {item.price}</div>
                  <div className="flex items-center">
                    <button className="py-1 bg-gray-300 rounded-l">+</button>
                    <span className="px-2">{item.quantity}</span>
                    <button className="pr-2 py-1 bg-gray-300 rounded-r">-</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <div className="text-center">O carrinho está vazio.</div>
      )}

      <div className="flex justify-between py-2 rounded h-24">
        <div className="flex flex-col justify-between py-3">
          <div className="text-xs">Total</div>
          <div className="font-bold">R$ {calculateTotal()}</div>
        </div>
        <div className="flex items-center h-full">
          <button className="w-32 h-14 bg-emerald-300 font-bold px-4 rounded-md text-xs">
            Realizar pedido
          </button>
        </div>
      </div>
    </div>
  );
}