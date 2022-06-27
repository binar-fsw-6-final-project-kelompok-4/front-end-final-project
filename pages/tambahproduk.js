import Head from "next/head";
import styles from "./tambahproduk.module.css";
import Link from "next/link";

export default function tambahproduk(){
    return(
        <div className={styles.container}>
            <Head>
                <title>SecondHand. | Tambah Produk</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
            </Head>
                <div className={styles.konten}>
                    <form action="/previewproduk" method="POST">
                        <div className={styles.namaproduct}>
                            <label for='namaproduk' className={styles.labelproduct}>Nama Produk</label>
                            <input type='text' className={styles.inputkonten} name="Nama" id="namaproduk" placeholder="Nama Produk" required></input>
                        </div>

                        <div className={styles.hargaproduct}>
                            <label for='hargaproduk' className={styles.labelproduct}>Harga Produk</label>
                            <input type='text' className={styles.inputkonten} name="Harga" id="hargaproduk" placeholder="Rp. 0.00" required></input>
                        </div>

                        <div className={styles.kategoriproduct}>
                                <label for="kategori">Kategori</label>
                                    <select name="kategori" id="kategori" className={styles.inputkonten}    >
                                        <option value=""></option>
                                        <option value="Hobi">Hobi</option>
                                        <option value="Kendaraan">Kendaraan</option>
                                        <option value="Baju">Baju</option>
                                        <option value="Elektronik">Elektronik</option>
                                    </select>
                        </div>

                        <div className={styles.deskripsiproduct}>
                            <label for='Deskripsiproduk' className={styles.labelproduct}>Deskripsi Produk</label>
                            <input type='text' className={styles.inputkonten} name="Deskripsi" id="Deskripsiproduk" placeholder="Contoh : ..." required></input>
                        </div>

                        <div className={styles.fotoproduct}>
                                <label for='fotoproduk' className={styles.labelproductgambar}>Foto Produk</label>
                                <input type='file' className={styles.inputkontenfile} name="foto" id="fotoproduk" required></input>
                        </div>

                        <div className={styles.buttonproduct}>
                            <input type="submit" className={styles.button} name="submit" value="Preview"></input>
                            <input type="submit" className={styles.button1} name="submit" value="Terbitkan"></input>
                        </div>
                    </form>
                </div>
        </div>
    )
}