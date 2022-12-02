import React, {Fragment} from "react";

class Storage extends React.Component {

    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
        this.customerInput = this.customerInput.bind(this);
        this.returnProducer = this.returnProducer.bind(this);
        this.changeBackgorund = this.changeBackgorund.bind(this);
    }
    /*
        Thay đổi content hiển thị bằng cách gọi function đc cha truyền vào
    */
    show(event) {
        this.props.changeTypeProfile(event.target.innerHTML);
    }

    /*
        Lấy ra các row đã được checked để trả lại cơ sở sản xuất (do lâu không bán được)
    */
    returnProducer(event) {
        event.preventDefault();
        // Mảng tr có phần tử đầu tiên là th
        var tr = document.querySelectorAll("tr");
        var countChecked = 0;
        var products = [];
        for (var i = 1; i < tr.length; i++) {
            if (tr[i].firstChild.firstChild.checked) {
                var productAttributes = [];
                for(var j = 2; j < tr[i].childNodes.length - 1; j++) {
                    productAttributes[j - 2] = tr[i].childNodes[j].innerHTML;
                }
                countChecked++;
                products[i - 1] = productAttributes;
            }
        }
        if (countChecked === 0) alert("Bạn chưa chọn sản phẩm nào");
        else {
            this.props.changeProducts(products);
            alert("Thành công!\nSản phẩm đã chuyển vào mục trả lại cơ sở sản xuất");
        }
    }

    /*
        Xử lý event khi đại lý phân phối nhấn vào tiếp theo để nhập thông tin khách hàng
    */
    customerInput(event) {
        event.preventDefault();
        // Mảng tr có phần tử đầu tiên là th
        var tr = document.querySelectorAll("tr");
        var countChecked = 0;
        var products = [];
        var index = 0;
        for (var i = 1; i < tr.length; i++) {
            if (tr[i].firstChild.firstChild.checked) {
                console.log(tr[i].firstChild.firstChild)
                var productAttributes = [];
                for(var j = 2; j < tr[i].childNodes.length - 1; j++) {
                    productAttributes[j - 2] = tr[i].childNodes[j].innerHTML;
                }
                countChecked++;
                products[index] = productAttributes;
                index++;    
            }
        }
        if (countChecked === 0) alert("Bạn chưa chọn sản phẩm nào");
        else {
            this.props.changeProducts(products);
            this.props.changeTypeProfile("Nhập thông tin khách hàng");
        }
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
        UI danh sách all product trong storage of đại lý và đại lý có thể tick chọn để nhập thông tin khách hàng và bán sản phẩm
    */
    render() {
        return(
            <Fragment>
                <table className='tableProductLine'>
                    <caption>Sản phẩm mới</caption>
                    <thead>
                        <tr>
                            <th></th>
                            <th>#</th>
                            <th>Tên</th>
                            <th>Mã</th>
                            <th>Màu sắc</th>
                            <th>Thông tin chi tiết</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox" onChange={this.changeBackgorund}/></td>
                            <td>1</td>
                            <td>Iphone 6</td>
                            <td>Ip6</td>
                            <td>Đỏ</td>
                            <td>
                                <a href="#!" onClick={this.show}>Xem</a>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" onChange={this.changeBackgorund}/></td>
                            <td>2</td>
                            <td>Iphone 7</td>
                            <td>Ip7</td>
                            <td>Xanh</td>
                            <td>
                                <a href="#!" onClick={this.show}>Xem</a>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="checkbox" onChange={this.changeBackgorund}/></td>
                            <td>3</td>
                            <td>Iphone 7</td>
                            <td>Ip8</td>
                            <td>Xanh</td>
                            <td>
                                <a href="#!" onClick={this.show}>Xem</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="divRepair">
                    <form className="repair" onSubmit={this.returnProducer}>
                        <label htmlFor="select">Trả lại cơ sở sản xuất: </label>
                        <input type='submit' value='Trả lại'></input>
                    </form>
                    <form className="repair" onSubmit={this.customerInput}>
                        <label htmlFor="select">Nhập thông tin khách hàng mua: </label>
                        <input type='submit' value='Tiếp theo'></input>
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Storage