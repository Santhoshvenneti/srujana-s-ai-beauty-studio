import { ThemeProvider } from './context/ThemeContext';
import CursorGlow from './components/CursorGlow';
import LoadingScreen from './components/LoadingScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <CursorGlow />
      <AnimatedBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Services />
        <Features />
        <Testimonials />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
