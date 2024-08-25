import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetProductAPI } from '../features/API/GetApi'


const Product = () => {
  const {product} =useSelector((state)=>state.product)



  const dispatch = useDispatch()
console.log('====================================');
console.log(product);
console.log('====================================');
  useEffect(()=>{
    dispatch(GetProductAPI())
  
  },[])
 
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 bg-gray-50 mt-10 '>
     {
    product.map((e)=>{
            return (
                <div key={e.id} className='w-[300px] flex flex-col  gap-1 justify-center  bg-white rounded-lg shadow-sm p-2'>
                        <div><img src={e.image_url} alt="" className='h-[200px] w-[300px] object-cover bg-white rounded-lg shadow-sm '/></div>
                        <div className='p-1 text-gray-500'> {e.brand}</div>
                        <div className='flex  justify-between p-1 font-bold' >
               
                            <div>{e.category}</div>
                            <div>${e.price}</div>
                        </div>
                </div>
            )
        })
     }
    </div>
  )
}

export default Product