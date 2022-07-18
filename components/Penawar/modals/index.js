import Styles from './modals.module.css';

export default function Modals({CloseModal}) {

    return (
        <div className={Styles.Modals} id="Modals">
            <div className={Styles.ModalBody}>
                <div className={Styles.CloseModal}>
                    <button onClick={() => CloseModal(false)}>
                        <div className={Styles.ModalClose}></div>
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
                        <img src="/logo.jpg" />
                        <div className={Styles.TextModalUser}>
                            <label>Nama Pembeli</label>
                            <p>Kota</p>
                        </div>
                    </div>
                    <div className={Styles.ModalProduk}>
                        <img src="/Assets/jam.png" />
                        <div className={Styles.TextModalProduk}>
                            <label>Produk : Jam Tangan Casio</label>
                            <label>Harga : Rp 250.000</label>
                            <label>Ditawar : Rp 200.000</label>
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
