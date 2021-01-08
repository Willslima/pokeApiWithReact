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
                <div className="habilidade">{props.habilidade0}</div>
                <div className="habilidade">{props.habilidade1}</div>
                <div className="habilidade">{props.habilidade2}</div>
                <div className="habilidade">{props.habilidade3}</div>

            </div>
        </div>
    )
}

export default card