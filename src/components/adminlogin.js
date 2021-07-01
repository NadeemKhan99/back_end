import React,{Component} from 'react'
import axios from 'axios';
import Header from './header.js';
import './../css/login.css';
class AdminLogin extends Component{
    constructor(props){
        super(props);
        this.state={
            id: '',
            password: '',
            username: '',
            profile: '',
            admin_id: '',
            valid: false
        };
        this.idHandler = this.idHandler.bind(this);
        this.passwordHandler = this.passwordHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    idHandler = (event) => {
        event.preventDefault();
        this.setState({ id: event.target.value });
    }
    passwordHandler = (event) => {
        event.preventDefault();
        this.setState({ password: event.target.value });
    }
    submitHandler(event) {
        event.preventDefault()
        const fd = {
            id: this.state.id,
            password: this.state.password
        }
       
        var headers = {
            'Content-Type': 'application/json;charset=UTF-8'
        }
        axios.post('http://localhost/admin_panel/login.php', fd, headers
        ).then(res => {

            alert(res.data.id)

        
            if(res.data.signal === 1)
            {
                sessionStorage.setItem("name",res.data.name)
                sessionStorage.setItem("email",res.data.email)
                sessionStorage.setItem("password",res.data.password)
                
            }

            this.setState({valid: sessionStorage.getItem("email") | false})
            

        }
        );
    }
    
    render(){
        return(
            <div>
                <Header username="admin-header" />
                <div className="adminlogin-class">
                    <div  className="login_form">

                    
                    <h2>Login to your account</h2>
                    <form onSubmit={this.submitHandler}>
                        <input type="text" required value={this.state.id} onChange={this.idHandler} placeholder="Enter your ID" className="login-input"/><br />
                        <input type="password" required value={this.state.password} onChange={this.passwordHandler} placeholder="Enter your Password" className="login-input"/><br />


                        <button type="submit" className="login-btn">Login</button>
                    </form>
                    </div>
                    {

                        sessionStorage.getItem("email") ?
                            this.props.history.push({
                                pathname: '/adminhome'
                            })
                            :
                            ''

                    }
                </div>
            
            </div>
        );
    }
}
export default AdminLogin;