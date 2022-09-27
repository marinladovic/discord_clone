import PropTypes from 'prop-types';
import sparks from '../../assets/spaks.svg';

function CtaSection({ ctaHeading, children }) {
  return (
    <section className="max-w-4xl mx-auto flex flex-col items-center gap-16 py-16 px-6 relative">
      <h2 className="z-10 text-4xl font-bold">{ctaHeading}</h2>
      <img src={sparks} alt="" className="absolute top-[15%] md:scale-125" />
      <button className="flex gap-4 items-center justify-center text-white font-body text-xl w-full md:w-96 bg-indigo-500 py-3 rounded-full shadow-md hover:shadow-xl hover:opacity-70 transition duration-300">
        {children}
      </button>
    </section>
  );
}

CtaSection.propTypes = {
  ctaHeading: PropTypes.string,
  children: PropTypes.node,
};

export default CtaSection;
