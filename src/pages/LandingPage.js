import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import GoogleMaps from '../components/GoogleMaps'
import { Home, Services } from '../components/landing'
import LandingPortfolio from '../components/landing/LandingPortfolio'
import { landingPage, landingPageTwo, landingPageThree } from '../utils/data'
// const {} = landingPage

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>
          Professional Web Developers - With You From Concept to Code
        </title>
        <meta
          name='description'
          content='Web Designer in Kitchener-Waterloo. We offer Website Design, Website Hosting, Website Development, and Cloud Hosting Solutions.'
        />
        <link rel='canonical' href='/' />
      </Helmet>
      <Wrapper>
        <Home landingPage={landingPage} />
        <Services />
        <Home landingPage={landingPageTwo} />
        <LandingPortfolio />
        <Home landingPage={landingPageThree} />
        <GoogleMaps />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div``
export default LandingPage
