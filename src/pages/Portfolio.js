import React from 'react'
import styled from 'styled-components'
import LandingPortfolio from '../components/landing/LandingPortfolio'

const Portfolio = () => {
  return (
    <Wrapper>
      <LandingPortfolio />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-top: 3.2rem;
`
export default Portfolio
