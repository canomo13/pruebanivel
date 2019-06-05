import React, {Component} from 'react';
//import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';

class Resultado extends Component{
    mostrarPelis = () => {
        const pelis = this.props.pelis;
        const swapi = require('swapi-node');
        const pelicula = swapi.getFilm(pelis).then((result)=>{console.log(result)});
        if(pelis.length === 0) return null;
        
        return (
            <React.Fragment>
                <div className = "col-12 p-5 row">
                    <h2>Titulo: ${pelicula.Title}</h2>
                </div>  
            </React.Fragment>
        )

    }
    render() {

        return (
            <React.Fragment>{this.mostrarPelis}</React.Fragment>
        )
    }

}

export default Resultado;