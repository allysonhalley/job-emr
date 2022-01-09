import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Container } from '@mui/material';

import EmployeesIndex from './components/Employees/Index';
import EmployeesNew from './components/Employees/New';

const App = () => (
  <BrowserRouter >
    <Container maxWidth="lg" >
      <Switch>
        <Route path="/employees" exact component={EmployeesIndex} />
        <Route path="/employees/new" exact component={EmployeesNew} />
      </Switch>
    </Container>  
  </BrowserRouter>
);
export default App;
