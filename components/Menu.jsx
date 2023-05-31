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
    <div className="bg-slate-800 ">
      <nav className="flex items-center  justify-between md:justify-around px-3 md:px-5 py-5 shadow shadow-[white]">
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
        <div className="text-lg hover:text-sky-500">
          <a className="flex gap-1 items-center" href="#" onClick={handleOpenCart}>
            <RiShoppingCart2Line />
            {cart.getNumberOfItems()}
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Menu;