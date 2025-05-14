function Item ({ name, isPacked}){
    let itemContent = name;
    if (isPacked){
        itemContent = (
            <del>
                {name + "✓"}
            </del>
        )
    }
    return(
        <li className="item">
            {itemContent}
        </li>
    )
}

export default function PackingList(){
    return(
        <section>
            <li> Lista de Itens do gato branco</li>
            <ul>
                <Item
                    isPacked={true}
                    name="Brinquedo de rato"
                />
                <Item
                    isPacked={true}
                    name="Catnip"
                />
                <Item
                    isPacked={false}
                    name="Coleira"
                />
            </ul>
        </section>
    )
}