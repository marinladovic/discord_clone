import PropTypes from 'prop-types';

function ChannelListItem({ color }) {
  const itemStyle = { backgroundColor: color };
  return (
    <div className="relative group">
      <span className="absolute top-[50%] left-0 translate-y-[-50%] w-1 h-3 bg-white rounded-tr-xl rounded-br-xl group-hover:h-[2rem] transition-all duration-150"></span>
      <div
        style={itemStyle}
        className="w-[2.8rem] h-[2.8rem] rounded-full cursor-pointer mx-auto group-hover:rounded-xl transition duration-150"
      ></div>
    </div>
  );
}

ChannelListItem.defaultProps = {
  color: '#fff',
};

ChannelListItem.propTypes = {
  color: PropTypes.string,
};

export default ChannelListItem;
