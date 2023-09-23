import React from "react";
import userIcon from "../Assests/user.svg";
import cartIcon from "../Assests/cart.svg";
import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <nav className="px-12 h-[90px] justify-center flex sticky top-0 bg-white">
                <div className="flex flex-row items-center justify-between w-full">
                    <a href="/">Logo</a>
                    <div className="flex flex-row items-center">
                        <ul className="flex flex-row items-center mr-14">
                            <li className="mr-8 list-none">
                                <a href="/categories" className="hover:font-bold group transition duration-300">
                                    Category
                                    <span className="origin-right block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#c74338] w-[27px]"></span>
                                </a>
                            </li>

                            <li className="mr-8 list-none">
                                <a href="/bulk-select" className="hover:font-bold group transition duration-300">
                                    Bulk order
                                    <span className="origin-right block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#c74338] w-[27px]"></span>
                                </a>
                            </li>

                            <li className="mr-8 list-none">
                                <a href="/categories" className="hover:font-bold group transition duration-300">
                                    More
                                    <span className="origin-right block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#c74338] w-[27px]"></span>
                                </a>
                            </li>

                            <li className="list-none">
                                <a href="/categories" className="hover:font-bold group transition duration-300">
                                    Contact us
                                    <span className="origin-right block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#c74338] w-[27px]"></span>
                                </a>
                            </li>
                        </ul>
                        <a className="mr-6 cursor-pointer">
                            <Image src={userIcon} />
                        </a>
                        <a className="cursor-pointer">
                            <Image src={cartIcon} />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}
