import React from "react"
import Storage from './functionAgent/storage/inStorage/storage'
import Sold from './functionAgent/storage/sold'
import Repairing from './functionAgent/storage/repairing'
import Recall from './functionAgent/storage/recall'
import NewProduct from './functionAgent/message/newProduct'
import Fixed from "./functionAgent/message/fixed"
import InforAccount from '../../general/informationAccount/inforAccount'
import Details from "../../general/historyDetails/details"
import PreliminaryInfor from "../../general/informationAccount/preliminaryInfor"
import CustomerInfor from "../../general/informationAccount/customerInfor"
import CustomerInput from "./functionAgent/storage/inStorage/customerInput"
import Fail from "./functionAgent/message/fail"
import ReturnCustomer from "./functionAgent/storage/returnCustomer"
import ReturnProducer from "./functionAgent/storage/returnProducer"

class DivContainer extends React.Component {


    /*
      UI của đại lý:
      <FunctionManage> được truyền vào 1 tham số để xác định xem sẽ hiển thị ra content gì (content này tương ứng với
        mục gì đang được chọn trên thanh menu) và 1 hàm để thay đổi giá trị của tham số đó
    */
    render() {
        return(
            <div className="container">
                <header></header>
                <main>
                    <FunctionAgent typeFunction={this.props.typeFunc} arrProduct={this.props.arrProduct}
                    changeType={this.props.changeTypeFunc} changeProducts={this.props.changeProducts}/>
                </main>
            </div>
        )
    }
}
    
/*
    Lựa chọn component sẽ hiện thị thông qua tham số mà component khác truyền vào cho nó        
*/
class FunctionAgent extends React.Component {

    render() {
        var type = this.props.typeFunction;

        switch(type) {
            case "Sản phẩm mới": return <Storage changeTypeProfile={this.props.changeType} changeProducts={this.props.changeProducts}/>
            case "Đã bán": return <Sold changeTypeProfile={this.props.changeType}/>
            case "Trả lại cho khách hàng": return <ReturnCustomer changeTypeProfile={this.props.changeType}/>
            case "Trả lại cơ sở sản xuất": return <ReturnProducer changeTypeProfile={this.props.changeType}/>
            case "Đem đi bảo hành": return <Repairing changeTypeProfile={this.props.changeType}/>
            case "Triệu hồi": return <Recall changeTypeProfile={this.props.changeType}/>
            case "Sản phẩm mới về": return <NewProduct changeTypeProfile={this.props.changeType}/>
            case "Sản phẩm bảo hành": return <Fixed changeTypeProfile={this.props.changeType}/>
            case "Xem": return <Details changeTypeProfile={this.props.changeType}/>
            case "Sản phẩm lỗi": return <Fail changeTypeProfile={this.props.changeType}/>
            case "Vị trí kho": return <PreliminaryInfor />
            case "Khách hàng": return <CustomerInfor/>
            case "Nhập thông tin khách hàng": return <CustomerInput arrProduct={this.props.arrProduct}/>
            default: return <InforAccount />
        }
    }
}

export default DivContainer