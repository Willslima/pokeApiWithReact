import React, { Component } from 'react'
import api from './api'

class consumoApi extends Component {

    state = {
        nome: [],
        habilidade: []
    }

    async componentDidMount() {
        const response = await api.get('charmander')

        this.setState({ nome: response.data, habilidade: response.data.abilities })
    }

    render() {

        const { nome, habilidade } = this.state
        return (
            <div>
                {nome.name}
                {console.log(habilidade[0])}
            </div>
        )
    }
}

export default consumoApi