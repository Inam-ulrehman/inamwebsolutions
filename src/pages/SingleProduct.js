import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { services } from '../utils/data'

const SingleProduct = () => {
  const { id } = useParams()
  const productId = Number(id)

  const SingleObject = services.find((item) => {
    return item.id === productId
  })
  const { title, heading, image, imageTwo, description, points } = SingleObject
  return (
    <Wrapper>
      <h1 className='title'>{title}</h1>
      <div className='title-underline'></div>
      <div className='container'>
        <div className='image'>
          <img src={image} alt={title} />
        </div>
        <div className='body'>
          <h3 className='title'>{heading}</h3>
          <p className='title'>{description}</p>
          <div className='body-image'>
            <img src={imageTwo} alt='Guru' />
          </div>
        </div>
      </div>
      {/* points */}
      <div className='points'>
        {points.map((item, index) => {
          return (
            <article key={index}>
              <h4>
                {index + 1}. {item.title}
              </h4>
              <p>{item.text}</p>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;

  .title {
    padding-top: 1rem;
  }
  .container {
    padding: 2rem;
    .image {
      display: grid;
      place-content: center;
      background-color: var(--grey-4);
      border-radius: var(--radius-2);
      box-shadow: var(--shadow-2);
      img {
        max-width: 320px;
      }
    }
  }
  /* body */
  .body {
    padding: 1rem;
  }
  .body-image {
    text-align: center;
    img {
      max-width: 150px;
      border-bottom: 2px solid black;
    }
  }
  /* points */
  .points {
    padding: 1rem;
    article {
      box-shadow: var(--shadow-1);
      margin: 1rem;
      padding: 1rem;
    }
  }
  @media (min-width: 768px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      .image {
        img {
          max-width: 420px;
          max-height: 400px;
        }
      }
    }
    .points {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
  .divider {
    border: 2px solid var(--primary-2);
  }
`
export default SingleProduct
