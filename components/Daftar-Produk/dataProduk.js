
import Button from "../../styles/button";

function CheckButton(props) {
    const { isSeller } = props;
    if (isSeller === "yes") {
      return (
        <>
          <Button  className="btn mt-3 ms-auto py-2" isPrimary hasShadow isBlock>
            Terbitkan
          </Button>
          <Button  className="btn mt-3 ms-auto py-2" isSecondary hasShadow isBlock>
            Edit
          </Button>
        </>
      );
    } else {
      return (
        <Button  className="btn mt-3 ms-auto py-2" isPrimary hasShadow isBlock>
          Tertarik dan Nego
        </Button>
      );
    }
  }

export default function dataProduk({ dataProduct}) {
    const { isSeller } = dataProduct;
    return (
        <>
        <section className="section-product2">
            <div className="card-product2 p-3 ">
                <div className="product-name">
                    <h3>{dataProduct.name.substring(0, 50)}</h3>
                </div>
                <p>{dataProduct.category}</p>
                <h4>Rp. {dataProduct.price}</h4>
                <div>
                    <CheckButton isSeller={isSeller} />
                </div>
            </div>
        </section>
        </>
    );
}


