import Navbar from './navbar'
import Footer from './footer'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF2D9'}}>
      <Navbar />
      <div style={{backgroundColor: '#FAF2D9'}}>
        {children}
      </div>
      <Footer />
    </div>
  );
}
