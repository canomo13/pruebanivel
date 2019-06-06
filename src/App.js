import React, { Component } from 'react';
//import Resultado from './componentes/Resultado';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from './componentes/carrusel'
import Resultado from './componentes/Resultado'

class App extends Component{

state = {
  pelis : ''
}
datosBusqueda = (pelis) => {
  this.setState({
    pelis
  }, () => {
    this.pelis(pelis);
  })
}
busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        //Tomamos el valor del input
        const pelis = this.busquedaRef.current.value;
       //Y hacemos una busqueda de la pelicula que introduce el usuario
        switch (pelis) 
        {
          case "A New Hope": 
          {
            const url ='https://swapi.co/api/films/1';
            fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => console.log(resultado))
          }
          break;
          }
          case "The Empire Strike Back": 
          {
            const url ='https://swapi.co/api/films/2';
            fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => console.log(resultado))
          }
          case "The Jedi Return":
          {
            const url ='https://swapi.co/api/films/3';
            fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => console.log(resultado));
            
          }
          case "The Phantom Menace":
            {
              const url ='https://swapi.co/api/films/4';
              fetch(url)
              .then(respuesta => respuesta.json())
              .then(resultado => console.log(resultado))
            }
          case "Attack of the Clones":
          {
            const url ='https://swapi.co/api/films/5';
            fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => console.log(resultado))
          }
          case "Revenge of the Sith":
            {
              const url ='https://swapi.co/api/films/6';
              fetch(url)
              .then(respuesta => respuesta.json())
              .then(resultado => console.log(resultado))
            }
          case "The Force Awakens":
          {
              const url ='https://swapi.co/api/films/7';
              fetch(url)
              .then(respuesta => respuesta.json())
              .then(resultado => console.log(resultado))
          }
          default:
            return null;
          }
    
    }

render (){
  return ( 
    <div className="app container">
      <div className="jumbotron">
      <h1 id = "cabecera" class="text-center">STAR WARS</h1>
        <p className="lead text-center">Buscador de Películas de Star Wars</p>
            <form onSubmit={this.obtenerDatos}>
                <div className="row">                    
                    <div className="form-group col md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" 
                        placeholder="Busca tu peli favorita de Star Wars" >
                        </input>
                    </div>
                    <div className="form-group col md-4">
                        <input type="submit" className="btn btn-lg btn-success btn-block" value="Buscar..."/>
                    </div>
                </div>
            </form>
      </div>
      <div>
           <Respuesta />
      </div>
      <div>
        <Carousel />
      </div>

    </div>
  );
}
}

export default App;
