import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const CardWrapper = styled.section`
  position: relative;
  width: 84%;
  min-height: 10vh;
  height: auto;
  margin: 0 auto 4.375rem;
  padding: 7.5%;
  background: var(--background);

  ${props =>
    props.shadow &&
    css`
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.4);
    `}
`

const Card = props => {
  return (
    <CardWrapper shadow={props.shadow} style={props.style}>
      {props.children}
    </CardWrapper>
  )
}

Card.propTypes = {
  shadow: PropTypes.bool.isRequired,
}

export default Card
