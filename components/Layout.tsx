import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from './Nav'

interface LayoutProps {
    children: React.ReactNode,
  };




const  Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  return (
    <>
      <Navbar/>
      <main id='main'>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout