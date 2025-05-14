import Avatar from './Avatar.js'

function Card({children}){
    return(
        <div className="card">
            {children}
        </div>
    )
}

export default function ProfileV2(){
    return(
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Cachorro atentado',
                    imageId: 'PobMT6j'
                }}
            />
        </Card>
    );
}