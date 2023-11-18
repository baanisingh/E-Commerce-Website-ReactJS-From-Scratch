import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
            An ecommerce website is an online platform tha facilitates buying and selling 
            of products or services over the internet, serves as a virtual marketplace where 
            businesses or individuals showcase their products, interact with customers, and conduct transactions
            without the need for a physical presense. E-commerce websites have gained immense popularity due to their accessibility, and the global reach they offer.
        </p>
        <p>
            E-commerce  websites typically display products or services along with detailed description, images, prices. Each product has its own details and relevant information.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
