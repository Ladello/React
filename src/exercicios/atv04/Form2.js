import { useState } from 'react'

export default function Form2(){
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhewortg@sculpture.com'
    })

    function handleFirstNameChange(e){
        person.firstName = e.target.value
    }

    function handleLastNameChange(e){
        person.lastName = e.target.value
    }

    function handleEmailChange(e){
        person.email = e.target.value
    }

    return( 
        <div className="form-container">
            <label>
                First name:
                <input
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last name:
                <input
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label>
                Email:
                <input
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </div>
    )
}