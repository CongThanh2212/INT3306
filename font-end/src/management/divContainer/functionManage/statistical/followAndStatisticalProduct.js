import React from "react";

class FollowAndStatisticalProduct extends React.Component {

    /*
      UI theo dõi sản phẩm (tương ứng với mục theo dõi trong thanh menu)  
    */
    render() {

        return (
            <table className="tableProductLine">
                <caption>Sản phẩm trên toàn quốc</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên</th>
                        <th>Mã sản phẩm</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Iphone 6</td>
                        <td>2008</td>
                        <td>XXXX</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Iphone 7</td>
                        <td>2009</td>
                        <td>AAAAA</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default FollowAndStatisticalProduct