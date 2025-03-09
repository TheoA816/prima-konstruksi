import { Montserrat } from "next/font/google";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";

export const montserrat = Montserrat({
  subsets: ["latin"],
});

export const manrope = Manrope({
  subsets: ["latin"],
});

export const satoshi = localFont({
  src: [
    {
      path: "./Satoshi-Variable.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "./Satoshi-VariableItalic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
});
