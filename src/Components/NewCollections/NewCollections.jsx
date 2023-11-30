import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className='newcollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
        <div className="collections" >
            {new_collection.map((item,i) => {
                return <div data-aos="zoom-in-up" data-aos-duration="600" data-aos-delay="600">
                  <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>      
                </div>
            })}
        </div>
    </div>
  )
}

export default NewCollections
