import React from "react";
import { Button } from "@mantine/core";
import Image from "../../assets/images/image.png";

const HeroSection = () => {
  return (
    <section className="w-full mt-8 px-6">
      <div className="max-w-7xl mx-auto overflow-hidden rounded-xl bg-[#b7d3e2]">

        <div className="grid grid-cols-2 items-center h-[280px]">

         
          <div className="pl-16">
            <h1 className="text-[34px] font-bold text-[#123524] leading-tight max-w-md">
              Grab Upto 50% Off On
              <br />
              Selected Headphone
            </h1>

            <Button
              radius="xl"
              size="sm"
              color="dark"
              className="mt-8 px-6"
              color = "blue"
            >
              Buy Now
            </Button>
          </div>

          
          <div className="h-full">
            <img
              src={Image}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;