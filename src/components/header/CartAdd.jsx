import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function CartAdd() {
  const { cart, handleRemoveProduct, handleAddProduct } =
    useContext(UserContext);
  const totalPrice = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div>
      <div>
        <div className="flex flex-col gap-8 py-10">
          {cart.map((item) => {
            return (
              <div className="flex justify-around items-center">
                <img src={item.image} className="w-96 h-64" />
                <p>{item.name}</p>
                <div className="flex gap-3">
                  <button
                    className="w-10 h-10 rounded-full bg-slate-600"
                    onClick={() => handleAddProduct(item)}
                  >
                    +
                  </button>
                  <button
                    className="w-10 h-10 rounded-full bg-slate-600"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </button>
                </div>
                <div>
                  {item.quantity} * {item.price}
                </div>
              </div>
            );
          })}
          <div className="flex justify-center gap-2 text-2xl">
            Total Price:
            <div>${totalPrice}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
