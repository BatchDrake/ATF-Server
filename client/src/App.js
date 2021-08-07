import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Menu from './components/common/Menu'

function App() {
  return (
    <Container fluid id="page">
      <Menu />
    </Container>
  );
}

export default App;
