import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
import {Container} from '@material-ui/core';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';
function App() {
  const [word, setWord] = useState("")
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en_US");
  const dictonaryApi = async () =>{
    try {
      const {data} = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      setMeanings(data);
    } catch (error) {
      console.warn(error);
    }
  }
  console.log(meanings);
  useEffect(() => {
    dictonaryApi();
  }, [word,category]);
  return (
    <div className="App" style={{height: "100vh",backgroundColor: "#282c34",color: "white"}}>
      <Container maxWidth="md" style={{display: "flex",height: "100vh", flexDirection: "column",justifyContent: "space-evenly"}}>
        <Header
         category={category} 
         setCategory={setCategory} 
         word={word}
         setWord={setWord}/>
         <Definitions
          word={word}
          category={category}
          meanings={meanings}/>
      </Container>

   </div>
  );
}

export default App;
