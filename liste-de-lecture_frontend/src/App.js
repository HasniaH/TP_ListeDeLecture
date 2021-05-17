
import './App.css';
import  PageAccueil from './Pages/PageAccueil'
import {BrowserRouter as Router,Link, Route} from 'react-router-dom';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Container>
         < Route path="/" component={ PageAccueil} exact/>
      </Container>
    </Router>
  );
}
export default App;
