import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

// Import Open Sans
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Premium Catering Service in Bhubaneswar | Mishra Caterers",
  description: "Mishra Caterers offers premium catering, banquet hall booking, wedding planning, and food testing before booking in Bhubaneswar. Visit Event Square Banquet Hall, Jaydev Vihar.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
       
      <body className={`${openSans.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}