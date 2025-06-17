import styled from "styled-components";

const Search = styled.input`
    border: 1px solid #eee;
    border-radius: 5px;
    width: 20%;
    margin: 5px;
`;

function SearchBox({ searchText, onSearchTextChange }) {
    return (
        <>
            <Search 
                type="text" 
                placeholder="search..."
                value={searchText}
                onChange={(e) => onSearchTextChange(e.target.value)} />
        </>
    );
}

export default SearchBox;