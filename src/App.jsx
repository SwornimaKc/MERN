
import './App.css';
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from "./pages/Products.tsx";
import Categories from "./pages/Categories.tsx";
import Accounts from "./pages/Accounts.tsx";
import Cart from "./pages/Cart.tsx";
import Landing from "./pages/Landing.tsx";
import ProductDetails from './components/containers/ProductDetails.jsx';
import AdminDashboardLayout from './layouts/AdminDashboardLayout.jsx';
import AddCategories from './pages/dashboard/AddCategories.jsx';
import HomeLayout from './layouts/HomeLayout.jsx';
import AddProducts from './pages/dashboard/AddProducts.jsx';

function App() {
  return (
    <main className="">
      <BrowserRouter>
       
      <Routes>
        <Route path='/' element={<HomeLayout/>}>
        <Route index element = {<Landing/>}/>
        <Route path ="categories" element = {<Categories/>}/>
        <Route path ="products" element = {<Products/>}/>
        <Route path ="account" element = {<Accounts/>}/>
        <Route path ="cart" element = {<Cart/>}/>

          //dynamic route
        <Route path ="products/:id" element = {<ProductDetails/>}/>
      </Route>


      <Route path = "/dashboard" element={<AdminDashboardLayout/>}>
        <Route path ="categories" element = {<AddCategories/>}/>
        <Route path ="products" element = {<AddProducts/>}/>
      </Route>

      </Routes>
      </BrowserRouter>

</main>



  );
}

export default App;
