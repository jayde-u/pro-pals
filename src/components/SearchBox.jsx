import styled from "styled-components";

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
`
const Search = styled.input`
    background-color: rgba(255, 255, 255, 0.2);
    border: 0.3px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    width: 90vw;
    max-width: 600px;
    height: 35px;
    padding-left: 10px;
    margin-bottom: 20px;

    font-size: 1em;
    font-weight: lighter;
    color: white;

    &:focus-visible {
        outline: none;
        border: 0.3px solid;
        border-color: rgba(255, 255, 255, 0.4);
    }
`;

function SearchBox({ searchText, onSearchTextChange }) {
    return (
        <SearchContainer>
            <Search 
                type="text" 
                placeholder="Search..."
                value={searchText}
                onChange={(e) => onSearchTextChange(e.target.value)} />
        </SearchContainer>
    );
}

export default SearchBox;