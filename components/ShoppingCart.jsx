import { useAppContext } from "./CarritoComprasData";
import Product from "./Product";
import { BiGhost } from "react-icons/bi";
import { HiCurrencyDollar } from "react-icons/hi2";
import { MdPayment } from "react-icons/md";

function ShoppingCart() {
  const cart = useAppContext();
  const { removeItemFromCart } = cart;

  function handleCloseCart() {
    cart.closeCart();
  }

  const handleRemoveClick = (item) => {
    removeItemFromCart(item);
  };

  const handleIncreaseQty = (item) => {
    cart.increaseItemQty(item);
  };

  const handleDecreaseQty = (item) => {
    cart.decreaseItemQty(item);
  };

  function getTotal() {
    const total = cart.items.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );
    return total;
  }
  return (
    <div
      className="fixed bg-slate-800 w-[320px] h-[100vh] p-2 right-0 top-0 shadow-md shadow-white overflow-auto"
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      <button
        className="bg-red-600 px-2 py-2 rounded my-1 mx-2"
        onClick={handleCloseCart}
      >
        Cerrar
      </button>

      {cart.items.length === 0 ? (
        <div className="flex items-center justify-center h-full gap-1 px-2 py-2">
          Tu carrito de compras esta vacío
          <BiGhost />
        </div>
      ) : (
        <>
          <h3 className="px-2 py-5 font-semibold text-xl">Tus productos</h3>
          <div>
            {cart.items.map((item) => (
              <Product
                key={item.id}
                item={item}
                showAs="ListItem"
                qty={item.qty}
                onRemoveClick={handleRemoveClick}
                onIncreaseClick={handleIncreaseQty}
                onDecreaseClick={handleDecreaseQty}
              />
            ))}
          </div>
          <div className="px-2 py-2">
            <p className="flex items-center justify-center gap-1 text-emerald-400 text-2xl">
              <span className="text-white">Total:</span> <HiCurrencyDollar />
              {getTotal()}
            </p>
          </div>
          <div className="flex place-content-center py-5">
            <button className="bg-blue-500 px-4 py-3 rounded font-semibold hover:bg-blue-700 transition-all flex gap-3 items-center">
              Completar pago <MdPayment className="h-[20px] w-[20px]"/>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingCart;
