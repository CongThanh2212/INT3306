import React from "react";

class ManageAccount extends React.Component {

    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
    }

    /*
        Thay đổi content hiển thị bằng cách gọi function đc cha là FunctionManage truyền vào
    */
    show(event) {
        this.props.changeTypeProfile(event.target.innerHTML);
    }

    /*
      UI quản lý tài khoản (ứng với mục quản lý (mục này là mục con của mục quản lý tài khoản trong thanh menu))  
    */
    render() {
        return (
            <table className="tableProductLine">
                <caption>Các tài khoản đã cấp</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên chủ sở hữu</th>
                        <th>Mã</th>
                        <th>Tên tài khoản</th>
                        <th>Mật khẩu</th>
                        <th>Loại tài khoản</th>
                        <th>Profile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Đại lý A</td>
                        <td>id123</td>
                        <td>bigcorp1</td>
                        <td>123</td>
                        <td>Đại lý</td>
                        <td>
                            <a href="#!" onClick={this.show}>Xem</a>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Cơ sở X</td>
                        <td>id125</td>
                        <td>bigcorp2</td>
                        <td>123</td>
                        <td>Cơ sở sản xuất</td>
                        <td>
                            <a href="#!" onClick={this.show}>Xem</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default ManageAccount