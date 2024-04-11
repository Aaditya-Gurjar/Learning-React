import React from "react";
import { useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { remove } from "../redux/Slices/CartSlice";

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div>
      <div>
        <div>
          <img src={item.image} />
        </div>

        <div>
          <h1>{item.title}</h1>
          <h1>{item.title}</h1>
          <div>
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
