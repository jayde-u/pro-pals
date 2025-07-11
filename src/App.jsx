import { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
import './App.css'

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;

  background: linear-gradient(
    to bottom,
    rgba(24, 24, 24, 1) 50%,
    rgba(24, 24, 24, 0.8) 70%,
    rgba(24, 24, 24, 0.4) 90%,
    rgba(24, 24, 24, 0) 100%
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10x);
`

const Title = styled.h1`
  text-align: center;
  font-family: "Special Gothic Expanded One", sans-serif;
  font-weight: 400;  
  color: white;

  margin-bottom: 2rem;
  font-size: 5rem;
  @media (max-width: 600px) {
    font-size: 15vw;
  }
`

function App() {
  const [searchText, setSearchText] = useState("");
  const [pals, setPals] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/1.4/?results=30&inc=login,nat,phone,dob,name,email&format=json&noinfo")
      .then((res) => res.json())  
      .then((data) => {
          const loadedPals = data.results.map((person) => ({
            id: person.login.username,
            name: `${person.name.first} ${person.name.last}`,
            nat: person.nat,
            dob: new Date(person.dob.date).toLocaleDateString('en-US', {
              year: 'numeric', month: 'short', day: 'numeric'
            }),
            phone: person.phone,
            email: person.email
          }));
          setPals(loadedPals);
        })
      .catch((err) => console.log("fetch error: ", err));
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header>
        <Title>PRO PALS</Title>
        <SearchBox 
            searchText={searchText} 
            onSearchTextChange={setSearchText} />
      </Header>
      <body>
        <CardList 
            pals={pals}
            searchText={searchText} />
      </body>
    </>
  );
}

export default App