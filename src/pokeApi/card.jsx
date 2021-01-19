import './card.css'
import React from 'react'
import Ditto from './images/ditto.png'

const card =  props => {
    const cardStyle = {
        background: props.cor || '#E9BBB1',
        borderColor: props.cor || '#E9BBB1'
    }
    return (
        <div className='card' style={cardStyle}>
            <div className='personagem'>
                <div className="imagem">
                    <img src={props.imagem || Ditto} alt="" />
                </div>
            </div>

            <div className="desc">
                <div className="nome">{props.nome}</div>
                <div className="habilidade0">{props.habilidade}</div>
                <div className="habilidade1">{props.habilidade0}</div>
                <div className="habilidade2">{props.habilidade1}</div>
                <div className="habilidade3">{props.habilidade2}</div>

            </div>
        </div>
    )
}

export default card