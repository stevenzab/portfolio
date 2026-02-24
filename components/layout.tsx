import Navbar from './navbar'
import Footer from './footer'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <div className="overflow-x-hidden">
        {children}
      </div>
      <Footer />
    </div>
  );
}
