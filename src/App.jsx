import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
import './App.css'

function App() {
  return (
    <>
      <h1>Pro Pals</h1>
      <SearchBox />
      <CardList pals={PALS} />
    </>
  );
}

const PALS = [
  { id:1, name: "Milo", email: "milo@fakemail.com" },
  { id:2, name: "Jayde", email: "jayde@example.com" },
  { id:3, name: "Theo", email: "theo@demo.com" },
  { id:4, name: "Luna", email: "luna@sample.com" },
  { id:5, name: "Zara", email: "zara@domain.com" },
  { id:6, name: "Kai", email: "kai@testmail.com" },
  { id:7, name: "Nova", email: "nova@hello.com" },
  { id:8, name: "Ezra", email: "ezra@world.com" },
  { id:9, name: "Ivy", email: "ivy@webmail.com" },
  { id:10, name: "Leo", email: "leo@inbox.com" }
];

export default App