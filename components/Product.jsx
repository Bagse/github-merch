import { convertToPath } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import BotonCart from "./BotonCart";
import { HiCurrencyDollar } from "react-icons/hi2";
import { CiCircleRemove } from "react-icons/ci";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { BsDashCircleFill } from "react-icons/bs";

function Product({
  item,
  showAs,
  qty,
  onRemoveClick,
  onIncreaseClick,
  onDecreaseClick,
}) {
  
  const handleRemoveClick = () => {
    onRemoveClick(item);
  };

  const handleIncreaseQty = () => {
    onIncreaseClick(item);
  };

  const handleDecreaseQty = () => {
    onDecreaseClick(item);
  };
  if (showAs === "Page") {
    return (
      <div className="flex flex-wrap md:flex-nowrap bg-white mx-3 md:mx-48 my-20  rounded-md items-center shadow-md shadow-gray-500">
        <div className="px-12 py-4">
          <Image
            className="hover:scale-125 transition-all w-screen h-96 object-contain"
            src={item.data.image}
            alt="imagen de la store"
            width={"500"}
            height={"300"}
            priority
          />
        </div>
        <div className="flex flex-col gap-5 px-3 md:px-5 py-5 md:py-20 bg-slate-800">
          <div>
            <h2 className="text-5xl text-sky-800 font-bold">
              {item.data.title}
            </h2>
          </div>
          <div>
            <p className="flex items-center text-2xl text-emerald-400 font-semibold">
              <HiCurrencyDollar />
              {item.data.price}
            </p>
          </div>
          <div>
            <h3 className="text-md text-slate-300">Descripción:</h3>
            <p className="text-lg">{item.data.description}</p>
          </div>
          <div>
            <h3 className="text-md text-slate-300">Sostenibilidad:</h3>
            <p className="text-lg">{item.data.sustainability}</p>
          </div>
          <BotonCart item={item} />
        </div>
      </div>
    );
  }
  if (showAs === "ListItem") {
    return (
      <div className="flex gap-2 border-b-4 border-gray-500 py-3 px-2">
        <div>
          <Image
            className="rounded w-[200px] h-[110px] object-cover"
            src={item.image}
            alt="imagen de la store"
            width={110}
            height={100}
            priority
          />
        </div>
        <div className="flex flex-col">
          <div>
            <h2 className="text-lg text-sky-400 font-semibold">{item.title}</h2>
          </div>
          <div>
            <p className="flex items-center gap-1">
              <HiCurrencyDollar />
              {item.price}
            </p>
          </div>
          <div className="flex space-x-3 items-center">
            <button onClick={handleDecreaseQty} className="hover:text-green-300"><BsDashCircleFill/></button>
            <span>{qty}</span>
            <button onClick={handleIncreaseQty} className="hover:text-green-300"><BsFillPlusCircleFill/></button>
          </div>

          {qty === 0 ? (
            ""
          ) : (
            <div>
              <p>{qty} unidad(es)</p>
            </div>
          )}

          {qty === 0 ? (
            ""
          ) : (
            <div>
              <p className="flex items-center gap-1">
                Subtotal: <HiCurrencyDollar />
                {qty * item.price}
              </p>
            </div>
          )}
        </div>
        <button onClick={handleRemoveClick}>
          <CiCircleRemove className="text-red-700 hover:text-red-500 w-5 h-8" />
        </button>
      </div>
    );
  }

  return (
    <div className=" bg-white px-2 md:px-5 py-3 md:py-4 rounded text-black shadow-md shadow-slate-800">
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <Image
            className="rounded-md hover:scale-105 transition-all"
            src={item.image}
            alt="imagen producto store"
            width={500}
            height={500}
            priority
          />
        </Link>
      </div>
      <div>
        <h3>
          <Link href={`/store/${convertToPath(item.title)}`}>
            <h1 className="text-xl font-semibold md:italic truncate">{item.title}</h1>
          </Link>
        </h3>
      </div>
      <div>
        <p className="flex items-center text-lg font-semibold py-2 text-emerald-400">
          <HiCurrencyDollar />
          {item.price}
        </p>
      </div>
      <BotonCart item={item} />
    </div>
  );
}

export default Product;
