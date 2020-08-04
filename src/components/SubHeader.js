import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledHeader = styled.h2`
  display: block;
  font-size: 1.75rem;
  width: 15rem;
  height: 3.5rem;
  margin: 0 auto 3rem;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 2px solid var(--primary);
`

const SubHeader = props => {
  return <StyledHeader>{props.headerText}</StyledHeader>
}

SubHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
}

export default SubHeader
