import { useState } from 'react'

let nextId = 3
let initialArtists=[
    {id: 0, name: 'Marta Colin Andrade'},
    {id: 1, name: 'Lamidi Olonade Fakeeye'},
    {id: 2, name: 'Louise Nevelson'},

]
export default function List3(){
    const [name,setName] = useState('')
    const [artists, setArtists] = useState(initialArtists)
    
    function handleClick(){
        const insertAt = 1
    
        const nextArtists = [
            ...artists.slice(0, insertAt),
            {id:nextId++, name: name },
            ...artists.slice(insertAt)
        ]
        setArtists(nextArtists)
        setName('')
    }

    return(
        <>
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleClick}>
                Insert
            </button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name} </li>
                    ))}
            </ul>
        </>
    )
}