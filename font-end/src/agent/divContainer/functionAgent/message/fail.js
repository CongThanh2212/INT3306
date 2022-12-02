import React, {Fragment} from "react";

class Fail extends React.Component {

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
        UI danh sách all product đại lý gửi cho trung tâm bảo hành mà trung tâm bảo hành không sửa chữa được (bị lỗi) thì
        trung tâm bảo hành sẽ gửi lại cơ sở sản xuất
    */
    render() {

        return(
            <Fragment>
                <table className='tableProductLine'>
                    <caption>Sản phẩm lỗi đã trả về cơ sở sản xuất</caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên</th>
                            <th>Mã</th>
                            <th>Thông tin chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Iphone 6</td>
                            <td>Ip6</td>
                            <td>
                                <a href="#!" onClick={this.show}>Xem</a>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Iphone 7</td>
                            <td>Ip7</td>
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

export default Fail