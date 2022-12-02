import React, { Fragment } from "react";

class ImportProductBatch extends React.Component {

    constructor(props) {
        super(props);
        this.importStorage = this.importStorage.bind(this);
        this.update = this.update.bind(this);
    }

    /*
        Thêm lô mà producer vừa nhập vào bảng để nhập các lô vào kho
    */
    update(event) {
        event.preventDefault();
        var batchNumber = document.getElementById("batchNumber");
        var productLine = document.getElementById("productLine");
        var color = document.getElementById("color");
        var amount = document.getElementById("amount");
        var year = document.getElementById("year");

        var tr = document.createElement("tr");
        var tdBatchNumber = document.createElement("td");
        var tdProductLine = document.createElement("td");
        var tdColor = document.createElement("td");
        var tdAmount = document.createElement("td");
        var tdYear = document.createElement("td");
        var tdDelete = document.createElement("td");

        tdBatchNumber.innerHTML = batchNumber.value;
        tdProductLine.innerHTML = productLine.value;
        tdColor.innerHTML = color.value;
        tdAmount.innerHTML = amount.value;
        tdYear.innerHTML = year.value;
        tdDelete.innerHTML = "Bỏ"

        tr.appendChild(tdBatchNumber);
        tr.appendChild(tdProductLine);
        tr.appendChild(tdColor);
        tr.appendChild(tdAmount);
        tr.appendChild(tdYear);
        tr.appendChild(tdDelete);

        document.querySelector(".tableProductLine > tbody").appendChild(tr);

        var arrTr = document.querySelectorAll("tr");
        for (var i = 1; i < arrTr.length; i++) {
            arrTr[i].lastChild.onclick = function() {
                document.querySelector(".tableProductLine > tbody").removeChild(this.parentNode);
            }
        }
    }

    /*
        Gửi request gồm data về các lô lên database để update vào database kho của cơ sở sản xuất
    */
   importStorage(event) {
        event.preventDefault();
   }

//    arrTr = document.querySelectorAll("tr");
//     for (i = 1; i < arrTr.length; i++) {
//         arrTr[i].lastChild.onclick = function() {
//             document.querySelector(".tableProductLine > tbody").removeChild(this.parentNode);
//             console.log("1");
//         }
//     }

    /*
        UI producer nhập lô sản phẩm mới sản xuất vào kho
    */
    render() {

        return(
            <Fragment>
                <table className="tableProductLine">
                    <thead>
                        <tr>
                            <th>Số lô</th>
                            <th>Dòng sản phẩm</th>
                            <th>Màu sắc</th>
                            <th>Số lượng</th>
                            <th>Năm sản xuất</th>
                            <th>Bỏ chọn</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
                <form className="profile" method="" action="" onSubmit={this.importStorage}>
                        <input type='submit' value='Nhập kho'></input>
                </form>
                <form className="profile" method="" action="" onSubmit={this.update}>
                    <h1>Nhập lô sản phẩm vào kho</h1>

                    <label htmlFor='batchNumber'>Số lô</label>
                    <input type='text' id='batchNumber'></input>
                    <br></br>
                    
                    <label htmlFor='productLine'>Tên dòng sản phẩm</label>
                    <input type='text' id='productLine'></input>
                    <br></br>

                    <label htmlFor='color'>Màu sắc</label>
                    <input type='text' id='color'></input>
                    <br></br>
                    
                    <label htmlFor='amount'>Số lượng</label>
                    <input type='text' id='amount'></input>

                    <label htmlFor='year'>Năm sản xuất</label>
                    <input type='phone' id='year'></input>
                    <br></br>

                    <input type='submit' value='Thêm'></input>
                </form>
            </Fragment>
        )
    }
}

export default ImportProductBatch