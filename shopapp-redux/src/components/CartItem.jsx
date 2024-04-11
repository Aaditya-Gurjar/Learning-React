// import React from "react";
// import { useDispatch } from "react-redux";
// import { MdDelete } from "react-icons/md";
// import toast from "react-hot-toast";
// import { remove } from "../redux/Slices/CartSlice";

// function CartItem({ item, itemIndex }) {
//   const dispatch = useDispatch();
//   const removeFromCart = () => {
//     dispatch(remove(item.id));
//     toast.success("Item Removed");
//   };

//   return (
//     <div className=" flex w-full justify-between items-center   border-b-2 border-gray-400 ">
//       <div className="flex max-w-full border-2 m-5 p-10 border-black w-1/2 ">
//         <div className=" h-1/2 border-2 border-red">
//           <img className="h-1/2 max-w-[200px]" src={item.image} />
//         </div>

//         <div className="w-1/2 ml-4 flex flex-col justify-between items-center">
//           <h1 className=" w-full font-semibold text-gray-500 truncate">
//             {item.title}
//           </h1>
//           <h1 className="w-full m ">
//             {item.description.split(" ").slice(0, 15).join(" ")}
//           </h1>
//           <div>
//             <p>{item.price}</p>
//             <div onClick={removeFromCart}>
//               <MdDelete />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CartItem;



import {AiFillDelete} from "react-icons/ai"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex items-center p-2 md:p-5 justify-between   mt-2 mb-2 md:mx-5 ">
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover " src={item.image} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">{item.description}</h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">{item.price}</p>
            <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
            onClick={removeFromCart}>
              <AiFillDelete/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
