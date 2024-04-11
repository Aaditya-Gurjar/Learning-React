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
        <div className="flex max-w-6xl mx-auto justify-between items-center ">
           
           <div className="flex  justify-center ">
           <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
           </div>

          <div>
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
        </div>
      ) : (
        <div>
          <h1>Empty</h1>
          <Link  className="h-screen w-screen" to={"/"}>
            <button className=" bg-blue-500 rounded flex justify-center items-center">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
