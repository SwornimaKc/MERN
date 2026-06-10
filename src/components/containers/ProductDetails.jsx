import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'; 
import { products } from "../../utlils/constants/products"; 
import { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { IconFiretruck, IconRefresh, IconShield, IconTruckDelivery } from '@tabler/icons-react';



const ProductDetails = () => { 

  const {id} = useParams();
 const [product, setProduct] = useState(

 );
 const [quantity,setQuantity] = useState(0);


  const callProduct = async () => {

  const filteredProduct = products.filter((product) => product.id === Number(id)); 
  setProduct(filteredProduct[0]); 

  }; 
  
    useEffect(() => {
      
       callProduct();
    }, [id]);
  
    const increasedQuantity = () => {
      setQuantity((prev) => prev + 1);
    };
    const decreaseQuantity = () =>{
      if(quantity > 0){
        setQuantity((prev) => prev -1 );
      }
    };
  
  return (
    <main className="grid grid-cols-12 gap-6 p-10 items-start">
      <section className =" col-span-6">
        <Carousel>
        <Carousel.Slide>
          <img src={product?.image_url}
           alt={product?.name} 
           className="w-full h-[400px] object-contain rounded-xl" />
        </Carousel.Slide>
       
        </Carousel>
        <div className="flex gap-3 m-8">
  <img 
      src={product?.image_url} 
      className="w-20 h-20 border rounded-lg" />
  <img 
       src={product?.image_url}
        className="w-20 h-20 border rounded-lg" />
  <img 
        src={product?.image_url}
         className="w-20 h-20 border rounded-lg" />
  <img 
       src={product?.image_url} 
        className="w-20 h-20 border rounded-lg" />
</div>
      </section>


      
      <section className ="check h-full col-span-6 p-5">
        <h1 className='text-2xl font-bold py-2'>{product?.title}</h1>

        <p className='py-2 text-xs text-gray-500'>{product?.description}</p>

        <div className='text-3xl font-bold'>
            ${product?.price}
        </div>

        <div className='mt-6'>
          <h3 className='font-semibold mb-3'>Choose Color</h3>
          <div className='flex gap-3'>
            <div className='w-8 h-8 bg-black rounded-full border-2'></div>
            <div className='w-8 h-8 bg-pink-500 rounded-full border-2'></div>
            <div className='w-8 h-8 bg-blue-500 rounded-full border-2'></div>
            <div className='w-8 h-8 bg-gray-500 rounded-full border-2'></div>

          </div>
        </div>

        <div className=' mt-4'>
          <h3 className='font-semibold mb-3'>Quantity</h3>
          <button className="w-10 h-10 border rounded-lg
          "
          onClick={decreaseQuantity}>-</button>
          <span className = "font-semibold p-4">{quantity}</span>
          <button className="w-10 h-10 border rounded-lg"
          onClick={increasedQuantity}>+</button>
          
        </div>
        
        <div className='flex mt-4 gap-5'>
          <button className="bg-green-900 text-white px-4 py-2 rounded-full ">Buy now</button>
   
          <button className="border border-green-950 text-green-950 px-4 py-2 rounded-full ">Add to Cart</button> 
         
        </div>

         <div className=" mt-4 space-y-4 text-sm text-gray-500">
        <div className= "flex items-center gap-3">
           <IconTruckDelivery/><span>Free Delivery</span>
        </div>
        <div className="flex items-center gap-3"> 
          <IconShield/> 
          <span>Secure Payment</span>
         </div>
        <div className="flex items-center gap-3">
           <IconRefresh/>
            <span>7 Days Return Policy</span>
          </div>
      </div>

      </section>
      
    </main>
  )
}

export default ProductDetails;