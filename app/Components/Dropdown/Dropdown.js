"use client";
import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import downArrowIcon from "@/app/Assests/down-arrow.svg";
import Image from "next/image";

export default function Dropdown(props) {
    const {
        openFromBottom,
        shadow,
        placeholder,
        selectedItem,
        setSelectedItem,
        labelStyle,
        labelPaddingB,
        label,
        disabled,
        boxPadding,
        height,
        selectedItemStyle,
        menuItems,
        itemsStyle,
        fixedHeight,
    } = props;

    const [menuItem, setmenuItem] = useState(placeholder ?? selectedItem ?? menuItems[0]);

    const handleClickItem = (value) => {
        setmenuItem(value);
        setSelectedItem && setSelectedItem(value);
        setSelectedItemColor("");
    };

    const [selectedItemColor, setSelectedItemColor] = useState(placeholder && "text-neutral-400");

    useEffect(() => {
        setmenuItem(placeholder ?? selectedItem ?? menuItems[0]);
    }, [placeholder, selectedItem, menuItems]);

    return (
        <>
            {label && <div className={`${labelStyle ?? "paragraph-small-medium"} ${labelPaddingB ?? "pb-1"} ${disabled && "text-neutral-300"}`}>{label}</div>}
            <div className="relative">
                <Menu as="div">
                    <div className="dropDownIcon">
                        <Menu.Button
                            disabled={disabled}
                            className={`${
                                shadow ?? "shadow-Xsmall"
                            } w-full flex flex-row items-center justify-between mobile:max-w-full rounded-md outline-none boxRing border py-3 appearance-none ${
                                boxPadding ?? "px-4"
                            } border-neutral-300 ${height ?? "h-12"} ${selectedItemStyle ?? "paragraph-small-regular"}`}
                        >
                            <span className={selectedItemColor}>{menuItem}</span>
                            <Image src={downArrowIcon} className="drop-down-icon-rotate" height={24} width={24} alt="card" />
                            {/* <DownArrowIcon className="drop-down-icon-rotate" height={24} width={24} fill={disabl    ed ? "#D3D2D8" : "#131126"} /> */}
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            className={`bg-white absolute left-0 right-0 mt-2 px-4 py-2 border paragraph-small-medium rounded-md shadow-medium-medium bg-shades-50 font-normal z-50 ${
                                openFromBottom && "bottom-full mb-2"
                            } ${fixedHeight && fixedHeight + " overflow-auto"}`}
                        >
                            {menuItems?.map((el, index) => {
                                return (
                                    <div className="pt-2 mb-2 cursor-pointer" key={index} onClick={() => handleClickItem(el)}>
                                        <Menu.Item>
                                            <span className={`paragraph-small-regular ml-1 active:paragraph-small-semi-bold hover:text-primary-500 ${itemsStyle}`}>{el}</span>
                                        </Menu.Item>
                                    </div>
                                );
                            })}
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </>
    );
}
