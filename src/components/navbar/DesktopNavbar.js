import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { navbar } from '../../utils/data'
import Logo from '../Logo'

const DesktopNavbar = () => {
  return (
    <Wrapper>
      <Logo />
      <ul>
        {navbar.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item.path}>{item.title}</NavLink>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  box-shadow: var(--shadow-2);
  background: linear-gradient(
    90deg,
    rgba(248, 250, 252, 1) 0%,
    rgba(226, 232, 240, 1) 13%,
    rgba(100, 116, 139, 1) 100%
  );
  height: 3.2rem;
  background-color: var(--white);
  display: flex;
  justify-content: space-between;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100vw;
  ul {
    display: flex;
    margin-right: 1rem;
    li {
      margin-top: -5px;
      a {
        padding: 1rem;
        color: var(--black);
        transition: var(--transition-1);
        :hover {
          background-color: var(--primary-6);
          color: var(--white);
        }
      }
    }
  }
  /* nav active */
  .active {
    background-color: var(--primary-5);
    color: var(--white);
  }
  @media (max-width: 600px) {
    display: none;
  }
`
export default DesktopNavbar
