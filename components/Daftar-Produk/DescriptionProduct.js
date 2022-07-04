import Button from "../../styles/button";
// import Shadow from "../../assets/images/shadow-img.png";
// import Pad from "../../assets/images/cover-img.png";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function DescriptionProduct({ dataProduct }) {
  return (
    <section className="container section-galery-product">
    <div className="row justify-content-between mx-lg-5">
      <div className="col-lg-6 col-sm-12 img-box2">
        <h3 className="">Deskripsi</h3>
        <p>{dataProduct.description}</p>
      </div>
      
      <div className="col-lg-5 col-sm-6 align-self-center text-center">
        <section className="section-product3">
          <div className="card-product3">
            <div className="judul-cardproduk">
              <p>Produk Sejenis</p>
            </div>
            <OwlCarousel
                className="mb-1"
                merge={true}
                loop={true}
                autoplay={true}
                autoplayTimeout={"2000"}
                responsive={{
                  0: {
                    items: 1,
                  },
                  540: {
                    items: 1,
                  },
                  960: {
                    items: 2,
                  },
                  1140: {
                    items: 2,
                  },
                }}
              >
                <div className="card-thumb">
                  <Button hasShadow className="thumb-img">
                    <img className="img-fluid" src={dataProduct.image} alt="" />
                    <div className="">
                        <h3>{dataProduct.name.substring(0, 50)}</h3>
                    </div>
                    <p>{dataProduct.category}</p>
                    <h4>Rp. {dataProduct.price}</h4>
                  </Button>
                </div>
                <div className="card-thumb">
                  <Button hasShadow className="thumb-img">
                    <img className=" img-fluid" src={dataProduct.image} alt="" />
                    <div className="">
                        <h3>{dataProduct.name.substring(0, 50)}</h3>
                    </div>
                    <p>{dataProduct.category}</p>
                    <h4>Rp. {dataProduct.price}</h4>
                  </Button>
                </div>
            </OwlCarousel>
          </div>
        </section>
        </div>
      </div>
    </section>
  );
}
