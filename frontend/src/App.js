import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screen/Homescreen'
import ProductScreen from './screen/ProductScreen'
import CartScreen from './screen/CartScreen'
import LoginScreen from './screen/LoginScreen'
import RegisterScreen from './screen/RegisterScreen'
import ProfileScreen from './screen/ProfileScreen'
import ShippingScreen from './screen/ShippingScreen'
import PaymentScreen from './screen/PaymentScreen'
import PlaceOrderScreen from './screen/PlaceOrderScreen'
import OrderScreen from './screen/OrderScreen'
import UserListScreen from './screen/UserListScreen'
import UserEditScreen from './screen/UserEditScreen'
import ProductListScreen from './screen/ProductListScreen'
import OrderListScreen from './screen/OrderListScreen'
import ProductEditScreen from './screen/ProductEditScreen'
import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      
      <Header/>
      
      <main className="py-3">
      <Container>
        <Route path='/' component={Homescreen} exact />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/profile' component={ProfileScreen} />
        <Route path='/payment' component={PaymentScreen} />
        <Route path='/placeorder' component={PlaceOrderScreen} />
        <Route path='/order/:id' component={OrderScreen} />
        <Route path='/shipping' component={ShippingScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
        <Route path='/admin/userlist' component={UserListScreen} />
        <Route path='/admin/user/:id/edit' component={UserEditScreen} />
        <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
        <Route path='/admin/productlist' component={ProductListScreen} />
        <Route path='/admin/orderlist' component={OrderListScreen} />
        </Container>
      </main>
      
      <Footer/>
    </Router>
  );
}

export default App;
