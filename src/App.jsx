import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111418] dark:text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
