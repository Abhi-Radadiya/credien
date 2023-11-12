import React from "react";
import UserIcon from "../Assests/user.svg";
import CartIcon from "../Assests/cart.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="px-12 h-[90px] justify-center flex sticky top-0 bg-white z-[100]">
                <div className="flex flex-row items-center justify-between w-full">
                    <Link href="/">Logo</Link>
                    <div className="flex flex-row items-center">
                        <ul className="flex flex-row items-center mr-14">
                            <li className="mr-8 list-none">
                                <Link href="/categories" className="hover:font-bold group transition duration-300">
                                    Category
                                    <span className="origin-right block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#c74338] w-[27px]"></span>
                                </Link>
                            </li>

                            <li className="mr-8 list-none">
                                <Link href="/bulk-select" className="hover:font-bold group transition duration-300">
                                    Bulk order
                                    <span className="origin-right block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#c74338] w-[27px]"></span>
                                </Link>
                            </li>

                            <li className="mr-8 list-none">
                                <Link href="/categories" className="hover:font-bold group transition duration-300">
                                    More
                                    <span className="origin-right block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#c74338] w-[27px]"></span>
                                </Link>
                            </li>

                            <li className="list-none">
                                <Link href="/categories" className="hover:font-bold group transition duration-300">
                                    Contact us
                                    <span className="origin-right block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#c74338] w-[27px]"></span>
                                </Link>
                            </li>
                        </ul>
                        <Link href="/user" className="mr-6 cursor-pointer">
                            <UserIcon />
                        </Link>
                        <Link href="/cart" className="cursor-pointer">
                            <CartIcon />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
