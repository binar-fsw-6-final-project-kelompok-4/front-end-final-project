/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "../../styles/Card_Produk.module.css";



export default function CardProduct(props) {
  console.log('id: ', props.props.id)
  return (
    <>
      <div id={props.props.id} className={styles.card}>
        <Link href={`https://fsw6-group4-staging.herokuapp.com/halamanproduk?id=/${props.props.id}`}>
          <a>
            <img
              // src={props.props.Images[0].product_img}
              src={props.props.images[0].img}
              alt="Image not available"
              className={styles.imgProduk}
            />
            <p className={styles.nama}>{props.props.product_name}</p>
            <p className={styles.category}>{props.props.category}</p>
            <p className={styles.price}>Rp {props.props.price}</p>
          </a>
        </Link> 
      </div>
    </>
  );
}
