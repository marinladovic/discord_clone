import PropTypes from 'prop-types';

function FeaturesHorizontal({
  image,
  fetureHeading,
  fetureBody,
  isGray,
  isReverse,
}) {
  return (
    <section className={`${isGray ? 'bg-gray-100' : ''}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 py-16 px-6 items-center gap-4 lg:gap-24">
        <img
          src={image}
          alt=""
          className={`${isReverse ? 'md:order-2' : ''}`}
        />
        <div>
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold font-body mb-4 md:mb-8">
            {fetureHeading}
          </h1>
          <p className="font-body text-sm md:text-lg leading-7">{fetureBody}</p>
        </div>
      </div>
    </section>
  );
}

FeaturesHorizontal.propTypes = {
  image: PropTypes.string,
  featureHeading: PropTypes.string,
  featureBody: PropTypes.string,
  isGray: PropTypes.bool,
  isReverse: PropTypes.bool,
};

export default FeaturesHorizontal;
