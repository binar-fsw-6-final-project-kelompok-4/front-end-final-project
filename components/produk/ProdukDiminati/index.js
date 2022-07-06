import Styles from "./minat.module.css";
import Image from "next/image";


export default function Intersted() {
    return(
        <div className={Styles.MainCard}>

            <div className={Styles.judulCard}>
                <label>Product Diminati</label>
            </div>

            <div className={Styles.CardProduct}>

                <div className={Styles.MainProduct}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiProduk}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

                <div className={Styles.MainProduct}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiProduk}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

                <div className={Styles.MainProduct}>
                    <img src="/Assets/jam.png" />
                    <div className={Styles.deskripsiProduk}>
                        <label>Jam Tangan Casio</label>
                        <p>Aksesoris</p>
                        <h4>Rp 250.000</h4>
                    </div>
                </div>

            </div>

        </div>
    )
}
