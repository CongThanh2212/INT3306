import React from "react";

class CustomerInfor extends React.Component {
    
    constructor(props) {
        super(props);
        this.create = this.create.bind(this);
    }

    create(event) {
        event.preventDefault();
    }

    render() {
        /*
            UI profile sơ bộ của tài khoản cho tài khoản khác xem
        */
        return(
            <form className="profile" method="" action="" onSubmit={this.create}>
                <h1>Nguyễn Văn A</h1>

                <label htmlFor='address'>Địa chỉ</label>
                <input type='text' id='address' value={"Cầu Giấy - Hà Nội"} readOnly></input>
                <br></br>

                <label htmlFor='phone'>Số điện thoại</label>
                <input type='phone' id='phone' value={"0868686868"} readOnly></input>
                <br></br>

                <label htmlFor='description'>Thông tin thêm</label>
                <textarea id="description" value={"AAAAAAAAAAAAA"} readOnly></textarea>
                <br></br>
            </form>
        )
    }
}

export default CustomerInfor