import React, {Fragment} from "react";

class Recall extends React.Component {

    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
        this.received = this.received.bind(this);
        this.changeBackgorund = this.changeBackgorund.bind(this);
    }
    /*
        Thay đổi content hiển thị bằng cách gọi function đc cha truyền vào
    */
    show(event) {
        this.props.changeTypeProfile(event.target.innerHTML);
    }

    /*
        Xử lý event khi đại lý click vào bảo hành, product đc thay đổi trạng thái trong csdl và chuyển vào mục đem đi bảo hành
    */
    received(event) {
        event.preventDefault();
        // Mảng tr có phần tử đầu tiên là th
        var tr = document.querySelectorAll("tr");
        var countChecked = 0;
        for (var i = 1; i < tr.length; i++) {
            if (tr[i].firstChild.firstChild.checked) countChecked++;
        }
        if (countChecked === 0) alert("Bạn chưa chọn sản phẩm nào");
        else alert("Thành công!\nSản phẩm đã được chuyển vào mục đem đi bảo hành\nBạn hãy chờ trung tâm bảo hành xác nhận");
    }

    /*
        Xử lý event khi 1 row đc checked thì chuyển màu vàng ngược lại chuyển về màu ban đầu
    */
    changeBackgorund(event) {
        var input = event.target
        var td = event.target.parentNode
        if (input.checked) td.parentNode.style.background = "yellow";
        else if (Number(td.nextSibling.innerHTML) % 2 === 1) td.parentNode.style.background = "rgba(0,0,21,.05)";
        else td.parentNode.style.background = "white";
    }

    /*
        UI danh sách all product đang được triệu hồi và khi đại lý nhận được từ khách hàng thì tick chọn và chọn vào
        nút đem đi bảo hành
    */
    render() {

        return(
            <Fragment>
                <table className='tableProductLine'>
                    <caption>Sản phẩm đang được triệu hồi</caption>
                    <thead>
                        <tr>
                            <th></th>
                            <th>#</th>
                            <th>Tên</th>
                            <th>Mã</th>
                            <th>Thông tin chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" onChange={this.changeBackgorund}/></td>
                            <td>1</td>
                            <td>Iphone 6</td>
                            <td>Ip6</td>
                            <td>
                                <a href="#!" onClick={this.show}>Xem</a>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" onChange={this.changeBackgorund}/></td>
                            <td>2</td>
                            <td>Iphone 7</td>
                            <td>Ip7</td>
                            <td>
                                <a href="#!" onClick={this.show}>Xem</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="divRepair">
                    <form className="repair">
                    </form>
                    <form className="repair" onSubmit={this.received}>
                        <label htmlFor="select">Đã nhận từ khách hàng - Đưa đi bảo hành: </label>
                        <select id="select">
                            <option>Trung tâm bảo hành X</option>
                            <option>Trung tâm bảo hành Y</option>
                            <option>Trung tâm bảo hành Z</option>
                        </select>
                        <input type='submit' value='Bảo hành'></input>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Recall