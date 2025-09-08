import { Header } from "@/components";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Header/>
        <main className="w-screen mt-[70px]">
        {children}
        </main>
      </body>
    </html>
  );
}
