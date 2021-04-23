import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
      <main className="text-center py-3">
        <h1> Hello! This is Tanmoy </h1>
      </main>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
