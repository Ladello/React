import {people} from './data.js'
import {getImageUrl2} from './utils.js'

export default function List(){
    const chemist = people.filter(person=> person.profession === 'gato')
    const listItens = chemist.map (person =>
        <li>
            <img
                src={getImageUrl2(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                conhecido por {person.accomplishment}
            </p>
        </li>
    )
    return <ul>{listItens}</ul>
}