import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      {children}

      <Footer />
    </>
  );
}
