import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faBagShopping} from '@fortawesome/free-solid-svg-icons'
import $ from "jquery"
import MainSideBar from "./headers/MainSideBar";
import Cart from "./headers/Cart"


export default function Header() {
const[isShow,setIsShow] = useState(false)
const[cartShow,setCartShow] = useState(false)

function Active () {
    setCartShow(!cartShow);
    if(cartShow) {
    $("#headerShopIcon").css("color","#68707d")}
    else {
        $("#headerShopIcon").css("color","black")
    } 
}
return (
<div className="navbar">
    <div className="menuAndBrand">
    <FontAwesomeIcon id="menuIcon" icon={faBars} onClick={()=> setIsShow(true)}/>
    <img src={process.env.PUBLIC_URL+"/images/logo.svg"} id="brandLogo" alt="Brand" />    
    </div>
    <div className="pageContainer">
        <ul className="pagesUl">
            <li className="pages">Collections</li>
            <li className="pages">Men</li>
            <li className="pages">Women</li>
            <li className="pages">About</li>
            <li className="pages">Contact</li>
        </ul>
    </div>
    <div className="others">
    <FontAwesomeIcon id="headerShopIcon" onClick={()=> Active() } icon={faBagShopping} />
    <img src={process.env.PUBLIC_URL+"/images/image-avatar.png"} id="profilePic" alt="Profile" /> 
    </div>
    { (isShow) && <MainSideBar onChange={value=> setIsShow(value)} /> }
    { (cartShow) && <Cart/>} 
    
</div>
)
}