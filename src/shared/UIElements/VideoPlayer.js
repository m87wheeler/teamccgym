import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import ReactPlayer from "react-player"

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${props => (props.ratio === "16:9" ? "56.25%" : "75%")};
  overflow: hidden;
  background: #fff;
`

const Video = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  min-height: ${props => (props.ratio === "16:9" ? "auto" : "100%")};
  max-width: ${props => (props.ratio === "16:9" ? "100%" : "auto")};
`

const VideoPlayer = props => {
  return (
    <VideoWrapper className={props.className} ratio={props.ratio}>
      <Video
        url={props.src}
        playing={props.playing}
        volume={props.volume || 0}
      />
      {props.children}
    </VideoWrapper>
  )
}

VideoPlayer.propTypes = {
  ratio: PropTypes.oneOf(["16:9", "4:3"]).isRequired,
  src: PropTypes.string.isRequired,
  playing: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
}

export default VideoPlayer
