import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Logo = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <Wrapper onClick={handleClick}>
      <p>
        Inam<span>Web</span>Solutions
      </p>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  :hover {
    cursor: pointer;
  }
  p {
    font-size: 1.3rem;
    font-weight: 500;
    margin: 0;

    span {
      color: var(--primary-5);
      font-weight: 700;
    }
    background-color: var(--grey-1);
    width: fit-content;
    border-radius: var(--radius);
    padding: 5px;
    border: 2px solid var(--primary-5);
    box-shadow: var(--shadow-3);
  }
`
export default Logo
