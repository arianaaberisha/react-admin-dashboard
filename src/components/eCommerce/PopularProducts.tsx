import React from "react";
import Phone from "../../assets/icons/iphone.png";
import Sneaker from "../../assets/icons/Sneaker.png";
import Headphones from "../../assets/icons/headphones.png";
import Speaker from "../../assets/icons/speaker.png";
import PlayStation from "../../assets/icons/play-station.png";
import Watch from "../../assets/icons/watch.png";
import CardComponent from "../CardComponent";

interface Product {
  iconSrc: string;
  alt: string;
  label: string;
  subLabel: string;
  value: string;
  
}

const products: Product[] = [
  {
    iconSrc: Phone,
    alt: "iPhone",
    label: "Apple iPhone 13",
    subLabel: "Item:#FXZ-4567",
    value: "$999.29",
    
  },
  {
    iconSrc: Sneaker,
    alt: "Sneakers",
    label: "Nike Air Jordan",
    subLabel: "Item:#FXZ-3456",
    value: "$72.40",
    
  },
  {
    iconSrc: Headphones,
    alt: "Headphones",
    label: "Beats Studio 2",
    subLabel: "Item:#FXZ-9485",
    value: "$99.90",
    
  },
  {
    iconSrc: Watch,
    alt: "Watch",
    label: "Apple Watch Series 7",
    subLabel: "Item:#FXZ-2345",
    value: "$249.99",
  },
  {
    iconSrc: Speaker,
    alt: "Speakers",
    label: "Amazon Echo Dot",
    subLabel: "Item:#FXZ-8959",
    value: "$129.48",
    
  },
  {
    iconSrc: PlayStation,
    alt: "PlayStation",
    label: "PlayStation Console",
    subLabel: "Item:#FXZ-7892",
    value: "$129.48",
    
  },
  
];

const PopularProducts: React.FC = () => {
  return (
    <div className=" p-6">
      <div className=" mb-4">
        <h2 className="text-[18px] font-[500] text-[#2F2B3DE5] dark:text-[#E1DEF5E5]">
          Popular Products
        </h2>
        <p className="text-[15px] font-[400] text-[#2F2B3D8C] dark:text-gray-400">Weekly Sales Overview</p>
      </div>

      {products.map(
        ({ iconSrc, label, subLabel, value }) => (
          <CardComponent
            key={label}
            iconSrc={iconSrc}
            label={label}
            subLabel={subLabel}
            value={value}
            
          />
        )
      )}
    </div>
  );
};

export default PopularProducts;
