import Navbar from './navbar'
import Footer from './footer'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <div className="pt-10">
        {children}
      </div>
      <Footer />
    </div>
  );
}
