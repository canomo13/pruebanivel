import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado'


class App extends Component{

state = {
  termino : '',
  pelis : ''
}

datosBusqueda = (termino) => {
  this.setState({
    termino
  }, () => {
    this.consultarAPI();
  })
}

consultarAPI = () => {
  const termino = this.state.termino;
  
  const url ='https://swapi.co/api/films/termino';

  fetch(url)
  .then(respuesta => respuesta.json())
  .then(resultado => console.log(resultado))
}

render (){
  return ( 
    <div className="app container">
      <div className="jumbotron">

        <p className="lead text-center">Buscador de Peliculas de Star Wars</p>
          <Buscador 
            datosBusqueda={this.datosBusqueda}
          />
      </div>
      <Resultado 
        pelis ={this.state.pelis}
      
      
      />
    </div>
  );
}
}

export default App;
