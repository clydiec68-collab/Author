import "./globals.css";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Clydie Cronjé — Author",
  description:
    "South African author of 30 books — from haunted boarding schools to ancient philosophy to the gold-dust history of the West Rand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Playfair+Display:ital,wght@0,500;0,600;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="max-w-[1100px] mx-auto px-3 md:px-5 py-4 md:py-10">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </div>

        {/* Payhip overlay checkout — loads their JS for embed buttons */}
        <Script
          src="https://payhip.com/payhip.js"
          strategy="lazyOnload"
        />

        {/* Paystack InlineJS v2 — for direct ZAR payments */}
        <Script
          src="https://js.paystack.co/v2/inline.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
