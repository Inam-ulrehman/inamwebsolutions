import React from 'react'
import styled from 'styled-components'

const TeamMember = ({ img, titleName, titleJob, description }) => {
  return (
    <Wrapper>
      <div className='image'>
        <img src={img} alt={titleName} />
      </div>
      <div className='body'>
        <div className='spanHolder'>
          <span>{titleName}</span>
          <span>{titleJob}</span>
        </div>
        <p className='text-small'>{description}</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* Team Members */
  border-top-left-radius: var(--radius-2);
  border-top-right-radius: var(--radius-2);
  box-shadow: var(--shadow-2);
  width: 80vw;
  margin: 1rem auto;
  padding-top: 1rem;
  background: var(--grey-4);

  img {
    width: 80vw;
    height: 30vh;
    object-fit: contain;
    border-bottom: 2px solid var(--primary-5);
  }
  .body {
    margin-top: -8px;
    padding: 1rem;
    background: var(--white);
  }
  .spanHolder {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  p {
    margin-bottom: 0;
    color: var(--grey-5);
  }
  @media (min-width: 600px) {
    width: 45vw;
    img {
      width: 45vw;
    }
  }
  @media (min-width: 1024px) {
    width: 30vw;
    img {
      width: 30vw;
    }
  }
`
export default TeamMember
