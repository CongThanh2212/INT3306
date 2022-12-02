import React from "react";

class Details extends React.Component {

    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
    }
    /*
        Thay đổi content hiển thị bằng cách gọi function đc cha là FunctionManage truyền vào
    */
    show(event) {
        // Lấy value mục status để xác định xem là khách hàng hay là kho
        var targetUser = event.target.parentNode.previousSibling.previousSibling.innerHTML;
        if (targetUser === "Đã bán") this.props.changeTypeProfile("Khách hàng");
        else this.props.changeTypeProfile("Vị trí kho");
    }

    render() {

        /*
            UI profile chi tiết lịch sử của từng sản phẩm để user vào xem
        */
        return(
            <form className="profile" method="" action="">
                <h1>Thông tin sản phẩm</h1>
                
                <label htmlFor='productLine'>Dòng sản phẩm</label>
                <input type='text' id='productLine' value={"Iphone6"} readOnly></input>
                <br></br>

                <label htmlFor='batchId'>Số lô</label>
                <input type='text' id='batchId' value={"13"} readOnly></input>
                <br></br>
                
                <label htmlFor='productId'>Id sản phẩm</label>
                <input type='text' id='productId' value={"Ip6_13_7"} readOnly></input>
                <br></br>

                <label htmlFor='color'>Màu sắc</label>
                <input type='text' id='color' value={"Trắng"} readOnly></input>
                <br></br>

                <label>Lịch sử</label>
                <table className='tableProductLine'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Trạng thái</th>
                            <th>Thời gian</th>
                            <th>Vị trí kho/ Khách hàng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mới sản xuất</td>
                            <td>23/2/2022</td>
                            <td>
                                <a href="#!" onClick={this.show}>Cơ sở sản xuất A</a>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Đưa về đại lý</td>
                            <td>28/2/2022</td>
                            <td>
                                <a href="#!" onClick={this.show}>Đại lý phân phối X</a>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Đã bán</td>
                            <td>2/3/2022</td>
                            <td>
                                <a href="#!" onClick={this.show}>Nguyễn Văn A</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

export default Details