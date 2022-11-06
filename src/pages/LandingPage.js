import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import GoogleMaps from '../components/GoogleMaps'
import { Home, Services } from '../components/landing'
import { landingPage, landingPageTwo } from '../utils/data'
// const {} = landingPage

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Inam Website Design Solutions</title>
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
        <GoogleMaps />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div``
export default LandingPage
