import Styles from './modals.module.css';

export default function Modals({CloseModal}) {

    return (
        <div className={Styles.Modals} id="Modals">
            <div className={Styles.ModalBody}>
                <div className={Styles.CloseModal}>
                    <button onClick={() => CloseModal(false)}>
<<<<<<< HEAD
=======
                        <div className={Styles.ModalClose}></div>
>>>>>>> b84d5bb62e3c7323848af43d4b1667d2de820b13
                        <img src="/Assets/x.svg" />
                    </button>
                </div>
                <div className={Styles.ModalJudul}>
                    <label>Yeay kamu berhasil mendapat harga yang sesuai</label>
                    <p>Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>
                </div>
                <div className={Styles.ModalKonten}>
                    <h2>Product Match</h2>
                    <div className={Styles.ModalUser}>
<<<<<<< HEAD
                        <img src="/Assets/jam.png" />
=======
                        <img src="/logo.jpg" />
>>>>>>> b84d5bb62e3c7323848af43d4b1667d2de820b13
                        <div className={Styles.TextModalUser}>
                            <label>Nama Pembeli</label>
                            <p>Kota</p>
                        </div>
                    </div>
                    <div className={Styles.ModalProduk}>
                        <img src="/Assets/jam.png" />
                        <div className={Styles.TextModalProduk}>
<<<<<<< HEAD
                            <p>Produk : Jam Tangan Casio</p>
                            <p>Harga : Rp 250.000</p>
                            <p>Ditawar : Rp 200.000</p>
=======
                            <label>Produk : Jam Tangan Casio</label>
                            <label>Harga : Rp 250.000</label>
                            <label>Ditawar : Rp 200.000</label>
>>>>>>> b84d5bb62e3c7323848af43d4b1667d2de820b13
                        </div>
                    </div>
                </div>
                <div className={Styles.BtnModal}>
                    <button>Hubungi via Whatsapp
                        <img src="/Assets/wa.svg" />
                    </button>
                </div>
            </div>
        </div>
    )
}
