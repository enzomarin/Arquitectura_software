import React, {Component} from 'react'


// crear un componente en react
class Micomponente extends Component{
    // render es el encargado de mostrar en pantalla el html que devuelve el componente
    render(){
        let producto = {
            nombre: 'carioca',
            precio: '$200',
            calorias: 350

        }
        return( // return solo puede devolver UNA etiqueta, pero esta puede englobar en su interior otras etiquetas
            <React.Fragment>
                <h1>Hola, soy el componente llamado: Micomponente</h1>
                <h2>Descripcion del producto:</h2>
                <p>
                    {'Nombre: ' + producto.nombre + '\n'}
                    {'Precio: ' + producto.precio}
                    {'Calorias: ' + producto.calorias}
                </p>
                <hr/>
            </React.Fragment>
            
        );
    }
}


// necesario para poder utilizarlo dentro de cualquier otro componente
export default Micomponente

// para  mostrarlo en pantalla hay que ir a App.js (componente principal)
// e importarlo