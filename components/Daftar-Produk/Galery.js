// import Button from "../../assets/js/button";
// import Shadow from "../../assets/images/shadow-img.png";
// // import Pad from "../../assets/images/cover-img.png";

// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Galery({ dataProduct }) {
  return (
    <>
      <section className="container img-big">
            <div className="img-product-big">
              <img
                src={dataProduct.image}
                alt="image"
                className="gambar"
              />
              {/* <img src={Shadow} alt="Shadow" className="shadow-image mb-n5 " /> */}
              {/* <img src={Pad} alt="Pad" className="pad-image mb-3 " /> */}
            </div>
      </section>
    </>
  );
}
