import { useRef } from 'react'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { customFetch } from '../../utils/axios'

const Subscribe = () => {
  const emailInput = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = emailInput.current.value

    if (!email) {
      return toast.error('please enter valid email')
    } else {
      try {
        const response = await customFetch.post('/emails', { email })
        emailInput.current.value = ''
        toast.success(`${response.data.email} Subscribed.
        `)
      } catch (error) {
        toast.warning(error.response.data)
      }
    }
  }

  return (
    <Wrapper className='boxDesign'>
      <h3 className='title'>News letter</h3>
      <p>Receive updates on the latest news and Offers.</p>
      <form className='subscribe-form' onSubmit={handleSubmit}>
        <input type='text' ref={emailInput} />
        <button className='btn' type='submit'>
          Subscribe
        </button>
      </form>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  .subscribe-form {
    padding: 5px;
    input {
      cursor: pointer;
      border: transparent;
      padding: 4px;
      margin-right: 5px;
    }
  }
`
export default Subscribe
