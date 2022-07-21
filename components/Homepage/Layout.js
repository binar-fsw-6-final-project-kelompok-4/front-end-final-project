
import { NavBeforeLogin } from "../Navbar/NavBeforeLogin"
import Footer from "../Footer/Footer"

export default function Layout({ children }) {
  return (
    <>
      <NavBeforeLogin/>
      <main>{children}</main>
      <Footer/>
    </>
  );
}
