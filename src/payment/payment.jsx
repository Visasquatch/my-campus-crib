import React, { useState, useEffect } from "react";
import './payment.css';
const PaymentForm = ({ onClose, onSuccess }) => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const payWithPaystack = (e) => {
  e.preventDefault();
  setLoading(true);

  if (!amount || amount <= 0) {
    alert("Enter a valid amount please 🙏");
    return;
  }

  setLoading(true);

  const handler = window.PaystackPop.setup({
    key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
    email,
    amount: Number(amount) * 100,
    currency: 'NGN',
     firstname: firstName,
    lastname: lastName,
    callback: function(response) {
      setLoading(false);
      alert('Payment successful! Reference: ' + response.reference);
      onSuccess();
    },
    onClose: function() {
      setLoading(false);
      alert('Transaction was cancelled');
    }
  });
  handler.openIframe();
};

const verifyPayment = async (reference) => {
  try {
    const res = await fetch('http://localhost:5000/api/payment/verify-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reference }),
    });

    const data = await res.json();

   if (res.ok) {
      alert('Payment verified successfully: ' + data.message);
      onClose(); 
      onSuccess();
    } else {
      alert('Verification failed: ' + data.message);
    }
  } catch (error) {
    alert('Error verifying payment: ' + error.message);
  } finally {
    setLoading(false); 
  }
};
  
 return (
   <div className="payment-container">
      <form onSubmit={payWithPaystack}>
        <h1 className="mt-3 text-2xl font-semibold text-center text-gray-800 mb-4">
          Please fill this to make payment
        </h1>

        <div className="form-group mb-4 text-sm">
          <label>Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            placeholder="Please fill the correct amount for your intended room option"
            required
            min="1"
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>

        <div className="form-submit">
          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Pay"}
          </button>
          <button type="button" onClick={onClose} className="close-btn">
            ✖
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
