import { Header } from "@/components";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header/>
      <main className="w-full mt-[70px] px-[100px] py-[50px]"
      >
        {children}
      </main>
    </div>
  );
}
