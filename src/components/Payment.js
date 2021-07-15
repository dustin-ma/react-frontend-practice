import React from "react";
import "../payment.scss";

function Payment() {
  return (
    <div className="payment-container">
      <h1>PAYMENT</h1>
      <div className="plan-select">
        <label>1. Select your plan</label>
        <br />
        <div className="radio-group">
          <input type="radio" id="test1" name="test1" />
          <label for="test1">Apple</label>

          <input type="radio" id="test2" name="test2" />
          <label for="test2">Peach</label>

          <input type="radio" id="test3" name="test3" />
          <label for="test3">Orange</label>
        </div>
      </div>
      <div className="input-group">
        <div className="input-billing">
          <label>2. Billing Information</label>
          <form>
            <label for="fname">FULL NAME</label>
            <br />
            <input type="text" id="fname" name="fname" />
            <br />
            <label for="lname">BILLING ADDRESS</label>
            <br />
            <input type="text" id="baddress" name="baddress" />
            <br />
            <label for="city">CITY</label>
            <label for="postal">POSTAL CODE</label>
            <br />
            <input type="text" id="city" name="city" />

            <input type="text" id="postal" name="postal" />
            <br />
            <label for="country">COUNTRY</label>
            <br />
            <select id="country" name="country">
              <option value="australia">Australia</option>
              <option value="canada">Canada</option>
              <option value="usa">USA</option>
            </select>
            <br />
          </form>
        </div>
        <div className="input-credit">
          <label>3. Credit Card Information</label>
          <form>
            <label for="fname">CARDHOLDER'S NAME</label>
            <br />
            <input type="text" id="fname" name="fname" />
            <br />
            <label for="lname">CARD NUMBER</label>
            <br />
            <input type="text" id="card-num" name="cardnum" />
            <br />
            <label for="exp-month">EXPIRY MONTH</label>
            <label for="exp-year">EXPIRY YEAR</label>
            <br />
            <input type="text" id="exp-month" name="exp-month" />

            <input type="text" id="exp-year" name="exp-year" />
            <br />
            <label for="country">CVV</label>
            <br />
            <input type="text" id="cvv" name="cvv" />
            <br />
          </form>
        </div>
      </div>
      <div className="terms">
        <p>
          By continuing, I acknowledge that I’ve read and agree to the Terms of
          Service & Privacy Policy.
        </p>
        <a href="#" className="cta-button">
          DOWNLOAD
        </a>
      </div>
    </div>
  );
}

export default Payment;
