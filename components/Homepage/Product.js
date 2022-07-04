import {Button} from "react-bootstrap";
import Image from "next/image"
import { getInitialData } from "../../data/data.js";

export default function Product(params) {
    return (
        <>
            <section className="container section-product mt-2 mb-5" id="btn-category">
                <div className="filter mb-5" >
                    <h3>Kategori</h3>
                    <div className="justify-content-start my-2">
                        <Button
                            className="me-4 border-0 hi active btn-shadow"
                            type="link"
                            src=""
                            onClick={() => params.setProduct(getInitialData())}
                        ><div>
                                <Image
                                    src="images/fi_search.png"
                                    alt="Foto"
                                    className="img-fluid"
                                />
                            Semua
                        </div>
                        </Button>

                        {params.menuItems.map((kategori) => {
                            return (
                                <Button className="me-4 hi btn-shadow border-0"
                                    type="link"
                                    onClick={() => params.filterItem(kategori)}
                                    key={params.id}
                                ><div>
                                        <Image
                                            src="images/fi_search_black.png"
                                            alt="Foto"
                                            className="img-fluid "
                                        />
                                        {kategori}
                                    </div>
                                </Button>
                            );
                        })}
                    </div>
                </div>

                <div className="product" >
                    <div className="row justify-content-center">
                        {params.data.length === 0 ? (
                            <div className="d-flex justify-content-center null-illustration p-5">
                                <div>
                                    <Image src="images/ilustrasi.svg" alt="" className="img-fluid mb-3" />
                                    <p>Produk tidak ditemukan</p>
                                </div>
                            </div>
                        ) : (
                            params.data.map((item) => {
                                return (
                                    <Button
                                        type="link"
                                        href={`/product/${item.id}`}
                                        className="col-lg-3 col-md-6 col-sm-12 r"
                                        key={item.id}
                                    >
                                        <div className="card-product p-3 mb-4">
                                            <Image
                                                src={item.image}
                                                alt="Foto"
                                                className="img-fluid mb-3"
                                            />
                                            <div className="product-name">
                                                <h3>{item.name.substring(0, 50)}</h3>
                                            </div>
                                            <p>{item.category}</p>
                                            <h4>Rp. {item.price}</h4>
                                        </div>
                                    </Button>
                                );
                            })
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
