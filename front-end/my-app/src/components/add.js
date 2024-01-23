// Add.js
// jya behi 
import React, { useState } from 'react';
import axios from 'axios';


const Add = () => {
      const [title, setTitle] = useState('');
      const [price, setPrice] = useState(0);
      const [description, setDescription] = useState('');
      const [imageUrl, setImageUrl] = useState('');
      const [moredes, setMoredes] = useState('');

      const handle = (() => {
            const data = {
                  title: title,
                  price: price,
                  description: description,
                  imageUrl: imageUrl,
                  moredes: moredes,
            };
            axios
                  .post('http://localhost:9999/add', data)
                  .then((res) => {
                        console.log(res.data);
                        setTitle('');
                        setPrice(0);
                        setDescription('');
                        setImageUrl('');
                        setMoredes('');
                  })
                  .catch((err) => console.log(err));
      });

      return (
            <div className="add-container">
                  <input className="add-input" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                  <input className="add-input" type="text"  placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}  />
                  <input className="add-input" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                  <input className="add-input" type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                  <input className="add-input" type="text" placeholder="More Description" value={moredes} onChange={(e) => setMoredes(e.target.value)} />
                  <button className="add-button" onClick={handle}>Add</button>
            </div>
      );
};

export default Add;
