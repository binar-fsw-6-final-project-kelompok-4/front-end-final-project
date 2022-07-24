
/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Button, Container, Form, Navbar, NavbarBrand } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useEffect, useState } from "react"
import axios from "axios"

import CardProduct from "./CardProduct";
import styles from "../../styles/Product.module.css";
import navStyles from "../../styles/NavBeforeLogin.module.css";

export default function ListProduct() {
  // const router = useRouter();
  const [productList, setProductList] = useState([])

  useEffect(() => {
    getProduct()
    console.log("Produk: ", productList)
  }, [])
  
  const getProduct = async () => {
    try {
      const response = await axios.get(`https://fsw6-group4-staging.herokuapp.com/api/v1/listproduct`)
      setProductList(response.data.data)
      console.log('Get All ', productList)
    }

    catch(err) {
      console.log(err)
    }
  }

  const handleFilter = async (e, category) => {
    try {
      e.preventDefault()
        const response = await axios.post(`https://fsw6-group4-staging.herokuapp.com/api/v1/products/filterByCategory`, {
          category
        })
        setProductList(response.data.data)
        console.log('Filter ', category, productList)
    }

    catch(err) {
      console.log(err)
    }
  }

  const handleSearch = async (e, productName) => {
    try {
      e.preventDefault()
        const response = await axios.post(`https://fsw6-group4-staging.herokuapp.com/api/v1/product/filterByName`, {
          productName
        })
        setProductList(response.data.data)
    }

    catch(err) {
      console.log(err)
    }
  }

  return (
    <>
      <Container>
        <div id={navStyles.homeSearch}>
          <form className={navStyles.search} onSubmit={(event) => handleSearch(event, document.getElementById('search').value)}>
            <input id="search" type="search" placeholder="Cari di sini ..." aria-label="Search" className={navStyles.formsearch}/>
            <button type="search" className={navStyles.btnsearch}><Search className={navStyles.iconsearch}/></button>
          </form>
        </div>

        <h1 className={styles.title}>Telusuri Kategori</h1>

        <div className={styles.btnFilterContainer}>
            <a>
              <Button className={styles.btnFilterActive} type="search" onClick={() => getProduct()}>
                <Search className={styles.icon} />
                <p className={styles.text}>Semua</p>
              </Button>
            </a>
            <a>
              <Button className={styles.btnFilterActive} type="search" onClick={(event) => handleFilter(event, "Hobi")}>
                <Search className={styles.icon} />
                <p className={styles.text}>Hobi</p>
              </Button>
            </a>
            <a>
              <Button className={styles.btnFilterActive} type="search" onClick={(event) => handleFilter(event, "Kendaraan")}>
                <Search className={styles.icon} />
                <p className={styles.text}>Kendaraan</p>
              </Button>
            </a>
            <a>
              <Button className={styles.btnFilterActive} type="search" onClick={(event) => handleFilter(event, "Baju")}>
                <Search className={styles.icon} />
                <p className={styles.text}>Baju</p>
              </Button>
            </a>
            <a>
              <Button className={styles.btnFilterActive} type="search" onClick={(event) => handleFilter(event, "Aksesoris")}>
                <Search className={styles.icon} />
                <p className={styles.text}>Aksesoris</p>
              </Button>
            </a>
            <a>
              <Button className={styles.btnFilterActive} type="search" onClick={(event) => handleFilter(event, "Camera")}>
                <Search className={styles.icon} />
                <p className={styles.text}>Camera</p>
              </Button>
            </a>
            <a>
              <Button className={styles.btnFilterActive} type="search" onClick={(event) => handleFilter(event, "Elektronik")}>
                <Search className={styles.icon} />
                <p className={styles.text}>Elektronik</p>
              </Button>
            </a>
        </div>
        
        <div className={styles.produkContainer}>
          { productList.map((item) => <CardProduct key={item.id} props={item}/>) }
        </div>
      </Container>
    </>
  );
};