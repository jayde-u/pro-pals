import Card from './Card';

function CardList({ pals }) {
    return (
        <>
           { pals.map((pal) => 
                <Card 
                    key = {pal.id}
                    id = {pal.id}
                    name = {pal.name}
                    email = {pal.email} />            
            )}
        </>
    );
}

export default CardList;