import { Header } from "@/components";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header/>
      <main className="w-full mt-[70px]"
      >
        {children}
      </main>
    </div>
  );
}
