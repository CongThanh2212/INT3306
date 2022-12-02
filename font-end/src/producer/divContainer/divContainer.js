import React from "react"
import Storage from "./functionProducer/storage/storage"
import ImportProductBatch from "./functionProducer/storage/importProductBatch"
import Message from "./functionProducer/defectiveProductFromService/message"
import Received from "./functionProducer/defectiveProductFromService/received"
import InforAccount from "../../general/informationAccount/inforAccount"
import Details from "../../general/historyDetails/details"
import PreliminaryInfor from "../../general/informationAccount/preliminaryInfor"
import CustomerInfor from "../../general/informationAccount/customerInfor"
import ExportForAgent from "./functionProducer/storage/exportForAgent"

class DivContainer extends React.Component {

    /*
      UI của cơ sở sản xuất:
      <FunctionManage> được truyền vào 1 tham số để xác định xem sẽ hiển thị ra content gì (content này tương ứng với
        mục gì đang được chọn trên thanh menu) và 1 hàm để thay đổi giá trị của tham số đó
    */
    render() {
        return(
            <div className="container">
                <header></header>
                <main>
                    <FunctionProducer typeFunction={this.props.typeFunc} changeType={this.props.changeTypeFunc}/>
                </main>
            </div>
        )
    }
}

/*
    Lựa chọn component sẽ hiện thị thông qua tham số mà component khác truyền vào cho nó        
*/
class FunctionProducer extends React.Component {

    render() {
        var type = this.props.typeFunction;

        switch(type) {
            case "Trong kho": return <Storage changeTypeProfile={this.props.changeType}/>
            case "Xuất đi": return <ExportForAgent />
            case "Nhập vào kho": return <ImportProductBatch />
            case "Thông báo": return <Message changeTypeProfile={this.props.changeType}/>
            case "Thông tin tài khoản": return <InforAccount />
            case "Xem": return <Details changeTypeProfile={this.props.changeType}/>
            case "Vị trí kho": return <PreliminaryInfor />
            case "Khách hàng": return <CustomerInfor/>
            default: return <Received changeTypeProfile={this.props.changeType}/>
        }
    }
}


export default DivContainer