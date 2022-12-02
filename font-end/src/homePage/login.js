import React from 'react';
import '../general/css/login.css';
import { Navigate } from 'react-router-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            /*
                accountType: xác định loại tài khoản đăng nhập là gì
                access: xác định xem đăng nhập thành công hay chưa (false: chưa, true: thành công), khởi tạo là false
            */
            accountType: '/management',
            access: false
        }
        this.changeAccountType = this.changeAccountType.bind(this);
        this.login = this.login.bind(this);
    }

    /*
        Thay đổi kiểu tài khoản đăng nhập
    */
    changeAccountType(event) {
        this.setState({
            accountType: event
        })
    }

    /*
      Kiểm tra đăng nhập, thành công thì thay đổi giá trị của state.access thành true  
    */
    login(event) {
        event.preventDefault();
        this.setState({
            access: true
        })
    }

    render() {
        /*
            If để kiểm tra xem state.access là true hay false, nếu true thì nó sẽ điều hướng user đến trang chủ
        */
        if (this.state.access) {
            return <Navigate to={this.state.accountType}/>
        }
        /*
            1,Tạo form đăng nhập gồm 2 div:
                + 1 div chứa các input để nhập tài khoản, mật khẩu và nút đăng nhập
                + div còn lại gồm:
                    - 1 input ẩn, chỉ đọc, value của input này là kiểu tài khoản đăng nhập
                    - các <li> để user click chọn kiểu tài khoản đăng nhập và khi click sẽ thực hiện function changeAccountType
                        để thay đổi value của input ẩn ở trên
            2, <LiTypeAccount> đc truyền vào:
                + 2 tham số:
                    - textType: hiển thị văn bản text của kiểu tài khoản đc chọn
                    - valueType: giá trị của kiểu tài khoản, nó có thể đc gán value cho state.accountType để gửi lên server
                + 1 hàm change để LiTypeAccount có thể thay đổi value của state.accountType
        */
        return (
            <form className='login' onSubmit={this.login}>
                <div>
                    <input type='text' name='accountType' value={this.state.accountType} readOnly></input>
                    <LiTypeAccount textType={'Tài khoản ban điều hành'} valueType={'/management'} change={this.changeAccountType}/>
                    <LiTypeAccount textType={'Tài khoản cơ sở sản xuất'} valueType={'/producer'} change={this.changeAccountType}/>
                    <LiTypeAccount textType={'Tài khoản đại lý'} valueType={'/agent'} change={this.changeAccountType}/>
                    <LiTypeAccount textType={'Tài khoản trung tâm bảo hành'} valueType={'/service'} change={this.changeAccountType}/>
                </div>
                <div>
                    <h1>Đăng nhập</h1>
                    <input type='text' name='userName' placeholder='Tài khoản' required></input>
                    <input type='password' name='passWord' placeholder='Mật khẩu' required></input>
                    <input x={this.state} type='submit' value='Đăng nhập'></input>
                </div>
            </form>
        );
    }
}

class LiTypeAccount extends React.Component {

    constructor(props) {
        super(props);
        this.changeType = this.changeType.bind(this);
    }

    /*
        1, Xử lý event onClick vào <li> trong form đăng nhập (<li> là các thẻ có innerHTML là kiểu tài khoản đăng nhập)
        Các steps:
            Step 1: Khi onClick vào 1 <li> thì thẻ đó sẽ chuyển backgroundColor thành màu trắng, các <li> còn lại màu #39f
            Step 2: update giá trị của state.account thành innerHTML của <li> vừa click
        2, Gọi hàm change() do component cha là Login truyền vào để thay đổi state.accountType của cha
    */
    changeType(event) {
        var arrLi = document.querySelectorAll("li");
        for (var i = 0; i < arrLi.length; i++) {
            if (arrLi[i].innerHTML === event.target.innerHTML) arrLi[i].style.backgroundColor = "white";
            else arrLi[i].style.backgroundColor = "#39f";
        }
        this.props.change(this.props.valueType)
    }

    render() {
        return(
            <li onClick={this.changeType}>{this.props.textType}</li>
        )
    }
}

export default Login