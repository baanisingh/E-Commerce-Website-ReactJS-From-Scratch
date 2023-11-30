import React,{useEffect} from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Popular = () => {

  useEffect(()=>{
    AOS.init({
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: true,
    });
  });

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i) => {
            return <div data-aos="zoom-in-down" data-aos-duration="600" data-aos-delay="600">
              <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            </div>
        })}
      </div>
    </div>
  )
}

export default Popular
