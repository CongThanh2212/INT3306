import React from "react"
import '../../../../../general/css/profile.css'

class Profile extends React.Component {
    
    constructor(props) {
        super(props);
        this.create = this.create.bind(this);
    }

    create(event) {
        event.preventDefault();
    }

    render() {

        /*
            UI profile chi tiết của từng tài khoản để ban điều hành vào xem
        */
        return(
            <form className="profile" method="" action="" onSubmit={this.create}>
                <h1>Cơ sở sản xuất A</h1>
                
                <label htmlFor='username'>Tên tài khoản</label>
                <input type='text' id='username' value={"BigCorp1"} readOnly></input>
                <br></br>
                
                <label htmlFor='type'>Loại tài khoản</label>
                <input type='text' id='type' value={"Cơ sở sản xuất"} readOnly></input>
                <br></br>

                <label htmlFor='id'>Mã tài khoản</label>
                <input type='text' id='id' value={"cs123"} readOnly></input>
                <br></br>

                <label htmlFor='address'>Địa chỉ</label>
                <input type='text' id='address' value={"Cầu Giấy - Hà Nội"} readOnly></input>
                <br></br>

                <label htmlFor='phone'>Số điện thoại</label>
                <input type='phone' id='phone' value={"0868686868"} readOnly></input>
                <br></br>

                <label htmlFor='description'>Thông tin thêm</label>
                <textarea id="description" value={"AAAAAAAAAAAAA"} readOnly></textarea>
                <br></br>

                <input type='submit' value='Thu hồi tài khoản'></input>
            </form>
        )
    }
}

export default Profile