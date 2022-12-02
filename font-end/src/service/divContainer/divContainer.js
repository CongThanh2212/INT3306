import React from "react"
import Storage from './functionService/storage/storage'
import Fixed from './functionService/storage/fixed'
import Failed from './functionService/storage/failed'
import MessageFromAgent from './functionService/messageFromAgent'
import InforAccount from '../../general/informationAccount/inforAccount'
import Details from "../../general/historyDetails/details"
import PreliminaryInfor from "../../general/informationAccount/preliminaryInfor"
import CustomerInfor from "../../general/informationAccount/customerInfor"

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
                    <FunctionService typeFunction={this.props.typeFunc} changeType={this.props.changeTypeFunc}/>
                </main>
            </div>
        )
    }
}

/*
    Lựa chọn component sẽ hiện thị thông qua tham số mà component khác truyền vào cho nó        
*/
class FunctionService extends React.Component {

    render() {
        var type = this.props.typeFunction;

        switch(type) {
            case "Trong kho": return <Storage changeTypeProfile={this.props.changeType}/>
            case "Sửa chữa xong": return <Fixed changeTypeProfile={this.props.changeType}/>
            case "Không thể sửa": return <Failed changeTypeProfile={this.props.changeType}/>
            case "Thông báo bảo hành": return <MessageFromAgent changeTypeProfile={this.props.changeType}/>
            case "Xem": return <Details changeTypeProfile={this.props.changeType}/>
            case "Vị trí kho": return <PreliminaryInfor />
            case "Khách hàng": return <CustomerInfor/>
            default: return <InforAccount />
        }
    }
}


export default DivContainer