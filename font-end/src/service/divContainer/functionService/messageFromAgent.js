import React from "react";

class MessageFromAgent extends React.Component {

    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.show = this.show.bind(this);
    }

    /*
        Xử lý event producer click xác nhận là đã nhận đc sản phẩm lỗi từ service
    */
    deleteProduct(event) {
        alert("Nhận thành công!\nSản phẩm đã được chuyển vào trong kho");
        var tr = event.target.parentNode.parentNode;
        tr.parentNode.removeChild(tr);
    }

    /*
        Thay đổi content hiển thị bằng cách gọi function đc cha là FunctionManage truyền vào
    */
    show(event) {
        this.props.changeTypeProfile(event.target.innerHTML);
    }

    /*
        UI thông báo sản phẩm lỗi cho producer
    */
    render() {
        return(
            <table className='tableProductLine'>
                <caption>Thông báo sản phẩm lỗi</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Mã</th>
                        <th>Từ</th>
                        <th>Thông tin chi tiết</th>
                        <th>Nhận sản phẩm</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Iphone 6</td>
                        <td>Ip6</td>
                        <td>Trung tâm bảo hành Y</td>
                        <td>
                            <a href="#!" onClick={this.show}>Xem</a>
                        </td>
                        <td>
                            <a href="#!" onClick={this.deleteProduct}>Nhận</a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Iphone 7</td>
                        <td>Ip7</td>
                        <td>Trung tâm bảo hành X</td>
                        <td>
                            <a href="#!" onClick={this.show}>Xem</a>
                        </td>
                        <td>
                            <a href="#!" onClick={this.deleteProduct}>Nhận</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default MessageFromAgent