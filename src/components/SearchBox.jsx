import styled from "styled-components";

const Search = styled.input`
    border: 1px solid #eee;
    border-radius: 5px;
    width: 20%;
    margin: 5px;
`;

function SearchBox() {
    return (
        <>
            <Search type="text" placeholder="search..."/>
        </>
    );
}

export default SearchBox;