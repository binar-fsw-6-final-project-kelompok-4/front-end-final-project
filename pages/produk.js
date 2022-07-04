
import { useParams } from "react-router-dom";

import ActionDetail from "../components/Daftar-Produk/ActionDetail";
import DescriptionProduct from "../components/Daftar-Produk/DescriptionProduct";
import Galery from "../components/Daftar-Produk/Galery";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import DataProduk from "../components/Daftar-Produk/dataProduk";
// import ProductTitle from "../components/Daftar-Produk/ProductTitle";

import { getInitialData } from "../data/data.js";

export default function DetailProduct(props) {
  const { isSeller, isLogin } = props;

  const { id } = useParams();
  const dataProduct = getInitialData().find((prod) => prod.id === id);

  return (
    <>
      <Navbar isLogin={isLogin} isSeller="yes" />
      {/* <ProductTitle dataProduct={dataProduct} /> */}
      <section className="container section-detail-product ">
        <div className="row">
          <div className="col-lg-6 order-sm-1 ">
            <Galery dataProduct={dataProduct} />
          </div>
          <div className="col-lg-5 order-sm-2">
            <DataProduk dataProduct={dataProduct}/>
            <ActionDetail isSeller={isSeller} />
          </div>
        </div>
      </section>
      <DescriptionProduct dataProduct={dataProduct} />
      <Footer />
    </>
  );
}