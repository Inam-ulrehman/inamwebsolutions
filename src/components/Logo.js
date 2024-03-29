import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { logo } from '../utils/data'

const Logo = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <>
      <Wrapper
        onClick={handleClick}
        style={{ width: '200px', height: '200px' }}
        src={logo}
        alt='logo'
      />
    </>
  )
}
const Wrapper = styled.img`
  margin-top: -4.3rem;
  margin-bottom: -4.3rem;
  transition: var(--transition-1);
  :hover {
    cursor: pointer;
    scale: 1.1;
  }
`
export default Logo
