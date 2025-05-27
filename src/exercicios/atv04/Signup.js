export default function Signup(){
    return(
        <form onSubmit = {e => {
            e.preventDefault();
            alert('Enviando!');
        }}>
            <input />
            <button>Send</button>
            </form>
    )
}