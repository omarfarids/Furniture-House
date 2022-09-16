import CartItem from './components/CartItem';
import NavBar from './components/NavBar';
import About from './components/About';
import Error from './components/Error';
import Index from './pages/Index';
import SingleItem from './components/SingleItem';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css'
import Footer from './components/Footer';
import Header from './components/Header';


function App() {


  return (
    <div className="App">
      <Router>
          <NavBar />
        <Routes>
          <Route exact path='/' element={
            <div>
              <Header />
              <Index />
            </div>
          } />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<CartItem />} />
          <Route path='/Item/*' element={<SingleItem />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
