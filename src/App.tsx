import Hero from './components/Hero';
import Info from './components/Info';
import Categories from './components/Categories';
import Rules from './components/Rules';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Info />
      <Categories />
      <Rules />
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
