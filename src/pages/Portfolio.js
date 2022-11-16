import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import LandingPortfolio from '../components/landing/LandingPortfolio'

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio Projects</title>
        <meta
          name='description'
          content='Our Website Design and layout work almost every device.And they are very fast responsive.'
        />
        <link rel='canonical' href='/' />
      </Helmet>
      <Wrapper>
        <LandingPortfolio />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  padding-top: 3.2rem;
`
export default Portfolio
