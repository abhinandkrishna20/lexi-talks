
import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Lexi Talks — Law, made easier",
    template: "%s | Lexi Talks",
  },
  description:
    "Learn Indian law through simple explanations, case studies, revision resources and a friendly learning community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#FAF9F6] text-[#344054] antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
