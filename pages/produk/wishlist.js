import { NavBeforeLogin } from "../../components/Navbar/Navbar";
import Wishlist from '../../components/wishlist'
import Footer from "../../components/Footer/Footer";

export default function WishList() {
    return (
        <div>
            <NavBeforeLogin />
            <Wishlist />
            <Footer />
        </div>
    )
}
