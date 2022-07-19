import { useState } from "react";
import Styles from "./penawar.module.css";
import Modals from "./modals";
import StatusTransaksi from "./Status";

export default function Penawar() {

    const [OpenModal, SetOpenModal] = useState(false);

    return (
        <div className={Styles.ContainerPenawar}>

            <div className={Styles.TitlePenawar}>
                <div className={Styles.JudulPenawrProduct}>
                    <label>INFO PENAWAR PRODUCT</label>
                </div>
                <div className={Styles.BackProduk}>
                    <a href="/produk">
                        <img src="/Assets/back.png" />
                    </a>
                </div>
            </div>

        <div className={Styles.BodyPenawar}>

            <div className={Styles.InfoUser}>
                <div className={Styles.RowUser}>
                    <img className={Styles.ImgUser} src="/logo.jpg" />
                    <div className={Styles.textUser}>
                        <label>Nama Pembeli</label>
                        <p>Kota</p>
                    </div>
                </div>
            </div>

            <div className={Styles.InfoPenawar}>
                <div className={Styles.judulInfoProduk}>
                    <label>Daftar Product yang Ditawar</label>
                </div>

                <div className={Styles.RowPenawar}>
                    <div className={Styles.ColProduk}>
                        <img src="/Assets/jam.png" />
                        <div className={Styles.DetailProduk}>
                            <h4>Penawar Produk</h4>
                            <label>Jam Tangan Casio</label>
                            <label>Harga : Rp 250.000</label>
                            <label>Ditawar : Rp 200.000</label>
                        </div>
                        <div className={Styles.DateProdukPenawar}>
                            <label>20 April, 14.00</label>
                        </div>
                    </div>
                    <div className={Styles.BtnPenawar}>
                        <button className={Styles.BtnCancle}>Cancel</button>
                        <button id="BtnShowModal" onClick={() => { SetOpenModal(true);}} className={Styles.BtnAccept}>Accept</button>
                    </div>
                </div>

                <div className={Styles.RowPenawar}>
                    <div className={Styles.ColProduk}>
                        <img src="/Assets/jam.png" />
                        <div className={Styles.DetailProduk}>
                            <h4>Penawar Produk</h4>
                            <label>Jam Tangan Casio</label>
                            <label>Harga : Rp 250.000</label>
                            <label>Ditawar : Rp 200.000</label>
                        </div>
                        <div className={Styles.DateProdukPenawar}>
                            <label>20 April, 14.00</label>
                        </div>
                    </div>
                    <div className={Styles.BtnPenawar}>
                        <button className={Styles.BtnCancle}>Cancel</button>
                        <button id="BtnShowModal" onClick={() => { SetOpenModal(true);}} className={Styles.BtnAccept}>Accept</button>
                    </div>
                </div>

                <div className={Styles.RowPenawar}>
                    <div className={Styles.ColProduk}>
                        <img src="/Assets/jam.png" />
                        <div className={Styles.DetailProduk}>
                            <h4>Penawar Produk</h4>
                            <label>Jam Tangan Casio</label>
                            <label>Harga : Rp 250.000</label>
                            <label>Ditawar : Rp 200.000</label>
                        </div>
                        <div className={Styles.DateProdukPenawar}>
                            <label>20 April, 14.00</label>
                        </div>
                    </div>
                    <div className={Styles.BtnPenawar}>
                        <button className={Styles.BtnCancle}>Cancel</button>
                        <button id="BtnShowModal" onClick={() => { SetOpenModal(true);}} className={Styles.BtnAccept}>Accept</button>
                    </div>
                </div>

                <div className={Styles.RowPenawar}>
                    <div className={Styles.ColProduk}>
                        <img src="/Assets/jam.png" />
                        <div className={Styles.DetailProduk}>
                            <h4>Penawar Produk</h4>
                            <label>Jam Tangan Casio</label>
                            <label>Harga : Rp 250.000</label>
                            <label>Ditawar : Rp 200.000</label>
                        </div>
                        <div className={Styles.DateProdukPenawar}>
                            <label>20 April, 14.00</label>
                        </div>
                    </div>
                    <div className={Styles.BtnPenawar}>
                        <button className={Styles.BtnCancle}>Cancel</button>
                        <button id="BtnShowModal" onClick={() => { SetOpenModal(true);}} className={Styles.BtnAccept}>Accept</button>
                    </div>
                </div>

            </div>
        </div>

        <div className={Styles.ModalsContainer}>
            {OpenModal && <Modals CloseModal={SetOpenModal} />}
            {/* {OpenModal && <StatusTransaksi CloseModal={SetOpenModal} />} */}
        </div>
            
    </div>
    )
}
