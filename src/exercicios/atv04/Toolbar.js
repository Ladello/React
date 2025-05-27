function Button ({ onClick, children}) {
    return(
        <button onClick={e =>{
            e.stopPropagation();
            onClick();
        }}>
            {children}
        </button>
    )
}

export default function Toolbar(){
    return(
        <div className="Toolbar" onClick={() => {alert('Você clicou na toolbar!');}}>
            <Button onClick={() => alert('Tocando!')}>
                Play Movie
            </Button>
            <Button onClick={() => alert('Enviando!')}>
                Enviar imagem
            </Button>
        </div>
    )
}