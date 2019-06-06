import React, {Component} from 'react';
//import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';

class Resultado extends Component{
constructor(props) {
    super(props);
    this.state = {
      pelisvistas: '',
    };
  }
    mostrarPelis = () => {
        const pelis = this.props.pelis;
        const swapi = require('swapi-node');
        const pelicula = swapi.getFilm(pelis).then((result)=>{console.log(result)});
        if(pelis.length === 0) return null;
        
        return (
            <React.Fragment>
                <div className = "col-12 p-5 row">
                    <h2>Titulo:</h2> <p> ${pelicula.title} </p>
                    <h2>Número dentro de la saga:</h2> <p> ${pelicula.episode_id} </p>
                    <h2>Opening:</h2> <p> ${pelicula.opening_crawl} </p>
                    <h2>Fecha:</h2> <p> ${pelicula.release_date} </p>
                </div>
            </React.Fragment>
        )

    }
    render() {
        const {pelisvistas} = this.props.pelis;
        return (
            <React.Fragment>{this.mostrarPelis}</React.Fragment>
            <div>
                <ul>
                    {pelisvistas}
                </ul>
            </div>
        )
    }

}

export default Resultado;