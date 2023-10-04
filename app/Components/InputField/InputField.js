import React, { useEffect, useState } from "react";

export const InputField = (props) => {
    const {
        label,
        action,
        labelMarginB,
        labelStyle,
        inputType,
        placeholder,
        helperText,
        value,
        handleClickAction,
        actionTextColor,
        actionTextStyle,
        removeSectionStyle,
        disabled,
        enteredValue,
        onFocus,
    } = props;

    const [inputValue, setInputValue] = useState(value ?? "");

    const handleChangeInputValue = (value) => {
        setInputValue(value);
        enteredValue && enteredValue(value);
    };

    useEffect(() => {
        setInputValue(value ?? "");
    }, [value]);

    return (
        <>
            <div className="w-full">
                {(label || action) && (
                    <div className="mb-1 flex flex-row">
                        <label className={`${labelStyle ?? "paragraph-small-medium"}`}>{label}</label>
                        <span className="paragraph-small-medium italic pl-2 text-neutral-400" onClick={handleClickAction}>
                            {action}
                        </span>
                    </div>
                )}

                <div className="relative">
                    <input
                        type={inputType ?? "text"}
                        placeholder={placeholder}
                        className="w-full h-12 paragraphSmallRegular border rounded-md border-neutral-300 pl-4 pr-4 placeholder:text-neutral-300 disabled:text-neutral-300 focus:border-primary-500 disabled:bg-white outline-none focus:outline-none focus:ring-4 focus:ring-primary-100 caret-primary-500 placeholder:paragraphSmallRegular"
                        onChange={(e) => handleChangeInputValue(e.target.value)}
                        value={inputValue}
                        disabled={disabled}
                        onFocus={() => onFocus && onFocus()}
                    />
                </div>
                {helperText && <p className="w-full pt-2 text-neutral-500 paragraph-small-regular group-disabled:text-neutral-300">{helperText}</p>}
            </div>
        </>
    );
};

export const InputArea = (props) => {
    const {
        label,
        labelMarginB,
        labelStyle,
        type,
        disabled,
        placeholder,
        paddingT,
        boxPaddingB,
        boxHeight,
        resizeNone,
        shadow,
        addon,
        addonIcon,
        placeholderIcon,
        helperText,
        onFocus,
        enteredValue,
    } = props;

    const [inputValue, setInputValue] = useState(props.inputValue ?? "");

    const handleChangeInputValue = (value) => {
        setInputValue(value);
        enteredValue && enteredValue(value);
    };

    useEffect(() => {
        setInputValue(props.inputValue ?? "");
    }, [props.inputValue]);

    return (
        <>
            <div className="w-full">
                {label && (
                    <div className={`flex flex-row justify-between w-full ${labelMarginB ?? "mb-2"}`}>
                        <label
                            className={`disabled:text-neutral-300 ${
                                labelStyle ?? (type === "offer" || type === "storeSetting") ? "paragraph-medium-italic text-neutral-500" : "paragraph-small-medium"
                            }`}
                        >
                            {label}
                        </label>
                    </div>
                )}

                <div className="relative">
                    <textarea
                        value={inputValue}
                        disabled={disabled}
                        type="text"
                        onChange={(e) => handleChangeInputValue(e.target.value)}
                        placeholder={placeholder}
                        className={`${paddingT ?? "pt-3"} px-4 ${!boxPaddingB ? "pb-3" : boxPaddingB} ${
                            boxHeight ?? "h-28"
                        } ${resizeNone} ${shadow} w-full border rounded-md block border-neutral-300 pl-4 placeholder:text-neutral-300 focus:border-primary-500 outline-none focus:outline-none focus:ring-4 focus:ring-primary-100 caret-primary-500 paragraph-small-regular`}
                        onFocus={() => onFocus && onFocus()}
                    />

                    <div className="flex flex-row absolute right-4 top-3">
                        <span className="text-neutral-300 paragraph-small-regular">{addon}</span>
                        {addonIcon && <div className="h-6 w-6 ml-1 rounded">{addonIcon}</div>}
                    </div>

                    {placeholderIcon && <div className="h-6 w-6 rounded absolute top-3 left-4">{placeholderIcon}</div>}
                </div>
                {helperText && <p className="w-full pt-2 text-neutral-500 paragraph-small-regular group-disabled:text-neutral-300">{helperText}</p>}
            </div>
        </>
    );
};
