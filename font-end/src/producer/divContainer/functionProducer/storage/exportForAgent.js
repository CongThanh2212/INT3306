import React from "react";

class ExportForAgent extends React.Component {

    render() {
        return(
            <table className='tableProductLine'>
                <caption>Danh sách sản phẩm xuất đi</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Mã</th>
                        <th>Đến</th>
                        <th>Đại lý đã nhận/chưa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Iphone 6</td>
                        <td>Ip6</td>
                        <td>Đại lý phân phối X</td>
                        <td>Đã nhận</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Iphone 7</td>
                        <td>Ip7</td>
                        <td>Đại lý phân phối X</td>
                        <td>Chưa nhận</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default ExportForAgent