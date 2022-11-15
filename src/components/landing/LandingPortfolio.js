import React from 'react'
import { portfolio } from '../../utils/data'
import styled from 'styled-components'

const LandingPortfolio = () => {
  return (
    <>
      <h2 className='title'>Portfolio </h2>
      <div className='title-underline'></div>
      <Wrapper>
        {portfolio
          .map((item, index) => {
            return (
              <a
                href={item.link}
                target='_blank'
                rel='noreferrer'
                className='single-portfolio'
                key={index}
              >
                <h5 className='title'>{item.title}</h5>
                <img src={item.image} alt='computer' />
              </a>
            )
          })
          .slice(0, 4)}
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  min-height: calc(100vh - 3.2rem);
  h5 {
    color: var(--black);
  }
  @media (min-width: 620px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    max-width: var(--fixed-width);
    margin: 0 auto;
  }

  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    max-width: var(--max-width);
    gap: 1rem;
  }
  /* single portfolio */
  .single-portfolio {
    box-shadow: var(--shadow-1);
    max-width: 320px;
    max-height: 340px;
    margin: 1rem auto;
    text-align: center;
    transition: var(--transition-2);

    :hover {
      cursor: pointer;
      background-color: var(--grey-3);
    }

    .title {
      background-color: var(--grey-2);
      margin: 0;
      padding: 1rem;
    }
    img {
      width: 100%;
      height: 280px;
    }
  }
`
export default LandingPortfolio
