
import BarreNavigation from './composants/BarreNavigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import PageAcceuil from './Pages/PageAcceuil';
import PageAdmin from './Pages/PageAdmin';
import PageAjouter from './Pages/PageAjouter';
import PageModifier from './Pages/PageModifier';
import PageRepertoire from './Pages/PageRepertoire';
import PageSupprimer from './Pages/PageSupprimer';
import Page404 from './Pages/Page404';



function App() {
  return (
    <Router>
      <Container>
        <BarreNavigation />
        <Switch>
          <Route path="/" component={PageAcceuil} exact />
          <Route path="/repertoire" component={PageRepertoire} />
          <Route path="/admin" component={PageAdmin} />
          <Route path="/ajouter" component={PageAjouter} exact />
          <Route path="/modifier/:id" component={PageModifier} />
          <Route path="/supprimer/:id" component={PageSupprimer} />
          <Route component={Page404} />
        </Switch>
      </Container>
    </Router>
  );
}
export default App;
