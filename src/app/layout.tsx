import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "@/sass/global.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fylo Dark Theme Landing Page",
  description: "Challenge from Frontend Mentor to create a dark theme landing page for Fylo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
