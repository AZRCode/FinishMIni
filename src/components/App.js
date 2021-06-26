import React from 'react';
import { Redirect } from 'react-router-dom';
import CreateLink from './CreateLink';
import Header from './Header';
import LinkList from './LinkList';
import { Switch, Route } from 'react-router-dom';
import Login from './Login'
import Search from './Search';;



const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/new/1"/>}
        />

        <Route
          exact
          path="/create"
          component={CreateLink}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>

    <div className="Center">
      <h1>Elon Musk</h1>
      <p>"Un consejo: es importante ver el conocimiento como una especie de árbol semántico; asegúrate de entender bien los principios fundamentales, es decir, el tronco y las ramas, antes de entrar en las hojas o los detalles, o no habrá nada donde puedan agarrarse"</p>
      </div>
  </div>
);

export default App;
