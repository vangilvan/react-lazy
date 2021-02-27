import './App.css';
import Menu from './Components/Menu/Menu';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import {lazy, Suspense} from 'react';
import Routes from './routes';
import carregando from './img/giphy.gif';

const Footer = lazy(() => import('./CodeSplitting/footer/footer'));


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header><Menu /></header>
        <main>
          <Container fluid>
            <Routes />
          </Container>
        </main>
        <Suspense fallback = { <img src={carregando} alt="Carregando"  />}>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
