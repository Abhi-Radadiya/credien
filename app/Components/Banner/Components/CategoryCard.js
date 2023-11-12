import Image from "next/image";
import React from "react";
import Link from "next/link";
import StarLogo from "../../../Assests/star.svg";

export default function CategoryCard(props) {
    const { price, type, image } = props;

    return (
        <>
            <Link href={`/categories/${type.toLowerCase()}-cards`}>
                <div className="w-full h-full rounded-xl border border-neutral-300 group py-5 cursor-pointer px-5">
                    <Image src={image} width="100%" alt="card" />
                    <div className="text-[14px] font-bold mb-1 w-fit transition duration-300">
                        {type} Card
                        <span className="origin-right block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-black w-full"></span>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="">
                            <span className="text-[14px] font-bold">₹{price}</span>
                            <span className="text-neutral-600 px-1">for</span>
                            <span className="text-[14px] font-bold">1000 pcs.</span>
                        </div>
                        <div className="flex flex-row items-center">
                            <StarLogo />
                            <span className="font-medium pl-2.5 text-sm">4.5</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
