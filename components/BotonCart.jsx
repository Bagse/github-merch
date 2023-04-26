import { RiShoppingCart2Line } from "react-icons/ri";
import { useAppContext } from "./CarritoComprasData";

function BotonCart({ item }) {
  const cart = useAppContext();

  function handleClick() {
    cart.addItemToCart(item);
    cart.openCart()
  }
  return (
    <div>
      <button
        className="bg-sky-600 flex items-center gap-2 px-2 py-2 rounded-md text-slate-200 hover:bg-sky-900"
        onClick={handleClick}
      >
        <RiShoppingCart2Line /> Agregar al carrito
      </button>
    </div>
  );
}

export default BotonCart;
