import './pokeapi.css'
import React from 'react'
import Card from './card'


export default props => {
    return (
        <div className='pokeBox'>
            <h1>PokeApi with React</h1>
            <div className="pesquisa">
                <input type="text"/>
                <button>Pesquisar</button>
            </div>
            <div className='content'>

                <Card imagem='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png' nome='MEWTWO' habilidade0='PRESSURE' habilidade1='UNNERVE' cor='' />
                <Card imagem='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png' nome='CHARMANDER' habilidade0='BLAZE' habilidade1='SOLAR POWER' cor='#DDE1C1' />
                <Card imagem='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' nome='PIKACHU' habilidade0='STATIC' habilidade1='LIGHTNING ROD' cor='#C6C1E1' />
                <Card imagem='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png' nome='BULBASAUR' habilidade0='OVERGROW' habilidade1='CHLOROPHYLL' cor='#C1E1DA' />
                <Card imagem='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png' nome='SQUIRTLE' habilidade0='TORRENT' habilidade1='RAIN DISH' cor='#B6A3A3' />
                
            </div>
        </div>
    )
}