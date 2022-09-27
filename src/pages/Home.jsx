import Navbar from '../components/Home/Navbar';
import Hero from '../components/Home/Hero';
import FeaturesHorizontal from '../components/Home/FeaturesHorizontal';
import FeaturesVertical from '../components/Home/FeaturesVertical';
import CtaSection from '../components/Shared/CtaSection';
import Footer from '../components/Footer';
import { FiDownload } from 'react-icons/fi';
import featureInvite from '../assets/feature_invite.svg';
import featureHang from '../assets/feature_hang.svg';
import featureFandom from '../assets/feature_fandom.svg';
import featureClose from '../assets/feature_close.svg';

function Home() {
  return (
    <main className="w-full flex flex-col">
      <Navbar />
      <Hero />
      <FeaturesHorizontal
        image={featureInvite}
        fetureHeading="Create an invite-only place where you belong"
        fetureBody="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
        isGray={false}
        isReverse={false}
      />
      <FeaturesHorizontal
        image={featureHang}
        fetureHeading="Where hanging out is easy"
        fetureBody="Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call."
        isGray={true}
        isReverse={true}
      />
      <FeaturesHorizontal
        image={featureFandom}
        fetureHeading="From few to a fandom"
        fetureBody="Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
        isGray={false}
        isReverse={false}
      />
      <FeaturesVertical
        image={featureClose}
        fetureHeading="RELIABLE TECH FOR STAYING CLOSE"
        fetureBody="Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share."
        isGray={true}
      />
      <CtaSection ctaHeading="Ready to start your journey?">
        <FiDownload className="" /> Download for Desktop
      </CtaSection>
      <Footer />
    </main>
  );
}

export default Home;
