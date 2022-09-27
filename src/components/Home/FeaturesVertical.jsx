import PropTypes from 'prop-types';

function FeaturesVertical({ image, fetureHeading, fetureBody, isGray }) {
  return (
    <section className={`${isGray ? 'bg-gray-100' : ''}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 py-16 px-6 justify-center gap-4">
        <div className="text-left md:text-center">
          <h1 className="text-2xl leading-5 md:text-4xl lg:text-5xl font-display mb-4 md:mb-8">
            {fetureHeading}
          </h1>
          <p className="font-body text-sm md:text-lg leading-7">{fetureBody}</p>
        </div>
        <img src={image} alt="" className="mx-auto" />
      </div>
    </section>
  );
}

FeaturesVertical.propTypes = {
  image: PropTypes.string,
  featureHeading: PropTypes.string,
  featureBody: PropTypes.string,
  isGray: PropTypes.bool,
  isReverse: PropTypes.bool,
};

export default FeaturesVertical;
