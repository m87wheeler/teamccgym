import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Button from "./Button"

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`

const TileWrapper = styled.div`
  position: relative;
  width: 120%;
  margin-left: -10%;
  height: 0;
  padding-bottom: 170%;
  overflow: hidden;
  z-index: 0;

  &:hover > ${Overlay} {
    opacity: 0.3;
  }

  img {
    position: absolute;
    min-height: 100%;
    width: 100%;
    filter: brightness(0.3);
    z-index: -1;
  }

  .bottom-grid {
    position: absolute;
    left: 1.5rem;
    bottom: 1.5rem;
    width: 85%;
    height: auto;

    h6 {
      font-size: 1.25rem;
      color: var(--text-white);
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      color: var(--text-white);
      margin-bottom: 1rem;
    }
  }
`

const ImageTile = props => {
  return (
    <TileWrapper>
      <img src={props.imgsrc} alt={""} />
      <Overlay />
      <div className="bottom-grid">
        <h6>{props.header}</h6>
        <p>{props.text}</p>
        <Button size="sml">{props.buttonText}</Button>
      </div>
    </TileWrapper>
  )
}

ImageTile.propTypes = {
  imgsrc: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
}

export default ImageTile
