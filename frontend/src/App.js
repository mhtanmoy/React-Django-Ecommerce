import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screen/Homescreen'
import ProductScreen from './screen/ProductScreen'
import CartScreen from './screen/CartScreen'
import LoginScreen from './screen/LoginScreen'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header/>
      
      <main className="text-center py-3">
      <Container>
        <Route path='/' component={Homescreen} exact />
        <Route path='/login' component={LoginScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        </Container>
      </main>
      
      <Footer/>
    </Router>
  );
}

export default App;
