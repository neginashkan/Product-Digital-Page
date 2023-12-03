// import "../CSS/styles.css";
import ProductDetails from "./ProductDetails"
import ProductAbout from "./ProductAbout"
export default function ProductDigital() {
    return (
        <div className="product-digital-container - w-full flex items-center justify-center bg-[#0f0f0f] bg-[url(' /public / Images / bg.png')] bg-no-repeat bg-contain h-auto ">
            <div className="product-digital-box - [@media(max-width:650px)]:h-auto [@media(max-width:650px)]:w-[95%] [@media(max-width:650px)]: - h-auto w-4/5 max-w-[91.25rem] max-h-[auto] bg-[rgb(15,_15,_15,_0.8)] p-[1.38em]   ">
                <h1 className="product--tags - text-[#e6e6e6] text-right  text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] not-italic [font-family:inherit] font-normal leading-[1.6rem] mb-[1em]">دیجیتال > رشته > نام شرکت سازنده > نام محصول</h1>
                <div className="product--details--about-container - flex - [@media(max-width:650px)]:flex-col">
                    <ProductDetails/>
                    <ProductAbout />
                </div>
            </div>
        </div>
    );
}
