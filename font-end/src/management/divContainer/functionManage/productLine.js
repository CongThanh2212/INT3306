import React from "react";

class ProductLine extends React.Component {

    /*
        UI dòng sản phẩm (ứng với mục dòng sản phẩm trong thanh menu)  
    */
    render() {
        return (
            <table className='tableProductLine'>
                <caption>Các dòng sản phẩm của công ty</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Mã</th>
                        <th>Năm sản xuất</th>
                        <th>Namespace</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Iphone 6</td>
                        <td>Ip6</td>
                        <td>2008</td>
                        <td>XXXX</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Iphone 7</td>
                        <td>Ip7</td>
                        <td>2009</td>
                        <td>AAAAA</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Iphone 7</td>
                        <td>Ip7</td>
                        <td>2009</td>
                        <td>AAAAA</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Iphone 7</td>
                        <td>Ip7</td>
                        <td>2009</td>
                        <td>AAAAA</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default ProductLine