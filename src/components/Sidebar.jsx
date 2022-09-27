function Sidebar() {
  return (
    <section className="max-h-screen bg-zinc-700 rounded-tl-2xl flex flex-col overflow-hidden">
      {/* Channel Image */}
      <div className="w-full h-[8rem] bg-blue-800 p-3">
        {/* Channel Title */}
        <p className="text-white font-body font-bold text-[0.8rem]">
          Europa Universalis 4
        </p>
        <span className="pill">Public</span>
      </div>
    </section>
  );
}

export default Sidebar;
