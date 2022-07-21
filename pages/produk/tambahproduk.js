import { NavBeforeLogin } from "../../components/Navbar/Navbar";
import Tambahproduk from "../../components/produk/AddProduk";
import Footer from "../../components/Footer/Footer";

export default function tambahproduk() {
    return (
        <div>
            <NavBeforeLogin />
            <Tambahproduk />
            <Footer />
        </div>
    )
}
