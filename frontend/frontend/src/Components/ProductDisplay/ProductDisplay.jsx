import React, { useContext } from 'react';
import './ProductDisplay.css'; // Make sure this is a CSS module if you want to avoid global scope issues
import starIcon from '../Assets/star_icon.png';
import starDullIcon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Array(rating).fill(starIcon);
    const emptyStars = Array(totalStars - rating).fill(starDullIcon);
    return [...filledStars, ...emptyStars].map((star, index) => (
      <img key={index} src={star} alt={star === starIcon ? 'filled star' : 'empty star'} />
    ));
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt={`${product.name} thumbnail`} />
          <img src={product.image} alt={`${product.name} thumbnail`} />
          <img src={product.image} alt={`${product.name} thumbnail`} />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          {renderStars(4)} {/* Assuming a static rating of 4 for now */}
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price">${product.price}</div>
        </div>
        <div className="productdisplay-right-description">
          {product.description || 'No description available.'}
        </div>
        <div className="productdisplay-right-description1">
          <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
        </div>
        <p className='productdisplay-right-category'><span>Category:</span> Artworks</p>
        <p className='productdisplay-right-category'><span>Tags:</span> Artworks</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
