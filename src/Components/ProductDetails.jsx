import "../CSS/styles.css"
import DetailButtonsClick from "./DetailButtonsClick"
function ProductDetails() {
    return (
        <div className="product--details">
            <DetailButtonsClick/>
            <div className="detail-user-account">
                <div className="detail-label">
                    <h4 className="detail--label">اطلاعات حساب کاربری</h4>
                    <img src="/public/Images/blue-icon.png" alt="" className="detail--icon" />
                </div>
                <div className="detail-personal-information">
                    <input type="text" placeholder="Username" name="" id="" className="detail-personal-information-input-style" />
                    <input type="password" placeholder="Password" name="" id="" className="detail-personal-information-input-style" />
                </div>
            </div>
            <div className="detail-shopping-basket--cost">
                <button className="detail-shopping-basket-button">افزودن به سبد خرید</button>
                <p className="detail-cost">
                    <div className="persian--cost">تومان</div>
                    <div className="english-cost">10,000,000</div>
                </p>
            </div>
        </div>
    );
}
export default ProductDetails;



