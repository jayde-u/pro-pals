import Card from './Card';

function CardList({ pals, searchText }) {
    function isIncludeKeyword(taget, keyword) {
        return taget.toLowerCase().includes(keyword.toLowerCase());   
    }
    return (
        <>
           {pals
                .filter((pal) => isIncludeKeyword(pal.name, searchText)) 
                .map((pal) => (
                    <Card 
                        key = {pal.id}
                        id = {pal.id}
                        name = {pal.name}
                        email = {pal.email} />            
                
            ))}
        </>
    );
}

export default CardList;