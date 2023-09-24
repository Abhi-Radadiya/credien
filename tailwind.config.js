/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            boxShadow: {
                Xsmall: "0 1px 2px 0 rgba(16,24,40,0.05)",
                small: "0px 1px 2px -1px rgba(16, 24, 40, 0.1), 0px 1px 3px rgba(16, 24, 40, 0.1);",
                medium: "0px 2px 4px -2px rgba(16, 24, 40, 0.1), 0px 4px 6px -1px rgba(16, 24, 40, 0.1)",
                large: "0px 4px 6px -4px rgba(16, 24, 40, 0.1), 0px 10px 15px -3px rgba(16, 24, 40, 0.1)",
                xLarge: "0px 8px 10px -6px rgba(16, 24, 40, 0.1), 0px 20px 25px -5px rgba(16, 24, 40, 0.1)",
                innerShadow: "inset 0px -1px 0px rgba(203, 213, 225, 1)",
                dropShadow: "0px -10px 15px -3px rgba(16, 24, 40, 0.1), 0px -4px 6px -4px rgba(16, 24, 40, 0.1)",
                smallDropDownShadow: "0px 2px 1px 0px rgba(16, 24, 40, 0.05)",
                white: "0 1px 2px 0 rgba(255, 255, 255, 0.7)",
            },
        },
    },
    plugins: [],
};
