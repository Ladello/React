function Cup ({ guest }){
    return <h2> Uma xicara de chá para o convidado #{guest}</h2>
}

export default function TeaGathering(){
    let cups = []
    for (let i = 1; i <= 7; i++){
        cups.push(<Cup key={i} guest={i} />)
    }
    return cups;
}