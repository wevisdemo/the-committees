import { Metadata } from "next";
import "../styles/component.css";
import "../styles/globals.css";
import "../styles/fonts.css";
import Header from "./Header";
import Analytics from "./Analytics";

const description =
  "คณะกรรมาธิการประจำรัฐสภา หรือ ‘กมธ.’ เปรียบเสมือนห้องประชุมสภาขนาดเล็กที่ทำหน้าที่พิจารณาศึกษาปัญหาและหาข้อเท็จตามที่สภากำหนด จึงเป็นเรื่องสำคัญที่จะต้อง ‘เข้าใจ’ ว่า กมธ. คืออะไร มีบทบาทอย่างไร รวมถึง ‘ติดตาม’ กระบวนการทำงานของ กมธ. ว่าเป็นอย่างไร ชวนหาตอบคำถามสำคัญว่าในช่วง 2 ปีที่ผ่านมา กมธ. ทำงานเพื่อผลักดันประเด็นอะไรบ้าง กมธ. มีการเปิดเผยข้อมูลอะไรและในลักษณะไหน และนักวิชาการมีความเห็นต่อโครงสร้างและอำนาจของ กมธ. ในปัจจุบันอย่างไร";
export const metadata: Metadata = {
  title: "the committees",
  description: description,
  icons: {
    icon: [
      {
        url: "/the-committees/favicon.ico",
        type: "image/x-icon",
        sizes: "16x16",
      },
    ],
  },
  openGraph: {
    title: "the committees",
    description: description,
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
    description: description,
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
          <Analytics />
        </div>
      </body>
    </html>
  );
}
