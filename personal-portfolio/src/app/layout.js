import { Inter } from "next/font/google";
import "./globals.css";
// import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "khiba-k",
  description:
    "Khiba Koenane - Expert Software Developer with a focus on Web Development and IoT. Explore cutting-edge projects and innovative solutions in technology.",
  icons: {
    icon: "/letter-k.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={metadata.icons.icon} />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
