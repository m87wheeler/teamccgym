import React, { useState } from "react"
import styled from "styled-components"

import Hamburger from "./Hamburger"
import MainLogo from "../assets/images/branding/teamm-cc-logo-min.png"
import Button from "../shared/UIElements/Button"
import MainNav from "./MainNav"

// *************************************
// STYLED COMPONENTS
// *************************************
const HeaderWrapper = styled.header`
  width: 100%;
  height: 6.25rem;
  padding: 0.625rem 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  & img {
    max-height: 100%;
    height: 5rem;
    width: auto;
  }
`

// *************************************
// COMPONENT
// *************************************
const Header = () => {
  const [navOpen, setNavOpen] = useState(false)

  const handleClick = () => {
    setNavOpen(!navOpen)
  }

  return (
    <React.Fragment>
      <HeaderWrapper>
        <Hamburger onClick={handleClick} />
        <img src={MainLogo} alt="TeamCC Strength and Conditioning" />
        <Button primary size={"sml"}>
          Contact
        </Button>
      </HeaderWrapper>
      <MainNav navOpen={navOpen} />
    </React.Fragment>
  )
}

export default Header
