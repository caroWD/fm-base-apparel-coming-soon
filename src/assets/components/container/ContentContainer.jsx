import PropTypes from 'prop-types';
import Form from '../pure/Form';
import { useState } from 'react';


const ContentContainer = ({ children, callToAction }) => {

  const [ inputEmail, setInputEmail ] = useState('')
  const handleChange = e => setInputEmail(e.target.value)

  return (
    <main
      className='main max-w-lg mx-auto px-8 py-16 flex flex-col gap-10 text-center lg:justify-center lg:text-left'
    >
      <hgroup
        className='flex flex-col gap-6'
      >
        <h2
          className='text-4xl uppercase tracking-[0.3em] text-dark-grayish-red md:text-5xl lg:text-6xl xl:text-7xl'
        >
          <span
            className='font-light text-desaturated-red'
          >
            {(children.title).split(' ').slice(0, 1) + ' '}
          </span>
          {(children.title).split(' ').slice(1).join(' ')}
        </h2>
        <p>
          {children.copy}
        </p>
      </hgroup>
      {
        callToAction &&
          <Form handleChange={handleChange} stateInputEmail={inputEmail} />
      }
    </main>
  );
};


ContentContainer.propTypes = {
  children: PropTypes.object.isRequired,
  callToAction: PropTypes.bool.isRequired,
};


export default ContentContainer;
