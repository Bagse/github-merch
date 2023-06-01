import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  isOpen: false,
  items: [],
  openCart: () => {},
  closeCart: () => {},
  addItemToCart: (item) => {},
  getNumberOfItems: () => {},
});

function CarritoComprasData({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  function handleOpenCart() {
    setIsOpen(true);
  }

  function handleCloseCart() {
    setIsOpen(false);
  }

  function handleAddItemToCard(item) {
    const temp = [...items];
    const found = temp.find((product) => product.id === item.id);

    if (found) {
      found.qty++;
    } else {
      item.qty = 1;
      temp.push(item);
    }

    setItems([...temp]);
  }

  function handleNumberOfItems() {
    const total = items.reduce((acc, item) => acc + item.qty, 0);

    return total;
  }

  function handleRemoveItemFromCart(item) {
    const updatedItems = items.filter((product) => product.id !== item.id);
    setItems(updatedItems);
  }

  function handleIncreaseItemQty(item) {
    const updatedItems = items.map((product) => {
      if (product.id === item.id) {
        return {
          ...product,
          qty: product.qty + 1,
        };
      }
      return product;
    });
    setItems(updatedItems);
  }
  
  function handleDecreaseItemQty(item) {
    const updatedItems = items.map((product) => {
      if (product.id === item.id && product.qty > 1) {
        return {
          ...product,
          qty: product.qty - 1,
        };
      }
      return product;
    });
    setItems(updatedItems);
  }

  return (
    <AppContext.Provider
      value={{
        isOpen,
        items,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
        addItemToCart: handleAddItemToCard,
        removeItemFromCart: handleRemoveItemFromCart,
        increaseItemQty: handleIncreaseItemQty,
        decreaseItemQty: handleDecreaseItemQty,
        getNumberOfItems: handleNumberOfItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default CarritoComprasData;

export function useAppContext() {
  return useContext(AppContext);
}
