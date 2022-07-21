import { NavBeforeLogin } from "../../components/Navbar/Navbar";
import EditProfil from '../../components/editprofil';
import Footer from "../../components/Footer/Footer";

export default function editprofil() {
  return (
    <div>
        <NavBeforeLogin />
        <EditProfil />
        <Footer />
    </div>
  )
}
