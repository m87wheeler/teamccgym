import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

// *************************************
// STYLED COMPONENTS
// *************************************

const StyledButton = styled.button`
  display: block;
  height: 2.5rem;
  border: 1px solid var(--text-white);
  margin: 1px;
  padding: 0 .8rem;
  background: var(--primary);
  color: var(--text-white);
  text-transform: uppercase;
  letter-spacing: .1rem;
  transition: all .3s ease;
  cursor: pointer;

  &:hover {
      border: 1px solid var(--primary);
  }

  ${props =>
    props.primary &&
    css`
      border: none;

      &:hover {
        border: none;
        background: var(--secondary);
      }
    `}

    ${props =>
      props.transparent &&
      css`
        background: transparent;
        color: var(--text-white);
        font-family: var(--header-font);
        font-weight: 400;

        &:hover {
          border: 1px solid var(--tertiary);
          background: var(--tertiary);
        }
      `}

  ${props =>
    props.size === "sml" &&
    css`
      font-size: 0.8125rem;
    `}

  ${props =>
    props.size === "med" &&
    css`
      font-size: 1rem;
    `}

  ${props =>
    props.size === "lrg" &&
    css`
      height: 3.25rem;
      font-size: 1.125rem;
      letter-spacing: 0;
      padding: 0 2.5rem;
      font-weight: 500;
    `}
`

const Button = props => {
  return (
    <StyledButton
      className={props.className}
      style={props.style}
      type={props.type}
      primary={props.primary}
      transparent={props.transparent}
      size={props.size}
    >
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  style: PropTypes.object,
  type: PropTypes.string,
  size: PropTypes.oneOf(["sml", "med", "lrg"]).isRequired,
}

export default Button
