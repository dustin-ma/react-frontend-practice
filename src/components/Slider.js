import React, { useRef, useState, useEffect } from "react";
import { Plane, useCurtains } from "react-curtains";
import gsap from "gsap";
import { vertexShader, fragmentShader } from "../shaders/shaders";
import Image1 from "../img/Image1.png";
import Image2 from "../img/Image2.png";
import Image3 from "../img/Image3.png";

import "../App.scss";

function Slider() {
  //button mapping
  useEffect(() => {
    document.querySelector(".cta-button").onmousemove = function (e) {
      var x = e.pageX - e.target.offsetLeft;
      var y = e.pageY - e.target.offsetTop - e.target.scrollTop;
      console.log(e.scrollTop);
      e.target.style.setProperty("--x", x + "px");
      e.target.style.setProperty("--y", y + "px");
    };
  }, []);

  //Slider WebGL setup
  const [plane, setPlane] = useState(null);

  const slideshowInner = useRef(null);

  // slideshow states
  const [activeTexture, setActiveTexture] = useState(1);
  const [maxTextures, setMaxTextures] = useState(0);

  const isChanging = useRef(false);
  const tween = useRef(null);

  useEffect(() => {
    if (slideshowInner.current) {
      setMaxTextures(slideshowInner.current.childElementCount - 2);
    }

    let currentTween = tween.current;
    return () => {
      if (currentTween) {
        currentTween.kill();
      }
    };
  }, []);

  //changes slideshow to a random slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const rndInt = Math.floor(Math.random() * 3) + 1;
      onClickButton(rndInt);
      console.log("Slide changed!");
    }, 10000);
    return () => clearInterval(interval); // eslint-disable-next-line
  }, []);

  const activeTex = useRef(null);
  const nextTex = useRef(null);

  const uniforms = {
    transitionTimer: {
      name: "uTransitionTimer",
      type: "1f",
      value: 0,
    },
  };

  const onLoading = (plane, texture) => {
    // improve texture rendering on small screens with LINEAR_MIPMAP_NEAREST minFilter
    texture.setMinFilter(texture.gl.LINEAR_MIPMAP_NEAREST);
  };

  const onReady = (plane) => {
    setPlane(plane);
  };

  //takes an index from the div (1/2/3) and set it to the active texture
  const onClickButton = (index) => {
    if (!isChanging.current && plane) {
      isChanging.current = true;
      console.log(index);
      // check what will be next image
      let nextTextureIndex;
      if (index < maxTextures) {
        nextTextureIndex = index + 1;
      } else {
        nextTextureIndex = 1;
      }
      // apply it to our next texture
      nextTex.current.setSource(plane.images[nextTextureIndex]);

      tween.current = gsap.to(plane.uniforms.transitionTimer, {
        duration: 1.75,
        value: 90,
        ease: "power2.inOut",
        onComplete: () => {
          isChanging.current = false;
          tween.current = null;

          plane.uniforms.transitionTimer.value = 0;

          const activeTextureIndex = nextTextureIndex;
          // our next texture becomes our active texture
          activeTex.current.setSource(plane.images[activeTextureIndex]);
          setActiveTexture(activeTextureIndex);
        },
      });
    }
  };

  useCurtains(
    (curtains) => {
      if (plane) {
        // first we set our very first image as the active texture
        activeTex.current = plane.createTexture({
          sampler: "activeTex",
          fromTexture: plane.textures[activeTexture],
        });
        // next we set the second image as next texture but this is not mandatory
        // as we will reset the next texture on slide change
        nextTex.current = plane.createTexture({
          sampler: "nextTex",
          fromTexture: plane.textures[activeTexture + 1],
        });
      }
    },
    [plane]
  );

  return (
    <Plane
      className="Slideshow"
      // plane init parameters
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      uniforms={uniforms}
      // plane events
      onLoading={onLoading}
      onReady={onReady}
      //onClick={onClick}
    >
      <div ref={slideshowInner}>
        <div className="title-group">
          <h1>INTERACTIVE CONCERT EXPERIENCE</h1>
          <div className="subtext">
            <p>
              Experience your favourite artists like never before and from the
              comfort of your own home.
            </p>
          </div>

          <a href="/payment" className="btn-grad">
            TRY IT NOW
          </a>
        </div>

        <img
          src="https://www.curtainsjs.com/examples/medias/displacement.jpg"
          data-sampler="displacement"
          alt=""
        />
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
      </div>
      <div class="dots">
        <div class="dot a1" onClick={() => onClickButton(1)}></div>
        <div class="dot a2" onClick={() => onClickButton(2)}></div>
        <div class="dot a3" onClick={() => onClickButton(3)}></div>
      </div>
    </Plane>
  );
}

export default Slider;
