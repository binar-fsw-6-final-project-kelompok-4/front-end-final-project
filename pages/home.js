
import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Diskon from "../components/Carousel-Home/Diskon";
import Product from "../components/Homepage/Product";
import Footer from "../components/Footer/Footer";
import FloatingButton from "../components/buttonJual/floatingButton";

import { getInitialData } from "../data/data.js";
import { getKategoriData } from "../data/kategori.js";

export default function Home(props) {
    const { isLogin, isSeller } = props;

    // getdata
    const [product, setProduct] = useState(getInitialData());
    const [kategori] = useState(getKategoriData());

    const menuItems = [...new Set(getKategoriData().map((Produc) => Produc.category))];

    const filterItem = (filkategori) => {
        const newItem = getInitialData().filter((newProduc) => {
            return newProduc.category === filkategori;
        });
        setProduct(newItem);
    };

    return (
        <>
            <Navbar></Navbar>
            <Diskon></Diskon>
            <Product
                data={product}
                setProduct={setProduct}
                kategori={kategori}
                filterItem={filterItem}
                menuItems={menuItems}
            ></Product> 
            <FloatingButton></FloatingButton>
            <Footer></Footer>
        </>
    );
}
