import React, { Fragment } from "react";

class CustomerInput extends React.Component {

    constructor(props) {
        super(props);
        this.customerInput = this.customerInput.bind(this);
        this.delete = this.delete.bind(this);
    }

    /*
        Nhập xong thông tin khách hàng và nhấn vào nút xong thì sản phẩm sẽ thay đổi trạng thái trong csdl và chuyển vào mục
        đã bán
    */
    customerInput(event) {
        event.preventDefault();
        // products[0] là th
        var products = document.querySelectorAll("tr");
        if (products.length === 1) alert("Bạn đã bỏ chọn hết sản phẩm");
        else alert("Sản phẩm đã được chuyển vào mục đã bán - bảo hành");
    }

    /*
        Khi nhấn vào bỏ 1 sản phẩm trong giỏ hàng của khách hàng thì sản phẩm ấy bị xóa khỏi giỏ hàng
    */
    delete(event) {
        var tr = event.target.parentNode.parentNode;
        tr.parentNode.removeChild(tr);
    }

    /*
        Hàm thực hiện khi component CustomerInput mới được render. Mục đích là để hiển thị các sản phẩm đã được chọn
        ở trang trước để bán cho khách hàng
    */
    componentDidMount() {
        var tbody = document.querySelector("tbody");
        var arr = this.props.arrProduct;
        for (var i = 0; i < arr.length; i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < arr[i].length; j++) {
                var td = document.createElement("td");
                var html = document.createTextNode(arr[i][j]);
                td.appendChild(html);
                tr.appendChild(td);
            }
            var tdDelete = document.createElement("td");
            tdDelete.appendChild(document.createElement("a").appendChild(document.createTextNode("Bỏ")));
            tr.appendChild(tdDelete);
            tbody.appendChild(tr);
        }
    }

    /*
      UI nhập thông tin customer 
    */
    render() {

        return (
            <Fragment>
                <table className="tableProductLine">
                    <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Mã sản phẩm</th>
                            <th>Màu sắc</th>
                            <th>Bỏ chọn</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <form className="createAccount" onSubmit={this.customerInput}>
                    <h1>Nhập thông tin khách hàng</h1>
                    <input type='text' placeholder='Họ và tên' required></input>
                    <input type='text' placeholder='Địa chỉ' required></input>
                    <input type='phone' placeholder='Số điện thoại' required></input>
                    <input type='submit' value='Xong'></input>
                </form>
            </Fragment>
        )
    }
}

export default CustomerInput