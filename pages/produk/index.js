import { NavBeforeLogin } from "../../components/Navbar/Navbar";
import Produk from "../../components/produk"
import Footer from "../../components/Footer/Footer";

export default function index() {
    return (
        <div>
            <NavBeforeLogin />
            <Produk />
            <Footer />
        </div>
    )
}
