function DetailButtonsClick() {
    return (
        <div className="details">
            <div className="detail-box">
                <div className="detail-label">
                    <h4 className="detail--label">نوع محصول</h4>
                    <img src="/public/Images/blue-icon.png" alt="" className="detail--icon" />
                </div>
                <div className="detail-buttons">
                    <button className="detail-button active-button">In-Game</button>
                    <button className="detail-button">Redeem Code</button>
                </div>
            </div>
            <div className="detail-box">
                <div className="detail-label">
                    <h4 className="detail--label">ریجن</h4>
                    <img src="/public/Images/blue-icon.png" alt="" className="detail--icon" />
                </div>
                <div className="detail-buttons">
                    <button className="detail-button active-button">Country</button>
                    <button className="detail-button">Country</button>
                    <button className="detail-button">Country</button>
                </div>
            </div>
            <div className="detail-box">
                <div className="detail-label">
                    <h4 className="detail--label">مقدار (عنوان محصول) (واحد شمارش)</h4>
                    <img src="/public/Images/blue-icon.png" alt="" className="detail--icon" />
                </div>
                <div className="detail-buttons">
                    <button className="detail-button active-button">Number</button>
                    <button className="detail-button">Number</button>
                    <button className="detail-button">Number</button>
                    <button className="detail-button">Number</button>
                    <button className="detail-button">Number</button>
                    <button className="detail-button active-button">Number</button>
                </div>
            </div>
            <div className="detail-box">
                <div className="detail-label">
                    <h4 className="detail--label">پلتفرم</h4>
                    <img src="/public/Images/blue-icon.png" alt="" className="detail--icon" />
                </div>
                <div className="detail-buttons">
                    <button className="detail-button">Platform A</button>
                    <button className="detail-button">Platform B</button>
                    <button className="detail-button">Platform C</button>
                    <button className="detail-button">Platform D</button>
                </div>
            </div>
        </div>
    );
}
export default DetailButtonsClick;
