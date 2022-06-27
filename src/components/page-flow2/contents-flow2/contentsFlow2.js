import React from "react";
import './contentsFlow2.css';


class ContentsFlow2 extends React.Component {
    render() {
        return(
            <div className="contentsflow2">
                <div className="Cart_Code">
                    <div className="Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" id="Group_17738" data-name="Group 17738" width="12" height="12" viewBox="0 0 12 12">
                        <rect id="Rectangle_8061" data-name="Rectangle 8061" width="12" height="12" fill="none"/>
                        <g id="shopping-cart_8_" data-name="shopping-cart (8)" transform="translate(0.147)">
                            <path id="Path_16685" data-name="Path 16685" d="M11.356,2.038A1.5,1.5,0,0,0,10.2,1.5H2.121L2.1,1.324A1.5,1.5,0,0,0,.611,0H.5a.5.5,0,0,0,0,1H.611a.5.5,0,0,1,.5.441L1.8,7.292A2.5,2.5,0,0,0,4.279,9.5H9.5a.5.5,0,0,0,0-1H4.279a1.5,1.5,0,0,1-1.41-1h5.96a2.5,2.5,0,0,0,2.461-2.057l.392-2.177a1.5,1.5,0,0,0-.325-1.228ZM10.7,3.089l-.393,2.177A1.5,1.5,0,0,1,8.829,6.5H2.709l-.47-4H10.2a.5.5,0,0,1,.495.589Z" fill="#fff"/>
                            <circle id="Ellipse_1844" data-name="Ellipse 1844" cx="1" cy="1" r="1" transform="translate(2.5 10)" fill="#fff"/>
                            <circle id="Ellipse_1845" data-name="Ellipse 1845" cx="1" cy="1" r="1" transform="translate(7.5 10)" fill="#fff"/>
                        </g>
                        </svg>
                    </div>
                    <div className="Code">#220429-9AF3E1F0</div>
                </div>  {/* Cart_Code */}
                <div className="Content">
                Lorem ipsum dolor sit amet consur sadipscing elitr, sed
                </div>

                <div className="address">
                    Tỉnh thành, quận huyện
                </div>

                <div className="Order_Info">
                        <div className="Customer_Infor">
                            <div className="Contain_Avt">
                                <img className="Avt" src="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/276157024_1666304207047237_8727305944710191128_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8aenWkI5gjgAX_l5ukH&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT8Cgp7UvEUW9tWNNk7Nctw7aJrw-XBHIi1DlQYJgVpBDQ&oe=62B922A8" alt="" />
                            </div>

                        <div className="Name">Quốc Tuấn</div>
                        </div>
                    <div className="Datetime-price">
                        <div className="Datetime">16:32, 22/06/2022</div>
                        <div className="Price">1.600.000đ</div>
                    </div>

                </div>
            </div>  /* contentsFlow2 */
        )
    }
}

export default ContentsFlow2;