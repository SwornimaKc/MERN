import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react'; // run code when the component loads or updates
import { products } from "../../utlils/constants/products"; //products array to find the product details using the id from the url


const ProductDetails = () => { // page component banayo jasley product details show garxa

  const {id} = useParams(); //to get the dynamic id from the url
  const product = products.find((product) => product.id === Number(id)); //finding the product details from the products array using the id
  
  const callProduct =async () => {} //async function to call the api to get the product details using the id from the url and set the product details in state
    useEffect(() => {
      //fetch product details using the id
      //set the product details in state
       callProduct();
    }, [id]);
  
  
  return (
    <main>
      details page for product {id}
      
    </main>
  )
}

export default ProductDetails;