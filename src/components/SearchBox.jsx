import styled from "styled-components";

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`
const Search = styled.input`
    border: 1px solid #cdcdcd;
    border-radius: 3px;
    width: 90vw;
    max-width: 500px;
    margin: 5px;
    font-size: 1.2em;
`;

function SearchBox({ searchText, onSearchTextChange }) {
    return (
        <SearchContainer>
            <Search 
                type="text" 
                placeholder="search..."
                value={searchText}
                onChange={(e) => onSearchTextChange(e.target.value)} />
        </SearchContainer>
    );
}

export default SearchBox;