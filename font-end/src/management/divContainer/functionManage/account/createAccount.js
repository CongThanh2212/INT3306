import React from "react";

class CreateAccount extends React.Component {

    constructor(props) {
        super(props);
        this.create = this.create.bind(this);
    }

    create(event) {
        event.preventDefault();
    }

    /*
      UI cấp tài khoản (ứng với mục cấp tài khoản (mục này là mục con của mục quản lý tài khoản trong thanh menu))  
    */
    render() {
        return (
            <form className="createAccount" onSubmit={this.create}>
                <h1>Tạo tài khoản</h1>
                <input type='text' name='userName' placeholder='Tài khoản' required></input>
                <input type='password' name='passWord' placeholder='Mật khẩu' required></input>
                <label htmlFor='type'>Loại tài khoản:  </label>
                <select id="type">
                    <option>Cơ sở sản xuất</option>
                    <option>Đại lý phân phối</option>
                    <option>Trung tâm bảo hành</option>
                </select>
                <input type='submit' value='Tạo'></input>
            </form>
        )
    }
}

export default CreateAccount