import Image from "next/image";
import React from "react";
import visitingCard1 from "../../../Assests/card1.png";
import Link from "next/link";

export default function Banner(props) {
    const { bgGradient, title, price, index } = props;

    const handleClickShop = () => {
        navigate;
    };

    return (
        <section style={{ backgroundImage: `linear-gradient(${bgGradient})` }}>
            <div className={`h-[500px] mx-auto max-w-[1330px] w-full flex justify-between ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} px-12 pt-[100px]`}>
                <div className="w-fit">
                    <p className="text-[84px] text-[#1a2024] font-bold">{title}</p>
                    <p className="text-[30px] leading-10 text-[#1a2024]">
                        Starting from <span className="font-semibold">₹{price}*</span>
                    </p>
                    <Link href="/categories">
                        <div className="group bg-black w-fit rounded-xl px-4 mt-6">
                            <button className="relative bg-transparent py-2 rounded-lg flex flex-row">
                                <span className="text-white pr-3 leading-[0.875rem] text-sm">Shop now</span>
                                <span className="pt-[1px] group-hover:pl-2 transition-all">
                                    <svg fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </Link>
                </div>

                <div>
                    <Image src={visitingCard1} height={300} alt="card" />
                </div>
            </div>
        </section>
    );
}
