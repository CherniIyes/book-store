// products.js
import React, { useEffect, useState } from 'react';
import axios from "axios";
import ProductDetails from './ProductDetails.js';


const Products = (props) => {
      const [data, setData] = useState([]);

      useEffect(() => {
            axios
                  .get("http://localhost:9999/getall")
                  .then((res) => { setData(res.data); })
                  .catch((err) => { console.error(err); });
      }, []);



      return (
            <div className="product-container">
                  {data.map((element) => {
                        return <ProductDetails key={element.id} element={element} switchView={props.switchView} setView={props.setView} />;
                  })}
                  <h3 className='quotee'>Every year of my life I grow more convinced that it is wisest and best to fix our attention on the beautiful and the good, and dwell as little as possible on the evil and the false.</h3>
                  <h4 className='quoter'>"Richard Cecil"</h4>
            </div>


      );
};

export default Products;