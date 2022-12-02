import React from "react";

class Failed extends React.Component {

    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
    }

    /*
        Thay đổi content hiển thị bằng cách gọi function đc cha truyền vào
    */
    show(event) {
        this.props.changeTypeProfile(event.target.innerHTML);
    }

    render() {
        return(
            <table className='tableProductLine'>
                <caption>Sản phẩm gửi về cơ sở sản xuất</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Mã</th>
                        <th>Đến</th>
                        <th>Cơ sở sản xuất đã nhận/chưa</th>
                        <th>Thông tin chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Iphone 6</td>
                        <td>Ip6</td>
                        <td>Cơ sở sản xuất X</td>
                        <td>Đã nhận</td>
                        <td>
                            <a href="#!" onClick={this.show}>Xem</a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Iphone 7</td>
                        <td>Ip7</td>
                        <td>Cơ sở sản xuất Y</td>
                        <td>Chưa nhận</td>
                        <td>
                            <a href="#!" onClick={this.show}>Xem</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Failed