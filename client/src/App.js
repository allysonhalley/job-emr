import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Occupations from './components/Occupations/Occupations';
import Home from './components/Home/Home';

const App = () => (  
  <BrowserRouter>
      <Container maxWidth="lg">
        <Switch>          
          <Route path="/occupations" exact component={Occupations} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Container>
  </BrowserRouter>
);

export default App;
