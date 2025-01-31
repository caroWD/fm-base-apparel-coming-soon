import PropTypes from 'prop-types'


const Header = ({ brand, textAlt }) => {
  return (
    <header
      className='header p-8 bg-white md:max-lg:absolute md:max-lg:top-4 md:max-lg:left-4 lg:bg-transparent xl:min-w-lg xl:mx-auto xl:pt-16'
    >
      <h1>
        <img
          src={brand}
          alt={`${textAlt} logo`}
          width='100'
          className='md:w-32 lg:w-36 xl:w-40'
        />
        <span
          className='hidden'
        >
          {textAlt}
        </span>
      </h1>
    </header>
  );
}


Header.propTypes = {
  brand: PropTypes.string,
  textAlt: PropTypes.string,
}


export default Header;
