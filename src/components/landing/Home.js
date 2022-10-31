import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { landingPage } from '../../utils/data'
const image =
  'https://res.cloudinary.com/inam6530/image/upload/v1667131704/inamwebsolutions/Untitled_design_2_atlc1q.svg'

const Home = ({ landingPage }) => {
  console.log(landingPage)
  return (
    <Wrapper>
      <div className='box box-mobile'>
        <div className='mobile-container'>
          <h1>{landingPage.heading}</h1>
          <p>{landingPage.paragraph}</p>
          <Link to={landingPage.path} className='btn'>
            {landingPage.buttonTitle}
          </Link>
        </div>
      </div>
      <div className='box box-desktop'>
        <img src={landingPage.image} alt='computerPicture' />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  h1 {
    margin-left: 0;
  }
  p {
    font-size: 1.2rem;
  }
  .box {
    height: 100vh;
  }
  .box-mobile {
    display: grid;
    padding: 2rem;
    align-items: center;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    overflow: hidden;
    .mobile-container {
      overflow: hidden;
    }
  }
  .box-desktop {
    display: none;
    img {
      width: 90%;
    }
  }
  @media (min-width: 620px) {
    .box-mobile {
      background: linear-gradient(
        90deg,
        rgba(100, 116, 139, 1) 0%,
        rgba(226, 232, 240, 1) 94%,
        rgba(248, 250, 252, 1) 100%
      );
    }
  }
  @media (min-width: 720px) {
    grid-template-columns: 1.5fr 1fr;
    .box-desktop {
      display: grid;

      align-content: end;
    }
    .box-mobile {
      padding: 4rem;
    }
  }
`
export default Home
