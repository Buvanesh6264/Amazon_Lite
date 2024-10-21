import { flushSync } from "react-dom";
import '../homepage/Nav2.css'

export default function Nav2(){
    return(
        <div>
            <div className="wholenav">
                <div className="leftnav">
                    <button id="bt-nav" onClick=
                        {()=>{
                            const sidnav =document.querySelector('.sidenav');
                            sidnav.classList.add('open')
                            }
                        }>
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                </div>
                <div className="navbar">
                    <button className="btn-mid">Frest</button>
                    <button className="btn-mid">MX Player</button>
                    <button className="btn-mid">Sell</button>
                    <button className="btn-mid">Gift Card</button>
                    <button className="btn-mid">Amazon Pay</button>
                    <button className="btn-mid">Buy Again</button>
                    <button className="btn-mid">Gift Ideas</button>
                    <button className="btn-mid">Today's Deal</button>
                    <button className="btn-mid">Health,Household & Personal Care</button>
                    <button className="btn-mid">Browsing History</button>
                    <button className="btn-mid">Beauty & Personal Care</button>
                    <button className="btn-mid">Customer Servive</button>
                </div>
            </div>
            <div class="sidenav">
            <div class="link">
                <a href="#" link="active">Home</a>
                <a href="#" link="active">Profile</a>
                <a href="#" link="active">Content</a>
                <a href="#" link="active">Downloads</a>
            </div>
            <div class="overlay" onClick={()=>{
                const sidnav =document.querySelector('.sidenav')
                sidnav.classList.remove('open')
                }}></div>
            </div>
        </div>
    )
}