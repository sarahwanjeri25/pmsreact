import React, { useState } from 'react';
import './Payments.css';
import Sidenav from './Sidenav';



function Payments() {

  function getPreviousBalances() {
    return [
      { id: 1, amount: 15000, date: '2023-01-15' },
      { id: 2, amount: 2000, date: '2023-02-20' },
    ];
  }

  const [paymentData, setPaymentData] = useState({
    paymentMethod: '',
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });

  const previousBalances = getPreviousBalances();

  function handleChange(e) {
    const { name, value } = e.target;
    setPaymentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Handle the payment processing logic here
    console.log('Payment Data Submitted:', paymentData);
    // Reset form
    setPaymentData({
      paymentMethod: '',
      cardNumber: '',
      cardHolder: '',
      expiryDate: '',
      cvv: '',
    });
  }

  return (
    <div>
      <Sidenav/>
      <h2>Bill Payment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={paymentData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
        {(paymentData.paymentMethod === 'creditCard' || paymentData.paymentMethod === 'debitCard') && (
          <>
            <div>
              <label>Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentData.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Card Holder Name:</label>
              <input
                type="text"
                name="cardHolder"
                value={paymentData.cardHolder}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Expiry Date:</label>
              <input
                type="text"
                name="expiryDate"
                value={paymentData.expiryDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>CVV:</label>
              <input
                type="text"
                name="cvv"
                value={paymentData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}
        <button type="submit">Submit Payment</button>
      </form>

      <h3>Previous Bill Balances</h3>
      <ul>
        {previousBalances.map((balance) => (
          <li key={balance.id}>
            <strong>Amount:</strong> ${balance.amount} <br />
            <strong>Date:</strong> {balance.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Payments;
