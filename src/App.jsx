
import './App.css';
import "@mantine/core/styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/partials/Navbar.jsx";
import { navItems } from './utlils/constants/navItems.js';
import Products from "./pages/Products.tsx";
import Categories from "./pages/Categories.tsx";
import Accounts from "./pages/Accounts.tsx";
import Cart from "./pages/Cart.tsx";
import Landing from "./pages/Landing.tsx";
import ProductDetails from './components/containers/ProductDetails.jsx';
function App() {
  return (
    <main className="">
      <BrowserRouter>
       <Navbar/>
      <Routes>
        
        <Route path ="/" element = {<Landing/>}/>
        <Route path ="/categories" element = {<Categories/>}/>
        <Route path ="/products" element = {<Products/>}/>
        <Route path ="/account" element = {<Accounts/>}/>
        <Route path ="/cart" element = {<Cart/>}/>

          //dynamic route
        <Route path ="/products/:id" element = {<ProductDetails/>}/>

      </Routes>
       
      </BrowserRouter>

</main>



  );
}

export default App;
