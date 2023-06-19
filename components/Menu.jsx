import Link from "next/link";
import { useAppContext } from "./CarritoComprasData";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoStorefrontOutline } from "react-icons/io5";
import { BiHomeAlt } from "react-icons/bi";
import { BsQuestionSquare } from "react-icons/bs";

function Menu() {
  const cart = useAppContext();
  function handleOpenCart() {
    cart.openCart();
  }
  return (
    <div className="bg-slate-800">
      <nav className="flex items-center justify-between md:justify-around px-3 md:px-14 py-5 shadow shadow-[white]">
        <div className="flex gap-5 text-xl md:text-lg">
          <Link href={"/"}>
            <li className="hover:text-sky-500 flex items-center gap-1">
              <BiHomeAlt />
              HOME
            </li>
          </Link>
          <Link href={"/store"}>
            <li className="hover:text-sky-500 flex items-center gap-1">
              <IoStorefrontOutline />
              STORE
            </li>
          </Link>
          <Link href={"/faq"}>
            <li className="hover:text-sky-500 flex items-center gap-1">
              <BsQuestionSquare />
              FAQ
            </li>
          </Link>
        </div>
        <div>
          <a
            className="flex relative items-center"
            href="#"
            onClick={handleOpenCart}
          >
            <RiShoppingCart2Line size={28} />
            <div className="bg-sky-600 rounded-full px-[5px] py-[1px] text-[12px] absolute top-0 -right-2">
              {cart.getNumberOfItems()}
            </div>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
