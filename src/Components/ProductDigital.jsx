import "../CSS/styles.css";
import ProductDetails from "./ProductDetails"
import ProductAbout from "./ProductAbout"
export default function ProductDigital() {
    return (
        <div className="product-digital-container">
            <div className="product-digital-box">
                <h1 className="product--tags">دیجیتال > رسته > نام شرکت سازنده > نام محصول</h1>
                <div className="product--details--about-container">
                    <ProductDetails/>
                    <ProductAbout />
                </div>
            </div>
        </div>
    );
}
