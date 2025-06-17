import { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
import './App.css'

function App() {
  const [searchText, setSearchText] = useState("");
  const [pals, setPals] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30&inc=id,name,email&format=json&noinfo")
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
      <h1>Pro Pals</h1>
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