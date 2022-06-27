import React from "react";
import './actionFlow1.css';


class ActionFlow1 extends React.Component {
    render() {
        return(
            <div className="actionflow1">
                <div className="action" id="act1">
                    <div className="action_name">Tác Vụ</div>
                </div>
                <div className="action" >
                    <div className="Check_mark" ><i class="check circle outline icon"></i></div>
                    <div className="status">Chưa ghi công nợ 1.520.000đ</div>
                    <div className="perform" id="do">Thực hiện</div>
                </div>
                <div className="action">
                    <div className="Check_mark"><i class="check circle outline icon"></i></div>
                    <div className="status">Chưa xuất kho</div>
                    <div className="perform" id="auto">Tự động</div>

                </div>
                <div className="action" id="act3" >
                    <div className="Checked_mark"><i class="check circle icon"></i></div>
                    <div className="status">Đã thanh toán</div>
                    <div className="perform" id="undo" >Hoàn tác</div>
                </div>


            </div>
        )
    }
}

export default ActionFlow1;