import "./CSS/styles.css";
import ProductDigital from "./Components/ProductDigital"
import Footer from "./Components/Footer"


export default function Page() {
  return (
    <div    className="page-digital-product">
      {/* add header here */}
      <ProductDigital/>
      <Footer/>
    </div>
  );
}

