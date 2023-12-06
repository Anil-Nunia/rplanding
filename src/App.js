
import './App.css';
import Heros from './Component/Heros';
import Welcome from './Component/Welcome';
import Cards from './Component/Cards';
import Gallary from './Component/Gallary';
import Satisfied from './Component/Satisfied';
import Discover from './Component/Discover';
import Creating from './Component/Creating';
import Subscribe from './Component/Subscribe';
import Footer from './Component/Footer';
import Preloader from './Component/Common/Preloader';
import Backtotop from './Component/Common/Backtotop';


function App() {
  return (
    <div className='overflow-hidden'>
      <Heros />
      <Welcome />
      <Cards />
      <Gallary />
      <Satisfied />
      <Discover />
      <Creating />
      <Subscribe />
      <Footer />
      <Preloader />
      <Backtotop/>
    </div>
  );
}

export default App;
