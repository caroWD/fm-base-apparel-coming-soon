import PropTypes from 'prop-types';
import iconArrow from '../../media/icon-arrow.svg'
import iconError from '../../media/icon-error.svg'
import { useRef, useState } from 'react';


const Form = ({ handleChange, stateInputEmail }) => {

  const [ focusInput, setFocusInput ] = useState(false)
  const [ submitForm, setSubmitForm ] = useState(false)

  const inputRef = useRef();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const errorInput = (
    <>
      <img
        src={iconError}
        alt='Error'
        className='absolute top-[0.875rem] right-26'
      />
      <p
        className='text-geraldine mt-4 font-normal'
      >
        Please provide a valid email
      </p>
    </>
  )

  const handleFocus = () => setFocusInput(!focusInput)

  const handleSubmit = e => {
    e.preventDefault()
    if (emailRegex.test(stateInputEmail)) {
      setSubmitForm(!submitForm)
      inputRef.current.value = ''
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div
      className='relative font-light'
      >
        <label 
          htmlFor="email"
          className='hidden'
        >
          Email Address
        </label>
        <input
          ref={inputRef}
          type="email"
          name="email"
          id="email"
          required
          placeholder='Email Address'
          pattern='^[^@]+@[^@]+\.[a-zA-Z]{2,}$'
          className='block w-full pl-6 pr-20 pb-3 pt-4 border border-solid rounded-full focus:outline-geraldine invalid:focus:outline-soft-red valid:focus:outline-your-pink valid:border-your-pink valid:bg-your-pink xs:pr-27'
          onChange={(e) => handleChange(e)}
          onFocus={handleFocus}
          onBlur={handleFocus}
        />
        {
          (focusInput && !emailRegex.test(stateInputEmail)) ?
            errorInput
            : (stateInputEmail && !emailRegex.test(stateInputEmail)) &&
              errorInput
        }
        {
          submitForm &&
            <p
              className='pt-4 text-green-600 font-normal opacity-50'
            >
              Email sent successfully
            </p>
        }
        <button
          type="submit"
          className='absolute top-0 right-0 py-[1.0625rem] px-6 rounded-full bg-gradient-to-tl from-geraldine to-your-pink shadow-xl shadow-your-pink cursor-pointer transition-all duration-300 hover:from-your-pink hover:to-your-pink hover:shadow-geraldine xs:px-10'
        >
          <img
            src={iconArrow}
            alt="Submit"
          />
        </button>
      </div>
    </form>
  )
}


Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  stateInputEmail: PropTypes.string,
}


export default Form;
