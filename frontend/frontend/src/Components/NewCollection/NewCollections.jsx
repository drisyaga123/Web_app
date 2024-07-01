import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Items/Item'
const NewCollection = () => {
  const[new_collections,setNew_collection]=useState([]);
  useEffect(()=>{
fetch('http://localhost:4000/newcollections')
.then((response)=>response.json())
.then((data)=>setNew_collection(data));
  },[])
  return (
    <div className='new-collections'>
        <h1>NEW COLLECTIONS </h1><hr/>
        <div className="collections">
            {new_collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
            })}
        </div>
    </div>
  )
}

export default NewCollection