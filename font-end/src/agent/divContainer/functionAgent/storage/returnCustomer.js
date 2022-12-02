import React from "react";

class ReturnCustomer extends React.Component {

    constructor(props) {
        super(props);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.show = this.show.bind(this);
    }

    /*
        Xử lý event đại lý click xác nhận là đã trả lại sản phẩm (đã được bảo hành xong) cho khách hàng và procut đó sẽ chuyển
        vào mục đã bán
    */
    deleteProduct(event) {
        alert("Thành công!\nSản phẩm đã được chuyển vào mục đã bán");
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
        UI all product đã bảo hành xong và đang trả lại cho khách hàng
    */
    render() {
        return(
            <table className='tableProductLine'>
                <caption>Đã bảo hành xong - Cần trả lại cho khách hàng</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Mã</th>
                        <th>Đến</th>
                        <th>Thông tin chi tiết</th>
                        <th>Trả lại cho khách hàng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Iphone 6</td>
                        <td>Ip6</td>
                        <td>Nguyễn Văn A</td>
                        <td>
                            <a href="#!" onClick={this.show}>Xem</a>
                        </td>
                        <td>
                            <a href="#!" onClick={this.deleteProduct}>Trả lại</a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Iphone 7</td>
                        <td>Ip7</td>
                        <td>Trần Văn B</td>
                        <td>
                            <a href="#!" onClick={this.show}>Xem</a>
                        </td>
                        <td>
                            <a href="#!" onClick={this.deleteProduct}>Trả lại</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default ReturnCustomer