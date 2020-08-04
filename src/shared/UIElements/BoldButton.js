import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const StyledButton = styled.button`
  width: 100%;
  height: 4rem;
  border: none;
  font-family: var(--header-font);
  font-size: 1.25rem;
  font-weight: 700;
  text-align: left;
  letter-spacing: 0.05rem;
  padding: 0 2rem;
  background: #eeeeee;
  color: #303030;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      background: var(--primary);
      color: var(--text-white);
      transition: opacity 0.2s ease-in-out;

      &:hover {
        opacity: 0.95;
      }
    `}
`

const BoldButton = props => {
  return <StyledButton active={props.active}>{props.children}</StyledButton>
}

BoldButton.propTypes = {
  active: PropTypes.bool.isRequired,
}

export default BoldButton
