import React, { useState } from "react";
import { products } from "@/mocks/products";
import { ShoppingCart, MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";

export default function Home() {
  const productsList = products;
  const [filter, setFilter] = useState('');

  const filteredProducts = productsList.filter((product) =>
  product.title.toLowerCase()
  .includes(filter.toLowerCase())
  );

  return (
    <div className="h-screen font-inter ">
      <header className="h-9 w-full ">
        <nav className="flex flex-auto justify-between items-center ">
          <a href="" className="px-3 text-xs font-semibold ">
            Catálogo
          </a>
          <a href="">
            <ShoppingCart size={20} weight="fill" />
          </a>
        </nav>
      </header>

      <div className="w-full h-20 my-2">
        <div className="px-3 py-2 text-xs font-semibold">Produtos</div>
        <div className="flex items-center w-40 h-6 ml-4 bg-colorBg border-solid rounded-md border-2 border-gray-400">
          <input
            type="text"
            placeholder="Pesquisar por nome"
            className="w-32 h-4 px-1 py-2 ml-2 bg-colorBg  text-xs focus:outline-none"
            onChange={(e) => setFilter(e.target.value)}
          />
          <MagnifyingGlass size={16} color="#9ca3af" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 ">
        {filteredProducts.map((product) => (
          <div
            className="w-36 h-44 mx-auto text-center border-solid rounded-md border border-zinc-300 flex flex-col justify-items-start items-center"
            key={product.id}
          >
            <Image
              src={product.imageSrc}
              width={144}
              height={96}
              alt="Foto do produto"
              className="rounded-t-md max-w-full max-h-32 object-cover"
            />
            <div className="text-10px font-bold py-0.5">{product.title}</div>
            <div className=" px-1 text-10px font-bold flex items-center justify-between w-full">
              <div>R$ {product.price}</div>
              <div className="bg-zinc-200 w-6 h-6 flex items-center justify-center rounded-full">
                <ShoppingCart size={16} weight="fill" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
