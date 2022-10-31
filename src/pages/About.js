import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import TeamMember from '../components/TeamMember'
import { aboutHeading, teamMembers } from '../utils/data'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name='description' content={aboutHeading.paragraph} />
        <link rel='canonical' href='/about' />
      </Helmet>
      <Wrapper>
        {/* headings */}
        <div className='box-1'>
          <div className='heading'>
            <h1 className='title'>{aboutHeading.title}</h1>
            <div className='title-underline'></div>
            <p className='small'>{aboutHeading.paragraph}</p>
          </div>
        </div>
        {/* Team Members */}
        <div className='box-2'>
          {teamMembers.map((item, index) => {
            const { img, titleName, titleJob, description } = item
            return (
              <TeamMember
                key={index}
                img={img}
                titleJob={titleJob}
                titleName={titleName}
                description={description}
              />
            )
          })}
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  display: grid;
  .box-1 {
    padding: 2rem;
    h1 {
      padding-top: 1.5rem;
      font-size: 2rem;
    }
    p {
      margin: 1rem auto;
    }
  }
  /* Team Members */

  .box-2 {
    display: flex;
    flex-wrap: wrap;
  }
`
export default About
