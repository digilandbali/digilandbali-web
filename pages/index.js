import Layout from '../src/components/Layout';
import AboutSection from './homepage/aboutSection';
import AdvisorSection from './homepage/advisorSection';
import FragmentSection from './homepage/fragmentSection';
import HomeSection from './homepage/homeSection';
import PeopleBehindSection from './homepage/peopleBehindSection';
import RevealSection from './homepage/revealSection';
import SponsorSection from './homepage/sponsorSection';

export default function Home() {
  return (
    <Layout>
      <div>
        <HomeSection />
        <SponsorSection />
        <AboutSection />
        <FragmentSection />
        <RevealSection />
        <PeopleBehindSection />
        <AdvisorSection />
        <div className="relative w-full h-[120px] mb-12 tablet:mb-32">
          <img src="/Union.svg" layout="fill" className="w-full h-full relative" alt="tes" />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
