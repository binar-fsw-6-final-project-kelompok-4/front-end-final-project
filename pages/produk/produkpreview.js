import { NavBeforeLogin } from "../../components/Navbar/Navbar";
import Preview from "../../components/HalamanProduk/Preview"
import Footer from "../../components/Footer/Footer";

export default function produkpreview() {
    return (
        <div>
            <NavBeforeLogin />
            <Preview />
            <Footer />
        </div>
    )
}
