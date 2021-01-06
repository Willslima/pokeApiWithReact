import axios from 'axios'

function _ () {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => {
            console.log(response.data.abilities)
        })
        .catch(r => console.log(r))

}



export default _