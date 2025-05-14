
const person = {
    name: "White cat",
    theme: {
        backgroundColor: 'black',
        color: 'white'
    }
  }

export default function TodoList(){
    return(
        <div styke={person.theme}>
            <h1> {person.name}'s Todos</h1>
            <img
                className="avatar"
                src="https://www.shutterstock.com/shutterstock/photos/367700339/display_1500/stock-photo-white-fat-cat-sitting-367700339.jpg"
                alt = "um gato branco"
            />

            <ul>
                <li>Comer ração</li>
                <li>Limpar o pelo</li>
                <li>Brincar</li>
            </ul>

        </div>
    );
}