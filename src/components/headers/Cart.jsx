import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { CartA } from '../Body';


export default function Cart () {
    if(CartA.length>1) {
        return (
        <div className="cart">
            <div className="cartHeader">
                <h3>Cart</h3>
            </div>
            <div className="cartBody">
                <div className="item">
                    <div className="itemSection1"> 
                        <img src={process.env.PUBLIC_URL+CartA[0].smallImages.image1sm} id="itemCartImage" alt="Shoe " /> 
                    </div>
                    <div className="itemSection2"> 
                        <p className="cartItemName">{CartA[0].itemName}</p>
                        <p>{"$"+CartA[1]}.00 x {CartA[3]}</p><h4>{"$"+CartA[2]}</h4>
                    </div>
                    <div className="itemSection3">
                    <FontAwesomeIcon id="deleteCartItem" icon={faTrashCan} />
                    </div>
                </div>
                
                <div className="checkOutButton">
                    <input id="completeCheckout" type="button" value="Checkout" />
                </div>
        
        
            </div>
        
        </div>
        ) }
    else {
        return (
            <div className="cart">
            <div className="cartHeader">
                <h3>Cart</h3>
            </div>
            <div className="cartBody">
                <h2 className='emptyCard'> Your Cart is Empty</h2>
        
        
            </div>
        
        </div>
        )
    }

}