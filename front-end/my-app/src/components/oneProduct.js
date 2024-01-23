import axios from 'axios';
import React, { useState } from 'react';

const OneProduct = (props) => {
  const { product, addToCart, DELETE } = props;
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({
    title: product.name,
    price: product.price,
    description: product.description,
    imageUrl: product.imageUrl,
    moredes: product.moredes || '',
  });

  const toggleUpdatePopup = () => {
    setShowUpdatePopup(!showUpdatePopup);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Send an update request to the server with the updated product details
    axios
      .put(`http://localhost:9999/update/${product.id}`, updatedProduct)
      .then((res) => {
        console.log('Product updated successfully:', res.data);
        // You may want to update the product details in the UI or take any other actions
      })
      .catch((err) => {
        console.error('Error updating product:', err);
      });

    // Close the update popup
    toggleUpdatePopup();
  };

  return (
      <div className={`one-product-details ${showUpdatePopup ? 'show-popup' : ''}`}>
      <div className="one-product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="one-product-info">
        <h1 className="one-product-title">{product.title}</h1>
        <hr/>
        <p>{product.moredes}</p>
        <hr/>
        <h2>Price: ${product.price}</h2>
        <div className="one-product-buttons">
          <button className="one-add-to-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <button className="one-delete-btn" onClick={() => DELETE(product.id)}>
            DELETE
          </button>
          <button className="one-update-btn" onClick={toggleUpdatePopup}>
            Update
          </button>
        </div>
      </div>

      {/* Update Popup */}
      {showUpdatePopup && (
        <div className="update-popup">
          <h2>Update Product</h2>
          <label>
            Title:
            <input type="text" name="title" value={updatedProduct.title} onChange={handleInputChange} />
          </label>
          <label>
            Price:
            <input type="number" name="price" value={updatedProduct.price} onChange={handleInputChange} />
          </label>
          <label>
            Description:
            <textarea name="description" value={updatedProduct.description} onChange={handleInputChange} />
          </label>
          <label>
            Image URL:
            <input type="text" name="imageUrl" value={updatedProduct.imageUrl} onChange={handleInputChange} />
          </label>
          <label>
            Additional Description:
            <textarea name="moredes" value={updatedProduct.moredes} onChange={handleInputChange} />
          </label>
          <button onClick={handleUpdate}>Update Product</button>
          <button className='cancle' onClick={toggleUpdatePopup}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default OneProduct;
