import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screen/Homescreen'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
      <main className="text-center py-3">
        <Homescreen/>
      </main>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
