import React, { useEffect, useRef } from "react";
import Header from "./components/Header";
import Payment from "./components/Payment";
import Pricing from "./components/Pricing";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import gsap from "gsap";
import { useCurtains } from "react-curtains";
import Slider from "./components/Slider";
import Speaker from "./img/medium17.png";
import Speaker2 from "./img/medium27.png";
import Speaker3 from "./img/SmallSpeaker1-03.png";
import Speaker4 from "./img/SmallSpeaker2-03.png";

function App() {
  useEffect(() => {
    document.querySelector(".cta-button").onmousemove = function (e) {
      var x = e.pageX - e.target.offsetLeft;
      var y = e.pageY - e.target.offsetTop - e.target.scrollTop;
      console.log(e.scrollTop);
      e.target.style.setProperty("--x", x + "px");
      e.target.style.setProperty("--y", y + "px");
    };
  }, []);
  useCurtains((curtains) => {
    // use gsap ticker to render curtains scene
    gsap.ticker.add(curtains.render.bind(curtains));
  });
  return (
    <Router>
      <div className="container">
        <div className="wrapper">
          <Switch>
            <Route exact path="/">
              <Header />
              <HeroPage />
              <SoundPage />
              <RevealPage />
              <PerksPage />
              <ReviewsPage />
              <DownloadPage />
            </Route>
            <Route exact path="/payment" component={Payment}>
              <Header />
              <Payment />
            </Route>
            <Route exact path="/pricing" component={Pricing}>
              <Header />
              <Pricing />
            </Route>
            <Route exact path="/reveal" component={RevealPage} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

// ========================================================================
// ========================================================================
// ========================================================================

function HeroPage() {
  return (
    <div className="section">
      <Slider />
      <div className="hero-content" id="heropage"></div>
    </div>
  );
}

// ========================================================================
// ========================================================================
// ========================================================================

function SoundPage() {
  return (
    <div className="section sound red">
      <div className="sound-content" id="hero">
        <h1>SUPERIOR SOUND</h1>
        <p>Experience live versions of your favourite songs.</p>
        <br />
        <a href="/payment" className="btn-grad">
          TRY IT NOW
        </a>
        <a type="button" class="roundbutton" href="/payment">
          CLICK
        </a>
      </div>
      <div className="images">
        <img src={Speaker2} class="speaker2" alt="Speaker2"></img>
        <img src={Speaker} class="speaker1" alt="Speaker"></img>
      </div>
    </div>
  );
}

// ========================================================================
// ========================================================================
// ========================================================================

function RevealPage() {
  const canvas = useRef(null);

  useEffect(() => {
    var renderingElement = canvas.current;
    var drawingElement = renderingElement.cloneNode();

    var drawingCtx = drawingElement.getContext("2d");
    var renderingCtx = renderingElement.getContext("2d");
    var lastX;
    var lastY;
    var moving = false;

    renderingCtx.globalCompositeOperation = "source-over";
    renderingCtx.fillStyle = "#ffb33f";
    renderingCtx.fillRect(0, 0, 1920, 1080);

    renderingElement.addEventListener("mouseover", (ev) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("click", (ev) => {
      console.log("im CLICKING");
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("mouseup", (ev) => {
      moving = false;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("mousemove", (ev) => {
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over";
        renderingCtx.globalCompositeOperation = "destination-out";
        var currentX = ev.pageX - renderingElement.offsetLeft;
        var currentY = ev.pageY - renderingElement.offsetTop;
        drawingCtx.lineJoin = "round";
        drawingCtx.moveTo(lastX, lastY - 1920);
        drawingCtx.lineTo(currentX, currentY - 1920);
        drawingCtx.closePath();
        drawingCtx.lineWidth = 100;
        drawingCtx.stroke();
        lastX = currentX;
        lastY = currentY;
        renderingCtx.drawImage(drawingElement, 0, 0);
      }
    });
  }, []);

  return (
    <div className="section reveal">
      <div className="reveal-content" id="">
        <h1>FRONT ROW SEATS</h1>
        <p>Experience concerts up close and personal.</p>
        <a href="/payment" className="btn-grad">
          TRY IT NOW
        </a>
      </div>

      <div>
        <canvas height="1080" width="1920" ref={canvas} />
      </div>
    </div>
  );
}

// ========================================================================
// ========================================================================
// ========================================================================

function PerksPage() {
  return (
    <div className="section perks black">
      <div className="perk-content">
        <h1>PERKS</h1>
        <div className="perk-group">
          <div id="left">
            <hr class="red animated" align="left"></hr>
            <h3>Subscription Payment Model</h3>
            <p>
              No commitment, cancel anytime. Never worry about forgetting a
              payment again!
            </p>
          </div>
          <div id="mid">
            <hr className="yellow animated" align="left"></hr>
            <h3>No Fee Cancelation Policy</h3>
            <p>
              No commitment, cancel anytime. Never worry about forgetting a
              payment again!
            </p>
          </div>
          <div id="right">
            <hr className="blue animated" align="left"></hr>
            <h3>Subscription Payment Model</h3>
            <p>
              No commitment, cancel anytime. Never worry about forgetting a
              payment again!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================================================
// ========================================================================
// ========================================================================

function ReviewsPage() {
  return (
    <div className="section review blue">
      <div className="images-group-review">
        <img src={Speaker3} class="speaker3" alt="Speaker3"></img>
        <img src={Speaker4} class="speaker4" alt="Speaker4"></img>
      </div>

      <div className="review-group">
        <h1>REVIEWS</h1>
        <div className="review-group-display">
          <div id="review-block">
            <h2>★★★★★</h2>
            <h3>ARTIST</h3>
            <p>“Love it, it’s the Best. I can’t live without it!”</p>
          </div>
          <div id="review-block">
            <h2>★★★★★</h2>
            <h3>PRODUCER</h3>
            <p>“Love it, it’s the Best. I can’t live without it!”</p>
          </div>
          <div id="review-block">
            <h2>★★★★★</h2>
            <h3>MUSIC FAN</h3>
            <p>“Love it, it’s the Best. I can’t live without it!”</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================================================
// ========================================================================
// ========================================================================

function DownloadPage() {
  useEffect(() => {
    document.querySelector(".cta-button").onmousemove = function (e) {
      var x = e.pageX - e.target.offsetLeft;
      var y = e.pageY - e.target.offsetTop - e.target.scrollTop;
      console.log(e.scrollTop);
      e.target.style.setProperty("--x", x + "px");
      e.target.style.setProperty("--y", y + "px");
    };
  }, []);
  return (
    <div className="section black now small">
      <div className="get-now">
        <h1>GET EXP|CON NOW</h1>
        <p>Purchase and download the app.</p>
      </div>
      <div className="get-now-btn">
        <a href="/payment" className="cta-button">
          TRY IT NOW
        </a>
      </div>
    </div>
  );
}

// ========================================================================
// ========================================================================
// ========================================================================

function Footer() {
  return (
    <div className="section purple footer">
      <div className="bottom-text">
        <h1>EXP|CON</h1>
        <p>2019 © All Rights Reserved | Speer Technologies Incorporated</p>
      </div>
    </div>
  );
}

export default App;
