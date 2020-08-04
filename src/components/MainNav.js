// currently designed for mobile only
import React from "react"
import styled from "styled-components"

const DropdownWrapper = styled.nav`
  width: 100%;
  max-height: ${props => (props.navOpen ? "200vh" : "0")};
  padding: 0 10%;
  background: #fff;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;

  & ul {
    list-style: none;

    & li {
      font-size: 0.8125rem;
      line-height: 2.875rem;
      border-top: 1px solid var(--border-grey);
      color: var(--text-grey);
      transition: color 0.3s ease;
      cursor: pointer;

      span {
        width: 90%;
      }
    }

    .top-level {
      background: pink;

      .expand-menu-arrow {
        text-align: right;
        color: red;
      }
    }

    .top-level:first-of-type {
      border-top: none;
    }

    .second-level {
      padding-left: 1rem;
      background: #fff;
    }
  }
`

const MainNav = props => {
  return (
    <DropdownWrapper navOpen={props.navOpen}>
      <ul>
        <li className="top-level">
          <span>About</span>
          <span className="expand-menu-arrow">&gt;</span>
          <ul>
            <li className="second-level">Member Stories</li>
          </ul>
        </li>
        <li className="top-level">
          <span>28 Day Kickstart Challenge</span>
          <span className="expand-menu-arrow">&gt;</span>
          <ul>
            <li className="second-level">No Excuses</li>
            <li className="second-level">StronGirl</li>
            <li className="second-level">Focus Personal Training</li>
          </ul>
        </li>
        <li className="top-level">Blog</li>
        <li className="top-level">Online Coaching</li>
        <li className="top-level">Our Gyms</li>
      </ul>
    </DropdownWrapper>
  )
}

export default MainNav
