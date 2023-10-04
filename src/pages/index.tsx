import React, { useState } from "react";
import { products } from "@/mocks/products";
import { ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

interface CartItem {
  id: number;
  title: string;
  price: number;
  imageSrc: string;
  quantity: number;
}

export default function Home() {
  const productsList = products;
  const [filter, setFilter] = useState('');
  const { addToCart, cart } = useCart();
  const [showNotification, setShowNotification] = useState(false);


  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);


  const filteredProducts = productsList.filter((product) =>
    product.title.toLowerCase()
    .includes(filter.toLowerCase())
  );

  const handleAddToCart = (product: CartItem) => {
    addToCart(product); 
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="h-screen font-inter ">
      <header className="h-9 w-full ">
        <nav className="flex flex-auto justify-between items-center ">
          <a href="" className="px-3 text-sm font-semibold ">
            Catálogo
          </a>
          <Link href="/cart" passHref className='flex items-center justify-center bg-transparent border-0 relative'>
              <ShoppingCart size={24} weight='fill' />
              {totalItems > 0 && (
                <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center absolute left-2 top-3 ">
                  {totalItems}
                </div>
        )}
          </Link>
        </nav>
      </header>

      <div className="w-full h-20 my-2 relative">
        <div className="px-3 py-2 text-sm font-semibold">Produtos</div>
        <div className="flex items-center bg-white mx-auto w-64 rounded-full border-2 border-gray-300 overflow-hidden">
          <div className="pl-4">
            <MagnifyingGlass size={16} color="#9ca3af" />
          </div>
          <input
            type="text"
            placeholder="Pesquisar por nome"
            className="w-full h-8 px-2 bg-transparent focus:outline-none"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        {filteredProducts.map((product) => (
          <div
            className="w-44 h-48 mx-auto text-center border-solid rounded-md border border-zinc-300 flex flex-col justify-items-start items-center shadow-md bg-gradient-to-br from-slate-100 to-slate-200"
            key={product.id}
          >
            <Image
              src={product.imageSrc}
              width={176}
              height={112}
              alt="Foto do produto"
              className="rounded-t-md max-w-full max-h-32 object-cover"
            />
            <div className="text-xs font-bold py-2">{product.title}</div>
            <div className=" px-1 text-xs font-bold flex items-center justify-between w-full">
              <div>R$ {product.price}</div>
              <button 
                onClick={() => handleAddToCart(product)}
                className="bg-zinc-200 w-7 h-7 flex items-center justify-center rounded-full border-0">
                <ShoppingCart size={16} weight="fill" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {showNotification && (
        <div className="bg-emerald-200 text-green-700 text-center py-2 fixed bottom-4 left-1/2 transform -translate-x-1/2 rounded">
          Produto adicionado ao carrinho!
        </div>
      )}
    </div>
  );
}
