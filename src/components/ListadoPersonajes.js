import React from "react";

import logoOficial from '../images/logo.png';
import "./css/styles.css"; 

import Card from './Card';

class ListadoPersonajes extends React.Component {

    state = {
        loading: true,
        error: null,
        
        data: {
            info: {},
            results: []
        },
        
        /*data: [],*/
        nextPage: 1
    };

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
        const response = await fetch(
        /*`https://thesimpsonsquoteapi.glitch.me/quotes?count=${this.state.nextPage}`*/
        `https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`
        );
        const data = await response.json();

        this.setState({
            loading: false,
            
            data: {
                info: data.info,
                results: [].concat(this.state.data.results, data.results)
            },
            
            /*data:data,*/
            nextPage: this.state.nextPage + 1
        });
    } catch (error) {
        this.setState({ loading: false, error: error });
    }
    };

    render(){
        return(
            <div className="container">
                <div className="App">
                
                    <img className="Logo" src={logoOficial} alt="Rick and Morty" />

                    <ul className="row">
                        {/* {this.state.data.results.map(character => ( */}
                        {/* {this.state.data.map(character => ( */}
                        {this.state.data.results.map(character => (
                        <li className="col-6 col-md-3" key={character.id}>

                            <Card name={character.name} image={character.image} />

                        </li>
                        ))}

                    </ul>

                    {this.state.loading && <p className="text-center">Cargando...</p>}

                
                    {!this.state.loading && this.state.data.info.next && (
                        <button onClick={() => this.fetchCharacters()}>Mostrar más</button>
                    )}
                
                </div>
            </div>
        );
    }

}

export default ListadoPersonajes;