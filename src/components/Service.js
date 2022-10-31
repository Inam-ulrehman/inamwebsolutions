import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

// image size is 720px

const Service = ({ id, image, title, description }) => {
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/product/${id}`)
  }
  return (
    <Wrapper onClick={() => handleClick(id)}>
      <h5 className='title'>{title}</h5>
      <img src={image} alt='computer' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
`
export default Service
