import React, { useEffect, useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import Header from "./components/Header";
import "./App.scss";
import Speaker from "./img/medium17.png";
import Speaker2 from "./img/medium27.png";
import Background from "./img/Image4.png";
import Speaker3 from "./img/SmallSpeaker1-03.png";
import Speaker4 from "./img/SmallSpeaker2-03.png";

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <HeroPage />
        <SoundPage />
        <RevealPage />
        <PerksPage />
        <ReviewsPage />
        <DownloadPage />
        <Footer />
      </div>
    </div>
  );
}

function HeroPage() {
  return (
    <div className="section hero">
      <div className="hero-content" id="heropage">
        <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
        <p>
          Experience your favourite artists like never before and from the
          comfort of your own home.
        </p>
      </div>
      <div className="background-image"></div>
    </div>
  );
}

function SoundPage() {
  return (
    <>
      <div className="section sound red">
        <div className="sound-content" id="hero">
          <h1>SUPERIOR SOUND</h1>
          <p>Experience live versions of your favourite songs.</p>
          <button>TRY NOW</button>
          <a type="button" class="roundbutton" href="#">
            CLICK
          </a>
        </div>
        <ReactAudioPlayer src="./audio/song.m4a" controls />
        <div className="images">
          <img src={Speaker2} class="speaker2" alt="Speaker2"></img>
          <img src={Speaker} class="speaker1" alt="Speaker"></img>
        </div>
      </div>
    </>
  );
}

function RevealPage() {
  let canvas = useRef(null);

  useEffect(() => {
    let renderingElement = canvas.current;
    let drawingElement = renderingElement.cloneNode();

    let drawingCtx = drawingElement.getContext("2d");
    let renderingCtx = renderingElement.getContext("2d");
    let lastX;
    let lastY;
    let moving = false;

    renderingCtx.globalCompositeOperation = "source-over";
    renderingCtx.fillStyle = "#ffb3ff";
    renderingCtx.fillRect(0, 0, 500, 500);

    renderingElement.addEventListener("mouseover", (ev) => {
      moving = true;
      lastX = ev.pageX - renderingElement.offsetLeft;
      lastY = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("click", (ev) => {
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
      console.log("im moving");
      if (moving) {
        drawingCtx.globalCompositeOperation = "source-over";
        renderingCtx.globalCompositeOperation = "destination-out";
        let currentX = ev.pageX - renderingElement.offsetLeft;
        let currentY = ev.pageY - renderingElement.offsetTop;
        drawingCtx.lineJoin = "round";
        drawingCtx.moveTo(lastX, lastY);
        drawingCtx.lineTo(currentX, currentY);
        drawingCtx.closePath();
        drawingCtx.lineWidth = 120;
        drawingCtx.stroke();
        lastX = currentX;
        lastY = currentY;
        renderingCtx.drawImage(drawingElement, 0, 0);
      }
    });
  }, []);

  return (
    <div className="section reveal yellow">
      <canvas height="500" width="500" ref={canvas} />
      <div className="reveal-content" id="">
        <h1>FRONT ROW SEATS</h1>
        <p>Experience concerts up close and personal.</p>
      </div>
      <img src={Background} class="background-image2" />
    </div>
  );
}

function PerksPage() {
  return (
    <div className="section perks black">
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
  );
}

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

function DownloadPage() {
  return <div className="section black small"> </div>;
}

function Footer() {
  return <div className="section purple footer"></div>;
}

export default App;
