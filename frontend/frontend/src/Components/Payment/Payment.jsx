import React, { useState } from 'react';
import './Payment.css';

const PaymentForm = ({ amount, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentType: 'card'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the payment logic
    console.log('Payment Details:', formData);
    alert('Payment Details Submitted!');
    onClose();
  };

  return (
    <div className="payment-popup">
      <form onSubmit={handleSubmit} className="payment-form">
        <h2>Payment Details</h2>
        <label>
         
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Name'
            required
          />
        </label>
        <label>
          
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email address'
            required
          />
        </label>
        <label>
         
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder='address'
            required
          />
        </label>
        <label>
          Payment Type:
          <div className="payment-types">
            <label>
              <input
                type="radio"
                name="paymentType"
                value="card"
                checked={formData.paymentType === 'card'}
                onChange={handleChange}
              />
              Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentType"
                value="banking"
                checked={formData.paymentType === 'banking'}
                onChange={handleChange}
              />
              Banking
            </label>
            <label>
              <input
                type="radio"
                name="paymentType"
                value="paytm"
                checked={formData.paymentType === 'paytm'}
                onChange={handleChange}
              />
              Paytm
            </label>
          </div>
        </label>
        <button type="submit">Pay ${amount}</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default PaymentForm;
