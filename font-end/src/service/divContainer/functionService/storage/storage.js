import React, {Fragment} from "react";

class Storage extends React.Component {

    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
        this.returnAgent = this.returnAgent.bind(this);
        this.sendFromProducer = this.sendFromProducer.bind(this);
        this.changeBackgorund = this.changeBackgorund.bind(this);
    }
    /*
        Thay đổi content hiển thị bằng cách gọi function đc cha là FunctionManage truyền vào
    */
    show(event) {
        this.props.changeTypeProfile(event.target.innerHTML);
    }

    /*
        Xử lý event khi trung tâm bảo hành click vào chuyển đi
    */
    sendFromProducer(event) {
        event.preventDefault();
        // Mảng tr có phần tử đầu tiên là th
        var tr = document.querySelectorAll("tr");
        var countChecked = 0;
        for (var i = 1; i < tr.length; i++) {
            if (tr[i].firstChild.firstChild.checked) countChecked++;
        }
        if (countChecked === 0) alert("Bạn chưa chọn sản phẩm nào để chuyển đi");
        else alert("Chuyển hàng thành công!\nSản phẩm đã được chuyển vào mục không thể sửa\nBạn hãy chờ cơ sở sản xuất xác nhận");
    }

    /*
        Xử lý event khi trung tâm bảo hành click vào trả về
    */
    returnAgent(event) {
        event.preventDefault();
        // Mảng tr có phần tử đầu tiên là th
        var tr = document.querySelectorAll("tr");
        var countChecked = 0;
        for (var i = 1; i < tr.length; i++) {
            if (tr[i].firstChild.firstChild.checked) countChecked++;
        }
        if (countChecked === 0) alert("Bạn chưa chọn sản phẩm nào để trả về");
        else alert("Trả hàng thành công!\nSản phẩm đã được chuyển vào mục sửa chữa xong\nBạn hãy chờ đại lý xác nhận");
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
        UI danh sách all product trong storage of producer và producer có thể tick chọn để xuất hàng cho đại lý
    */
    render() {
        return(
            <Fragment>
                <table className='tableProductLine'>
                    <caption>Sản phẩm đang được sửa chữa</caption>
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
                    <form className="repair" onSubmit={this.returnAgent}>
                        <label htmlFor="select">Trả về đại lý: </label>
                        <input type='submit' value='Trả về'></input>
                    </form>
                    <form className="repair" onSubmit={this.sendFromProducer}>
                        <label htmlFor="select">Chuyển về cơ sở: </label>
                        <input type='submit' value='Chuyển đi'></input>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Storage