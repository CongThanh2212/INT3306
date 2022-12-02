import React from "react";

class Received extends React.Component {

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
        UI danh sách sản phẩm lỗi mà producer đã tiếp nhận từ service
    */
    render() {
        return(
            <table className='tableProductLine'>
                <caption>Sản phẩm lỗi - cũ đã nhận</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Mã</th>
                        <th>Từ</th>
                        <th>Thông tin chi tiết</th>
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
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Iphone 7</td>
                        <td>Ip7</td>
                        <td>Trung tâm bảo hành X</td>
                        <td>
                            <a href="#!" onClick={this.show}>Xem</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Received