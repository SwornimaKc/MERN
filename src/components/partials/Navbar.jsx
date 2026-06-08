import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../utlils/constants/navItems";
import { TextInput } from "@mantine/core";
import search from "../../assets/images/search.png";
import { IconShoppingCart, IconUser } from "@tabler/icons-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 dynamic-x-padding bg-[#8dbcde] ">
      
      
      <Link to="/" className="flex items-center">
        <img
          src="https://t4.ftcdn.net/jpg/00/90/67/29/240_F_90672947_9o36fMzvYpFoS2cvgxACFUR0wleV5Yq5.jpg"
          alt="Logo"
          className="w-20 h-20 rounded-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>

    
      <section className="space-x-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.add}
          >
            {item.name}
          </Link>
        ))}
      </section>

      
      <section className="flex items-center gap-4">
        <div>   
          <TextInput
           
            placeholder="Input placeholder"
            rightSection = {
            <img
             src={search}
             className="w-4 h-4"
              />} 
             />
         </div>
<Link
  to="/account"
  className="flex items-center gap-2 font-medium text-gray-700 hover:text-green-600 transition-colors"
>
  <span>Account</span>
  <IconUser size={20} />
</Link>

<Link
  to="/cart"
  className="flex items-center gap-2 font-medium text-gray-700 hover:text-green-600 transition-colors"
>
  <span>Cart</span>
  <IconShoppingCart size={20} />
</Link>
      
      </section>
    </nav>
  );
};

export default Navbar;