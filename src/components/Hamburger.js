import React from "react"
import styled from "styled-components"

const HamburgerContainer = styled.div`
  width: 1.1875rem;
  height: 1.365rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;

  & span {
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 1px;
    background: var(--primary);
  }
`

const Hamburger = props => {
  return (
    <HamburgerContainer onClick={props.onClick}>
      <span></span>
      <span></span>
      <span></span>
    </HamburgerContainer>
  )
}

export default Hamburger
