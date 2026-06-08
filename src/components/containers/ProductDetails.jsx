import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'; 
import { products } from "../../utlils/constants/products"; 
import { useState } from 'react';
import { Carousel } from '@mantine/carousel';


const ProductDetails = () => { 

  const {id} = useParams();
 const [product, setProduct] = useState(

 );

  const callProduct = async () => {

  const filteredProduct = products.filter((product) => product.id === Number(id)); 
  setProduct(filteredProduct[0]); 

  }; 
  
    useEffect(() => {
      
       callProduct();
    }, [id]);
  
  
  return (
    <main className="grid grid-cols-12 gap-6 py-10">
      <section className ="checkParent col-span-6">
        <Carousel>
        <Carousel.Slide>
          <img src={product?.image_url}
           alt={product?.name} 
           className="w-full h-[20rem]" />
        </Carousel.Slide>
       
        </Carousel>
      </section>
      <section className ="check col-span-6 p-5">
        <h1 className='text-2xl font-bold py-2'>{product?.title}</h1>

        <p className='py-2 text-xs text-gray-500'>{product?.description}</p>
        
      </section>
      
    </main>
  )
}

export default ProductDetails;