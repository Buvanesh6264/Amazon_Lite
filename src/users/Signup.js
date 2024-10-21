import {useNavigate } from 'react-router-dom';
import logo from '../users/amazon.png'
import '../users/Signup.css'
export default function Signup(){
    const navigate =useNavigate();
    return(
        <div class="box">
            <form action="#" class="form">
                <img src={logo} alt="logo" />
                <h1 clas="form-title">Sign Up</h1>

                <div class="form-group">
                    <input type="text" class="form-control" required />
                    <label for="" class="form-label">Enter Your Name</label>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" required />
                    <label for="" class="form-label">Enter Your Email</label>
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" required />
                    <label for="" class="form-label">Enter Your Phone</label>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" required id="txtPassword" />
                    <label for="" class="form-label">Enter Your Password</label>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" required id="txtPassword1" />
                    <label for="" class="form-label">Confirm Password</label>
                </div>
                <div class="form-group">
                    <label class="showlabel">
                        <input type="checkbox" id="show" onClick={()=>{
                            const Password = document.querySelector("#txtPassword");
                            const type = Password.getAttribute("type")==="password" ? "text" : "password";
                            Password.setAttribute("type",type);
                        }}/>
                        Show Password
                    </label>            
                </div>

                <div class="bottom-box">
                    <button class="form-button" onClick={()=>{
                        navigate("/")
                    }}>Login</button>
                </div>
            </form>
        </div>
    )
}