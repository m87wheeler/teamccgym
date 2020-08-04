import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./components/Header"
import VideoPlayer from "./shared/UIElements/VideoPlayer"
import Button from "./shared/UIElements/Button"
import BoldButton from "./shared/UIElements/BoldButton"
import Card from "./shared/UIElements/Card"
import GymCard from "./components/GymCard"
import ImageTile from "./shared/UIElements/ImageTile"
import SubHeader from "./components/SubHeader"

import TileImgOne from "./assets/images/photography/personal-training.jpg"
import TileImgTwo from "./assets/images/photography/Alina-Press-4.jpg"
import TileImgThree from "./assets/images/photography/no-excuses.jpg"
import BournemouthGym from "./assets/images/photography/bournemouth-gym-700x466.jpg"

// *************************************
// STYLED COMPONENTS
// *************************************
const GlobalStyleReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const GlobalBrandVariables = createGlobalStyle`
  html {
    --display-font: 'Quantico', sans-serif;
    --header-font: 'Montserrat', sans-serif;
    --body-font: 'Nunito', sans-serif;

    --primary: #001e62;
    --secondary: #000;
    --tertiary: #6b92ed;
    --border-grey: #aaa;

    --background: #fff;
    --text-white: #fff;
    --text-black: #000;
    --text-grey: #888;
  } 
`

const GlobalElementStyles = createGlobalStyle`
  body {
    font-size: 16px;
    background: var(--background);
  }

  body,
  p,
  ul,
  li,
  blockquote,
  form,
  address {
    font-family: 'Nunito', sans-serif;
    line-height: 1.375rem;
  }

  h2,
  button {
    font-family: 'Quantico', sans-serif;
    color: var(--primary);
  }

  h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5rem;
  }

  h2 {
    font-size: 1.6875rem;
    line-height: 1em;
  }
`

// ***** components to move to homepage *****
const LandingVideo = styled(VideoPlayer)`
  width: 96%;
  margin: 0 2%;
`

const VideoButton = styled(Button)`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
`

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyleReset />
      <GlobalBrandVariables />
      <GlobalElementStyles />
      <Header />
      <LandingVideo
        src="https://player.vimeo.com/video/353970241?title=0&byline=0&portrait=0&player_id=iframe14275?autoplay=1&autopause=0&muted=1&background=1&playsinline=1"
        ratio="4:3"
        // playing={true}
        playing={true}
        volume={0}
      >
        <VideoButton transparent size="lrg" style={{ position: "absolute" }}>
          GET STARTED
        </VideoButton>
      </LandingVideo>
      <Card shadow={true} style={{ marginTop: "-2.75rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          START WITH YOUR 28 DAY KICKSTART ON THE 17TH OF AUGUST
        </h2>
        <h4
          style={{
            fontSize: "1.1rem",
            textAlign: "center",
            fontWeight: "800",
            marginBottom: "1rem",
          }}
        >
          Drop 4kg of Body Fat, 1 Inch Off Your Waist & Drastically Boost Your
          Fitness, Health & Confidence This Month
        </h4>
        <Button primary size="sml" style={{ margin: "0 auto" }}>
          FIND OUT MORE
        </Button>
      </Card>
      <Card>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          WE’LL HELP YOU BUILD AN ATHLETIC BODY AND LIFESTYLE SO YOU LOOK, FEEL
          & PERFORM AT YOUR BEST
        </h2>
        <ImageTile
          imgsrc={TileImgOne}
          header="HOW WE’RE LOOKING AFTER YOU THROUGH COVID"
          text="See how we’re going to run TeamCC to create an Environment you never want to leave and Results that change your life post Lockdown."
          buttonText="Find Out More"
        />
        <ImageTile
          imgsrc={TileImgTwo}
          header="THE SOLUTION: HYBRID MEMBERSHIP"
          text="Challenging times need guaranteed Solutions…not fads. Our Hybrid Coaching System will provide everything you need to shake off the Lockdown blues and Build Athletic Fitness, Strength, Body Composition and have fun while doing it."
          buttonText="Find Out More"
        />
        <ImageTile
          imgsrc={TileImgThree}
          header="FOCUS PERSONAL TRAINING"
          text="Specific Personal Programming for Maximum Results in the Shortest Time. Focus is Perfect for Busy Professionals Optimising their Health & Fitness, Sports Specific Coaching or Injury Rehabilitation."
          buttonText="Find Out More"
        />
      </Card>
      <Card>
        <SubHeader headerText="The Gyms" />
        <BoldButton active={true}>BOURNEMOUTH</BoldButton>
        <BoldButton active={false}>POOLE</BoldButton>
        <GymCard src={BournemouthGym} />
      </Card>
    </React.Fragment>
  )
}

export default App
