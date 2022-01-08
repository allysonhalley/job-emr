import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state = {
    occupations: [],
  }

  async componentDidMount() {
    const response = await api.get('/occupations');

    this.setState({ occupations: response.data });
  }

  render() {

    const { occupations } = this.state;    

    return (
      <div>
        <h1>Listar os Cargos</h1>
        {occupations?.map(ocupation => (
          <li key={ocupation.id}>
            <h2>
              <strong>Cargo: </strong>
              {ocupation.description}
            </h2>
            <p>
              {ocupation.activity}
            </p>

          </li>
        ))}
      </div>
    );
  };
};

export default App;
