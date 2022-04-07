import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'
import itemList from "./bodys/List"
import ImagesI from "./bodys/Images"
import $ from "jquery"
export var CartA=[];
export default function Bodya () {
    const Item=itemList[0];
    const [dir,setDir]=useState(Item.image1Big);
    let pieceK=1;
    let sayac=0;
    let bigImages=[Item.image1Big,Item.image2Big,Item.image3Big,Item.image4Big]
    let priceWithDiscount=(Item.normalPrice*Item.discountRate)/100
    let total = pieceK*priceWithDiscount;
    
        
    $("#saA1").on("click", () => {
         sayac--;
         if(sayac<0) {
            sayac=bigImages.length;
            $("#productMainImage").attr("src",process.env.PUBLIC_URL+bigImages[sayac]);
        }
        else {
        $("#productMainImage").attr("src",process.env.PUBLIC_URL+bigImages[sayac]);
        }
        
    })
    $("#saA2").on("click", () => {
        sayac++;
        if(sayac>4) {
        sayac=0;
        $("#productMainImage").attr("src",process.env.PUBLIC_URL+bigImages[sayac]);
        }
        $("#productMainImage").attr("src",process.env.PUBLIC_URL+bigImages[sayac]);
    });
    $("#minusPiece").on("click", () => {
        pieceK--;
        total=pieceK*priceWithDiscount;
        $("#showPiece").text(pieceK);
    })
    $("#plusPiece").on("click", () => {
        pieceK++;
        total=pieceK*priceWithDiscount
        $("#showPiece").text(pieceK);
    })
    function addCheckout  () {
        CartA=[];
        CartA.push(Item,priceWithDiscount,total,pieceK);
       
    }
    
    return (
        <div className="itemDetails">
            <div className="itemImage">
                <div id="saA1" className="baContainer">
                    <img src={process.env.PUBLIC_URL+"/images/icon-previous.svg"}  id="beforeImage" alt="previous" className="beforeAfter"/>
                </div>
                    <img id="productMainImage" src={process.env.PUBLIC_URL+dir} alt="Sneaker" />
                <ImagesI 
                    onChange={value=> setDir(value)}
                    data={Item}  
                     />  

                <div id="saA2" className="baContainer1">
                    <img src={process.env.PUBLIC_URL+"/images/icon-next.svg"} id="nextImage" alt="next" className="beforeAfter"/>
                </div> 
            
            </div>
            <div className="itemInfos">
                    <h3 className="itemBrandTitle"> {Item.brand}</h3>
                    <h2 className="itemDetailTitle"> {Item.itemName} </h2>
                    <p className="itemDetailParagraph"> {Item.itemInfo}</p>
                    <h2 className="itemPrice">$ {priceWithDiscount}.00 <span className="discountAmount">{Item.discountRate}%</span></h2>
                    <h3 className="itemOriginalPrice">$ {Item.normalPrice}.00</h3>
                <div className="amountAndCheckout">
                    <input type="button" className="minusPlus" id="minusPiece" value="-" />
                    <h2 id="showPiece" className="itemAmount"> {pieceK} </h2>
                    <input type="button" className="minusPlus" id="plusPiece" value="+" />
                </div>
            <div className="addToCartDiv">
                <FontAwesomeIcon id="addToCartIcon" icon={faBagShopping}  />
                <input type="button" onClick={addCheckout}id="addToCart" value="Add to Cart" />
            </div>
            
            </div>

        </div>
    )
}
