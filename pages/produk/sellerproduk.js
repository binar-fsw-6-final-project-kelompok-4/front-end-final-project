import { NavBeforeLogin } from "../../components/Navbar/Navbar";
import Halamanseller from "../../components/HalamanProduk/Seller"
import Footer from "../../components/Footer/Footer";

export default function sellerproduk() {
    return (
        <div>
            <NavBeforeLogin />
            <Halamanseller />
            <Footer />
        </div>
    )
}
