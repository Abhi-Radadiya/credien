import React from "react";

export default function Accordian(props) {
    const { question, answer, index } = props;

    return (
        <>
            <div className="flex flex-wrap justify-start overflow-hidden">
                <label className="grow px-4 py-3 font-medium cursor-pointer" htmlFor={`collapse${index}`}>
                    {question}
                </label>
                <input className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border opacity-0" type="checkbox" name={`collapse${index}`} id={`collapse${index}`} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:opacity-100">
                    A: {answer}
                </div>
            </div>
        </>
    );
}
