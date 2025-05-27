import { useState } from 'react'

let nextId = 3
let initialList=[
    {id: 0, title: 'Big Bellies'},
    {id: 1, title: 'Lunar LandScape'},
    {id: 2, title: 'Terracota Army'},

]
export default function List4(){
    const [list, setList] = useState(initialList)
    
    function handleClick(){
        const nextList = [...list]
        nextList.reverse()
        setList(nextList)
    }

    return(
        <>
            <button onClick={handleClick}>
                Reverse
            </button>
            <ul>
                {list.map(artwork => (
                    <li key={artwork.id}>{artwork.title} </li>
                    ))}
            </ul>
        </>
    )
}