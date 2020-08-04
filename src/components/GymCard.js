import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import ZoomImageContainer from "../shared/UIElements/ZoomImageContainer"

const CardWrapper = styled.div``

const GymCard = props => {
  return (
    <CardWrapper>
      <ZoomImageContainer src={props.src} />
      <h3>CONTACT</h3>
      <address>
        Team CC Bournemouth <br />
        Unit C 1st Floor <br />
        Richmond Gardens Shopping Centre <br />
        Bournemouth, BH1 1EN
      </address>
      <p>
        <span>
          <strong>T: </strong>
        </span>
        <a className="tel" href="tel: 01202 311850">
          01202 311850
        </a>
      </p>
      <h3>OPENING HOURS</h3>
      <p>Sessions Run:</p>
      <p>
        <span>Mon - Fri</span>
        <span>
          06:00/07:00/08:00/10:00/12:30/ 13:30/16:00/17:00/18:00/19:00
        </span>
      </p>
      <p>
        <span>Sat</span>
        <span>0900-1200</span>
      </p>
      <p>
        <strong>
          Member can opt for the 2 In-Gym or Unlimited In-Gym session
          memberships. Both come with the Home Workout Coaching System included.
        </strong>
      </p>
    </CardWrapper>
  )
}

GymCard.propTypes = {
  src: PropTypes.string.isRequired,
}

export default GymCard
