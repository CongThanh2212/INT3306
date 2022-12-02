import React, {Fragment} from "react";

class Repairing extends React.Component {

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

    /*
        UI danh sách all product đang được sửa chữa bảo hành ở trung tâm bảo hành hoặc đang trên đường đến trung tâm bảo hành
    */
    render() {

        return(
            <Fragment>
                <table className='tableProductLine'>
                    <caption>Sản phẩm đang được đưa đi bảo hành</caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên</th>
                            <th>Mã</th>
                            <th>Đến</th>
                            <th>Trung tâm đã nhận/chưa</th>
                            <th>Thông tin chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Iphone 6</td>
                            <td>Ip6</td>
                            <td>Trung tâm bảo hành X</td>
                            <td>Chưa</td>
                            <td>
                                <a href="#!" onClick={this.show}>Xem</a>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Iphone 7</td>
                            <td>Ip7</td>
                            <td>Trung tâm bảo hành Y</td>
                            <td>Đã nhận</td>
                            <td>
                                <a href="#!" onClick={this.show}>Xem</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

export default Repairing