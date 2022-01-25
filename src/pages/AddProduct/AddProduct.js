import React,{useState} from 'react'
import Icons from "../../Components/Icons/Icons";
import './AddProduct.css'
import Button from '../../Components/Button/Button';
import axios from 'axios'

const AddProduct = ()=>{

    const [fileUp,  setFileUp] = useState(null)
    const [file,  setFile] = useState(null)

    const handleUpload = (e)=>{
        let file = e.target?.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(file);
        setFile(file)
    
        reader.onloadend = function (e) {
          setFileUp(reader?.result);
        }  
    }

    const uploadProduct = async()=>{
        let formData = new FormData();
        formData.append("file",file)
        try {
            const data = await axios.post("https://api.cloudinary.com/v1_1/dweikgdwq/image/upload", formData)
            
            if(data) {
              console.log(data)
             }
         } catch (error) {
             console.log(error)
         }
    }

    return(
          <div className="wrapper">
            <div className="iconsPlace">
              <Icons></Icons>
            </div>


            <div className="contShadow">
              <h3>Add a new product</h3>
              <div>
                  <input type="text" name="name" placeholder="Enter product name"/>
                  <input type="file" onChange={handleUpload} name="file" placeholder="Upload Image"/>
                  
                    <div className="btn"><Button click={uploadProduct} text="Add Product"/></div>
              </div>

              {
    fileUp?
    <img className="imgPreview" alt="img" src={fileUp}/>
    :""

}
        </div>

          </div>


    )
}

export default AddProduct;