import { Component } from "react";
import "./NavbarStyles.css";
class Navbar extends Component {
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked});
    }
  render(){  
return (
    <><nav>
        <a><img src="./babyranimages/Babyran Revamp logo1.PNG"/></a>
        <div>
        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "navbar"}>
        <li><a className="active" href="index.html">Home</a></li>
        <li><a href="#">Download</a></li>
        <li><a href="#">Top-Up</a></li>
        <li><a href="#">Community</a></li>
            
        </ul>

        </div>
        <div id="mobile" onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked ?
            "fas fa-times" : "fas fa-bars"}></i>
            </div>
        
        </nav>
        </>
)
}
}
export default Navbar;