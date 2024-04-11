import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";


function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, cur)=> acc+ cur.price, 0) )
  }, [cart])
  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div>
            <div>Your Cart</div>
            <div>Summary</div>
            <p>
              <span>Total Item : {cart.length}</span>
            </p>
          </div>

          <div>
            <div><p>Total Amount : {totalAmount}</p></div>
            <button>CheckOut Now</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Empty</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
