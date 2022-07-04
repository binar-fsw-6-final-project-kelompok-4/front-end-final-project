// import SellerImg from "../../assets/images/seller-1.png";
// import Button from "../../assets/js/button";

// function CheckButton(props) {
//   const { isSeller } = props;
//   if (isSeller === "yes") {
//     return (
//       <>
//         <Button  className="btn mt-3 ms-auto py-2" isPrimary hasShadow isBlock>
//           Terbitkan
//         </Button>
//         <Button  className="btn mt-3 ms-auto py-2" isSecondary hasShadow isBlock>
//           Edit
//         </Button>
//       </>
//     );
//   } else {
//     return (
//       <Button  className="btn mt-3 ms-auto py-2" isPrimary hasShadow isBlock>
//         Tertarik dan Nego
//       </Button>
//     );
//   }
// }


export default function ActionDetail(props) {
  const { isSeller } = props;
  return (
    <section className="section-product2">
    <div className="card-product2">
        {/* <CheckButton isSeller={isSeller} /> */}
        <div className="card is-block ms-auto p-3 img-box mt2 mr-5">
          <div className="d-flex justify-content-start">
            <img className="me-3" src="images/seller-1.png" alt="" />
            <div>
              <h4>Nama Penjual</h4>
              <p>Kota</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

