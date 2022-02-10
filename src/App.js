import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {

  state = {
    termino : '',
    imagenes : []
  }

  paginaAnterior = () => {
    console.log('anterior...');
  }

  paginaSiguiente = () => {
    console.log('siguiente...');
  }

  consultarApi = () => {
    const termino =  this.state.termino;
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page30`;

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({ imagenes : resultado.hits }))
  }



  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
    
  }
  
  render(){
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        <Buscador 
        
        datosBusqueda={this.datosBusqueda}
        />
      </div>
    <div className="row justify-content-center">
      <Resultado 
       imagenes={this.state.imagenes}
       paginaAnterior={this.paginaAnterior}
       paginaSiguiente={this.paginaSiguiente}
      />
    </div>
    </div>
  );
}
}

export default App;
