import { RiShoppingCart2Line } from "react-icons/ri";
import { useAppContext } from "./CarritoComprasData";

function BotonCart({ item }) {
  const cart = useAppContext();

  function handleClick() {
    cart.addItemToCart(item);
    cart.openCart()
  }
  return (
    <div className="flex items-center">
      <button
        className="bg-sky-600 flex items-center gap-0 md:gap-2 px-2 py-2 rounded-md text-slate-200 hover:bg-sky-900 font-semibold"
        onClick={handleClick}
      >
        <RiShoppingCart2Line className="w-[40px] md:w-[28px] h-[35px] md:h-[25px]" /> Agregar al carrito
      </button>
    </div>
  );
}

export default BotonCart;
