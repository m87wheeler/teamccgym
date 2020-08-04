import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 80%;
  margin: 1rem 0;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    margin-bottom: 1rem;
    transition: transform 0.5s ease-in-out;
  }

  &:hover > img {
    transform: scale(1.05);
  }
`

const ZoomImageContainer = props => {
  return (
    <ImageWrapper>
      <img src={props.src} alt={"The gym interior"} />
    </ImageWrapper>
  )
}

ZoomImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
}

export default ZoomImageContainer
