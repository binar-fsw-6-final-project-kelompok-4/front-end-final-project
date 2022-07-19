
import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Diskon from "../components/Carousel-Home/Diskon";
import Product from "../components/Homepage/Product";
import Footer from "../components/Footer/Footer";
import FloatingButton from "../components/buttonJual/floatingButton";


export default function Home() {
    
    return (
        <>
            <Navbar></Navbar>
            <Diskon></Diskon>
            <Product></Product> 
            <FloatingButton></FloatingButton>
            <Footer></Footer>
        </>
    );
}
