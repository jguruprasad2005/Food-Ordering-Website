import React, { useEffect, useState } from 'react'
import "./Add.css"
import {assets} from "../../assets/assets.js"
import axios from "axios"
import { toast } from 'react-toastify'

const Add = ({url}) => {

  
  const [image,setImage] = useState(false);

  const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad"
  })

  useEffect(()=>{
    console.log(data);
  },[data])      //use this to check if any problem occurs

  const onChangeHandler = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data =>({...data,[name]:value}))
  }

  const onSubmitHandler = async(event)=>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("name",data.name);
    formData.append("description",data.description);
    formData.append("price",Number(data.price));
    formData.append("category",data.category);
    formData.append("image",image);

    const response = await axios.post(`${url}/api/food/add`,formData);

    if(response.data.success == true){
      setData({
        name:"",
        description:"",
        price:"",
        category:"Salad"
      })
      setImage(false);
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
  }
  return (
    <div className='add'>
      <form onSubmit={onSubmitHandler}>
        <div className="add-image-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>  
            <input onChange={(e)=>{setImage(e.target.files[0])}} type="file" id="image" hidden required />
        </div>
        
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type here' required/>
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea name="description" onChange={onChangeHandler} value={data.description} rows="6" placeholder='Write description' required></textarea>
        </div>
        <div className="add-category-price flex-col">
          <div className="add-category">
            <p>Product category</p>
            <select name="category" onChange={onChangeHandler}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
        </div>
        <div className="add-price flex-col">
          <p>Product Price (in Rs)</p>
          <input onChange={onChangeHandler} value={data.price} type="Number" name="price" required placeholder='0' />
        </div>

        <button type='submit' className='add-btn'>Add</button>
      </form> 

    </div>
  )
}

export default Add