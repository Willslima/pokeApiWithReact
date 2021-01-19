import React, { Component } from 'react'
import api from './api'
import Card from './card'
import Button from './Button'

class consumoApi extends Component {

    state = {
        nome: [],
        habilidade: []
    }

    async componentDidMount() {
        const response = await api.get('spinda')

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

                <Card imagem={imagem} nome={nome.name} habilidade={habilidade.map((res,i) => <div className={`habilidade${i}`}>{res.ability.name}</div>)} />
                {console.log(nome)}
            </div>
        )
    }
}

export default consumoApi