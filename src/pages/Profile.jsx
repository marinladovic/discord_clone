import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';

function Profile() {
  return (
    <main className="w-full h-screen grid grid-cols-[18rem_1fr] bg-zinc-800">
      {/* Side navigation */}
      <section className="grid grid-cols-[4rem_1fr] justify-center">
        <Navigation />
        <Sidebar />
      </section>
    </main>
  );
}

export default Profile;
