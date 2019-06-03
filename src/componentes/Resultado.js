import React, {Component} from 'react';
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';

class Resultado extends Component{
    mostrarPelis = () => {
        const pelis = this.props.pelis;

        if(pelis.length === 0) return null;
        
        return (
            <React.Fragment>
                <div className = "col-12 p-5 row">
                    
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