import logo from '../users/amazon.png'
import {Link, useNavigate } from 'react-router-dom';
import '../users/Login.css'
export default function Login(){
    const navigate =useNavigate();
    return(
        <div class="box">
            <form action="#" class="form">
                <img src={logo} alt="logo" />
                <h1 clas="form-title">Sign In</h1>

                <div class="form-group">
                    <input type="text" class="form-control" required />
                    <label for="" class="form-label">Email or Phone</label>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" required id="txtPassword" />
                    <label for="" class="form-label">Enter Your Password</label>
                </div>
                <div class="form-group">
                    <label class="showlabel">
                        <input type="checkbox" id="show" onClick={()=>{
                            const Password = document.querySelector("#txtPassword");
                            const type = Password.getAttribute("type")==="password" ? "text" : "password";
                            Password.setAttribute("type",type);
                        }} />
                        Show Password
                    </label>            
                </div>

                <div class="bottom-box">
                    <Link to='/Signup'>New User</Link>
                    <button class="form-button" onClick={()=>{
                        navigate("/homepage")
                    }}>Next</button>
                </div>
            </form>
        </div>
    )
}