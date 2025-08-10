import { Metadata } from "next";
import "../styles/component.css";
import "../styles/globals.css";
import "../styles/fonts.css";
import Header from "./Header";

export const metadata: Metadata = {
  title: "the committees",
  description: "กทม.",
  icons: {
    icon: [
      {
        url: "/the-committees/favicon.ico",
        type: "image/x-icon",
      },
    ],
  },
  openGraph: {
    title: "the committees",
    description: "กทม.",
    images: [
      {
        url: "https://wevisdemo.github.io/the-committees/og_default.jpg", // Path relative to the public directory
        width: 1200,
        height: 630,
        alt: "the committees OG Image",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "the committees",
    description: "กทม.",
    images: ["https://wevisdemo.github.io/the-committees/og_default.jpg"], // Path relative to the public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <div className=" relative ">
          <Header />
          <div className=" ">{children}</div>
        </div>
      </body>
    </html>
  );
}
