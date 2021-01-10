import React, { Component } from 'react'
import api from './api'

class consumoApi extends Component {

    state = {
        nome: [],
        habilidade: []
    }

    async componentDidMount() {
        const response = await api.get('bulbasaur')

        this.setState({ 
            nome: response.data, 
            habilidade: response.data.abilities,
            imagem: response.data.sprites.other.dream_world.front_default 
        })
    }

    render() {

        const { nome, habilidade, imagem } = this.state
        return (
            <div>
                <img src={imagem} alt="pokemon" />
                {nome.name}
                <div>
                {habilidade.map(resp => 
                    <ul>
                        <li>
                        {resp.ability.name}
                        </li>
                    </ul>
                        
                        )
                    }
                </div>
            </div>
        )
    }
}

export default consumoApi