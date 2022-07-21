
import Layout from "../components/Homepage/Layout"
import Diskon from "../components/Carousel-Home/Diskon";
import ListProduct from "../components/Homepage/Product";
import FloatingButton from "../components/buttonJual/floatingButton";

export default function Home() {
    return (
      <Layout>
        <Diskon/>
        <ListProduct/>
        <FloatingButton/>
      </Layout>
  );
}

