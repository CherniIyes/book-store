// ProductDetails.js
import React from 'react';

const ProductDetails = (props) => {
      return (
            <div className="product-details" onClick={() => {
                  props.setView(props.element);
                  props.switchView("OneProduct");
            }}>
                  <div className="product-image">
                        <img src={props.element.imageUrl} alt='' />
                  </div>
                  <div className="product-info">
                        <p>{props.element.description}</p>
                  </div>
            </div>
      );
}

export default ProductDetails;