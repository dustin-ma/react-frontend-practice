import React from "react";
import "../App.scss";

function Pricing() {
  return (
    <div>
      <div className="section pricing black">
        <div className="pricing-c">
          <div className="title">
            <h1>PRICING</h1>
            <p>
              Test out our app today! Choose from three subscription Based
              payment models.
            </p>
          </div>

          <div className="pricing-group">
            <div id="left">
              <h4>BASIC</h4>
              <hr class="animated" align="left"></hr>
              <h3>MONTHLY</h3>
              <h1>$9</h1>
              <ul>
                <p>
                  <li>Very good</li>
                </p>
                <p>
                  <li>Amazing</li>
                </p>
                <p>
                  <li>Perfect job</li>
                </p>
                <p>
                  <li>Love this</li>
                </p>
                <p>
                  <li>It’s so good</li>
                </p>
                <p>
                  <li>Features</li>
                </p>
              </ul>
            </div>
            <div id="mid">
              <h4>ADVANCED</h4>
              <hr className="animated" align="left"></hr>
              <h3>YEARLY</h3>
              <h1>$99</h1>
              <ul>
                <p>
                  <li>Very very good</li>
                </p>
                <p>
                  <li>Even Amazing</li>
                </p>
                <p>
                  <li>Perfect job</li>
                </p>
                <p>
                  <li>Love this more</li>
                </p>
                <p>
                  <li>It’s so so good</li>
                </p>
                <p>
                  <li>More Features</li>
                </p>
              </ul>
            </div>
            <div id="right">
              <h4>PRO</h4>
              <hr className="animated" align="left"></hr>
              <h3>YEARLY</h3>
              <h1>$120</h1>
              <ul>
                <p>
                  <li>Very very good</li>
                </p>
                <p>
                  <li>Even Amazing</li>
                </p>
                <p>
                  <li>Perfect job</li>
                </p>
                <p>
                  <li>Love this more</li>
                </p>
                <p>
                  <li>It’s so so good</li>
                </p>
                <p>
                  <li>More Features</li>
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="section perks red">
        <div className="perk-content">
          <h1>PERKS</h1>
          <div className="perk-group">
            <div id="left2">
              <hr class="animated" align="left"></hr>
              <h3>Subscription Payment Model</h3>
              <p>
                No commitment, cancel anytime. Never worry about forgetting a
                payment again!
              </p>
            </div>
            <div id="mid">
              <hr className="animated" align="left"></hr>
              <h3>No Fee Cancelation Policy</h3>
              <p>
                No commitment, cancel anytime. Never worry about forgetting a
                payment again!
              </p>
            </div>
            <div id="right">
              <hr className="animated" align="left"></hr>
              <h3>Subscription Payment Model</h3>
              <p>
                No commitment, cancel anytime. Never worry about forgetting a
                payment again!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
