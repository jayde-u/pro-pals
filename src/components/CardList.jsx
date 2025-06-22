import Card from './Card';
import styled from "styled-components";

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    padding: 10px;
    justify-items: center;
    grid-gap: 10px;
`

function CardList({ pals, searchText }) {
    function isIncludeKeyword(target, keyword) {
        return target.toLowerCase().includes(keyword.toLowerCase());   
    }
    return (
        <CardContainer>
           {pals
                .filter((pal) => isIncludeKeyword(pal.name, searchText)) 
                .map((pal) => (
                    <Card 
                        key = {pal.id}
                        id = {pal.id}
                        name = {pal.name}
                        email = {pal.email} />            
                
            ))}
        </CardContainer>
    );
}

export default CardList;