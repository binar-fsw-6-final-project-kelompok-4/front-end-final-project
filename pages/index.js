
import Head from 'next/head'

import React, { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Diskon from "../components/Carousel-Home/Diskon";
import Product from "../components/Homepage/Product";
import Footer from "../components/Footer/Footer";
import FloatingButton from "../components/buttonJual/floatingButton";


export default function Home(props) {


    return (
      <div>
      <Head>
        <title>SecondHand</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
            <Navbar></Navbar>
            <Diskon></Diskon>
            <Product></Product> 
            <FloatingButton></FloatingButton>
            <Footer></Footer>
      </div>
    );
}

