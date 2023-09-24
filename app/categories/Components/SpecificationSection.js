import React from "react";

export default function SpecificationSection() {
    const SizeDetail = ({ size, type }) => (
        <div className="flex flex-row justify-between mb-3">
            <h6 className="paragraph-small-medium pr-3">{type}</h6>
            <div className="flex flex-col">
                <span>{size.inch}</span>
                <span>{size.mm}</span>
            </div>
        </div>
    );

    const size = [
        { type: "Full Bleed Size", size: { inch: `3.62" x 2.12"`, mm: "91.9 x 53.8 mm" } },
        { type: "Content Trim Size", size: { inch: `3.5" x 2"`, mm: "88.9 x 50.8 mm" } },
        { type: "Safety area", size: { inch: `3.38" x 1.88"`, mm: "85.9 x 47.8 mm" } },
    ];

    return (
        <>
            <h2 className="w-fit mb-5">
                <div className="relative font-bold text-2xl">
                    Product Specification
                    <span className="h-0.5 w-8 bg-[#d83333] absolute right-0 bottom-0"></span>
                </div>
            </h2>

            <div className="flex flex-row px-10 items-center bg-[#e3fffb66] border-[#e3fffb66] shadow-medium py-6 rounded-2xl w-fit">
                <div className="w-[475px] h-[268px] border border-neutral-700 p-3 relative">
                    <div className="absolute rounded-full bg-neutral-700 right-2 -bottom-1.5 w-3 h-3" />
                    <div className="border-blue-500 h-full border p-3 relative">
                        <div className="absolute rounded-full bg-blue-500 right-28 -top-1.5 w-3 h-3" />
                        <div className="border-red-600 h-full border border-dashed relative">
                            <div className="absolute rounded-full bg-red-600 top-8 -left-1.5 w-3 h-3" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-28 max-w-[330px] w-full">
                    {size.map((el, index) => (
                        <SizeDetail {...el} key={index} />
                    ))}
                </div>
            </div>
        </>
    );
}
