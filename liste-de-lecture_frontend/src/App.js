
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import PageRepertoire from './Pages/PageRepertoire';
import PageAcceuil from './Pages/PageAcceuil';
import PageCategories from './Pages/PageCategories';
import BarreNavigation from './navigation/BarreNavigation';

function App() {
  return (
    <Router>
      <Container>
        <BarreNavigation />
        < Route path="/" component={PageAcceuil} exact />
        < Route path="/repertoire" component={PageRepertoire} exact />
        < Route path="/categories" component={PageCategories} exact />
        < Route path="/ajouter-piece" component={Ajouter} exact/>
      </Container>
    </Router>
  );
}
export default App;
