import React from "react";
import visitingCard from "../../Assests/visitingCard.png";
import starLogo from "../../Assests/star.svg";
import Image from "next/image";

export default function SubcategoryCard(props) {
    const { name, image, price, stars, reviews, gsm } = props;

    return (
        <>
            <div className="w-full border border-neutral-300 rounded-xl group p-3 cursor-pointer">
                <Image src={image} height={200} alt="card" />
                <div className="text-[14px] font-bold mb-1 w-fit transition duration-300 mt-5">
                    {name} Card
                    <span className="pl-2 text-neutral-600">({gsm} GSM)</span>
                    <span className="origin-right block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-black w-full"></span>
                </div>

                <div className="flex flex-row justify-between w-full">
                    <div className="">
                        <span className="text-[14px] font-bold">₹{price}</span>
                        <span className="text-neutral-600 px-1">for</span>
                        <span className="text-[14px] font-bold">1000 pcs.</span>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-row items-center border-r border-neutral-700 pr-3 mr-3">
                            <Image src={starLogo} width={20} alt="card" />
                            <span className="font-medium pl-2.5 text-sm">{stars}</span>
                        </div>
                        <strong>{reviews}</strong>
                    </div>
                </div>
            </div>
        </>
    );
}
