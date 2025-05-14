import "./Gallery.css";

export function Profile() {
    const link = "https://preview.redd.it/ajgdgqsb7p3c1.jpg?width=640&crop=smart&auto=webp&s=ce4a91eb6b046ea8af9a2b4f70f28f36f380f03c"
    const nome = "um gato"
    return (
      <div className="Profile">
          <img 
                src = {link}
                alt= {nome}
          />
      </div>
    );
  }

export default function Gallery(){
    return(
        <div className="Gallery">
            <h1> gatitos </h1>
            <div className="Order">
                <Profile />
                <Profile />
                <Profile />
            </div>
        </div>
    );
}