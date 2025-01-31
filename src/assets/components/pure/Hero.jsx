import PropTypes from 'prop-types';


const Hero = ({ mobile, tablet, desktop, textAlt }) => {
  return (
    <picture
      className='hero'
    >
      {
        desktop &&
          <source 
            srcSet={desktop}
            media='(min-width: 768px)'
          />
      }
      {
        tablet &&
          <source
            srcSet={tablet}
            media='(min-width: 640px)'
          />
      }
      <img
        src={mobile}
        alt={textAlt}
        className='w-full xs:aspect-[8/7] xs:object-cover xs:object-top lg:aspect-auto lg:h-full'
      />
    </picture>
  );
};


Hero.propTypes = {
  mobile: PropTypes.string.isRequired,
  tablet: PropTypes.string,
  desktop: PropTypes.string,
  textAlt: PropTypes.string.isRequired,
};


export default Hero;
