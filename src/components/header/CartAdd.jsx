import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function CartAdd() {
  const { cart, handleRemoveProduct } = useContext(UserContext);
  return (
    <div>
      <div>
        <div>
          {cart.map((item) => {
            return (
              <>
                <img src={item.image} />
                <p>{item.name}</p>
                <div>
                  <button
                    className="text-2xl bg-slate-800 text-white m-10 p-5 rounded-full"
                    onClick={() => handleAddProduct(item)}
                  >
                    +
                  </button>
                  <button
                    className="text-2xl bg-slate-800 text-white m-10 p-5 rounded-full"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
