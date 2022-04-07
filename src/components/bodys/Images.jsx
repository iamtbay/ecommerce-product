import React,{useState} from "react";


const ImagesI = (props) => {
let images=props.data.smallImages;
let bigImages=props.data;    
function lagger(url) {
    props.onChange(url);  
}

return (
    <div className="smallImages">
        <img id="productSmImage1" onClick={()=> lagger(bigImages.image1Big)} className="smImage" src={process.env.PUBLIC_URL+images.image1sm} alt="Sneaker" />  
        <img id="productSmImage2" onClick={()=> lagger(bigImages.image2Big)} className="smImage" src={process.env.PUBLIC_URL+images.image2sm} alt="Sneaker" />  
        <img id="productSmImage3" onClick={()=> lagger(bigImages.image3Big)} className="smImage" src={process.env.PUBLIC_URL+images.image3sm} alt="Sneaker" />  
        <img id="productSmImage4" onClick={()=> lagger(bigImages.image4Big)} className="smImage" src={process.env.PUBLIC_URL+images.image4sm} alt="Sneaker" />  
        
</div> 
 ) }

 export default ImagesI