import { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
import './App.css'

const Title = styled.h1`
  text-align: center;
  width: 100vw;
  font-family: "Plaster", sans-serif;
  font-weight: 400;
  font-size: 4em;
`

function App() {
  const [searchText, setSearchText] = useState("");
  const [pals, setPals] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10&inc=id,name,email&format=json&noinfo")
      .then((res) => res.json())  
      .then((data) => {
          const loadedPals = data.results.map((person) => ({
            id: person.id.value ,
            name: `${person.name.first} ${person.name.last}`,
            email: person.email
          }));
          setPals(loadedPals);
        })
      .catch((err) => console.log("에러: ", err));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Title>PRO PALS</Title>
      <SearchBox 
          searchText={searchText} 
          onSearchTextChange={setSearchText} />
      <CardList 
          pals={pals}
          searchText={searchText} />
    </>
  );
}

  

export default App