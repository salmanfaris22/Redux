// src/components/Cart.js


import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addQty, checkOut, removeCart, removeQty } from '../features/ProductfetchSlice';



function Cart() {

    const {cart,totel} =useSelector((state)=>state.product)
    const dispatch = useDispatch()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">TotelPrice</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cart.map(item => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                
                    className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md"
                    disabled={item.qty <= 1}
                    onClick={()=>dispatch(removeQty(item))}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.qty ? item.qty : 0}</span>
                  <button
                    onClick={()=>dispatch(addQty(item))}
                    className="bg-gray-200 text-gray-500 px-2 py-1 rounded-md"
                  >
                    +
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.qtyPrice.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                 
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash onClick={()=>dispatch(removeCart(item))}/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-6 py-4 flex justify-between items-center bg-gray-100">
          <span className="text-lg font-bold">${totel ? totel : 0}</span>
          <button onClick={()=>dispatch(checkOut())} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Checkout
          </button>
        </div>
      </div>
    </div>

  );
}

export default Cart;
