import React from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'
import { Service } from '../components'

import { services } from '../utils/data'

const Product = () => {
  return (
    <>
      <Helmet>
        <title>Services</title>
        <meta
          name='description'
          content='We creates Digital Solutions for your business and helps you launch your product all over the internet.'
        />
        <link rel='canonical' href='/product' />
      </Helmet>
      <Wrapper>
        <div className='Service-heading'>
          <h1 className='title'>Services we offer </h1>
          <div className='title-underline'></div>
        </div>
        <div className='service'>
          {services.map((item, index) => {
            const { id, title, image, description } = item
            return (
              <Service
                key={index}
                id={id}
                title={title}
                image={image}
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
  .title {
    padding-top: 1rem;
  }
  .service {
    @media (min-width: 620px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: var(--fixed-width);
      margin: 0 auto;
      gap: 1rem;
    }

    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr 1fr;
      max-width: var(--max-width);
    }
  }
`
export default Product
