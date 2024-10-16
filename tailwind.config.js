import tailwindcss from "@catppuccin/tailwindcss";
import nativewind from "nativewind/preset";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{html,js,jsx,ts,tsx}",
        "./components/**/*.{html,js,jsx,ts,tsx}"],
    presets: [nativewind],
    theme: {
        extend: {},
    },
    plugins: [
        tailwindcss({
            prefix: "ctp",
            defaultFlavour: "mocha",
        }),
    ],
}

