import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Courses from '@/components/Courses';
import Podcasts from '@/components/Podcasts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Events />
      <Courses />
      <Podcasts />
      <Footer />
    </div>
  );
};

export default Index;
