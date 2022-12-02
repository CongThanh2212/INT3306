import React from "react";
import ProductLine from "./functionManage/productLine"
import CreateAccount from "./functionManage/account/createAccount"
import ManageAccount from "./functionManage/account/manageAccount/manageAccount"
import FollowAndStatisticalProduct from "./functionManage/statistical/followAndStatisticalProduct"
import Profile from "./functionManage/account/manageAccount/profile"
import InforAccount from "../../general/informationAccount/inforAccount"

class DivContainer extends React.Component {
    /*
      UI của ban quản lý:
      <FunctionManage> được truyền vào 1 tham số để xác định xem sẽ hiển thị ra content gì (content này tương ứng với
        mục gì đang được chọn trên thanh menu) và 1 hàm để thay đổi giá trị của tham số đó
    */
    render() {
        return(
            <div className="container">
                <header></header>
                <main>
                    <FunctionManage typeFunction={this.props.typeFunc} changeType={this.props.changeTypeFunc}/>
                </main>
            </div>
        )
    }
}

/*
    Lựa chọn component sẽ hiện thị thông qua tham số mà component khác truyền vào cho nó        
*/
class FunctionManage extends React.Component {

    render() {
        var type = this.props.typeFunction;

        switch(type) {
            case "Dòng sản phẩm": return <ProductLine />
            case "Cấp tài khoản": return <CreateAccount />
            // Truyền vào 1 function là changeType, function này nhận đc từ cha là DivContainer
            case "Quản lý": return <ManageAccount changeTypeProfile={this.props.changeType}/>
            case "Theo dõi - Thống kê": return <FollowAndStatisticalProduct />
            case "Xem": return <Profile />
            default: return <InforAccount />
        }
    }
}

export default DivContainer