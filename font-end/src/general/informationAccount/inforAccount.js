import React from "react";

class InforAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "BigCorp1",
            pass: "adminBigCorp123",
            type: "Ban điều hành",
            id: "cs123",
            address: "Cầu Giấy - Hà Nội",
            phone: "0868686868",
            description: "AAAAAAAAAAAAA"
        }
        this.changeInformation = this.changeInformation.bind(this);
        this.reset = this.reset.bind(this);
        this.update = this.update.bind(this);
    }

    changeInformation(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    reset() {
        const infor = {username: "BigCorp1",
            pass: "adminBigCorp123",
            type: "Ban điều hành",
            id: "cs123",
            address: "Cầu Giấy - Hà Nội",
            phone: "0868686868",
            description: "AAAAAAAAAAAAA"
        }
        this.setState({
            username: infor.username,
            pass: infor.pass,
            type: infor.type,
            id: infor.id,
            address: infor.address,
            phone: infor.phone,
            description: infor.description 
        })
    }

    update(event) {
        event.preventDefault();
    }

    render() {
        return(
            <form className="profile" method="" action="" onReset={this.reset} onSubmit={this.update}>
                <h1>Tập đoàn BigCorp</h1>
                
                <label htmlFor='username'>Tên tài khoản</label>
                <input type='text' id='username' name='username' value={this.state.username} onChange={this.changeInformation}></input>
                <br></br>

                <label htmlFor='pass'>Mật khẩu</label>
                <input type='text' id='pass' name='pass' value={this.state.pass} onChange={this.changeInformation}></input>
                <br></br>
                
                <label htmlFor='type'>Loại tài khoản</label>
                <input type='text' id='type' name='type' value={this.state.type} onChange={this.changeInformation}></input>
                <br></br>

                <label htmlFor='id'>Mã tài khoản</label>
                <input type='text' id='id' name='id' value={this.state.id} onChange={this.changeInformation}></input>
                <br></br>

                <label htmlFor='address'>Địa chỉ</label>
                <input type='text' id='address' name='address' value={this.state.address} onChange={this.changeInformation}></input>
                <br></br>

                <label htmlFor='phone'>Số điện thoại</label>
                <input type='phone' id='phone' name='phone' value={this.state.phone} onChange={this.changeInformation}></input>
                <br></br>

                <label htmlFor='description'>Thông tin thêm</label>
                <textarea id="description" name='description' value={this.state.description} onChange={this.changeInformation}></textarea>
                <br></br>

                <div className="button-reset-and-submit">
                    <input type='reset' value='Đặt lại'></input>
                    <input type='submit' value='Thay đổi thông tin'></input>
                </div>
            </form>
        )
    }
}

export default InforAccount