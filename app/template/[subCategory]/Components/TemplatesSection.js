import Image from "next/image";
import React from "react";
import image from "../../../Assests/card2d.jpeg";

export const ColorDot = (props) => {
    const { color } = props;

    return <div className="w-5 h-5 rounded-full" style={{ backgroundColor: color }} />;
};

export default function TemplatesSection(props) {
    const { setShowTemplateOverview } = props;

    const template = [image, image, image, image, image, image, image, image, image, image, image, image, image];

    const availableColors = ["#0a3fa8", "#d48f87", "#d1d1d1"];

    return (
        <>
            <div className="grid grid-cols-4 w-full mt-3 gap-x-6 gap-y-8">
                {template.map((el, index) => (
                    <div
                        className="w-full h-auto border border-neutral-300 rounded-b-lg hover:shadow-medium cursor-pointer transition-all duration-300"
                        key={index}
                        onClick={() => setShowTemplateOverview(index + 1)}
                    >
                        <Image src={el} alt="template" width="auto" height="auto" />
                        <div className="flex flex-row justify-between mt-3 mb-2 px-3">
                            <div className="">
                                <span className="text-sm font-bold">₹199</span>
                                <span className="text-sm text-neutral-600 px-1">for</span>
                                <span className="text-sm font-bold">1000 pcs.</span>
                            </div>
                            <div className="flex flex-row items-center">
                                <div className="flex flex-row">
                                    {availableColors.map((el, index) => (
                                        <div className="-mr-2" key={index}>
                                            <ColorDot color={el} />
                                        </div>
                                    ))}
                                </div>
                                <span className="pl-4 text-xs text-neutral-700">+4</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
