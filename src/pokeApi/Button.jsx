import React, { useState } from 'react'

export default props => {
    const [valor, setValor] = useState('')
    function quandoMudar(e) {
        setValor(e.target.value)
        
    }

    return (
        <div className="pesquisa">
            <input value={valor} onChange={quandoMudar}/>
            
            <button onClick={e => {e = console.log(valor)}}>Pesquisar</button>
        </div>
    )
}