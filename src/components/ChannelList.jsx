import ChannelListItem from './ChannelListItem';

function ChannelList() {
  return (
    <div className="flex flex-col w-full gap-2">
      <ChannelListItem />
      <ChannelListItem color="#265" />
      <ChannelListItem color="#327" />
    </div>
  );
}

export default ChannelList;
