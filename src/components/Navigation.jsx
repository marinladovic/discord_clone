import ChannelList from './ChannelList';

function Navigation() {
  return (
    <nav className="min-h-screen w-full flex flex-col gap-2 py-2 items-center">
      {/* Profile link */}
      <div className="w-[2.8rem] h-[2.8rem] bg-zinc-700 rounded-full cursor-pointer hover:rounded-xl transition duration-150"></div>
      {/* separator */}
      <span className="w-[2rem] h-0.5 rounded-xl bg-zinc-700"></span>
      {/* Subscribed channels */}
      <ChannelList />
      {/* separator */}
      <span className="w-[2rem] h-0.5 rounded-xl bg-zinc-700"></span>
      {/* Create Channel link */}
      <div className="w-[2.8rem] h-[2.8rem] bg-zinc-700 rounded-full cursor-pointer hover:rounded-xl transition duration-150"></div>
      {/* Explore link */}
      <div className="w-[2.8rem] h-[2.8rem] bg-zinc-700 rounded-full cursor-pointer hover:rounded-xl transition duration-150"></div>
    </nav>
  );
}

export default Navigation;
